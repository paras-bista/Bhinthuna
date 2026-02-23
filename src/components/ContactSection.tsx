import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

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
    icon: MapPin,
    title: "Visit Us",
    value: "14/55 Phillip St, Parramatta NSW 2150",
    link: "https://maps.google.com/?q=14/55+Phillip+St+Parramatta+NSW+2150",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "Mon-Sun: 11:00 AM - 9:00 PM",
    link: "/contact",
  },
];

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black" id="contact">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Contact Us
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions or want to make a reservation? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-zinc-900 border-2 border-zinc-800 rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm break-words">{item.value}</p>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-gold-dark transition-all shadow-md hover:shadow-lg"
            >
              View Full Contact Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
