import Services from "@/component/Services";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services - Web Development, Mobile Apps & Digital Solutions",
  description: "Explore EvoTech Studio's comprehensive services: custom web development, mobile app development, UI/UX design, e-commerce solutions, and digital transformation consulting.",
  keywords: [
    "web development services",
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
    title: "Our Services - Web Development, Mobile Apps & Digital Solutions",
    description: "Explore EvoTech Studio's comprehensive services: custom web development, mobile app development, UI/UX design, and more.",
    url: "https://evotechstudio.dev/services",
    type: "website"
  }
};

export default function ServicesPage() {
  return <Services />;
}