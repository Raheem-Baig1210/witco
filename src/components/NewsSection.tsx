import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

type NewsItem = {
  _id?: string;
  id?: number;
  title: string;
  date: string;
  image: string;
};

const initialNews: NewsItem[] = [
  {
    id: 1,
    title: "Comparison Lead & Nickel Cadmium Batteries Gassing Slides - Ref",
    date: "17 Mar 2023",
    image: "/images/blog.png",
  },
  {
    id: 2,
    title: "Comparison Lead & Nickel Cadmium Batteries Gassing Slides - Ref",
    date: "17 Mar 2023",
    image: "/images/blog.png",
  },
  {
    id: 3,
    title: "Comparison Lead & Nickel Cadmium Batteries Gassing Slides - Ref",
    date: "17 Mar 2023",
    image: "/images/blog.png",
  },
];

export const NewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>(initialNews);

  useEffect(() => {
    const loadNews = async () => {
      try {
        // const response = await fetch("/api/news");
        // if (!response.ok) return;
        // const data = await response.json();
        // if (Array.isArray(data) && data.length > 0) {
        //   setNews(data);
        // }
      } catch {
        return;
      }
    };
    loadNews();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-kicker mb-3 inline-flex">Insights</span>
          <h2 className="section-title mb-3">Latest News & Updates</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Industry highlights, product launches, and updates from the WITCO team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {news.map((item, index) => (
            <motion.article
              key={item._id ?? item.id ?? item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-primary text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{item.date}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <Button variant="secondary" size="sm" className="uppercase tracking-wider">
                  Read More
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};
