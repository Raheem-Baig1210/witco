import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, Facebook, Linkedin, Instagram, Twitter, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ARRAYS ---
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
      { label: "Invertors", href: "/product/invertors" },
      { label: "Industrial & Engineering", href: "https://jardengineers.com/" },
    ]
  },
  { 
    name: "Support & Service", 
    href: "#support-services",
    dropdown: [
      { label: "Installation and Supervision ", href: "/support/installation" },
      { label: "Testing and Commissioning ", href: "/support/testing" },
      { label: "Spare parts Management ", href: "/support/spareparts" },
      { label: "Customer Training ", href: "/support/training" },
      { label: "Site Visit / As-Builts", href: "/support/sitevisit" }
    ]
  },
  { name: "Contact us", href: "/contact" },
  { name: "Download", href: "/Company Profile WIS.pdf (1).pdf" }, // Added Download Item
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
];

// --- COMPONENT ---
export const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Helper to handle navigation
  const handleNavigation = (href: string) => {
    if (href.startsWith("http") || href.endsWith(".pdf")) {
      // Handle external links and PDF files to open in a new tab
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 shadow-sm">
      {/* 1. TOP BAR */}
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
                <div 
                  onClick={() => handleNavigation("/")} 
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <img
                    src="/images/wic-logo.png.jpeg"
                    alt="WITCO Logo"
                    className="h-16 w-auto"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-secondary">WITCO</span>
                    <span className="text-[15px]  font-medium tracking-wider uppercase">
                      WORLD INTEGRATED TRADING & CONTRACTING COMPANY
                    </span>
                  </div>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">00966 50 498 9405</p>
                      <p className="text-xs text-primary">Mobile</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <a href="mailto:manager@wis-ksa.com" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        manager@wis-ksa.com
                      </a>
                      <p className="text-xs text-primary">Email</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. NAVIGATION BAR */}
      <nav className="bg-secondary/95 backdrop-blur border-b border-secondary-foreground/10">
        <div className="container-main">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex items-center">
              {isScrolled && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => handleNavigation("/")}
                  className="mr-6 flex items-center gap-2 cursor-pointer"
                >
                  <img src="/images/wic-logo.png.jpeg" className="h-8 w-auto" alt="Logo" />
                  <span className="text-primary-foreground font-bold">WITCO</span>
                </motion.div>
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
                    <div
                      onClick={() => handleNavigation(item.href)}
                      className={`px-4 py-5 text-sm font-medium text-secondary-foreground hover:text-primary transition-colors flex items-center gap-1 cursor-pointer ${item.name === 'Home' ? 'border-b-2 border-primary' : ''}`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronDown className="w-4 h-4" />}
                    </div>
                    
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
                              <div
                                key={subItem.label}
                                onClick={() => handleNavigation(subItem.href)}
                                className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                              >
                                {subItem.label}
                              </div>
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
                  <div key={item.name}>
                    <div
                      className="block py-2 text-secondary-foreground hover:text-primary transition-colors cursor-pointer font-bold"
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.name}
                    </div>
                    {item.dropdown && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((sub) => (
                          <div
                            key={sub.label}
                            className="block py-1 text-sm text-secondary-foreground/70 hover:text-primary cursor-pointer"
                            onClick={() => handleNavigation(sub.href)}
                          >
                            {sub.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};