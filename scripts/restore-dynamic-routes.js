const fs = require('fs');
const path = require('path');

console.log('🔄 Restoring dynamic routes...');

const slugPath = path.join(__dirname, '../app/blogs/[slug]');
const disabledPath = path.join(__dirname, '../app/blogs/_slug_disabled');

try {
  // Check if disabled folder exists
  if (fs.existsSync(disabledPath)) {
    console.log('📁 Found disabled dynamic route, restoring...');
    
    // Rename back to enable
    fs.renameSync(disabledPath, slugPath);
    console.log('✅ Dynamic route restored successfully');
  } else {
    console.log('ℹ️  No disabled dynamic route found');
  }
  
  console.log('🎯 Dynamic routes are now active!');
  
} catch (error) {
  console.error('❌ Error restoring routes:', error.message);
  process.exit(1);
}