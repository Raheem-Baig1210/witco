import { motion } from "framer-motion";

const partners = [
  "/images/partner-1.png",
  "/images/partner-2.png",
  "/images/partner-3.png",
  "/images/partner-4.png",
  "/images/partner-5.png",
  "/images/partner-6.png",
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Partners</h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="flex animate-marquee">
          {/* First set */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 w-32 h-20 bg-background rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow"
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 w-32 h-20 bg-background rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow"
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
