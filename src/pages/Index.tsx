import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TwoAvenuesSection from "@/components/sections/TwoAvenuesSection";
import JourneySection from "@/components/sections/JourneySection";
import ServicesSection from "@/components/sections/ServicesSection";
import AccountantsSection from "@/components/sections/AccountantsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import OneStopSection from "@/components/sections/OneStopSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import GrowthModelsSection from "@/components/sections/GrowthModelsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <HeroSection />
      <TwoAvenuesSection />
      <GrowthModelsSection />
      <JourneySection />
      <ServicesSection />
      <AccountantsSection />
      <TestimonialsSection />
      <OneStopSection />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
