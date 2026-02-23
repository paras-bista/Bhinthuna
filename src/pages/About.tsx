import { Check, Phone, UtensilsCrossed, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutBg from "@/assets/hero-bg.jpg";

const credibilityPoints = [
  { icon: Award, text: "Over 20 Years of Experience" },
  { icon: UtensilsCrossed, text: "Fresh, High-Quality Ingredients" },
  { icon: Heart, text: "Traditional Burmese Family Recipes" },
  { icon: Check, text: "Family-Owned & Operated" },
];

const chefs = [
  {
    id: 1,
    name: "Chef Maung Maung",
    role: "Head Chef & Co-Founder",
    experience: "25+ Years of Culinary Mastery",
    philosophy: "Every dish must tell the story of Burma—its people, its heritage, its soul.",
    bio: "Born in Yangon, Chef Maung has dedicated his life to preserving and sharing authentic Burmese cuisine. Trained under his grandmother's guidance, he brings generations of family recipes to every plate.",
  },
  {
    id: 2,
    name: "Chef Thin Thin Aye",
    role: "Head Pastry & Specialty Chef",
    experience: "18+ Years in Traditional Burmese Cuisine",
    philosophy: "Cooking is an act of love. When you taste my food, you taste my heart.",
    bio: "Specializing in traditional desserts and tea leaf salad, Chef Thin Thin combines time-honored techniques with the finest local ingredients to create unforgettable flavors.",
  },
  {
    id: 3,
    name: "Chef Kyaw Zin",
    role: "Executive Sous Chef",
    experience: "15+ Years Culinary Excellence",
    philosophy: "Balance is everything—flavor, texture, aroma. Perfection comes from harmony.",
    bio: "A master of curry preparations and spice blending, Chef Kyaw ensures every dish meets the highest standards of authenticity and taste.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Bhintuna House | Authentic Burmese Restaurant in Parramatta</title>
        <meta
          name="description"
          content="Discover Bhintuna House's story. Over 20 years of serving authentic Burmese cuisine in Parramatta. Family-owned, traditional recipes, and warm hospitality."
        />
        <meta
          name="keywords"
          content="Bhintuna House, Burmese Restaurant, Parramatta, Authentic Burmese Cuisine, Family Restaurant, Traditional Recipes"
        />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhintunahouse.com.au/about" />
        <meta property="og:title" content="About Us - Bhintuna House | Authentic Burmese Restaurant" />
        <meta
          property="og:description"
          content="Discover our story. Over 20 years of serving authentic Burmese cuisine in Parramatta. Family-owned, traditional recipes, and warm hospitality."
        />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bhintunahouse.com.au/about" />
        <meta property="twitter:title" content="About Us - Bhintuna House" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={aboutBg}
              alt="About Bhintuna House"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-dark/80" />
          </div>

          <div className="relative container text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-cream/60 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cream">About Us</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
              About Us
            </h1>
          </div>
        </section>

        {/* Restaurant Story Section - Clean White */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative">
                <div className="absolute top-8 left-8 w-full h-full border-4 border-primary/20 rounded-2xl -z-10" />
                <img
                  src={aboutBg}
                  alt="Bhintuna House Kitchen"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                  About Bhintuna
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-navy">
                  The Cleanest, Most Delicious{" "}
                  <span className="text-gold-gradient">Burmese Cuisine</span> Ever
                </h2>
                <p className="text-navy/70 text-base md:text-lg leading-relaxed mb-6">
                  Bhintuna House was born from a simple dream: to share the authentic flavors of Burma with the vibrant community of Parramatta. For over 20 years, our family has been serving dishes crafted from generations-old recipes, using only the freshest, highest-quality ingredients.
                </p>
                <p className="text-navy/70 text-base md:text-lg leading-relaxed mb-6">
                  Every curry, every salad, every bowl of mohinga is prepared with the same care and tradition as it would be in a Burmese home. We believe food is more than sustenance—it's a connection to heritage, a celebration of culture, and an expression of love.
                </p>
                <p className="text-navy/70 text-base md:text-lg leading-relaxed mb-8">
                  From intimate family dinners to grand celebrations, we welcome you with open arms and warm hospitality. Whether you're dining in, taking away, or hosting a catered event, Bhintuna House promises an unforgettable culinary journey.
                </p>

                {/* Credibility Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {credibilityPoints.map((point) => (
                    <div key={point.text} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-navy/80 text-base font-medium pt-2">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Service Options */}
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 rounded-lg border-2 border-primary/20">
                  <UtensilsCrossed className="w-5 h-5 text-primary" />
                  <p className="text-navy font-semibold text-base">
                    Dine-In | Takeaway | Catering Available
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    to="/menu"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-gold-dark hover:scale-105 transition-all shadow-md hover:shadow-lg"
                  >
                    View Menu
                  </Link>
                  <a
                    href="tel:+610286064818"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-navy text-navy font-semibold text-base hover:bg-navy hover:text-white transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Chefs Section - Warm Gradient */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-12 md:mb-16">
                <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                  Our Team
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy">
                  Meet Our Exclusive &{" "}
                  <span className="text-gold-gradient">Master Chefs</span>
                </h2>
                <p className="text-navy/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                  Behind every exceptional dish is a passionate chef dedicated to culinary excellence. Meet the masters who bring Burma to your table.
                </p>
              </div>

              {/* Chefs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {chefs.map((chef) => (
                  <div
                    key={chef.id}
                    className="bg-white border-2 border-primary/20 rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 hover:border-primary transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                      <img
                        src={aboutBg}
                        alt={chef.name}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg inline-block shadow-lg">
                          <p className="font-semibold text-sm">{chef.experience}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold mb-1 text-navy">{chef.name}</h3>
                      <p className="text-primary text-sm font-semibold mb-4">{chef.role}</p>
                      <p className="text-navy/70 text-sm leading-relaxed mb-4">
                        {chef.bio}
                      </p>
                      <div className="pt-4 border-t-2 border-primary/10">
                        <p className="text-xs text-navy/60 italic">
                          "{chef.philosophy}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Warm Vibrant */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Ready to Experience{" "}
                <span className="text-white">Authentic Burma?</span>
              </h2>
              <p className="text-white/95 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-medium drop-shadow">
                Join our family at Bhintuna House for an unforgettable dining experience. Book your table, place an order for takeaway, or inquire about catering for your next event.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+610286064818"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-navy-dark text-white font-semibold text-base hover:bg-navy hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
                >
                  Call & Order Now
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-orange-600 transition-all shadow-lg"
                >
                  Get In Touch
                </Link>
                <Link
                  to="/catering"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/20 backdrop-blur text-white font-semibold text-base hover:bg-white/30 transition-all border-2 border-white/30 hover:border-white/50"
                >
                  Explore Catering
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

export default About;
