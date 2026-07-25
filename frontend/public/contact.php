<?php
// Handle preflight CORS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    exit(0);
}

// Allow CORS for actual requests
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit(0);
}

// Get the raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid JSON payload"]);
    exit(0);
}

// Extract fields
$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$company = isset($data['company']) ? trim($data['company']) : 'Not provided';
$phone = isset($data['phone']) ? trim($data['phone']) : 'Not provided';
$service = isset($data['service']) ? trim($data['service']) : 'Not provided';
$budget = isset($data['budget']) ? trim($data['budget']) : 'Not provided';
$timeline = isset($data['timeline']) ? trim($data['timeline']) : 'Not provided';
$message = isset($data['message']) ? trim($data['message']) : '';
$consent = isset($data['consent']) ? $data['consent'] : false;

// Validate required fields
if (empty($name) || empty($email) || empty($service) || empty($message) || !$consent) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Missing required fields or consent"]);
    exit(0);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid email address"]);
    exit(0);
}

// Prepare email
$to = "hello@sbcreatives.in";
$subject = "New Enquiry from $name - SB Creatives Website";

$emailBody = "You have received a new enquiry from the SB Creatives website.\n\n";
$emailBody .= "--- Contact Details ---\n";
$emailBody .= "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Company: $company\n";
$emailBody .= "Phone: $phone\n\n";
$emailBody .= "--- Project Details ---\n";
$emailBody .= "Service Interest: $service\n";
$emailBody .= "Budget: $budget\n";
$emailBody .= "Timeline: $timeline\n\n";
$emailBody .= "Message:\n$message\n";

$headers = "From: noreply@sbcreatives.in\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email using SiteGround's native mail function
$mailSent = mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    echo json_encode(["success" => true, "message" => "Enquiry sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Failed to send email. Check server configuration."]);
}
?>
