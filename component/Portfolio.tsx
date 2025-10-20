"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/component/ui/button";
import { Badge } from "@/component/ui/badge";
import { Eye, X } from "lucide-react";
import Image from "next/image";
import SpotlightCard from "@/component/SpotlightCard";

interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string[];
  features: string[];
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EvoTech Gym Management Software",
    category: "Web Development",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Supabase",
      "Axios",
      "Hikvision ISAPI",
      "Vercel",
    ],
    features: [
      "Biometric fingerprint enrollment directly from the web app",
      "Automatic attendance synchronization every 5 minutes via cron jobs",
      "Manual attendance sync option from admin dashboard",
      "Secure cloud database with no data loss (Supabase)",
      "Real-time member check-in and attendance tracking",
      "Easy management of member records and subscription details",
      "Modern, responsive UI with clean admin dashboard",
      "Multi-device access accessible from any browser or mobile",
    ],
    image: "/web/gym-management.png",
    description:
      "A cloud-based gym management system integrated with Hikvision biometric attendance devices via ISAPI API. The system automates member check-ins, attendance syncing, and management operations — replacing unreliable desktop-based systems with a secure, web-hosted platform accessible anywhere.",
  },
  {
    id: 2,
    title: "School Management System",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
    features: [
      "Centralized dashboard for student and teacher management",
      "Automated attendance tracking and reporting",
      "Class-wise performance and finance analytics",
    ],
    image: "/projects/sms.png",
    description:
      "A web-based School Management System designed to streamline administrative tasks such as managing student records, teacher assignments, class scheduling, and fee collection. The platform provides an intuitive dashboard for administrators to efficiently monitor and control all academic and operational activities.",
  },
  {
    id: 3,
    title: "E-commerce Website",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JS"],
    features: [
      "Fully responsive design for all devices",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
    ],
    image: "/web/e-commerce.png",
    description:
      "A fully responsive e-commerce platform designed to provide a seamless online shopping experience for customers. The website features comprehensive product browsing capabilities, secure shopping cart functionality, and streamlined checkout processes, enabling businesses to effectively showcase their products and facilitate smooth transactions while ensuring optimal user experience across all devices.",
  },
  {
    id: 4,
    title: "Image Generation APP",
    category: "UI/UX Design",
    technologies: ["FIGMA"],
    features: [
      "Mobile-responsive interface",
      "AI image generation capabilities",
      "Purple-themed modern UI design",
    ],
    image: "/UIUX/Image Generation APP.png",
    description:
      "An AI-powered mobile application that enables users to generate, customize, and edit stunning digital artwork through an intuitive interface. The app leverages advanced artificial intelligence algorithms to transform user inputs into professional-quality illustrations, making art creation accessible to both beginners and experienced artists.",
  },
  {
    id: 5,
    title: "Emirates Visual Identity",
    category: "Branding",
    technologies: ["PHOTOSHOP"],
    features: [
      "Typography system for consistent brand communication",
      "Premium color palette with aviation-inspired themes",
      "Complete logo redesign and brand mark development",
    ],
    image: "/branding/emriates.png",
    description:
      "A comprehensive brand identity redesign for Emirates that captures the essence of luxury aviation and modern travel experience. This project involved creating a cohesive visual language that reflects Emirates' premium positioning in the airline industry, emphasizing elegance, reliability, and global connectivity through sophisticated design elements and contemporary aesthetics.",
  },

  {
    id: 6,
    title: "Recipe App",
    category: "UI/UX Design",
    technologies: ["FIGMA"],
    features: [
      "Recipe browsing and search functionality",
      "Ingredient lists and cooking instructions",
      "Meal planning tools",
    ],
    image: "/UIUX/Recipe App.png",
    description:
      "A clean and modern mobile recipe discovery platform that helps users find, save, and organize cooking recipes through an intuitive interface. The app features comprehensive recipe collections, detailed ingredient lists, step-by-step cooking instructions, and meal planning tools, making it easy for home cooks and food enthusiasts to discover new dishes and streamline their culinary journey.",
  },
  {
    id: 7,
    title: "Youtube Dashboard",
    category: "UI/UX Design",
    technologies: ["FIGMA"],
    features: [
      "Dark-themed dashboard interface",
      "Engagement metrics visualization",
      "Video performance tracking",
    ],
    image: "/UIUX/Youtube Dashboard.png",
    description:
      "A comprehensive analytics dashboard designed for YouTube content creators to monitor, analyze, and optimize their channel performance in real-time. The platform provides detailed insights into video metrics, audience engagement, growth trends, and content performance, empowering creators to make data-driven decisions to enhance their content strategy and maximize their reach.",
  },
  {
    id: 8,
    title: "NayaPay Visual Identity",
    category: "Branding",
    technologies: ["PHOTOSHOP"],
    features: [
      "Minimalist logo design with fintech symbolism",
      "Clean, trustworthy color scheme",
      "Mobile-first design approach",
    ],
    image: "/branding/nayapay.png",
    description:
      "A modern digital banking brand identity created for NayaPay, focusing on trust, innovation, and accessibility in financial technology. The project encompasses a complete visual identity system that communicates security and user-friendliness while maintaining a contemporary fintech aesthetic that appeals to tech-savvy consumers and traditional banking customers alike.",
  },
  {
    id: 9,
    title: "Trifold Brochure - Hunar",
    category: "Graphic Designer",
    technologies: ["PHOTOSHOP"],
    features: [
      "Custom illustration and graphic elements",
      "Creative layout design and composition",
      "Color psychology and visual hierarchy",
    ],
    image: "/ghraphic/Hunar.png",
    description:
      "A comprehensive graphic design project for Hunar that focuses on creating visually compelling and culturally relevant design solutions. This project involved developing a complete visual communication system that effectively conveys the brand's message through innovative graphic elements, illustrations, and creative layouts that resonate with the target audience.",
  },
  {
    id: 10,
    title: "Trifold Brochure - Houzz",
    category: "Graphic Designer",
    technologies: ["PHOTOSHOP"],
    features: [
      "Interior design visualization graphics",
      "Professional layout and composition",
      "Color schemes for interior aesthetics",
    ],
    image: "/ghraphic/houzz.png",
    description:
      "A specialized graphic design project for Houzz focusing on interior design visualization and marketing materials. The project encompasses creating sophisticated visual content that showcases interior design concepts, architectural elements, and home decor solutions through clean, modern graphics that appeal to homeowners and design professionals alike.",
  },
  {
    id: 11,
    title: "SM GYM Website",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
    features: [
      "Member progress tracking and fitness goal monitoring",
      "Class scheduling and trainer assignment management",
      "Equipment maintenance scheduling and workout analytics",
    ],
    image: "/web/SmGym.png",
    description:
      "A modern and responsive gym website designed to showcase fitness services, training programs, membership plans, and facilities. The website features an attractive landing page with member testimonials, trainer profiles, class schedules, equipment gallery, and online membership registration. Built with a focus on user experience to attract new members and provide existing members with easy access to gym information, schedules, and services.",
  },
  {
    id: 12,
    title: "Lead Generation App",
    category: "AI Agent",
    technologies: ["N8N", "POSTGRESQL", "NEXTJS", "RENDER"],
    features: [
      "Real-time lead capture from website forms via Webhooks",
      "Google Sheets or database backup for all incoming leads",
      "Cloud-hosted and always-on workflow with Render integration",
      "Secure data handling with OAuth2 and PostgreSQL persistence",
      "Easy scalability for future CRM or marketing automation integration",
    ],
    image: "/agents/lead.png",
    description:
      "A smart and automated lead generation system built to capture and manage leads from website contact forms. The platform automatically collects form submissions, stores them in a secure cloud database, and sends formatted email notifications to the company’s inbox for instant follow-up. Designed to streamline the lead capture process and ensure no potential customer is missed, even outside office hours.",
  },

];

