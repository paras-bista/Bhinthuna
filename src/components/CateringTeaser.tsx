import { Phone, ChefHat, Users, Utensils, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const highlights = [
  {
    icon: ChefHat,
    text: "Authentic Nepali buffets & customized menus",
  },
  {
    icon: Users,
    text: "Perfect for weddings, parties & corporate events",
  },
  {
    icon: Utensils,
    text: "Fresh preparation, on-time delivery & setup",
  },
];

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CateringTeaser = () => {
  return (
    <AnimateOnScroll>
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-cream" id="catering">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Catering Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy">
              Celebrate with Authentic Flavours
            </h2>
            <motion.span
              className="block h-0.5 w-28 bg-primary mx-auto mb-6"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <p className="text-navy/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Bring the warmth of Nepali hospitality to your next event. Whether it's
              an intimate gathering or a grand celebration, we create memorable dining
              experiences tailored to your needs.
            </p>
          </div>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {highlights.map((item) => (
              <motion.div
                key={item.text}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-navy/10 shadow-sm hover:shadow-md transition-shadow"
                variants={cardVariants}
              >
                <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/catering"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Our Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+610286064818"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg border-2 border-navy bg-white text-navy font-semibold text-base hover:bg-navy hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call for Inquiry
            </a>
          </div>
        </div>
      </div>
      </section>
    </AnimateOnScroll>
  );
};

export default CateringTeaser;
