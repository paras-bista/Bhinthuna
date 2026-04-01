import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className={className} fill="currentColor">
    <path d="M9.592 2.683a2.64 2.64 0 0 0 1.853 1.4v1.84a4.48 4.48 0 0 1-1.87-.43v3.767a3.77 3.77 0 1 1-3.77-3.77c.141 0 .279.008.415.023v1.855a1.93 1.93 0 1 0 1.515 1.892V0h1.857v2.683z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-neutral-100 border-t border-blue-900 py-10 md:py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          <div>
            <img
              src={logo}
              alt="Bhintuna House Logo"
              className="h-14 w-auto object-contain drop-shadow-[0_0_12px_rgba(212,160,23,0.35)]"
            />
            <p className="text-neutral-300 text-sm leading-relaxed max-w-sm mt-4">
              Bhintuna House is a family-run Nepali restaurant in Parramatta serving warm hospitality,
              traditional recipes, and memorable dining experiences.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-neutral-100 mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2.5">
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
            <div className="flex flex-col gap-3.5">
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

        <div className="mt-10 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Bhintuna House - Nepali Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-3 mr-16 sm:mr-20 md:mr-16 lg:mr-12">
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
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
