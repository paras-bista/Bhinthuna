import { Phone, UtensilsCrossed } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Traditional Nepali cuisine"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-warm-overlay" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative container pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p
            className="text-primary font-medium text-sm md:text-base tracking-[0.2em] uppercase mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Nepali Restaurant · Parramatta
          </p>

          {/* Headline */}
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            Authentic Nepali Flavours{" "}
            <span className="text-gold-gradient italic">in the Heart of</span>{" "}
            Parramatta
          </h1>

          {/* Subheadline */}
          <p
            className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-lg mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Experience traditional hospitality, handcrafted dishes, and catering
            for your special occasions.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="tel:+610286064818"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:bg-gold-dark transition-colors shadow-warm"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="#catering"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border-2 border-foreground/30 text-foreground font-semibold text-base hover:border-primary hover:text-primary transition-colors"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Explore Catering
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
