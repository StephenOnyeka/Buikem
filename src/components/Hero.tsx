import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, TrendingUp, Users, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fafaf9]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -z-10 skew-x-12 translate-x-20" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-stone-200/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-stone-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-wide uppercase text-stone-500">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-stone-900 mb-6">
              Elevating Brands through <span className="italic font-light text-stone-500">Social Storytelling</span>
            </h1>
            
            <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
              I help visionary brands build authentic communities and drive growth through strategic content and data-driven social media management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-stone-800 transition-all group"
              >
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 border border-stone-200 font-medium rounded-full hover:bg-stone-50 transition-all"
              >
                View Portfolio
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-stone-500">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} />
                <span className="text-sm font-medium">ROI Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span className="text-sm font-medium">Community Growth</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center h-[400px] md:h-[500px] mt-8 md:mt-0"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
              {/* Center Hub */}
              <div className="absolute z-20 w-16 h-16 md:w-24 md:h-24 bg-black rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                <TrendingUp className="text-white w-6 h-6 md:w-10 md:h-10" />
              </div>

              {/* Inner Orbit Ring */}
              <div className="absolute inset-0 border border-stone-200 rounded-full m-8 md:m-12" />
              
              {/* Inner Orbit Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 m-8 md:m-12"
              >
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg"
                >
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-pink-600" />
                </motion.div>
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-700" />
                </motion.div>
              </motion.div>

              {/* Outer Orbit Ring */}
              <div className="absolute inset-0 border border-stone-200 rounded-full" />

              {/* Outer Orbit Icons */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/4 -left-3 md:-left-4 bg-white p-2 md:p-3 rounded-full shadow-lg"
                >
                  <Facebook className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </motion.div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-1/4 -right-3 md:-right-4 bg-white p-2 md:p-3 rounded-full shadow-lg"
                >
                  <Twitter className="w-5 h-5 md:w-6 md:h-6 text-sky-500" />
                </motion.div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg"
                >
                  <Youtube className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                </motion.div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 md:top-10 bg-white p-3 md:p-4 rounded-xl shadow-xl border border-stone-100 z-30 scale-90 md:scale-100 origin-top-right"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Users size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500">Total Reach</p>
                    <p className="text-sm font-bold">2.4M+</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Background Blurs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-blue-100/50 rounded-full blur-3xl -z-10" />
              <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-pink-100/50 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
