import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Ensures accuracy for 2025

  return (
    <footer className="bg-[#0B0F19] text-gray-400 pt-12 pb-6 border-t border-gray-800">
      <SectionWrapper>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images-platform.99static.com//9wMmKJaFmUE1o63VZO7fgqxhOk8=/1083x2387:1929x3234/fit-in/500x500/99designs-contests-attachments/113/113769/attachment_113769214"
                  alt="RideX Logo"
                  className="w-10 h-10 rounded-xl"
                />
                <span className="text-white font-bold text-2xl tracking-tight">
                  Ride<span className="text-[#E67E22]">X</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Leading the future of urban mobility with eco-friendly and
                affordable ride-sharing solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#E67E22] transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E67E22] transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E67E22] transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail size={16} /> support@ridex.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> +1 (555) 000-0000
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-[#E67E22] hover:text-white transition"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-[#E67E22] hover:text-white transition"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-[#E67E22] hover:text-white transition"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-xs tracking-wide">
            <p>© {currentYear} RideX . All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
