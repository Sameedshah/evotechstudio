import Services from "@/component/Services";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services - Web Development, AI Agents, SaaS & Digital Solutions",
  description: "Custom web development, AI agents & automation, SaaS applications, UI/UX design & e-commerce solutions. React, Next.js expertise. Transform your business with EvoTech Studio.",
  keywords: [
    "web development services",
    "AI agents development",
    "automation services",
    "SaaS application development",
    "mobile app development services",
    "UI/UX design services",
    "e-commerce development",
    "custom software development",
    "digital transformation",
    "React development",
    "Next.js development",
    "technology consulting"
  ],
  openGraph: {
    title: "Our Services - Web Development, AI Agents, SaaS & Digital Solutions",
    description: "Explore EvoTech Studio's comprehensive services: custom web development, AI agents & automation, SaaS applications, UI/UX design, and more.",
    url: "https://evotechstudio.dev/services",
    type: "website"
  }
};

export default function ServicesPage() {
  return <Services />;
}