import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import MenuPreview from "@/components/MenuPreview";
import CateringTeaser from "@/components/CateringTeaser";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MenuPreview />
        <CateringTeaser />
        <FinalCTA />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
