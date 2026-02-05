import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent" />
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
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-primary-foreground mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-primary-foreground/80 text-sm md:text-base mb-8 max-w-md">
              {slides[currentSlide].description}
            </p>
            <Button variant="hero" size="xl" className="group">
              READ MORE
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
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
