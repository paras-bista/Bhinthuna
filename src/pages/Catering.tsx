import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConversionModule from "@/components/ConversionModule";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Utensils, CheckCircle2 } from "lucide-react";

// Catering Package Data
interface CateringPackage {
  id: string;
  name: string;
  image: string;
  minPax: number;
  maxPax?: number;
  description: string;
  features: string[];
  pricePerPerson: string;
  featured?: boolean;
}

const cateringPackages: CateringPackage[] = [
  {
    id: "basic-package",
    name: "Basic Package",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop&q=80",
    minPax: 20,
    maxPax: 50,
    description: "Perfect for small gatherings and intimate celebrations",
    features: [
      "Choice of 3 main dishes",
      "2 side dishes",
      "Rice & Naan bread",
      "Basic beverages",
      "Disposable plates & cutlery",
    ],
    pricePerPerson: "$25",
  },
  {
    id: "standard-package",
    name: "Standard Package",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&q=80",
    minPax: 30,
    maxPax: 100,
    description: "Ideal for medium-sized events and corporate functions",
    features: [
      "Choice of 5 main dishes",
      "3 side dishes",
      "Rice, Naan & Roti",
      "Assorted beverages",
      "Dessert platter",
      "Quality plates & cutlery",
      "Setup & cleanup service",
    ],
    pricePerPerson: "$35",
    featured: true,
  },
  {
    id: "premium-package",
    name: "Premium Package",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80",
    minPax: 50,
    maxPax: 200,
    description: "Luxury catering for weddings and large celebrations",
    features: [
      "Choice of 8+ main dishes",
      "5+ side dishes",
      "Complete bread selection",
      "Premium beverages & mocktails",
      "Multiple dessert options",
      "Live cooking stations",
      "Professional service staff",
      "Premium dinnerware",
      "Full setup & cleanup",
    ],
    pricePerPerson: "$55",
    featured: true,
  },
  {
    id: "custom-package",
    name: "Custom Package",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=600&fit=crop&q=80",
    minPax: 10,
    description: "Tailored to your specific needs and preferences",
    features: [
      "Fully customizable menu",
      "Dietary accommodations",
      "Theme-based presentations",
      "Flexible serving options",
    ],
    pricePerPerson: "Contact us",
  },
  {
    id: "corporate-package",
    name: "Corporate Package",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=600&fit=crop&q=80",
    minPax: 15,
    maxPax: 75,
    description: "Professional catering for business meetings and events",
    features: [
      "Choice of 4 main dishes",
      "2 side dishes & salads",
      "Rice & bread selection",
      "Coffee & tea service",
      "Professional presentation",
    ],
    pricePerPerson: "$30",
  },
  {
    id: "wedding-package",
    name: "Wedding Special",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop&q=80",
    minPax: 100,
    maxPax: 300,
    description: "Make your special day unforgettable with our wedding catering",
    features: [
      "10+ premium dishes",
      "Live cooking stations",
      "Dedicated event coordinator",
      "Elegant dinnerware",
      "Full wedding service",
    ],
    pricePerPerson: "$65",
    featured: true,
  },
];

// FAQ Data
const cateringFAQs = [
  {
    question: "How far in advance should I book catering?",
    answer:
      "We recommend booking at least 2-3 weeks in advance for standard orders. For large events (100+ guests) or during peak seasons, please book 4-6 weeks ahead to ensure availability.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Our minimum order is 10 people for custom packages and 20 people for our standard packages. This ensures we can deliver the quality and freshness our customers expect.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Yes! We cater to various dietary requirements including vegetarian, vegan, gluten-free, and halal options. Please inform us of any allergies or restrictions when placing your order.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver throughout Sydney and surrounding suburbs. Delivery fees may apply based on distance. Contact us for specific location availability and delivery charges.",
  },
  {
    question: "Can I customize the menu?",
    answer:
      "Absolutely! We encourage customization to make your event special. You can mix and match dishes from different packages or create a completely custom menu. Our team will work with you to design the perfect menu.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 7+ days before the event receive a full refund. Cancellations 3-7 days prior receive a 50% refund. Unfortunately, we cannot provide refunds for cancellations within 48 hours of the event.",
  },
  {
    question: "Do you provide serving staff?",
    answer:
      "Yes, our Standard and Premium packages include professional serving staff. Basic packages can add service staff for an additional fee. All staff are trained and experienced.",
  },
  {
    question: "What equipment do you provide?",
    answer:
      "We provide all necessary serving equipment, chafing dishes, and cutlery based on your package selection. Premium packages include high-quality dinnerware and decorative setups.",
  },
];