const categories = [
  "All Projects",
  "Web Development",
  "AI Agent",
  "UI/UX Design",
  "Graphic Designer",
  "Branding",
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalScrollPosition, setModalScrollPosition] = useState(0);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (project: Project, event: React.MouseEvent) => {
    const clickedElement = event.currentTarget as HTMLElement;
    const rect = clickedElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate position to show modal near the clicked card
    const cardTop = rect.top + scrollTop;
    const viewportHeight = window.innerHeight;
    const modalHeight = Math.min(600, viewportHeight * 0.8);

    // Position modal near the clicked card
    let targetPosition = cardTop - 100; // Position above the card

    // Ensure modal stays within viewport bounds
    const minPosition = scrollTop + 20;
    const maxPosition = scrollTop + viewportHeight - modalHeight - 20;

    if (targetPosition < minPosition) {
      targetPosition = minPosition;
    } else if (targetPosition > maxPosition) {
      targetPosition = maxPosition;
    }

    setModalScrollPosition(targetPosition);
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of projects across different categories
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={(e) => handleProjectClick(project, e)}
            >
              <SpotlightCard className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="rounded-full"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-4xl w-full mx-auto"
              style={{
                position: 'absolute',
                top: `${modalScrollPosition}px`,
                left: '2rem',
                right: '2rem',
                maxWidth: '56rem',
                margin: '0 auto',
                maxHeight: '80vh',
                overflowY: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 z-10 rounded-full"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>

                <div className="p-8">
                  <Badge variant="secondary" className="mb-4">
                    {selectedProject.category}
                  </Badge>

                  <h2 className="text-3xl font-bold mb-4">
                    {selectedProject.title}
                  </h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="flex gap-4">
                    <Button className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
