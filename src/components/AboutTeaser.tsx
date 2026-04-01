import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import aboutImage from "@/assets/hero-bg.jpg";

const highlights = [
  "Over 20 Years of Culinary Excellence",
  "Fresh, High-Quality Ingredients Daily",
  "Traditional Nepali Family Recipes",
  "Family-Owned & Operated",
  "Dine-In | Takeaway | Catering Available"
];

const AboutTeaser = () => {
  return (
    <AnimateOnScroll>
      <section className="py-16 md:py-24 bg-white" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-stretch">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1 h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[360px] md:min-h-[460px]">
              <motion.img
                src={aboutImage}
                alt="Bhintuna House Restaurant"
                className="w-full h-full object-cover"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 h-full flex flex-col justify-center">
            <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              About Bhintuna House
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-navy">
              A Legacy of{" "}
              <span className="text-gold-gradient">Authentic Nepali</span>{" "}
              Cuisine
            </h2>
            <motion.span
              className="block h-0.5 w-28 bg-primary mb-6"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <p className="text-navy/80 text-base md:text-lg leading-relaxed mb-6">
              For over two decades, Bhintuna House has been bringing the rich, aromatic flavors of Nepal to Parramatta. Our family-owned restaurant is built on generations of traditional recipes, carefully preserved and lovingly prepared.
            </p>
            <p className="text-navy/80 text-base md:text-lg leading-relaxed mb-8">
              Every dish tells a story, from our signature momo and comforting dal bhat to vibrant achar and house curries crafted with time-honored techniques. We believe in warmth, authenticity, and creating memorable dining experiences.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-navy/80 text-base font-medium">{item}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-gold-dark transition-all shadow-md hover:shadow-lg"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+610286064818"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-navy text-navy font-semibold text-base hover:bg-navy hover:text-white transition-all"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
    </AnimateOnScroll>
  );
};

export default AboutTeaser;
