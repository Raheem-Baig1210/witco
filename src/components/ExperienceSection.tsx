import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const ExperienceSection = () => {
  return (
    <section className="py-20 bg-muted/60">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-12 text-primary-foreground gradient-green soft-shadow"
          >
            <span className="pill mb-6 border-primary-foreground/30 bg-white/10 text-primary-foreground">
              Proven Performance
            </span>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl md:text-7xl font-bold">10</span>
              <span className="text-2xl">+ years</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Industrial AC/DC systems, batteries, and solar power solutions engineered for reliability.
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-lg font-semibold">Quality First</p>
                <p className="text-sm text-primary-foreground/80">ISO-aligned processes and audits</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-lg font-semibold">Safety Focus</p>
                <p className="text-sm text-primary-foreground/80">HSE-led project delivery</p>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Company Profile
            </Button>
          </motion.div>

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
              className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl soft-shadow"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-background/90 border border-border px-6 py-4 shadow-lg">
              <p className="text-sm font-semibold text-secondary">Project Delivery</p>
              <p className="text-2xl font-bold text-primary">98% on-time</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
