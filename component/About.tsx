"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/component/ui/button";
import { Card } from "@/component/ui/card";
import ProfileCard from "@/component/ProfileCard";
import {
  Target,
  Eye,
  Award,
  Users,
  Zap,
  Heart,
  TrendingUp,
  Shield,
  ArrowRight,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We stay ahead of trends and embrace cutting-edge technologies",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "We love what we do and it shows in every project we deliver",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We build trust through transparency and honest communication",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We strive for perfection in everything we create",
    },
  ];

  const team = [
    {
      name: "M Siddique",
      title: "Project Manager",
      handle: "siddique",
      status: "Online" as const,
      description:
        "Mr Siddique is a highly organized and results-driven Project Manager with three years of experience successfully planning, executing, and finalizing projects across the full lifecycle.",
      experience: "2+ Years Experience",
      avatarUrl:
        "/siddique.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com",
        github: "https://github.com/",
        instagram: "https://www.instagram.com",
      },
    },
    {
      name: "Faizan Mati",
      title: "Web Developer",
      handle: "faizanmati",
      status: "Online" as const,
      description:
        "Faizan is a passionate web developer with expertise in creating responsive, user-friendly websites and applications using modern web technologies.",
      experience: "2+ Years Experience",
      avatarUrl:
        "/faizan.jpeg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/faizan-mati?originalSubdomain=pk",
        github: "https://github.com/faizan-mati",
        instagram: "https://www.instagram.com/faizan_mati/",
      },
    },
    {
      name: "Sameed",
      title: "AI Agents Developer",
      handle: "sameeddev",
      status: "Online" as const,
      description:
        "Sameed is a dedicated AI Agent Developer who specializes in designing, training, and deploying intelligent, autonomous software agents.",
      experience: "1+ Years Experience",
      avatarUrl:
        "/sameed.jpeg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/muhammad-sameed-shah",
        github: "https://github.com/Sameedshah",
        instagram: "https://www.instagram.com/mr_sameed.pro/",
      },
    },
    {
      name: "Raja Adnan",
      title: "Sales Lead",
      handle: "rajaadnan",
      status: "Online" as const,
      description:
        "Raja leads our projects with a collaborative spirit, ensuring timely delivery and high client satisfaction through strong team coordination and attention to detail.",
      experience: "1+ Years Experience",
      avatarUrl:
        "/adnan.jpeg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/raja-adnan-ahmed-853a34361",
        github: "https://github.com/WATCHERsee",
      },
    },
    {
      name: "Talha",
      title: "UI/UX Designer",
      handle: "talhadesign",
      status: "Online" as const,
      description:
        "Talha crafts intuitive and engaging user experiences, combining modern design trends with a deep understanding of user behavior to enhance product usability.",
      experience: "4+ Years Experience",
      avatarUrl:
        "/talha.jpg",
      socialLinks: {
        behance: "https://www.behance.net/talhauiux",
      },
    },
    {
      name: "Nauman",
      title: "Graphic Designer",
      handle: "naumandesign",
      status: "Online" as const,
      description:
        "Nauman is a pro-level graphic designer known for delivering visually compelling and brand-aligned creative assets.",
      experience: "3+ Years Experience",
      avatarUrl:
        "/noman.jpeg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/nauman001",
        behance: "https://www.behance.net/naumankhan001",
        instagram: "https://www.instagram.com/naumankhan010",
      },
    },
  ];

  const reasons = [
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Proven track record of delivering successful projects",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Talented professionals passionate about what they do",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable business outcomes",
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your success is our success - we're in this together",
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
              About <span className="text-gradient">EvoTech Studio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              We're a team of passionate creators dedicated to turning ideas
              into digital excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower businesses with cutting-edge digital solutions that
                  drive growth, enhance user experiences, and create lasting
                  impact. We believe in transforming ideas into reality through
                  innovation, creativity, and technical excellence.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the most trusted digital partner for businesses
                  worldwide, recognized for our innovative solutions,
                  exceptional quality, and unwavering commitment to client
                  success. We envision a future where technology and creativity
                  unite seamlessly.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented individuals working together to create amazing
              experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full max-w-sm"
              >
                <ProfileCard
                  name={member.name}
                  title={member.title}
                  handle={member.handle}
                  status={member.status}
                  avatarUrl={member.avatarUrl}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  description={member.description}
                  experience={member.experience}
                  socialLinks={member.socialLinks}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from the rest
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                      <reason.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Card>
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
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your digital presence? Get in touch with us
              today.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold glow-effect text-lg px-8 py-6"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
