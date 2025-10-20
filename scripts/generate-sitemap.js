const fs = require('fs');
const path = require('path');

// Configuration
const DOMAIN = 'https://evotechstudio.dev';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Static pages configuration
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/about/', changefreq: 'monthly', priority: '0.8' },
  { url: '/services/', changefreq: 'monthly', priority: '0.9' },
  { url: '/portfolio/', changefreq: 'weekly', priority: '0.9' },
  { url: '/blogs/', changefreq: 'daily', priority: '0.8' },
  { url: '/contact/', changefreq: 'monthly', priority: '0.7' },
];

// Generate current date in ISO format
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Generate sitemap XML
const generateSitemap = (pages = [], dynamicUrls = []) => {
  const currentDate = getCurrentDate();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  // Add static pages
  pages.forEach(page => {
    xml += `  
  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add dynamic URLs
  dynamicUrls.forEach(url => {
    xml += `  
  <url>
    <loc>${DOMAIN}${url.path}</loc>
    <lastmod>${url.lastmod || currentDate}</lastmod>
    <changefreq>${url.changefreq || 'monthly'}</changefreq>
    <priority>${url.priority || '0.6'}</priority>
  </url>`;
  });

  xml += `
  
</urlset>`;

  return xml;
};

// Main function
const main = async () => {
  try {
    console.log('🚀 Generating sitemap...');
    
    // You can add dynamic content fetching here
    // For example, fetch from your Sanity CMS:
    /*
    const { createClient } = require('next-sanity');
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
      useCdn: false,
    });
    
    const blogPosts = await client.fetch(`
      *[_type == "post" && defined(slug.current)] {
        slug,
        _updatedAt,
        publishedAt
      }
    `);
    
    const dynamicUrls = blogPosts.map(post => ({
      path: `/blogs/${post.slug.current}/`,
      lastmod: post._updatedAt?.split('T')[0] || getCurrentDate(),
      changefreq: 'monthly',
      priority: '0.6'
    }));
    */
    
    const dynamicUrls = []; // Add your dynamic URLs here
    
    const sitemap = generateSitemap(staticPages, dynamicUrls);
    
    // Write sitemap to file
    fs.writeFileSync(OUTPUT_PATH, sitemap);
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${OUTPUT_PATH}`);
    console.log(`🔗 URL: ${DOMAIN}/sitemap.xml`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateSitemap, staticPages };