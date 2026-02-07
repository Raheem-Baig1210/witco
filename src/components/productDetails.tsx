import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Zap, ShieldCheck, Cog, Download } from "lucide-react";
import { Button } from "./ui/button";

// --- TYPES ---
interface ProductInfo {
  title: string;
  image: string;
  category: string;
  fullDescription: string;
  features: string[];
  specs: Record<string, string>;
}

// --- PRODUCT DATA STORE ---
const productDetailsData: Record<string, ProductInfo> = {
  batteries: {
    title: "Industrial Grade Batteries",
    image: "/images/batteries.png",
    category: "Energy Storage",
    fullDescription: "Our industrial-grade batteries are engineered for high-performance power backup in critical environments. Designed to provide consistent discharge rates and rapid recharge capabilities, these units are the backbone of any reliable UPS or solar system.",
    features: ["Deep cycle longevity", "Maintenance-free VRLA design", "High energy density", "Wide temperature tolerance"],
    specs: { "Voltage": "12V / 24V / 48V", "Technology": "AGM / GEL / Lithium", "Design Life": "10-15 Years", "Certification": "IEC 60896" }
  },
  racks: {
    title: "Heavy Duty Battery Racks",
    image: "/images/battery-racks.png",
    category: "Infrastructure",
    fullDescription: "Designed for space optimization and safety, our battery racks are built from high-grade seismic-rated steel. They provide easy access for maintenance while ensuring proper ventilation and weight distribution for large-scale battery banks.",
    features: ["Seismic zone 4 rated", "Acid-resistant coating", "Modular scalability", "Integrated grounding points"],
    specs: { "Material": "Powder Coated Steel", "Tiers": "1 to 4 Levels", "Configuration": "Open / Enclosed", "Standard": "IEEE 1187" }
  },
  enclosures: {
    title: "Fiber Glass Enclosures (FGRP)",
    image: "/images/fiber-glass.png",
    category: "Protection",
    fullDescription: "Our Fiber Glass Reinforced Plastic (FGRP) enclosures are specifically designed for harsh outdoor and coastal environments. They offer superior protection against corrosion, UV rays, and extreme chemical exposure.",
    features: ["Corrosion proof", "Non-conductive material", "High impact resistance", "UV stable finish"],
    specs: { "Protection": "IP66 / NEMA 4X", "Material": "FGRP Composite", "Temp Range": "-40°C to +120°C", "Mounting": "Wall / Floor" }
  },
  accessories: {
    title: "Critical Power Accessories",
    image: "/images/accessories.png",
    category: "Components",
    fullDescription: "A complete range of high-quality accessories including battery monitoring systems, connectors, and protection devices to ensure the longevity and efficiency of your power infrastructure.",
    features: ["Real-time monitoring", "Thermal management", "Secure connectivity", "System protection"],
    specs: { "Type": "Monitoring / Wiring", "Compatibility": "Universal", "Monitoring": "Voltage/Temp/Impedance", "Safety": "UL Listed" }
  },
  solar: {
    title: "Industrial Solar Power Systems",
    image: "/images/solar-power.png",
    category: "Renewables",
    fullDescription: "Complete off-grid and hybrid photovoltaic solutions for industrial sites. Our systems integrate high-efficiency panels with advanced battery storage to provide clean, reliable power in remote locations.",
    features: ["High-efficiency PV cells", "Hybrid integration", "Remote data logging", "Weatherproof components"],
    specs: { "Panel Type": "Monocrystalline", "Inverter": "Pure Sine Wave", "System Volt": "48V DC / 230V AC", "Efficiency": ">21%" }
  },
  chargers: {
    title: "Industrial Chargers & Rectifiers",
    image: "/images/chargers.png",
    category: "Power Conversion",
    fullDescription: "High-performance rectifiers designed to provide stable DC power while simultaneously charging backup batteries. These units feature advanced microprocessor control for optimal battery health.",
    features: ["Redundant operation", "Low ripple output", "N+1 scalability", "Digital control interface"],
    specs: { "Input": "1Ph / 3Ph AC", "Output": "24V / 48V / 110V DC", "Cooling": "Natural / Forced Air", "Efficiency": "Up to 96%" }
  },
  ups: {
    title: "Uninterruptible Power Supply (UPS)",
    image: "/images/ups.png",
    category: "Power Protection",
    fullDescription: "AEG Power Solutions provides mission-critical UPS systems for oil & gas, power generation, and data centers. These systems ensure zero downtime during grid failures or power fluctuations.",
    features: ["Double conversion online", "Galvanic isolation", "Fault-tolerant design", "Modular maintenance"],
    specs: { "Power Range": "10kVA - 500kVA", "Topology": "Online VFI", "Transfer Time": "0ms", "Battery Link": "External Bank" }
  },
  invertors: {
    title: "Industrial DC/AC Invertors",
    image: "/images/invertor.png",
    category: "Power Conversion",
    fullDescription: "Our heavy-duty inverters convert DC battery power into high-quality AC power. Built for the most demanding industrial applications where reliability is non-negotiable.",
    features: ["Robust IGBT technology", "High overload capacity", "Short circuit proof", "Pure sine wave output"],
    specs: { "DC Input": "48V / 110V / 220V", "AC Output": "230V / 400V", "Waveform": "Pure Sine", "Protection": "Overload / Overheat" }
  },
};

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productDetailsData[id] : null;

  // Error handling if product ID is invalid
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-40">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-primary hover:underline font-bold flex items-center gap-2">
          <ArrowLeft size={18} /> Return to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* HEADER SECTION */}
      <div className="bg-secondary pt-40 pb-20 text-white relative overflow-hidden">
        <div className="container-main relative z-10">
          <Link to="/#products" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Catalog
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3 block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
                {product.title}
              </h1>
            </div>
            <Button size="lg" className="rounded-full font-bold shadow-xl hover:scale-105 transition-transform bg-primary text-white">
              Contact Sales
            </Button>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      </div>

      <div className="container-main py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* PRODUCT IMAGE CARDS */}
          <div className="sticky top-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-all duration-700" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-card shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-auto object-cover aspect-video lg:aspect-square"
                />
              </div>
            </div>
            
            {/* Quick Specs Callout */}
            <div className="mt-10 grid grid-cols-2 gap-4">
               <div className="p-6 bg-muted/40 rounded-3xl border border-border flex flex-col gap-2">
                  <Cog className="text-primary" size={24} />
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">Engineered For</span>
                  <span className="font-bold text-sm uppercase">Industrial Reliability</span>
               </div>
               <div className="p-6 bg-muted/40 rounded-3xl border border-border flex flex-col gap-2">
                  <ShieldCheck className="text-primary" size={24} />
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">Warranty</span>
                  <span className="font-bold text-sm uppercase">Standard & Extended</span>
               </div>
            </div>
          </div>

          {/* PRODUCT CONTENT */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                <Zap className="text-primary" fill="currentColor" /> Detailed Overview
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium italic">
                {product.fullDescription}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6">Key Performance Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={22} />
                    <span className="font-bold text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-8 md:p-10 bg-secondary text-secondary-foreground rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <h3 className="text-xl font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                <ShieldCheck className="text-primary" size={24} /> Technical Specifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="border-b border-white/10 pb-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-1">
                      {key}
                    </p>
                    <p className="text-xl font-bold tracking-tight">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Button onClick={() => window.open("/contact")} className="h-16 px-10 rounded-full font-black uppercase tracking-widest text-xs flex-1">
                  Enquire for Details
               </Button>
               {/* <Button variant="outline" className="h-16 px-10 rounded-full font-black uppercase tracking-widest text-xs flex-1 gap-2">
                  <Download size={18} /> Download Datasheet
               </Button> */}
            </div>
          </div>
        </div>
      </div>
    </main> 
  );
};