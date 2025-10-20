# 🚀 Hostinger Deployment Guide for EvoTech Studio

## Current Status
✅ **Build Successful** - Your Next.js app builds successfully  
⚠️ **Dynamic Routes** - Blog dynamic routes need adjustment for static hosting  
✅ **SEO Ready** - robots.txt and sitemap.xml are configured  

## 📋 Deployment Steps

### Step 1: Prepare Static Build
Since Hostinger uses static hosting, we need to create a static export:

1. **Remove Dynamic Blog Route** (temporarily):
   ```bash
   # The [slug] folder in app/blogs/ is causing static export issues
   # You can add blog posts as static pages later
   ```

2. **Enable Static Export**:
   ```typescript
   // In next.config.ts
   const nextConfig: NextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
   };
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

### Step 2: Upload to Hostinger

1. **Login to Hostinger Control Panel**
2. **Go to File Manager**
3. **Navigate to public_html folder**
4. **Upload the contents of the `out` folder** (created after build)

### Step 3: Domain Configuration

1. **Point your domain** `evotechstudio.dev` to your Hostinger hosting
2. **Update DNS settings** if needed
3. **Enable SSL certificate** in Hostinger panel

## 📁 Files Ready for Upload

After successful build, upload these files from the `out` folder:
- `index.html` (homepage)
- `about/index.html`
- `services/index.html`
- `portfolio/index.html`
- `blogs/index.html`
- `contact/index.html`
- `_next/` folder (contains CSS, JS, and assets)
- `robots.txt`
- `sitemap.xml`
- All other static assets

## 🔧 Alternative Deployment Options

### Option 1: Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel --prod
```

### Option 2: Netlify
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `out`

### Option 3: GitHub Pages
1. Enable static export in next.config.ts
2. Use GitHub Actions for deployment

## 🐛 Troubleshooting

### Dynamic Route Issues
If you get "generateStaticParams" errors:
1. Remove the `app/blogs/[slug]` folder temporarily
2. Add blog posts as static pages later
3. Or use a different hosting solution that supports SSR

### Environment Variables
Make sure your `.env.production` file contains:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=bpyr1o9y
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_qj4vd4b
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SALES=template_1muzr44
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_THANKS=template_vp6wm88
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=SAN57ADEFk8KfmLWD
```

## 📈 SEO Configuration

✅ **robots.txt** - Located at `/robots.txt`  
✅ **sitemap.xml** - Located at `/sitemap.xml`  
✅ **Meta tags** - Configured in layout.tsx  
✅ **Performance** - Optimized for static hosting  

## 🔄 Future Updates

To add blog functionality later:
1. Create static blog pages in `app/blogs/[post-name]/page.tsx`
2. Or use a different hosting solution that supports dynamic routes
3. Consider using Vercel or Netlify for full Next.js features

## 📞 Support

If you need help with deployment:
1. Check Hostinger documentation
2. Contact Hostinger support
3. Consider using Vercel for easier Next.js deployment