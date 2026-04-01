import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/", type: "route" },
  { label: "Menu", href: "/menu", type: "route" },
  { label: "Catering", href: "/catering", type: "route" },
  { label: "About", href: "/about", type: "route" },
  { label: "Contact", href: "/contact", type: "route" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navListVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/60 shadow-header" : "bg-transparent"
      }`}
    >
      <div
        className={`container flex items-center pl-6 pr-4 md:pr-6 transition-all duration-300 ${
          scrolled ? "min-h-[4.5rem] md:min-h-20" : "min-h-[5.5rem] md:min-h-24"
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
        <Link to="/" onClick={handleNavClick} className="logo-container flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Bhintuna House Logo"
            className={`logo-image w-auto transition-all duration-300 ease-in-out ${
              scrolled
                ? "h-14 md:h-14"
                : "h-20 md:h-24 logo-image-screen"
            }`}
          />
        </Link>
          </motion.div>

        {/* Desktop Nav */}
          <motion.nav
            className="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-10 min-w-0 px-6"
            variants={navListVariants}
            initial="hidden"
            animate="visible"
          >
          {navItems.map((item) => (
            item.type === "route" ? (
                <motion.li key={item.label} variants={navItemVariants} transition={{ duration: 0.45, ease: "easeOut" }} className="list-none">
              <NavLink
                to={item.href}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 tracking-wide uppercase whitespace-nowrap pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:transition-transform after:duration-300 ${
                    isActive
                      ? "text-primary after:bg-primary after:scale-x-100"
                      : "text-foreground/80 after:bg-primary/70 after:scale-x-0 hover:text-primary hover:after:scale-x-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
              </motion.li>
            ) : (
              <motion.li key={item.label} variants={navItemVariants} transition={{ duration: 0.45, ease: "easeOut" }} className="list-none">
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase whitespace-nowrap"
              >
                {item.label}
              </a>
              </motion.li>
            )
          ))}
        </motion.nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center ml-auto">
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
        <div
          className={`md:hidden border-t border-primary/20 animate-fade-in bg-navy-dark/95 backdrop-blur-md ${
            scrolled ? "h-[calc(100vh-4.5rem)]" : "h-[calc(100vh-5.5rem)]"
          } overflow-y-auto`}
        >
          <nav className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              item.type === "route" ? (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-all duration-300 py-2 border-l-2 pl-3 ${
                      isActive
                        ? "text-primary border-primary bg-primary/10"
                        : "text-cream/90 border-transparent hover:text-primary hover:border-primary/50 hover:pl-4"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-cream/90 hover:text-primary transition-colors py-2"
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
