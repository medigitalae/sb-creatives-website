const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://sbcreatives.in';

function extractSlugs(filePath) {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) return [];
  
  const content = fs.readFileSync(fullPath, 'utf-8');
  // Match slug: "something" or slug: 'something'
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  let match;
  const slugs = [];
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

const servicesSlugs = extractSlugs('src/content/services.js');
const projectSlugs = extractSlugs('src/content/projects.js');
const insightSlugs = extractSlugs('src/content/insights.js');

const staticRoutes = [
  '',
  '/about',
  '/services',
  '/work',
  '/insights',
  '/contact',
  '/legal/privacy',
  '/legal/terms'
];

const urls = [];

// Add static routes
staticRoutes.forEach(route => {
  urls.push(`${DOMAIN}${route}`);
});

// Add dynamic routes
servicesSlugs.forEach(slug => urls.push(`${DOMAIN}/services/${slug}`));
projectSlugs.forEach(slug => urls.push(`${DOMAIN}/work/${slug}`));
insightSlugs.forEach(slug => urls.push(`${DOMAIN}/insights/${slug}`));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === DOMAIN ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

// Ensure public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Dynamic sitemap.xml generated successfully!');
