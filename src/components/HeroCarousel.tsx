import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialSlides = [
  {
    id: 1,
    title: "Solar Equipment",
    description: "Photovoltaic System (Solar Panel/Battery Bank) We have successfully designed, assemble, supplied, installed and commissioned at various Pipeline.",
    image: "/images/slider-1.png",
  },
  {
    id: 2,
    title: "AC/DC Systems",
    description: "Our Manufacturer AEG PS has designed, manufactured, tested, installed and serviced AC and DC emergency power solutions.",
    image: "/images/slider-1.png",
  },
  {
    id: 3,
    title: "Batteries",
    description: "Industrial-grade power protection solutions like UPS systems, Inverters and DC systems with stand-by lead acid.",
    image: "/images/slider-1.png",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(initialSlides);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const response = await fetch("/api/hero-slides");
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setSlides(data);
        }
      } catch {
        return;
      }
    };
    loadSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slides.length]);

  return (
    <section id="home" className="relative h-[560px] md:h-[680px] lg:h-[720px] overflow-hidden bg-secondary">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-secondary/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_45%)]" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="container-main relative h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="pill mb-6 text-primary-foreground border-primary-foreground/40 bg-secondary/40">
              Trusted Industrial Power Partner
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-primary-foreground mb-4 text-balance">
              {slides[currentSlide].title}
            </h1>
            <p className="text-primary-foreground/80 text-sm md:text-base mb-8 max-w-xl text-balance">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="hero-solid" size="xl" className="group">
                Explore Products
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero" size="xl" className="group">
                Contact Us
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: "Years Experience", value: "10+" },
                { label: "ISO Certified", value: "9001" },
                { label: "On-Time Delivery", value: "98%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-primary-foreground/20 bg-secondary/40 px-4 py-3 text-primary-foreground/90"
                >
                  <p className="text-lg font-semibold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary-foreground scale-125"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
