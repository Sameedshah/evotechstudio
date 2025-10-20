import About from "@/component/About";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About EvoTech Studio - Expert Development Team",
  description: "Meet EvoTech Studio's expert development team. 5+ years delivering innovative web development & digital solutions. Learn our mission & values.",
  keywords: [
    "about EvoTech Studio",
    "development team",
    "company mission",
    "web development experts",
    "technology company",
    "software development team",
    "digital agency"
  ],
  openGraph: {
    title: "About EvoTech Studio - Expert Development Team",
    description: "Learn about EvoTech Studio's mission, values, and expert development team.",
    url: "https://evotechstudio.dev/about",
    type: "website"
  }
};

export default function AboutPage() {
  return <About />;
}