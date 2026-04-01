import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const FinalCTA = () => {
  return (
    <AnimateOnScroll>
      <section className="py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-slate-900 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent pointer-events-none" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Strong Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Ready to Experience{" "}
            <span className="block text-gold-gradient mt-2">
              Authentic Nepali Cuisine?
            </span>
          </h2>
          <motion.span
            className="block h-0.5 w-28 bg-primary mx-auto mb-6"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />

          {/* Supporting Text */}
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-xl mx-auto">
            Call us today to make a reservation, discuss catering options, or simply
            learn more about our menu and story.
          </p>

          {/* Large Primary CTA */}
          <a
            href="tel:+610286064818"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 md:px-12 md:py-5 rounded-md bg-primary text-primary-foreground font-bold text-lg md:text-xl hover:bg-gold-dark transition-all shadow-warm hover:shadow-xl hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            Call Now: 02 8606 4818
          </a>

          {/* Hours / Additional Info */}
          <p className="text-white/70 text-sm mt-8">
            Open 7 days a week · Dine-in, Takeaway & Catering Available
          </p>
        </div>
      </div>
      </section>
    </AnimateOnScroll>
  );
};

export default FinalCTA;