const Catering = () => {
  return (
    <>
      <Helmet>
        <title>Catering Services | Bhintuna House - Burmese Food Catering Parramatta</title>
        <meta
          name="description"
          content="Professional Burmese food catering in Sydney. Perfect for weddings, corporate events, and parties. Custom packages from 10-300+ guests. Call 02 8606 4818 for quotes."
        />
        <meta
          name="keywords"
          content="Burmese catering Sydney, Myanmar food catering, wedding catering Parramatta, corporate catering, event catering, party food catering"
        />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhintunahouse.com.au/catering" />
        <meta property="og:title" content="Catering Services | Bhintuna House - Burmese Food Catering" />
        <meta
          property="og:description"
          content="Professional Burmese food catering for weddings, corporate events, and parties. Custom packages available."
        />
        <meta property="og:image" content="https://bhintunahouse.com.au/og-image.jpg" />
        <link rel="canonical" href="https://bhintunahouse.com.au/catering" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bhintunahouse.com.au/catering" />
        <meta property="twitter:title" content="Catering Services | Bhintuna House" />
        <meta property="twitter:image" content="https://bhintunahouse.com.au/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&h=1080&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                CATERING SERVICES
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Catering for Every Occasion
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
                From intimate gatherings to grand celebrations, we deliver exceptional cuisine
                and service that makes your event unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Events Catered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Packages */}
        <section className="py-16 md:py-20 bg-cream/30">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                FLEXIBLE OPTIONS
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Catering Packages
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our carefully curated packages or create a custom menu tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cateringPackages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`overflow-hidden group hover:shadow-xl transition-all duration-300 ${
                    pkg.featured ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                    {pkg.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        POPULAR
                      </Badge>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <Users className="w-4 h-4" />
                        <span>
                          Minimum {pkg.minPax} pax
                          {pkg.maxPax ? ` - ${pkg.maxPax} pax` : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>

                    {/* Price */}
                    <div className="bg-primary/10 rounded-lg p-4 mb-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">Starting from</div>
                      <div className="text-2xl md:text-3xl font-bold text-primary">
                        {pkg.pricePerPerson}
                        {pkg.pricePerPerson !== "Contact us" && (
                          <span className="text-sm font-normal text-muted-foreground">/person</span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {pkg.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button asChild className="w-full" size="lg">
                      <a href="#inquiry-form">Request Quote</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Catering */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-navy">
                Why Choose Our Catering?
              </h2>
              <p className="text-navy/70 max-w-2xl mx-auto">
                We go above and beyond to make your event exceptional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Authentic Flavors</h3>
                <p className="text-navy/70 text-sm">
                  Traditional recipes prepared with premium ingredients and expert techniques
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Professional Service</h3>
                <p className="text-navy/70 text-sm">
                  Experienced staff ensuring seamless service from setup to cleanup
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Timely Delivery</h3>
                <p className="text-navy/70 text-sm">
                  Punctual service with hot, fresh food delivered at the perfect time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Module */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" id="inquiry-form">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-navy">
                Ready to Book Your Event?
              </h2>
              <p className="text-navy/70">
                Get in touch with us to discuss your catering needs and receive a custom quote
              </p>
            </div>
            <ConversionModule />
          </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50">
          <FAQSection faqs={cateringFAQs} />
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Catering;
