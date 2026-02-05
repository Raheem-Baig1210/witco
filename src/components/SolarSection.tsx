import { motion } from "framer-motion";
import { Sun, Zap } from "lucide-react";

export const SolarSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-8">
              Why <span className="text-primary">Solar Energy</span> is Best
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <Sun className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Solar Batteries Are Used In</h3>
                  <p className="text-muted-foreground">
                    BAE solar batteries are used in renewable energy applications such as photovoltaic power generation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <Zap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Industrial Energy Systems</h3>
                  <p className="text-muted-foreground">
                    So BAE solar batteries have been proven in industrial energy systems even under extreme conditions 
                    as well as in private households, e.g. to increase the content of self.
                  </p>
                </div>
              </div>
            </div>
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
              src="/images/solar-section.png"
              alt="Solar Energy"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
