import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/", type: "route" },
  { label: "Menu", href: "/menu", type: "route" },
  { label: "Catering", href: "/catering", type: "route" },
  { label: "About", href: "#about", type: "hash" },
  { label: "Contact", href: "#contact", type: "hash" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-header" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" onClick={handleNavClick} className="flex items-center gap-2">
          <img src={logo} alt="Bhintuna House" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.type === "route" ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleNavClick}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+610286064818"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-gold-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={handleNavClick}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              )
            ))}
            <a
              href="tel:+610286064818"
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-base"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
