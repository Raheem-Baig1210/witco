import { motion } from "framer-motion";
import { Target, Heart, Rocket, Shield, Crosshair, Eye } from "lucide-react";

const values = [
  {
    icon: Crosshair,
    title: "Our Mission",
    description: "Is to provide solutions designed to guarantee quality, durability and availability of critical systems on time.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "We are a leading and recognized provider of power solutions for the industrial market & we aim to continuously satisfy our customer's needs.",
  },
  {
    icon: Target,
    title: "Our Focus",
    description: "Only focus creates the basis for consistently executing orders at the required level of detail.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "We have created a set of values which enhance our vision and which guide our decisions.",
  },
  {
    icon: Rocket,
    title: "Our Future",
    description: "With our unrivalled, global service back up and know how we ensure that our focus remains on delivering the best.",
  },
  {
    icon: Shield,
    title: "What We Stand For",
    description: "We supply and deliver high quality solutions and services to enhance and strengthen our customer's networks.",
  },
];

export const ISOSection = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_45%)]" />
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-kicker mb-3 inline-flex text-primary-foreground/80">Compliance & Quality</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            We Are <span className="text-primary">ISO Certified</span> Company
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            We at World Integrated Trading Contracting Company (WITCO) are proud to be an ISO9001 certified company with dedicated 
            professionals serving your needs worldwide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary-foreground/10">
                <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-secondary-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                {value.title}
              </h3>
              <p className="text-sm text-secondary-foreground/70 group-hover:text-primary-foreground/80 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
