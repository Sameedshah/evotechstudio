import Home from "@/component/Home";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "EvoTech Studio - Web Development & Digital Solutions",
  description: "Transform your business with EvoTech Studio's cutting-edge web development, mobile apps, and digital solutions. Expert React, Next.js, and modern technology development services that drive growth and exceed expectations.",
  keywords: [
    "web development company",
    "mobile app development", 
    "digital transformation",
    "React development services",
    "Next.js development",
    "custom software development",
    "UI/UX design",
    "e-commerce development",
    "technology consulting",
    "EvoTech Studio"
  ],
  alternates: {
    canonical: "https://evotechstudio.dev",
  },
  openGraph: {
    title: "EvoTech Studio - Web Development & Digital Solutions",
    description: "Transform your business with EvoTech Studio's cutting-edge web development, mobile apps, and digital solutions.",
    url: "https://evotechstudio.dev",
    type: "website",
    siteName: "EvoTech Studio",
    images: [
      {
        url: "https://evotechstudio.dev/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "EvoTech Studio - Web Development Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EvoTech Studio - Web Development & Digital Solutions", 
    description: "Transform your business with EvoTech Studio's cutting-edge web development, mobile apps, and digital solutions.",
    images: ["https://evotechstudio.dev/og-home.jpg"]
  }
};

export default function HomePage() {
  return <Home />;
}
