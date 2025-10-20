const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing for Hostinger deployment...');

const slugPath = path.join(__dirname, '../app/blogs/[slug]');
const disabledPath = path.join(__dirname, '../app/blogs/_slug_disabled');

try {
  // Check if slug folder exists
  if (fs.existsSync(slugPath)) {
    console.log('📁 Found dynamic route folder, disabling for static export...');
    
    // Rename to disable
    fs.renameSync(slugPath, disabledPath);
    console.log('✅ Dynamic route disabled successfully');
  } else {
    console.log('ℹ️  Dynamic route folder not found or already disabled');
  }
  
  console.log('🎯 Ready for static build!');
  console.log('📝 Run: npm run build');
  
} catch (error) {
  console.error('❌ Error preparing deployment:', error.message);
  process.exit(1);
}