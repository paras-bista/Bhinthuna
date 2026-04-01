import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import CateringTeaser from "@/components/CateringTeaser";
import AboutTeaser from "@/components/AboutTeaser";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const homeFAQs = [
  {
    question: "Do you take table bookings?",
    answer:
      "Yes, we welcome bookings for lunch and dinner. For weekends and group dining, we recommend reserving ahead to secure your preferred time.",
  },
  {
    question: "Do you have vegetarian and vegan options?",
    answer:
      "Absolutely. Our menu includes a range of vegetarian and vegan dishes, prepared with the same authentic Burmese flavors and fresh ingredients.",
  },
  {
    question: "Can you cater for food allergies?",
    answer:
      "Yes. Please let our team know about any allergies when you order, and we will guide you to suitable menu choices and preparation options.",
  },
  {
    question: "Do you offer takeaway and delivery?",
    answer:
      "We offer takeaway daily, and delivery is available in selected surrounding areas. You can call us directly for current delivery coverage.",
  },
  {
    question: "Is parking available near the restaurant?",
    answer:
      "Yes, there is convenient parking around the Parramatta area, including nearby street and public parking options within walking distance.",
  },
  {
    question: "Do you provide catering for private events?",
    answer:
      "Yes, we cater for corporate functions, birthdays, and celebrations. Visit our catering page or contact us to plan a package that fits your event.",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Bhintuna House | Authentic Burmese Cuisine in Parramatta, Sydney</title>
        <meta
          name="description"
          content="Experience authentic Burmese cuisine at Bhintuna House in Parramatta. Family-owned restaurant serving traditional curries, tea leaf salad, and mohinga. Dine-in, takeaway & catering available. Book now: 02 8606 4818"
        />
        <meta
          name="keywords"
          content="Burmese restaurant Parramatta, Myanmar food Sydney, authentic Burmese cuisine, tea leaf salad, mohinga, Burmese curry, Parramatta restaurants, Asian restaurant Parramatta"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content="https://bhinthuna.pages.dev/" />
        <meta property="og:title" content="Bhintuna House | Authentic Burmese Cuisine in Parramatta" />
        <meta
          property="og:description"
          content="Experience authentic Burmese cuisine in Parramatta. Traditional family recipes, fresh ingredients, warm hospitality. Dine-in, takeaway & catering."
        />
        <meta property="og:image" content="https://bhinthuna.pages.dev/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bhinthuna.pages.dev/" />
        <meta property="twitter:title" content="Bhintuna House | Authentic Burmese Cuisine" />
        <meta
          property="twitter:description"
          content="Experience authentic Burmese cuisine in Parramatta. Traditional family recipes, fresh ingredients, warm hospitality."
        />
        <meta property="twitter:image" content="https://bhinthuna.pages.dev/og-image.jpg" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Bhintuna House",
            "description": "Authentic Burmese restaurant in Parramatta serving traditional family recipes",
            "image": "https://bhintunahouse.com.au/og-image.jpg",
            "servesCuisine": "Burmese",
            "priceRange": "$$",
            "telephone": "+61-02-8606-4818",
            "email": "admin@bhintunahouse.com.au",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "14/55 Phillip St",
              "addressLocality": "Parramatta",
              "addressRegion": "NSW",
              "postalCode": "2150",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -33.8156,
              "longitude": 151.0043
            },
            "url": "https://bhintunahouse.com.au",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "11:00",
                "closes": "21:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "11:00",
                "closes": "22:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "11:00",
                "closes": "21:00"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <div className="bg-gradient-to-b from-navy via-cream/80 to-cream">
            <MenuPreview />
          </div>
          <CateringTeaser />
          <AboutTeaser />
          <ContactSection />
          <Testimonials limit={6} />
          <FinalCTA />
          <div id="faq" className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
            <FAQSection
              faqs={homeFAQs}
              subtitle="Everything you may want to know before visiting Bhintuna House"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
