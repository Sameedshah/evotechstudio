#!/bin/bash

echo "🔧 Setting up Vercel environment variables..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "📝 Adding environment variables to Vercel..."

# Add all environment variables
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production <<< "bpyr1o9y"
vercel env add NEXT_PUBLIC_SANITY_DATASET production <<< "production"
vercel env add NEXT_PUBLIC_SANITY_API_VERSION production <<< "2024-01-01"
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production <<< "service_qj4vd4b"
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SALES production <<< "template_1muzr44"
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_THANKS production <<< "template_vp6wm88"
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY production <<< "SAN57ADEFk8KfmLWD"
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID production <<< "G-S7ZYMDYKZD"

echo "✅ Environment variables added successfully!"
echo "🚀 Deploying to production..."

# Deploy to production
vercel --prod

echo "🎉 Deployment complete!"