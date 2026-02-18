import { Phone, ChefHat, Users, Utensils } from "lucide-react";

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

const CateringTeaser = () => {
  return (
    <section className="py-16 md:py-24 bg-card" id="catering">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-12">
            <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
              Catering Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Celebrate with Authentic Flavours
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Bring the warmth of Nepali hospitality to your next event. Whether it's
              an intimate gathering or a grand celebration, we create memorable dining
              experiences tailored to your needs.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-12">
            {highlights.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center text-center p-5 rounded-lg bg-background/50 border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:admin@bhintunahouse.com.au?subject=Catering Enquiry"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:bg-gold-dark transition-colors shadow-warm"
            >
              Enquire Now
            </a>
            <a
              href="tel:+610286064818"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringTeaser;
