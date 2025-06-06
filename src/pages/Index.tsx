
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TwoAvenuesSection from "@/components/sections/TwoAvenuesSection";
import WhyChooseTucontSection from "@/components/sections/WhyChooseTucontSection";
import JourneySection from "@/components/sections/JourneySection";
import AgentesSection from "@/components/sections/AgentesSection";
import InteractiveAISection from "@/components/sections/InteractiveAISection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import OneStopSection from "@/components/sections/OneStopSection";
import PlansSection from "@/components/sections/PlansSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import GrowthModelsSection from "@/components/sections/GrowthModelsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <div id="hero">
        <HeroSection />
      </div>
      <TwoAvenuesSection />
      <WhyChooseTucontSection />
      <div id="solucoes">
        <GrowthModelsSection />
      </div>
      <JourneySection />
      <InteractiveAISection />
      <div id="planos">
        <PlansSection />
      </div>
      <div id="agentes">
        <AgentesSection />
      </div>
      <TestimonialsSection />
      <OneStopSection />
      
      <div id="contato">
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
