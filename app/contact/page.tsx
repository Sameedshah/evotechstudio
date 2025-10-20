import Contact from "@/component/Contact";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact EvoTech Studio - Get Your Project Started",
  description: "Ready to transform your business? Contact EvoTech Studio for free consultation. Expert web development, mobile apps & digital solutions await.",
  keywords: [
    "contact EvoTech Studio",
    "web development consultation",
    "project quote",
    "hire developers",
    "custom software quote",
    "development services contact",
    "technology consulting"
  ],
  openGraph: {
    title: "Contact EvoTech Studio - Get Your Project Started",
    description: "Ready to transform your business? Contact EvoTech Studio for a free consultation.",
    url: "https://evotechstudio.dev/contact",
    type: "website"
  }
};

export default function ContactPage() {
  return <Contact />;
}