import { useState, useEffect } from "react";
import { Button } from "./ui/button"; // Assuming Button is still needed for future use/if uncommented
import { ChevronRight } from "lucide-react"; // Assuming ChevronRight is still needed
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
    image: "/images/slider-2.png",
  },
  {
    id: 3,
    title: "Batteries",
    description: "Industrial-grade power protection solutions like UPS systems, Inverters and DC systems with stand-by lead acid.",
    image: "/images/slider-3.png",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(initialSlides);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        // const response = await fetch("/api/hero-slides");
        // if (!response.ok) return;
        // const data = await response.json();
        // if (Array.isArray(data) && data.length > 0) {
        //   setSlides(data);
        // }
      } catch (error) {
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
    <section id="home" className="relative pt-[128px] h-[560px] md:h-[680px] lg:h-[720px] overflow-hidden bg-secondary">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }} // Slightly longer fade for smoother transition
          className="absolute inset-0"
        >
          {/* THE ZOOMING IMAGE */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }} // Slight zoom in
            transition={{ 
              duration: 6.5, // Matches your 6000ms timer + a small buffer
              ease: "linear" 
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* Dark Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-secondary/30" /> */}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="container-main relative h-full flex items-end pb-24 md:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-left z-10"
          >
            <h1 className="text-4xl font-semibold md:text-6xl lg:text-6xl font-display  text-primary-foreground mb-4 text-balance">
              {slides[currentSlide].title}
            </h1>
            <p className="text-primary-foreground/80 text-sm md:text-base mb-8 max-w-xl text-balance">
              {slides[currentSlide].description}
            </p>
            
            {/* <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: "Years Experience", value: "10+" },
                { label: "ISO Certified", value: "9001" },
                { label: "On-Time Delivery", value: "98%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-primary-foreground/20 bg-secondary/40 backdrop-blur-sm px-4 py-3 text-primary-foreground/90"
                >
                  <p className="text-lg font-semibold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2 z-20">
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