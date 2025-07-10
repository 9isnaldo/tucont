
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ForWhomSection from "@/components/sections/ForWhomSection";
import TwoAvenuesSection from "@/components/sections/TwoAvenuesSection";
import GrowthModelsSection from "@/components/sections/GrowthModelsSection";
import WhyChooseTucontSection from "@/components/sections/WhyChooseTucontSection";
import JourneySection from "@/components/sections/JourneySection";
import AgentesSection from "@/components/sections/AgentesSection";
import InteractiveAISection from "@/components/sections/InteractiveAISection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import OneStopSection from "@/components/sections/OneStopSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div id="hero">
        <HeroSection />
      </div>
      <ForWhomSection />
      <TwoAvenuesSection />
      <div id="solucoes">
        <GrowthModelsSection />
      </div>
      <WhyChooseTucontSection />
      <InteractiveAISection />
      <OneStopSection />
      <TestimonialsSection />
      
      <div id="contato">
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
