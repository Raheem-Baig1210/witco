import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const initialProducts = [
  {
    title: "Batteries",
    description: "Industrial-grade power protection solutions like UPS systems, Inverters...",
    image: "/images/batteries.png",
  },
  {
    title: "Battery Racks",
    description: "Weak or defective individual cells usually do not occur...",
    image: "/images/battery-racks.png",
  },
  {
    title: "Manufacturing of Fiber Glass Enclosures (FGRP)",
    description: "Our engineering design team...",
    image: "/images/fiber-glass.png",
  },
  {
    title: "Accessories",
    description: "Well trained and certified engineers onboard to perform testing...",
    image: "/images/accessories.png",
  },
  {
    title: "Solar Power System",
    description: "Photovoltaic System (Solar Panel/Battery Bank) We...",
    image: "/images/solar-power.png",
  },
  {
    title: "Chargers/ Rectifiers",
    description: "Our Manufacturer AEG PS has designed, manufactured...",
    image: "/images/chargers.png",
  },
  {
    title: "Un-interrupted Power Supply (UPS)",
    description: "AEG PS offers a huge range of power...",
    image: "/images/ups.png",
  },
  {
    title: "Invertors",
    description: "Protect 8 INV is an extremely robust, both electrically and mechanically...",
    image: "/images/invertor.png",
  },
];

export const ProductsSection = () => {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      } catch {
        return;
      }
    };
    loadProducts();
  }, []);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-muted/40">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-kicker mb-3 inline-flex">Product Portfolio</span>
          <h2 className="section-title mb-3">Solutions Built for Critical Power</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover our engineered range of batteries, enclosures, UPS systems, and solar power solutions tailored to industrial needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {index < 2 ? (
                  <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Most Popular
                  </span>
                ) : null}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                  Read More →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View Full Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};
