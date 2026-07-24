import { motion } from "framer-motion";

// Custom animated SVG illustrations per service. Palette: charcoal #36454F, cadet #5FC6CA, ocean #3E9FA4, seafoam #B8E3E1.

const wrap = "w-full h-full";

const float = (dur = 4, delay = 0) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
});

const spin = (dur = 18) => ({
  animate: { rotate: 360 },
  transition: { duration: dur, repeat: Infinity, ease: "linear" },
});

function Brand() {
  return (
    <svg viewBox="0 0 200 200" className={wrap} fill="none">
      <motion.circle cx="100" cy="100" r="70" stroke="#B8E3E1" strokeWidth="1.5" {...spin(30)} style={{ transformOrigin: "100px 100px" }} strokeDasharray="6 10" />
      <motion.g {...float(5)}>
        <rect x="55" y="55" width="90" height="90" rx="20" fill="#24333B" />
        <text x="100" y="118" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="56" fill="#5FC6CA">Aa</text>
      </motion.g>
      <motion.circle cx="150" cy="52" r="12" fill="#5FC6CA" {...float(3.5, 0.4)} />
      <motion.rect x="34" y="140" width="26" height="26" rx="8" fill="#3E9FA4" {...float(4.2, 0.8)} />
    </svg>
  );
}

function Digital() {
  return (
    <svg viewBox="0 0 200 200" className={wrap} fill="none">
      <rect x="34" y="46" width="132" height="90" rx="12" fill="#24333B" />
      <rect x="34" y="46" width="132" height="22" rx="12" fill="#36454F" />
      <circle cx="47" cy="57" r="3" fill="#5FC6CA" />
      <motion.rect x="48" y="82" width="60" height="8" rx="4" fill="#5FC6CA"
        animate={{ width: [30, 70, 30] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <rect x="48" y="98" width="90" height="6" rx="3" fill="#3E9FA4" opacity="0.6" />
      <rect x="48" y="110" width="70" height="6" rx="3" fill="#6F7F86" opacity="0.5" />
      <rect x="70" y="140" width="60" height="10" rx="4" fill="#36454F" />
      {[0, 1, 2, 3].map((i) => (
        <motion.circle key={i} cx={54 + i * 30} cy={128} r="0" fill="#5FC6CA"
          animate={{ r: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }} />
      ))}
    </svg>
  );
}

function Retail() {
  return (
    <svg viewBox="0 0 200 200" className={wrap} fill="none">
      <path d="M40 70 L60 44 H140 L160 70 Z" fill="#3E9FA4" />
      <rect x="48" y="70" width="104" height="86" fill="#24333B" />
      <motion.rect x="48" y="70" width="104" height="86" fill="url(#stripe)" opacity="0.15" />
      <rect x="86" y="104" width="28" height="52" fill="#36454F" />
      <motion.rect x="64" y="92" width="22" height="26" rx="3" fill="#5FC6CA" {...float(3.6)} />
      <motion.rect x="118" y="92" width="22" height="26" rx="3" fill="#B8E3E1" {...float(3.6, 0.5)} />
      <circle cx="100" cy="58" r="6" fill="#5FC6CA" />
      <defs>
        <pattern id="stripe" width="10" height="10" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <rect width="5" height="10" fill="#5FC6CA" />
        </pattern>
      </defs>
    </svg>
  );
}

function Print() {
  return (
    <svg viewBox="0 0 200 200" className={wrap} fill="none">
      <rect x="46" y="80" width="108" height="52" rx="8" fill="#24333B" />
      <rect x="66" y="50" width="68" height="40" rx="4" fill="#36454F" />
      <motion.g animate={{ y: [0, 40, 40, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.7, 1] }}>
        <rect x="66" y="120" width="68" height="46" rx="4" fill="#F7F9F8" stroke="#B8E3E1" />
        <rect x="74" y="130" width="40" height="5" rx="2" fill="#5FC6CA" />
        <rect x="74" y="140" width="52" height="4" rx="2" fill="#6F7F86" opacity="0.5" />
        <rect x="74" y="148" width="46" height="4" rx="2" fill="#6F7F86" opacity="0.5" />
      </motion.g>
      <circle cx="140" cy="106" r="5" fill="#5FC6CA" />
      <circle cx="126" cy="106" r="5" fill="#3E9FA4" />
    </svg>
  );
}

function Print3D() {
  return (
    <svg viewBox="0 0 200 200" className={wrap} fill="none">
      <rect x="40" y="150" width="120" height="10" rx="4" fill="#24333B" />
      <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        <path d="M100 60 L134 80 V120 L100 140 L66 120 V80 Z" fill="#3E9FA4" />
        <path d="M100 60 L134 80 L100 100 L66 80 Z" fill="#5FC6CA" />
        <path d="M100 100 L134 80 V120 L100 140 Z" fill="#24333B" opacity="0.85" />
      </motion.g>
      <motion.line x1="52" y1="46" x2="148" y2="46" stroke="#5FC6CA" strokeWidth="3" strokeLinecap="round"
        animate={{ x1: [52, 148, 52], x2: [148, 52, 148] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <rect x="46" y="40" width="8" height="120" rx="3" fill="#36454F" />
      <rect x="146" y="40" width="8" height="120" rx="3" fill="#36454F" />
    </svg>
  );
}

const MAP = { brand: Brand, digital: Digital, retail: Retail, print: Print, print3d: Print3D };

export default function ServiceIllustration({ name, className = "" }) {
  const Comp = MAP[name] || Brand;
  return (
    <div className={className} data-testid={`illustration-${name}`}>
      <Comp />
    </div>
  );
}
