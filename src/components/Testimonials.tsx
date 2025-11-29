import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with Peter Chibuikem (Buikem) transformed our social presence completely. Our engagement has turned positive in just three months since his job!",
    author: "Nikhil Samdarshi",
    role: "Managing Director, Fiction Creatives",
    image: "/images/Screenshot 2025-11-29 082527.png",
  },
  {
    quote:
      "The strategic insight brought to the table was invaluable. Finally, we have a social media strategy that actually converts.",
    author: "OurPropertyNG",
    role: "RealEstate Software",
    image: "/images/Screenshot 2025-11-29 082737.png",
  },
  {
    quote:
      "Professional, creative, and data-driven. The best investment we've made for our prestigous college this year.",
    author: "Fr. Paul C.",
    role: "Manager, RMHSA",
    image: "/images/BeautyPlus_Fr copy.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#fafaf9]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900">
            Client Stories
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative"
            >
              <div className="absolute -top-4 left-8 bg-black text-white p-2 rounded-lg">
                <Quote size={20} />
              </div>

              <p className="text-stone-600 italic mb-8 mt-4 leading-relaxed">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    {item.author}
                  </h4>
                  <p className="text-xs text-stone-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
