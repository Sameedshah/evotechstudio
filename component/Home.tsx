"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/component/ui/button";
import { Badge } from "@/component/ui/badge";
import Image from "next/image";
import { ExternalLink, Eye, X } from "lucide-react";
import {
  ArrowRight,
  Code,
  Palette,
  ShoppingCart,
  TrendingUp,
  Star,
} from "lucide-react";
import { Card } from "@/component/ui/card";
import SpotlightCard from "@/component/SpotlightCard";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom, scalable websites built with cutting-edge technology.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that users love.",
    },
    {
      icon: ShoppingCart,
      title: "Shopify Development",
      description: "E-commerce solutions that convert visitors into customers.",
    },
    {
      icon: TrendingUp,
      title: "SEO & Marketing",
      description: "Get found online and grow your digital presence.",
    },
  ];

  const testimonials = [
    {
      name: "Abdul Basit",
      role: "SM Gym Owner",
      content:
        "EvoTech Studio transformed our online presence. Their team is incredibly professional and delivered beyond expectations.",
      rating: 4,
    },
    {
      name: "Muhammad Siddique",
      role: "Marketing Agency Owner",
      content:
        "We are generating Thousand of Sales Leads through EvoTech Lead Generation Product.",
      rating: 5,
    },
    {
      name: "Khuzaima",
      role: "Management, SM GYM",
      content:
        "Evotech built Gym Management System that works smoothly and covers all our needs.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Team Members" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient pt-32 pb-20 px-4 overflow-hidden diagonal-shape">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Welcome to EvoTech Studio
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Turning Ideas into{" "}
              <span className="text-gradient">Digital Excellence</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We create stunning digital experiences that drive growth, captivate audiences, and transform businesses. Our expert team specializes in modern web development, innovative mobile applications, and comprehensive digital solutions that help companies thrive in today's competitive digital landscape. From startups to established enterprises, we deliver cutting-edge technology solutions that exceed expectations and drive measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold glow-effect text-lg px-8 py-6"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. We combine technical expertise with creative innovation to deliver web development, mobile applications, UI/UX design, and digital marketing services that drive real business growth and enhance user experiences across all platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard 
                  className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                  spotlightColor="rgba(59, 130, 246, 0.15)"
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Client <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients who have experienced remarkable growth and success through our digital solutions. We pride ourselves on building long-term partnerships and delivering exceptional results that exceed expectations every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard className="h-full" spotlightColor="rgba(255, 215, 0, 0.15)">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {testimonial.content}
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why Choose <span className="text-gradient">EvoTech Studio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              At EvoTech Studio, we understand that every business is unique. That's why we take a personalized approach to every project, combining industry best practices with innovative solutions to deliver exceptional results. Our team of experienced developers, designers, and digital strategists work collaboratively to ensure your project not only meets but exceeds your expectations. We specialize in React, Next.js, Node.js, and modern web technologies, ensuring your digital presence is built on a solid, scalable foundation. From initial concept to final deployment and ongoing maintenance, we're your trusted partner in digital transformation. Our commitment to quality, attention to detail, and customer satisfaction has earned us a reputation as a leading digital agency that businesses trust with their most important projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's build something amazing together. Get a free consultation
                today.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold glow-effect text-lg px-8 py-6"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
