import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  PenTool,
  BarChart3,
  MessageCircle,
  Globe,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: <Camera size={32} />,
    title: "Content Creation",
    description:
      "High-quality photography and videography tailored to your brand aesthetic and goals.",
  },
  {
    icon: <PenTool size={32} />,
    title: "Strategy & Planning",
    description:
      "Data-driven content calendars and growth strategies to maximize your reach.",
  },
  {
    icon: <MessageCircle size={32} />,
    title: "Community Management",
    description:
      "Engaging with your audience to build loyalty and authentic connections.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Analytics & Reporting",
    description:
      "Detailed monthly reports to track growth, engagement, and ROI.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Social Media Advertising",
    description:
      "Targeted ad campaigns on Instagram, Facebook, and TikTok to drive conversions.",
  },
  {
    icon: <Globe size={32} />,
    title: "Brand Identity",
    description:
      "Cohesive visual identity design across all your social media platforms.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">
            What I Do
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            Comprehensive Social Media Solutions
          </h3>
          <p className="text-stone-600">
            I offer a full suite of services designed to elevate your brand's
            online presence and drive tangible results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-stone-50 hover:bg-white border border-stone-100 hover:border-stone-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">
                {service.title}
              </h4>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
