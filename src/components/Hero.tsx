import { useMemo } from "react";
import { Phone, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const MotionLink = motion(Link);

const Hero = () => {
  const headlinePrefix = "Authentic Nepali Flavours";
  const headlineSuffix = "Parramatta";
  const prefixWords = headlinePrefix.split(" ");
  const suffixWords = headlineSuffix.split(" ");

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 3,
        delay: Math.random() * 1.2,
      })),
    [],
  );

  return (
    <motion.section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <img
          src={heroBg}
          alt="Authentic Nepali cuisine served at Bhintuna House"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-warm-overlay" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </motion.div>

      {/* Floating golden particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container pt-20 pb-10 md:pt-24 md:pb-14 lg:pt-28 lg:pb-16">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.p
            className="text-primary font-medium text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase mb-3 md:mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Nepali Restaurant · Parramatta
          </motion.p>

          {/* Headline */}
          <h1 className="font-heading text-[2.55rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-7xl font-bold leading-[1.06] mb-4 md:mb-5 text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]">
            {prefixWords.map((word, index) => (
              <motion.span
                key={`prefix-${word}-${index}`}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.45 }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="inline-block mr-3 text-primary italic"
              initial={{ opacity: 0, y: 24 }}
              animate={{
                opacity: 1,
                y: 0,
                textShadow: [
                  "0 0 0px #D4A017",
                  "0 0 20px #D4A017",
                  "0 0 0px #D4A017",
                ],
              }}
              transition={{
                opacity: { delay: prefixWords.length * 0.1 + 0.4, duration: 0.45 },
                y: { delay: prefixWords.length * 0.1 + 0.4, duration: 0.45 },
                textShadow: {
                  delay: prefixWords.length * 0.1 + 0.95,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
            >
              in the Heart of
            </motion.span>
            {suffixWords.map((word, index) => (
              <motion.span
                key={`suffix-${word}-${index}`}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (prefixWords.length + index + 1) * 0.1 + 0.4, duration: 0.45 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-foreground/90 text-base md:text-lg leading-relaxed max-w-lg mb-7 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Experience traditional hospitality, handcrafted dishes, and catering
            for your special occasions.
          </motion.p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <motion.a
              href="tel:+610286064818"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:bg-gold-dark transition-all duration-300 hover:scale-[1.02] shadow-warm hover:shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #D4A017aa" }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
            <MotionLink
              to="/menu"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border-2 border-foreground/30 text-foreground font-semibold text-base hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-[1.02] shadow-warm hover:shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212,160,23,0.1)" }}
              whileTap={{ scale: 0.97 }}
            >
              <UtensilsCrossed className="w-5 h-5" />
              View Menu
            </MotionLink>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
