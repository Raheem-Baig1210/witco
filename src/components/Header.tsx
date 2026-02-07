import { useState, useEffect } from "react";
import { Phone, Mail, Facebook, Linkedin, Instagram, Twitter, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ARRAYS (These must be present) ---
const navItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { 
    name: "Products", 
    href: "#products",
    dropdown: [
      { label: "Batteries", href: "/product/batteries" },
      { label: "Battery Racks", href: "/product/racks" },
      { label: "Fiber Glass Enclosures", href: "/product/enclosures" },
      { label: "Accessories", href: "/product/accessories" },
      { label: "Solar Power System", href: "/product/solar" },
      { label: "Chargers/Rectifiers", href: "/product/chargers" },
      { label: "UPS Systems", href: "/product/ups" },
      { label: "Invertors", href: "/product/invertors" }
    ]
  },
  { 
    name: "Support & Service", 
    href: "#support-services",
    dropdown: [
      { label: "Installation", href: "#installation" },
      { label: "Maintenance", href: "#maintenance" },
      { label: "Technical Support", href: "#technical-support" }
    ]
  },
  { name: "Technical", href: "#technical" },
  { name: "Contact us", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
];

// --- COMPONENT ---
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to toggle header parts
  useEffect(() => {
    const handleScroll = () => {
      // If we scroll more than 50px, hide the top bar
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 shadow-sm">
      {/* 1. TOP BAR - Logo and Contact Info (Disappears on scroll) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background/95 backdrop-blur border-b border-border overflow-hidden"
          >
            <div className="container-main py-3">
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-4">
                  <img
                    src="/images/wic-logo.png.jpeg"
                    alt="WITCO Logo"
                    className="h-16 w-auto"
                  />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-secondary">WITCO</span>
                    <span className="text-[10px] text-primary font-medium tracking-wider uppercase">
                      WORLD INTEGRATED TRADING & CONTRACTING COMPANY
                    </span>
                  </div>
                </a>

                <div className="hidden lg:flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">0044 (0) 7832285692</p>
                      <p className="text-xs text-primary">Mobile</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">inayath.khan@witco.com</p>
                      <p className="text-xs text-primary">Email</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. NAVIGATION BAR - Links (Always visible) */}
      <nav className="bg-secondary/95 backdrop-blur border-b border-secondary-foreground/10">
        <div className="container-main">
          <div className="flex items-center justify-between h-16">
            
            {/* Small Logo that appears ONLY when scrolled */}
            <div className="flex items-center">
              {isScrolled && (
                <motion.a 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  href="#" 
                  className="mr-6 flex items-center gap-2"
                >
                  <img src="/images/wic-logo.png.jpeg" className="h-8 w-auto" alt="Logo" />
                  <span className="text-primary-foreground font-bold">WITCO</span>
                </motion.a>
              )}

              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className={`px-4 py-5 text-sm font-medium text-secondary-foreground hover:text-primary transition-colors flex items-center gap-1 ${item.name === 'Home' ? 'border-b-2 border-primary' : ''}`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronDown className="w-4 h-4" />}
                    </a>
                    
                    {item.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 bg-background shadow-lg rounded-md py-2 min-w-[220px] z-50"
                          >
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Icons & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-3 mr-2">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} className="text-secondary-foreground hover:text-primary transition-colors">
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-secondary-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-secondary border-t border-secondary-foreground/10"
            >
              <div className="container-main py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-secondary-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};