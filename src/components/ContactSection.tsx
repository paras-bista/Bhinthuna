import { Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+61 02 8606 4818",
    link: "tel:+610286064818",
  },
  {
    icon: Mail,
    title: "Email",
    value: "admin@bhintunahouse.com.au",
    link: "mailto:admin@bhintunahouse.com.au",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "Mon-Sun: 11:00 AM - 9:00 PM",
    link: "/contact",
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
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  return (
    <AnimateOnScroll>
      <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-navy">
              Contact Us
            </h2>
            <motion.span
              className="block h-0.5 w-28 bg-primary mx-auto mb-4"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <p className="text-navy/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions or want to make a reservation? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {contactInfo.map((item) => (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="h-full bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 group"
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/25 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-navy/80 text-sm break-words">{item.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Map Preview */}
          <div className="mb-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-4">
                <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-2">Location</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy">Find Us in Parramatta</h3>
              </div>
              <div className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=14%2F55%20Phillip%20St%2C%20Parramatta%20NSW%202150&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bhintuna House Location"
                ></iframe>
              </div>
              <div className="text-center mt-3">
                <a
                  href="https://maps.google.com/?q=14/55+Phillip+St+Parramatta+NSW+2150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to={{ pathname: "/contact", hash: "#inquiry-form" }}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-gold-dark transition-all shadow-md hover:shadow-lg"
            >
              View Full Contact Details
            </Link>
          </div>
        </div>
      </div>
      </section>
    </AnimateOnScroll>
  );
};

export default ContactSection;
