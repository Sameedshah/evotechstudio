# 🔧 Vercel Environment Variables Setup

## ❌ **Current Issue**
Vercel deployment failed because environment variables are not configured.

## ✅ **Solution: Add Environment Variables in Vercel Dashboard**

### **Step 1: Access Vercel Dashboard**
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your **evotechstudio** project
3. Go to **Settings** tab
4. Click **Environment Variables** in the sidebar

### **Step 2: Add These Environment Variables**

Add each variable with these **exact names and values**:

#### **Sanity CMS Configuration**
```
Name: NEXT_PUBLIC_SANITY_PROJECT_ID
Value: bpyr1o9y
Environment: Production, Preview, Development
```

```
Name: NEXT_PUBLIC_SANITY_DATASET  
Value: production
Environment: Production, Preview, Development
```

```
Name: NEXT_PUBLIC_SANITY_API_VERSION
Value: 2024-01-01
Environment: Production, Preview, Development
```

#### **EmailJS Configuration**
```
Name: NEXT_PUBLIC_EMAILJS_SERVICE_ID
Value: service_qj4vd4b
Environment: Production, Preview, Development
```

```
Name: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SALES
Value: template_1muzr44
Environment: Production, Preview, Development
```

```
Name: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_THANKS
Value: template_vp6wm88
Environment: Production, Preview, Development
```

```
Name: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
Value: SAN57ADEFk8KfmLWD
Environment: Production, Preview, Development
```

#### **Google Analytics Configuration**
```
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-S7ZYMDYKZD
Environment: Production, Preview, Development
```

### **Step 3: Redeploy**
After adding all environment variables:
1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Or push a new commit to trigger automatic deployment

## 📋 **Quick Copy-Paste Format**

For faster setup, here are all variables in copy-paste format:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=bpyr1o9y
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_qj4vd4b
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SALES=template_1muzr44
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_THANKS=template_vp6wm88
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=SAN57ADEFk8KfmLWD
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-S7ZYMDYKZD
```

## 🎯 **Alternative: CLI Method**

If you prefer using Vercel CLI:

```bash
# Set environment variables via CLI
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production
# Enter: bpyr1o9y

vercel env add NEXT_PUBLIC_SANITY_DATASET production  
# Enter: production

vercel env add NEXT_PUBLIC_SANITY_API_VERSION production
# Enter: 2024-01-01

vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production
# Enter: service_qj4vd4b

vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SALES production
# Enter: template_1muzr44

vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_THANKS production
# Enter: template_vp6wm88

vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY production
# Enter: SAN57ADEFk8KfmLWD

vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID production
# Enter: G-S7ZYMDYKZD

# Redeploy
vercel --prod
```

## ✅ **After Setup**

Once environment variables are added:
1. **Deployment will succeed** ✅
2. **Sanity CMS will connect** ✅  
3. **Contact form will work** ✅
4. **Google Analytics will track** ✅
5. **Blog functionality will be ready** ✅

## 🚀 **Expected Result**

Your site will be live at:
- **Vercel URL**: `https://evotechstudio-[random].vercel.app`
- **Custom Domain**: `https://evotechstudio.dev` (after DNS setup)

All features will work perfectly including:
- ✅ Homepage and all pages
- ✅ Portfolio with 12 projects  
- ✅ Contact form functionality
- ✅ Blog system (ready for content)
- ✅ SEO optimization
- ✅ Analytics tracking