import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ISOSection } from "@/components/ISOSection";
import { SolarSection } from "@/components/SolarSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const initialSupportServices = [
  {
    title: "Installation",
    description: "On-site commissioning, integration, and system handover for all solutions.",
    anchor: "installation",
  },
  {
    title: "Maintenance",
    description: "Preventive and corrective maintenance with rapid response support.",
    anchor: "maintenance",
  },
  {
    title: "Technical Support",
    description: "24/7 assistance for system troubleshooting and optimization.",
    anchor: "technical-support",
  },
];

const initialTechnicalItems = [
  {
    title: "Engineering & Design",
    description: "Custom system engineering, load studies, and integration planning.",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous inspection and testing aligned with international standards.",
  },
  {
    title: "Project Delivery",
    description: "Experienced teams delivering projects on time and to specification.",
  },
];

const Index = () => {
  const [supportServices, setSupportServices] = useState(initialSupportServices);
  const [technicalItems, setTechnicalItems] = useState(initialTechnicalItems);

  useEffect(() => {
    const loadSupportServices = async () => {
      try {
        // const response = await fetch("/api/support-services");
        // if (!response.ok) return;
        // const data = await response.json();
        // if (Array.isArray(data) && data.length > 0) {
        //   setSupportServices(data);
        // }
      } catch {
        return;
      }
    };

    const loadTechnicalItems = async () => {
      try {
        // const response = await fetch("/api/technical");
        // if (!response.ok) return;
        // const data = await response.json();
        // if (Array.isArray(data) && data.length > 0) {
        //   setTechnicalItems(data);
        // }
      } catch {
        return;
      }
    };

    loadSupportServices();
    loadTechnicalItems();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ExperienceSection />
        <ProductsSection />
        <section id="support-services" className="py-20 bg-muted">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="section-title">Support & Service</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete lifecycle support with expert installation, maintenance, and technical assistance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {supportServices.map((service) => (
                <div
                  key={service.title}
                  id={service.anchor}
                  className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="technical" className="py-20 bg-background">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="section-title">Technical</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trusted technical expertise backed by engineering rigor and quality delivery.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {technicalItems.map((item) => (
                <div key={item.title} className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ISOSection />
        <SolarSection />
        {/* <NewsSection /> */}
        <PartnersSection />
      </main>
      {/* <Footer /> */}
      <FloatingButtons />
    </div>
  );
};

export default Index;
