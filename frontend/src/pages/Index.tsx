import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PropertiesSection />
    <CTASection />
    <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
