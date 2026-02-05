import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const ExperienceSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content with Green Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-lg p-8 md:p-12 text-primary-foreground"
          >
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl md:text-7xl font-bold">10</span>
              <span className="text-2xl">+ year</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Industrialized AC/ DC Systems, Batteries and Solar Power System
            </h3>
            
            <div className="flex gap-4 mb-8">
              <img 
                src="/images/solar-section.png" 
                alt="Solar installation" 
                className="w-1/2 h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/slider-1.png" 
                alt="Solar panels" 
                className="w-1/2 h-32 object-cover rounded-lg"
              />
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">System Methodologies</h4>
              <p className="text-primary-foreground/80 text-sm">
                One is quality management and another is safety, health, environmental management
              </p>
            </div>

            <Button variant="hero" size="lg">
              Company Profile
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/images/slider-1.png"
              alt="Industrial installation"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
