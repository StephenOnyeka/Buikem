import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Content Creation", "Strategy", "Campaigns"];

const projects = [
  {
    id: 1,
    title: "Lumina Skincare",
    category: "Content Creation",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop",
    description:
      "Product photography and reel creation for a luxury skincare brand launch.",
    companyUrl: "#",
    logo: "https://ui-avatars.com/api/?name=Lumina+Skincare&background=fff&color=000",
  },
  {
    id: 2,
    title: "Urban Coffee Co.",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
    description: "Rebranding strategy and community growth campaign.",
    companyUrl: "#",
    logo: "https://ui-avatars.com/api/?name=Urban+Coffee&background=fff&color=000",
  },
  {
    id: 3,
    title: "TechStart Summit",
    category: "Campaigns",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    description: "Event coverage and live social media management.",
    companyUrl: "#",
    logo: "https://ui-avatars.com/api/?name=TechStart&background=fff&color=000",
  },
  {
    id: 4,
    title: "Rosa Mystica",
    category: "Content Creation",
    image: "public/images/Screenshot 2025-11-29 091658.png",
    description: "Interior design showcase series for Instagram and Pinterest.",
    companyUrl: "#",
    logo: "https://ui-avatars.com/api/?name=Rosa+Mystica&background=fff&color=000",
  },
  {
    id: 5,
    title: "FitLife App",
    category: "Campaigns",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    description: "Influencer marketing campaign management.",
    companyUrl: "#",
    logo: "https://ui-avatars.com/api/?name=FitLife&background=fff&color=000",
  },
  {
    id: 6,
    title: "Green Earth NGO",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5763?q=80&w=2069&auto=format&fit=crop",
    description: "Awareness campaign and donation drive strategy.",
    companyUrl: "#",
    logo: "https://ui-avatars.com/api/?name=Green+Earth&background=fff&color=000",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#fafaf9]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">
              Selected Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900">
              Featured Projects
            </h3>
          </div>

          <div className="flex gap-2 mt-8 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-stone-300 text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h4>
                  <p className="text-stone-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {project.description}
                  </p>
                  {/* <button className="mt-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 hover:bg-stone-200">
                    <ExternalLink size={18} />
                  </button> */}
                  <a
                    href={project.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="mt-4 w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 hover:scale-110 hover:bg-stone-100"
                    className="mt-4 w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 hover:bg-stone-200"
                    title={`Visit ${project.title}`}
                  >
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
