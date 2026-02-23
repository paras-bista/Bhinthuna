import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import contactBg from "@/assets/hero-bg.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+61 02 8606 4818",
    link: "tel:+610286064818",
    action: "Click to Call"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "+61 412 345 678",
    link: "https://wa.me/61412345678",
    action: "Chat with Us"
  },
  {
    icon: Mail,
    title: "Email",
    value: "admin@bhintunahouse.com.au",
    link: "mailto:admin@bhintunahouse.com.au",
    action: "Send Email"
  },
  {
    icon: MapPin,
    title: "Our Shop",
    value: "14/55 Phillip St, Parramatta NSW 2150",
    link: "https://maps.google.com/?q=14/55+Phillip+St+Parramatta+NSW+2150",
    action: "Get Directions"
  },
];

const openingHours = [
  { day: "Monday - Friday", hours: "11:00 AM - 9:00 PM" },
  { day: "Saturday", hours: "11:00 AM - 10:00 PM" },
  { day: "Sunday", hours: "11:00 AM - 9:00 PM" },
  { day: "Public Holidays", hours: "Call for Hours" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Bhintuna House | Burmese Restaurant Parramatta</title>
        <meta
          name="description"
          content="Contact Bhintuna House in Parramatta. Call us for reservations, catering inquiries, or visit us at 14/55 Phillip St. We're here to serve you authentic Burmese cuisine."
        />
        <meta
          name="keywords"
          content="Contact Bhintuna House, Burmese Restaurant Parramatta, Restaurant Reservations, Catering Inquiry, 14/55 Phillip St Parramatta"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={contactBg}
              alt="Contact Bhintuna House"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-dark/80" />
          </div>

          <div className="relative container text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-cream/60 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cream">Contact Us</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
              Contact Us
            </h1>
            <p className="text-cream/80 text-base md:text-lg max-w-2xl mx-auto">
              We'd love to hear from you! Whether you're planning a reservation, catering event, or just want to say hello—we're here.
            </p>
          </div>
        </section>

        {/* Contact Cards Section - White/Clean */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">Contact Methods</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-navy">
                  Get In Touch
                </h2>
                <p className="text-navy/70 text-base md:text-lg max-w-2xl mx-auto">
                  Choose your preferred way to contact us. We're available via phone, email, WhatsApp, or visit us in person.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 text-center hover:shadow-xl hover:border-primary hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-navy text-lg mb-2">{item.title}</h3>
                    <p className="text-navy/70 text-sm mb-3 break-words">{item.value}</p>
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider group-hover:text-gold-dark transition-colors">
                      {item.action} →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Opening Hours Section - Warm Accent */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">Visit Us</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-3">Opening Hours</h2>
                <p className="text-navy/70">We're open 7 days a week to serve you</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary/20">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="space-y-4">
                  {openingHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-3 border-b border-navy/10 last:border-0">
                      <span className="text-navy font-semibold text-base">{schedule.day}</span>
                      <span className="text-primary font-bold text-base">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Contact Form Section - Split Design */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-sky-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Google Map */}
              <div>
                <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">Location</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-navy">Visit Us</h3>
                <p className="text-navy/70 mb-6">
                  Find us in the heart of Parramatta. Easy access via public transport and ample parking nearby.
                </p>
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden border-4 border-primary/20 shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.0825826688!2d151.00160431521106!3d-33.81361098067099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a31e1b5f8f2f%3A0x5017d681632bcc0!2s55%20Phillip%20St%2C%20Parramatta%20NSW%202150!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bhintuna House Location"
                  ></iframe>
                </div>
                <a
                  href="https://maps.google.com/?q=14/55+Phillip+St+Parramatta+NSW+2150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary/20">
                <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">Message Us</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-navy">Send an Inquiry</h3>
                <p className="text-navy/70 mb-6">
                  Have a question or special request? Fill out the form and we'll respond within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-navy"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-navy"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-navy"
                      placeholder="+61 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-navy"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Table Reservation</option>
                      <option value="catering">Catering Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-navy resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-gold-dark transition-all shadow-md hover:shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action CTAs - Warm Vibrant */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-white font-bold text-sm tracking-[0.25em] uppercase mb-3 drop-shadow">Take Action</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
                Ready to Experience{" "}
                <span className="text-white">Authentic Burma?</span>
              </h2>
              <p className="text-white/95 text-base md:text-lg mb-10 max-w-2xl mx-auto font-medium drop-shadow">
                Join us for an unforgettable dining experience or let us cater your next event.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+610286064818"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-navy-dark text-white font-semibold text-base hover:bg-navy hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
                >
                  <Phone className="w-5 h-5" />
                  Call Now to Reserve
                </a>
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-orange-600 transition-all shadow-lg"
                >
                  View Our Menu
                </Link>
                <Link
                  to="/catering"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-white/20 backdrop-blur text-white font-semibold text-base hover:bg-white/30 transition-all border-2 border-white/30 hover:border-white/50"
                >
                  Catering Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
