import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

// 1. Define your product list
const initialProducts = [
  { 
    id: "batteries", 
    title: "Batteries", 
    description: "Industrial-grade power protection solutions like UPS systems, Inverters...", 
    image: "/images/batteries.png" 
  },
  { 
    id: "racks", 
    title: "Battery Racks", 
    description: "Weak or defective individual cells usually do not occur when using our racks...", 
    image: "/images/battery-racks.png" 
  },
  { 
    id: "enclosures", 
    title: "Fiber Glass Enclosures", 
    description: "Our engineering design team creates FGRP solutions for harsh environments...", 
    image: "/images/fiber-glass.png" 
  },
  { 
    id: "accessories", 
    title: "Accessories", 
    description: "Well trained and certified engineers onboard to perform testing and support...", 
    image: "/images/accessories.png" 
  },
  { 
    id: "solar", 
    title: "Solar Power System", 
    description: "Photovoltaic System (Solar Panel/Battery Bank) tailored for industrial use...", 
    image: "/images/solar-power.png" 
  },
  { 
    id: "chargers", 
    title: "Chargers/ Rectifiers", 
    description: "Designed and manufactured by AEG PS for high-reliability applications...", 
    image: "/images/chargers.png" 
  },
  { 
    id: "ups", 
    title: "UPS Systems", 
    description: "AEG PS offers a huge range of power protection for critical infrastructure...", 
    image: "/images/ups.png" 
  },
  { 
    id: "invertors", 
    title: "Invertors", 
    description: "Protect 8 INV is an extremely robust solution, both electrically and mechanically...", 
    image: "/images/invertor.png" 
  },
];

export const ProductsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  // 2. Duplicate the array to create a seamless infinite loop illusion
  const products = [...initialProducts, ...initialProducts];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background to-muted/40 overflow-hidden relative">
      <div className="container-main text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker mb-3 inline-flex uppercase tracking-[0.3em] text-primary font-bold text-xs">
            Product Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4 uppercase tracking-tighter">
            Solutions Built for Critical Power
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-medium">
            Explore our engineered range of power solutions. Hover over any product to pause the flow and read more.
          </p>
        </motion.div>
      </div>

      {/* 3. INFINITE SCROLL TRACK */}
      <div 
        className="relative w-full flex overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60, // Slow, steady speed (adjust higher for slower, lower for faster)
              ease: "linear",
            },
          }}
        >
          {products.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-[320px] bg-card rounded-[2rem] overflow-hidden border border-border shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group/card"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Industrial
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 whitespace-normal bg-card">
                <h3 className="font-black text-xl text-foreground mb-3 uppercase tracking-tight group-hover/card:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed font-medium">
                  {product.description}
                </p>
                
                {/* 4. READ MORE NAVIGATION */}
                <Link 
                  to={`/product/${product.id}`} 
                  className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group/link hover:opacity-80 transition-all"
                >
                  Read More 
                  <ChevronRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 5. GRADIENT FADE MASKS (Hides the harsh edges of the screen) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>

      {/* Footer Button */}
      <div className="text-center mt-20">
        <Button variant="outline" size="lg" className="rounded-full px-12 border-2 hover:bg-primary hover:text-white transition-all font-bold uppercase tracking-widest text-xs">
          Request Full Technical Catalog
        </Button>
      </div>
    </section>
  );
};