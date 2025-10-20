
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", path: "/services" },
      { name: "UI/UX Design", path: "/services" },
      { name: "Shopify Development", path: "/services" },
      { name: "SEO & Marketing", path: "/services" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/EvoTech-Studio/61575264624731/#", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/evotech-studio", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/evotechstudio/", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-black">
                <span className="text-foreground">Evo</span>
                <span className="text-primary">Tech</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-4">
              Turning Ideas into Digital Excellence. We create stunning digital experiences that drive growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 text-primary" />
                <span>info@evotechstudio.dev</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 mt-0.5 text-primary" />
                <div className="flex flex-col space-y-1">
                  <span>+92 370 0589908</span>
                  <span>+92 318 2608458</span>
                  <span>+92 324 3354583</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span>Karachi Pakistan, 74900</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} EvoTech Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
