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
    description: "A3S Solutions Limited supports the various National Oil Companies (NOC's) local and international Engineering Procurement Companies (EPC's).",
  },
  {
    icon: Handshake,
    title: "Long Term Relationship",
    description: "We believe in developing and fostering relationships that are mutually beneficial.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-2">
              Welcome to <span className="text-primary">A3S Solutions</span> Limited
            </h2>
            <p className="text-muted-foreground italic mb-6">
              ( Formally Known As Shore Waves Trading LLC )
            </p>
            <p className="text-foreground/80 leading-relaxed">
              A3S Solutions Limited is a progressive and efficient trading and contracting company. 
              With a solid reputation, quality products have always been delivered to our customers on time.
            </p>
          </motion.div>

          {/* Right Features Grid */}
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
                className="group p-6 bg-muted rounded-lg hover:bg-primary transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground mb-4 transition-colors" />
                <h3 className="font-semibold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
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
