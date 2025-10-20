import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/component/ClientLayout";
import { ThemeProvider } from "@/component/ThemeProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EvoTech Studio - Innovative Web Development & Digital Solutions",
    template: "%s | EvoTech Studio"
  },
  description: "EvoTech Studio delivers cutting-edge web development, mobile apps, and digital solutions. Transform your business with our expert development team specializing in React, Next.js, and modern technologies.",
  keywords: [
    "web development",
    "mobile app development",
    "digital solutions",
    "React development",
    "Next.js development",
    "UI/UX design",
    "e-commerce development",
    "custom software",
    "technology consulting",
    "EvoTech Studio"
  ],
  authors: [{ name: "EvoTech Studio" }],
  creator: "EvoTech Studio",
  publisher: "EvoTech Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://evotechstudio.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evotechstudio.dev",
    title: "EvoTech Studio - Innovative Web Development & Digital Solutions",
    description: "EvoTech Studio delivers cutting-edge web development, mobile apps, and digital solutions. Transform your business with our expert development team.",
    siteName: "EvoTech Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EvoTech Studio - Web Development & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EvoTech Studio - Innovative Web Development & Digital Solutions",
    description: "EvoTech Studio delivers cutting-edge web development, mobile apps, and digital solutions. Transform your business with our expert development team.",
    images: ["/og-image.jpg"],
    creator: "@evotechstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Xy_bke8li1zELC1dTwAMYtG3EYYp0kxC8McpFiFc2Dc", // DNS verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </ThemeProvider>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EvoTech Studio",
              "url": "https://evotechstudio.dev",
              "logo": "https://evotechstudio.dev/logo.png",
              "description": "EvoTech Studio delivers cutting-edge web development, mobile apps, and digital solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://evotechstudio.dev/contact"
              },
              "sameAs": [
                "https://twitter.com/evotechstudio",
                "https://linkedin.com/company/evotechstudio",
                "https://github.com/evotechstudio"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Custom web development using modern technologies"
                },
                {
                  "@type": "Service",
                  "name": "Mobile App Development",
                  "description": "Native and cross-platform mobile applications"
                },
                {
                  "@type": "Service",
                  "name": "Digital Solutions",
                  "description": "Comprehensive digital transformation services"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
