"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/component/ui/button";
import { Card } from "@/component/ui/card";
import SpotlightCard from "@/component/SpotlightCard";
import {
  Code,
  Palette,
  ShoppingCart,
  TrendingUp,
  PenTool,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Build powerful, scalable web applications with modern technologies.",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "Progressive Web Apps (PWA)",
        "API Integration",
        "Performance Optimization",
        "Cross-browser Compatibility",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Create stunning, user-friendly interfaces that drive engagement.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
        "Design Systems",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Shopify Development",
      description:
        "Launch and scale your e-commerce store with custom Shopify solutions.",
      features: [
        "Custom Shopify Themes",
        "App Integration",
        "Payment Gateway Setup",
        "Product Migration",
        "Store Optimization",
        "Ongoing Support",
      ],
    },
    {
      icon: TrendingUp,
      title: "SEO & Marketing",
      description:
        "Boost your online visibility and drive targeted traffic to your site.",
      features: [
        "SEO Audits",
        "Keyword Research",
        "On-page Optimization",
        "Content Strategy",
        "Link Building",
        "Analytics & Reporting",
      ],
    },
    {
      icon: PenTool,
      title: "Graphic Designing",
      description:
        "Professional graphic design services that make your brand stand out.",
      features: [
        "Brand Identity Design",
        "Logo Design",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
        "Packaging Design",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Keep your digital assets running smoothly with our support services.",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Bug Fixes",
        "Performance Monitoring",
        "Content Updates",
        "24/7 Technical Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient pt-32 pb-20 px-4 diagonal-shape">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Comprehensive digital solutions designed to elevate your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard className="h-full transition-all duration-300 hover:-translate-y-2" spotlightColor="rgba(59, 130, 246, 0.15)">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>

                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your business, goals, and target audience",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a tailored plan to achieve your objectives",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "We bring your project to life with precision and care",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "We ensure a smooth launch and provide ongoing support",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-black text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your digital presence
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold glow-effect text-lg px-8 py-6"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
