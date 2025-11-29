import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img
                src="public/images/PSX_20251129_055436.jpg"
                alt="Social Media Manager"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Decorative background */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-stone-100 rounded-2xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-stone-100 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              More than just a{" "}
              <span className="text-stone-400">Social Media Manager</span>
            </h3>

            <p className="text-stone-600 mb-6 leading-relaxed">
              With over 3+ years of experience in digital marketing, I specialize
              in helping brands find their unique voice in a crowded digital
              landscape. My approach combines creative storytelling with
              rigorous data analysis to ensure every post serves a purpose.
            </p>

            <p className="text-stone-600 mb-8 leading-relaxed">
              I believe that authentic connection is the currency of the future.
              Whether you're a startup looking to make your mark or an
              established brand seeking a refresh, I'm here to guide your social
              strategy with precision and passion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Strategic Planning",
                "Content Production",
                "Community Building",
                "Analytics & Insights",
                "Trend Analysis",
                "Crisis Management",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-stone-800" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-12 border-t border-stone-100 pt-8">
              <div>
                <p className="text-3xl font-bold text-stone-900">3+</p>
                <p className="text-sm text-stone-500">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-stone-900">18+</p>
                <p className="text-sm text-stone-500">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-stone-900">200+</p>
                <p className="text-sm text-stone-500">Content Created</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
