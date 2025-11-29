import { Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1c1917] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a
              href="#"
              className="text-3xl font-bold tracking-tighter mb-6 block"
            >
              BUIKEM<span className="text-stone-500">.</span>
            </a>
            <p className="text-stone-400 max-w-sm leading-relaxed mb-8">
              Helping brands build authentic connections and drive growth
              through strategic social media management and creative
              storytelling.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-stone-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Strategy & Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Social Advertising
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-stone-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Buikem. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm font-medium"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
