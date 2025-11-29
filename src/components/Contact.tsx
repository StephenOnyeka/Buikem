import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">
              Get in Touch
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              Let's Create Something Amazing
            </h3>
            <p className="text-stone-600 mb-12 max-w-md leading-relaxed">
              Ready to take your social media presence to the next level? Fill
              out the form or reach out directly. I'm currently accepting new
              clients for Q4.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-50 rounded-lg">
                  <Mail size={20} className="text-stone-800" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Email</h4>
                  <a
                    href="mailto:hello@buikem.com"
                    className="text-stone-600 hover:text-black transition-colors"
                  >
                    ejeanobichibuikem@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-50 rounded-lg">
                  <Phone size={20} className="text-stone-800" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-stone-600 hover:text-black transition-colors"
                  >
                    +234 811 901 9029
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-50 rounded-lg">
                  <MapPin size={20} className="text-stone-800" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Location</h4>
                  <p className="text-stone-600">
                    Nigeria (Available Remote)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#fafaf9] p-8 md:p-10 rounded-3xl"
          >
            <form
              action="https://formsubmit.co/ejeanobichibuikem@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Formsubmit.co Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Form Submission"
              />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-stone-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-black focus:ring-0 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-stone-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-black focus:ring-0 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-stone-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-black focus:ring-0 outline-none transition-all appearance-none"
                >
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Speaking Opportunity">
                    Speaking Opportunity
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-stone-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-black focus:ring-0 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
