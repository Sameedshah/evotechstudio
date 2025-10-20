# 🚀 Vercel Deployment Guide - EvoTech Studio

## ✅ **Why Vercel is Perfect for Your Site**

- **✅ Full Next.js Support** - Dynamic routes, SSG, SSR all work perfectly
- **✅ Blog Functionality** - Complete blog system with Sanity CMS
- **✅ Automatic Deployments** - Deploy from GitHub with zero config
- **✅ Global CDN** - Lightning-fast worldwide performance
- **✅ Free Tier** - Perfect for your business website

## 🚀 **Deployment Methods**

### **Method 1: GitHub + Vercel (Recommended)**

#### **Step 1: Push to GitHub**
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - EvoTech Studio website"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/evotechstudio.git
git branch -M main
git push -u origin main
```

#### **Step 2: Connect to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

#### **Step 3: Configure Environment Variables**
In Vercel dashboard, go to Settings > Environment Variables and add:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=bpyr1o9y
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_qj4vd4b
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SALES=template_1muzr44
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_THANKS=template_vp6wm88
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=SAN57ADEFk8KfmLWD
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-S7ZYMDYKZD
```

### **Method 2: Vercel CLI (Quick Deploy)**

#### **Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

#### **Step 2: Deploy**
```bash
vercel --prod
```

Follow the prompts and your site will be deployed instantly!

## 🔧 **Custom Domain Setup**

### **Step 1: Add Domain in Vercel**
1. Go to your project dashboard
2. Click "Settings" > "Domains"
3. Add `evotechstudio.dev`

### **Step 2: Update DNS**
Point your domain to Vercel:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

Or use A records:
```
Type: A
Name: @
Value: 76.76.19.61
```

## 📊 **What You Get with Vercel**

### **✅ Full Website Features**
- **Homepage** - Hero section, services overview
- **About Page** - Team and company info
- **Services** - Detailed service offerings
- **Portfolio** - 12 projects with categories and filtering
- **Blog System** - Dynamic routes, Sanity CMS integration
- **Contact Form** - EmailJS integration for inquiries

### **✅ Blog Functionality**
- **Dynamic Routes** - `/blogs/[slug]` for individual posts
- **Sanity CMS** - Easy content management
- **SEO Optimized** - Meta tags for each blog post
- **Rich Content** - Images, formatting, categories
- **Author Profiles** - Author info and bios

### **✅ Performance & SEO**
- **Google Analytics** - G-S7ZYMDYKZD tracking
- **Search Console** - DNS verified
- **Sitemap** - Auto-generated with blog posts
- **Meta Tags** - Optimized for search engines
- **Open Graph** - Social media sharing
- **Core Web Vitals** - Excellent performance scores

## 📝 **Adding Blog Posts**

### **Method 1: Sanity Studio**
1. Run `npm run sanity` to start Sanity Studio
2. Create new blog posts with rich content
3. Vercel will automatically rebuild when you publish

### **Method 2: Sanity Cloud**
1. Go to your Sanity project dashboard
2. Use the web-based content studio
3. Create and publish blog posts

## 🔄 **Automatic Updates**

### **GitHub Integration**
- **Push to main branch** → Automatic deployment
- **Pull requests** → Preview deployments
- **Rollback** → One-click rollback to previous versions

### **Sanity Integration**
- **Publish content** → Automatic revalidation
- **Real-time updates** → Content appears instantly
- **Draft mode** → Preview unpublished content

## 📈 **Expected Performance**

### **Vercel Advantages**
- **Global CDN** - Sub-100ms response times worldwide
- **Edge Functions** - Server-side rendering at the edge
- **Image Optimization** - Automatic WebP conversion
- **Caching** - Intelligent caching strategies

### **Performance Scores**
- **PageSpeed Insights**: 95+ score
- **Core Web Vitals**: All green metrics
- **SEO Score**: 98+ optimization
- **Accessibility**: WCAG compliant

## 🎯 **Post-Deployment Checklist**

### **✅ Verify Functionality**
- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Contact form works
- [ ] Google Analytics tracking
- [ ] Blog routes functional (even if no posts yet)

### **✅ SEO Setup**
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics in real-time reports
- [ ] Test social media sharing (Open Graph)
- [ ] Check mobile responsiveness

### **✅ Content Management**
- [ ] Access Sanity Studio
- [ ] Create first blog post
- [ ] Test blog post publishing
- [ ] Verify automatic deployment

## 🚀 **Your Vercel URL**

After deployment, your site will be available at:
- **Vercel URL**: `https://evotechstudio.vercel.app`
- **Custom Domain**: `https://evotechstudio.dev` (after DNS setup)

## 💡 **Pro Tips**

### **Development Workflow**
1. **Local Development**: `npm run dev`
2. **Push Changes**: Git push to main branch
3. **Automatic Deploy**: Vercel handles the rest
4. **Content Updates**: Use Sanity Studio

### **Performance Monitoring**
- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics** - User behavior tracking
- **Search Console** - SEO performance
- **Core Web Vitals** - Real user metrics

## 🎉 **Ready to Deploy!**

Your EvoTech Studio website is now configured for Vercel with:
- ✅ **Full Next.js functionality**
- ✅ **Dynamic blog system**
- ✅ **SEO optimization**
- ✅ **Performance optimization**
- ✅ **Analytics tracking**

**Choose your deployment method above and go live in minutes!**