import { motion } from "framer-motion";
import { Building2, Rocket, Users, Handshake } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Industry Best Practice",
    description: "Experienced engineers, coupled with our skilled Technicians, give us the professional edge necessary to execute ever-larger and more complex projects efficiently.",
  },
  {
    icon: Rocket,
    title: "Our Future",
    description: "With our unrivaled, global service back-up and know how we ensure that our focus remains on delivering the best reliable solutions and service.",
  },
  {
    icon: Users,
    title: "Corporate Citizenship",
    description: "World Integrated Trading Contracting Company (WITCO) Limited supports the various National Oil Companies (NOC's) local and international Engineering Procurement Companies (EPC's).",
  },
  {
    icon: Handshake,
    title: "Long Term Relationship",
    description: "We believe in developing and fostering relationships that are mutually beneficial.",
  },
];

export const AboutSection = () => {
  const highlights = [
    { label: "Projects Delivered", value: "250+" },
    { label: "Skilled Engineers", value: "60+" },
    { label: "Countries Served", value: "12" },
    { label: "Support Coverage", value: "24/7" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-kicker text-secondary mb-4 inline-flex">About WITCO</span>
            <h2 className="section-title mb-4">
              Al-Mutakamilah Al-Alamiyyah Al-maqawalat Al-ammah (World Integrated  Trading & Contracting Co.) WITCO.
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              World Integrated Trading &amp; Contracting Co. (WITCO) Limited is a progressive and efficient trading and contracting company.
              With a solid reputation, quality products are delivered on time with consistent, dependable service.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-muted/60 px-4 py-4">
                  <p className="text-xl font-semibold text-secondary">{item.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 transition-colors group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
