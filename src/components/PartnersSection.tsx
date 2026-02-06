import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const initialPartners = [
  "/images/partner-1.png",
  "/images/partner-2.png",
  "/images/partner-3.png",
  "/images/partner-4.png",
  "/images/partner-5.png",
  "/images/partner-6.png",
];

export const PartnersSection = () => {
  const [partners, setPartners] = useState(initialPartners);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const response = await fetch("/api/partners");
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const images = data
            .map((item) => item?.image)
            .filter((image) => typeof image === "string");
          if (images.length > 0) {
            setPartners(images);
          }
        }
      } catch {
        return;
      }
    };
    loadPartners();
  }, []);

  return (
    <section className="py-16 bg-muted/60 overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-kicker mb-3 inline-flex">Trusted Network</span>
          <h2 className="section-title mb-3">Our Partners</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Long-term collaborations with leading manufacturers and technology providers.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-muted/80 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-muted/80 to-transparent" />
        <div className="flex animate-marquee">
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 w-36 h-24 bg-background rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 w-36 h-24 bg-background rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
