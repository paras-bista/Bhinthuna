import { Phone, Mail, MapPin, Instagram, Facebook, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-neutral-100 border-t border-blue-900 py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          <div>
            <img src={logo} alt="Bhintuna House Logo" className="h-14 w-auto mb-4" />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Bhintuna House is a family-run Nepali restaurant in Parramatta serving
              warm hospitality, traditional recipes, and memorable dining experiences.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-neutral-100 mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/menu" className="text-neutral-400 text-sm hover:text-primary transition-colors">
                Menu
              </Link>
              <a href="/#faq" className="text-neutral-400 text-sm hover:text-primary transition-colors">
                FAQ
              </a>
              <Link to="/contact" className="text-neutral-400 text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-neutral-100 mb-4">Contact Info</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://maps.google.com/?q=14/55+Phillip+St+Parramatta+NSW+2150"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-neutral-400 text-sm hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                14/55 Phillip St, Parramatta NSW 2150
              </a>
              <a
                href="tel:+610286064818"
                className="flex items-start gap-3 text-neutral-400 text-sm hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                +61 02 8606 4818
              </a>
              <a
                href="mailto:admin@bhintunahouse.com.au"
                className="flex items-start gap-3 text-neutral-400 text-sm hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                admin@bhintunahouse.com.au
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Bhintuna House - Nepali Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/bhintunahouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-neutral-700 bg-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/people/Bhintuna-House-Nepali-Restaurant/61579875443199/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-neutral-700 bg-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@bhintuna.house"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-neutral-700 bg-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary transition-colors"
              aria-label="TikTok"
            >
              <Music2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
