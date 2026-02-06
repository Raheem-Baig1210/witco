import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
  },
  { timestamps: true },
);

const newsSchema = new mongoose.Schema(
  {
    title: String,
    date: String,
    image: String,
  },
  { timestamps: true },
);

const partnerSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
  },
  { timestamps: true },
);

const heroSlideSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
  },
  { timestamps: true },
);

const supportServiceSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    anchor: String,
  },
  { timestamps: true },
);

const technicalSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true },
);

const contactMessageSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);
const News = mongoose.model("News", newsSchema);
const Partner = mongoose.model("Partner", partnerSchema);
const HeroSlide = mongoose.model("HeroSlide", heroSlideSchema);
const SupportService = mongoose.model("SupportService", supportServiceSchema);
const TechnicalItem = mongoose.model("TechnicalItem", technicalSchema);
const ContactMessage = mongoose.model("ContactMessage", contactMessageSchema);

const seedIfEmpty = async (model, data) => {
  const count = await model.countDocuments();
  if (count === 0) {
    await model.insertMany(data);
  }
};

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/hero-slides", async (_req, res) => {
  const slides = await HeroSlide.find().lean();
  res.json(slides);
});

app.get("/api/products", async (_req, res) => {
  const products = await Product.find().lean();
  res.json(products);
});

app.get("/api/news", async (_req, res) => {
  const news = await News.find().lean();
  res.json(news);
});

app.get("/api/partners", async (_req, res) => {
  const partners = await Partner.find().lean();
  res.json(partners);
});

app.get("/api/support-services", async (_req, res) => {
  const services = await SupportService.find().lean();
  res.json(services);
});

app.get("/api/technical", async (_req, res) => {
  const items = await TechnicalItem.find().lean();
  res.json(items);
});

app.post("/api/contact", async (req, res) => {
  const message = await ContactMessage.create({
    name: req.body?.name,
    email: req.body?.email,
    phone: req.body?.phone,
    message: req.body?.message,
  });
  res.status(201).json(message);
});

const start = async () => {
  const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/witco";
  await mongoose.connect(mongoUri);

  await seedIfEmpty(HeroSlide, [
    {
      title: "Solar Equipment",
      description:
        "Photovoltaic System (Solar Panel/Battery Bank) We have successfully designed, assemble, supplied, installed and commissioned at various Pipeline.",
      image: "/images/slider-1.png",
    },
    {
      title: "AC/DC Systems",
      description:
        "Our Manufacturer AEG PS has designed, manufactured, tested, installed and serviced AC and DC emergency power solutions.",
      image: "/images/slider-1.png",
    },
    {
      title: "Batteries",
      description:
        "Industrial-grade power protection solutions like UPS systems, Inverters and DC systems with stand-by lead acid.",
      image: "/images/slider-1.png",
    },
  ]);

  await seedIfEmpty(Product, [
    {
      title: "Batteries",
      description: "Industrial-grade power protection solutions like UPS systems, Inverters...",
      image: "/images/batteries.png",
    },
    {
      title: "Battery Racks",
      description: "Weak or defective individual cells usually do not occur...",
      image: "/images/battery-racks.png",
    },
    {
      title: "Manufacturing of Fiber Glass Enclosures (FGRP)",
      description: "Our engineering design team...",
      image: "/images/fiber-glass.png",
    },
    {
      title: "Accessories",
      description: "Well trained and certified engineers onboard to perform testing...",
      image: "/images/accessories.png",
    },
    {
      title: "Solar Power System",
      description: "Photovoltaic System (Solar Panel/Battery Bank) We...",
      image: "/images/solar-power.png",
    },
    {
      title: "Chargers/ Rectifiers",
      description: "Our Manufacturer AEG PS has designed, manufactured...",
      image: "/images/chargers.png",
    },
    {
      title: "Un-interrupted Power Supply (UPS)",
      description: "AEG PS offers a huge range of power...",
      image: "/images/ups.png",
    },
    {
      title: "Invertors",
      description: "Protect 8 INV is an extremely robust, both electrically and mechanically...",
      image: "/images/invertor.png",
    },
  ]);

  await seedIfEmpty(News, [
    {
      title: "Comparison Lead & Nickel Cadmium Batteries Gassing Slides - Ref",
      date: "17 Mar 2023",
      image: "/images/blog.png",
    },
    {
      title: "Comparison Lead & Nickel Cadmium Batteries Gassing Slides - Ref",
      date: "17 Mar 2023",
      image: "/images/blog.png",
    },
    {
      title: "Comparison Lead & Nickel Cadmium Batteries Gassing Slides - Ref",
      date: "17 Mar 2023",
      image: "/images/blog.png",
    },
  ]);

  await seedIfEmpty(Partner, [
    { name: "Partner 1", image: "/images/partner-1.png" },
    { name: "Partner 2", image: "/images/partner-2.png" },
    { name: "Partner 3", image: "/images/partner-3.png" },
    { name: "Partner 4", image: "/images/partner-4.png" },
    { name: "Partner 5", image: "/images/partner-5.png" },
    { name: "Partner 6", image: "/images/partner-6.png" },
  ]);

  await seedIfEmpty(SupportService, [
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
  ]);

  await seedIfEmpty(TechnicalItem, [
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
  ]);

  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
  });
};

start().catch((error) => {
  console.error("Failed to start backend", error);
  process.exit(1);
});
