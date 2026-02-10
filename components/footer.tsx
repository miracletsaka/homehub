import Link from "next/link";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  quick: [
    { label: "Browse Catalogue", href: "#catalogue" },
    { label: "Custom Orders", href: "#custom" },
    { label: "About Us", href: "#about" },
    { label: "Delivery Info", href: "#" },
    { label: "FAQs", href: "#" },
  ],
  categories: [
    { label: "Sofas", href: "#" },
    { label: "Beds & Headboards", href: "#" },
    { label: "Dining Sets", href: "#" },
    { label: "Office Furniture", href: "#" },
    { label: "Home Accessories", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-amber-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <h3 className="text-xl font-bold tracking-wider">HOMEHUB</h3>
              <span className="text-xs tracking-widest text-amber-300">
                Malawi
              </span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Premium custom furniture and modern décor, built with pride in
              Blantyre.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded bg-white/10 hover:bg-amber-600 transition-colors flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded bg-white/10 hover:bg-amber-600 transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded bg-white/10 hover:bg-amber-600 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm opacity-80">
                <MapPin className="w-5 h-5 flex-shrink-0 text-amber-300" />
                <span>Blantyre, Malawi</span>
              </li>
              <li className="flex gap-3 text-sm opacity-80">
                <Phone className="w-5 h-5 flex-shrink-0 text-amber-300" />
                <span>+265 XXX XXX XXX</span>
              </li>
              <li className="flex gap-3 text-sm opacity-80">
                <Mail className="w-5 h-5 flex-shrink-0 text-amber-300" />
                <span>info@homehubmalawi.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>&copy; 2026 HomeHub Malawi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
