import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/component/ui/button";
import { ThemeToggle } from "@/component/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);



  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const products = [
    {
      name: "EvoLeads",
      description: "Generate High Quality Business leads with EvoLeads AI.",
      url: "https://www.evoleads.evotechstudio.dev",
    },
    {
      name: "EvoMedi",
      description: "AI Based Doctors Appointment System for Clinics",
      url: "https://www.evomedi.evotechstudio.dev",
    },
    {
      name: "EvoWorkflows",
      description: "Automate Your Social Media. Grow While You Sleep",
      url: "https://www.evoworkflows.evotechstudio.dev",
    },
  ];

  const isActive = useCallback((path: string) => {
    // Handle exact matches
    if (pathname === path) {
      return true;
    }
    
    // Handle home page specifically
    if (path === "/" && pathname === "/") {
      return true;
    }
    
    // Handle other pages - check if pathname starts with path (but not for home)
    if (path !== "/" && pathname.startsWith(path)) {
      return true;
    }
    
    return false;
  }, [pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black"
            >
              <span className="text-foreground">Evo</span>
              <span className="text-primary">Tech</span>
            </motion.div>
          </Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Link */}
            <Link
              href="/"
              className={`relative font-medium navbar-link ${isActive("/") ? "active" : ""}`}
            >
              Home
              {isActive("/") && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="relative font-medium navbar-link flex items-center gap-1">
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg overflow-hidden"
                  >
                    {products.map((product, index) => (
                      <a
                        key={product.name}
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block p-4 hover:bg-primary/10 transition-colors ${
                          index !== products.length - 1 ? 'border-b border-border' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                              {product.name}
                              <ExternalLink className="h-3 w-3" />
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Other Links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative font-medium navbar-link ${isActive(link.path) ? "active" : ""
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold glow-effect">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {/* Home Link */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 navbar-link ${isActive("/") ? "active" : ""}`}
                >
                  Home
                </Link>
                
                {/* Mobile Products Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className="font-medium py-2 navbar-link flex items-center justify-between w-full"
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 ml-4 space-y-3"
                      >
                        {products.map((product) => (
                          <a
                            key={product.name}
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="block p-3 bg-card rounded-lg border border-border"
                          >
                            <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                              {product.name}
                              <ExternalLink className="h-3 w-3" />
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {product.description}
                            </p>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Other Links */}
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium py-2 navbar-link ${isActive(link.path) ? "active" : ""
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default memo(Navbar);
