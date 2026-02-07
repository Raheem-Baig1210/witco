    import { useParams, Link, useNavigate } from "react-router-dom";
    import { ArrowLeft, CheckCircle2, Shield, Users, Settings, ClipboardCheck, HardHat } from "lucide-react";
    import { Button } from "./ui/button";
    import { motion, AnimatePresence } from 'framer-motion';

    // --- TYPES ---
    interface SupportInfo {
    title: string;
    icon: React.ReactNode;
    image: string;
    tagline: string;
    description: string;
    process: string[];
    benefits: string[];
    }
const supportData: Record<string, SupportInfo> = {
  installation: {
    title: "Installation & Supervision",
    icon: <HardHat className="text-white" size={32} />, // Changed to white for better contrast on the primary bg
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    tagline: "Precision Engineering from Ground Zero",
    description: "Our certified engineers provide hands-on installation and professional supervision to ensure that every component of your power system is integrated according to strict international standards and manufacturer specifications.",
    process: ["Site readiness assessment", "Mechanical & electrical assembly", "Cable routing & termination", "Quality assurance supervision"],
    benefits: ["Minimizes deployment risk", "Ensures warranty compliance", "Optimized system footprint"]
  },
  testing: {
    title: "Testing & Commissioning",
    icon: <ClipboardCheck className="text-white" size={32} />, // Added size={32} and white text
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    tagline: "Verifying Performance Under Pressure",
    description: "Before going live, we conduct rigorous load testing and performance validation. We simulate real-world failure scenarios to ensure your UPS and battery banks respond instantly when the grid fails.",
    process: ["Load bank testing", "System integration verification", "Alarm & monitoring calibration", "Final performance reporting"],
    benefits: ["Zero-fail reliability", "Verified backup runtimes", "Regulatory compliance"]
  },
  spareparts: {
    title: "Spare Parts Management",
    icon: <Settings className="text-white" size={32} />, // Added size={32} and white text
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    tagline: "Guaranteed Availability, Minimum Downtime",
    description: "We maintain a strategic inventory of genuine components. Our management system ensures that critical spares—from individual cells to control boards—are available exactly when you need them.",
    process: ["Critical parts auditing", "Inventory optimization", "Global sourcing of genuine parts", "Rapid logistics deployment"],
    benefits: ["Reduced MTTR (Mean Time To Repair)", "Genuine part longevity", "24/7 parts availability"]
  },
  training: {
    title: "Customer Training",
    icon: <Users className="text-white" size={32} />, // White text
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    tagline: "Empowering Your Technical Team",
    description: "Knowledge transfer is key to system health. We provide comprehensive training programs for your on-site staff, covering daily operations, basic troubleshooting, and safety protocols.",
    process: ["Hands-on hardware training", "Software monitoring workshops", "Emergency response drills", "Maintenance scheduling"],
    benefits: ["Reduced human error", "Faster internal response", "Increased staff confidence"]
  },
  sitevisit: {
    title: "Site Visit / As-Builts",
    icon: <Shield className="text-white" size={32} />, // White text
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    tagline: "Accurate Documentation for Future Growth",
    description: "We conduct periodic site visits to audit system health and update technical documentation. Our 'As-Built' drawings reflect the exact current state of your installation for future expansions.",
    process: ["Physical site audits", "Thermal imaging inspections", "CAD drawing updates", "Obsolescence reporting"],
    benefits: ["Accurate future planning", "Early fault detection", "Insurance-ready documentation"]
  }
};

    export const SupportDetails = () => {
    const { id } = useParams<{ id: string }>();
    const service = id ? supportData[id] : null;
  const navigate = useNavigate(); // Initialize navigate

  const handleRequest = () => {
    // We pass the service title in the 'state' object
    navigate('/contact');
  };

  if (!service) {
    // ... return error state ...
  }

    if (!service) {
        return (
        <div className="min-h-screen flex flex-col items-center justify-center p-10">
            <h2 className="text-2xl font-bold mb-4">Service category not found</h2>
            <Link to="/" className="text-primary font-bold flex items-center gap-2">
            <ArrowLeft size={20} /> Return to Home
            </Link>
        </div>
        );
    }

    return (
        <main className="min-h-screen bg-background pt-40 lg:pt-52 pb-24">
        <div className="container-main">
            <Link to="/#support-services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-medium">
            <ArrowLeft size={18} /> Back to Support & Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* IMAGE SIDE */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-border">
                <img src={service.image} alt={service.title} className="w-full h-[500px] object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl shadow-xl text-white hidden md:block">
                {service.icon}
                </div>
            </motion.div>

            {/* CONTENT SIDE */}
            <div className="space-y-10">
                <div>
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Service Excellence</span>
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-secondary mb-4 leading-none">
                    {service.title}
                </h1>
                <p className="text-xl text-muted-foreground font-medium italic">{service.tagline}</p>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground font-normal">
                {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                <section className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2">Execution Process</h3>
                    <ul className="space-y-3">
                    {service.process.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {item}
                        </li>
                    ))}
                    </ul>
                </section>

                <section className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-secondary border-b border-secondary/20 pb-2">Key Benefits</h3>
                    <ul className="space-y-3">
                    {service.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-medium">
                        <CheckCircle2 className="text-primary shrink-0" size={16} />
                        {item}
                        </li>
                    ))}
                    </ul>
                </section>
                </div>

                <Button onClick={handleRequest} size="lg" className="h-16 px-10 rounded-2xl font-bold uppercase tracking-widest text-xs w-full sm:w-auto">
                Request This Service
                </Button>
            </div>
            </div>
        </div>
        </main>
    );
    };