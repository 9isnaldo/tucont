
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TwoAvenuesSection from "@/components/sections/TwoAvenuesSection";
import BusinessAvenueSection from "@/components/sections/BusinessAvenueSection";
import LegalAvenueSection from "@/components/sections/LegalAvenueSection";
import GrowthModelsSection from "@/components/sections/GrowthModelsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ReadyToStartSection from "@/components/sections/ReadyToStartSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-orange-500/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <HeroSection />
      <TwoAvenuesSection />
      <BusinessAvenueSection />
      <LegalAvenueSection />
      <GrowthModelsSection />
      <HowItWorksSection />
      <ReadyToStartSection />

      <Footer />
    </div>
  );
};

export default Index;
