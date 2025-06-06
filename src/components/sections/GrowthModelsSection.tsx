
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const GrowthModelsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const businessSteps = [
    {
      id: 0,
      title: "Criar e Validar",
      image: "/lovable-uploads/06946f78-e9ff-48f7-b9a5-26f5f246320c.png",
      text: "Transforme sua ideia em realidade. Validamos seu modelo de negócio, definimos a estrutura legal ideal e orientamos os primeiros passos para criar uma base sólida.",
      cta: "Começar minha jornada"
    },
    {
      id: 1,
      title: "Regularizar",
      image: "/lovable-uploads/08c8fd63-07d5-4e07-8f26-6eb8bd4508d4.png",
      text: "CNPJ em 24h com orientação completa. Cuidamos de toda burocracia legal, escolhemos o melhor enquadramento tributário e deixamos sua empresa 100% regularizada.",
      cta: "Regularizar agora"
    },
    {
      id: 2,
      title: "Vender e Emitir Notas",
      image: "/lovable-uploads/1b9f99f8-e6ea-4f81-a968-77762e3ad6d0.png",
      text: "Plataforma completa para vendas e emissão automática de notas fiscais. Simplifique sua operação e foque no que realmente importa: crescer.",
      cta: "Automatizar vendas"
    },
    {
      id: 3,
      title: "Cuidar do Fisco",
      image: "/lovable-uploads/46365f26-9adb-4a59-9910-83ed2a27e4d3.png",
      text: "Compliance fiscal automatizado com IA. Nossa tecnologia cuida de todas as obrigações fiscais, relatórios e deadlines para você dormir tranquilo.",
      cta: "Automatizar fisco"
    },
    {
      id: 4,
      title: "Tracionar e Evoluir",
      image: "/lovable-uploads/4c92d87f-6732-4486-a6bc-79b4f3e47c57.png",
      text: "Mentoria estratégica e frameworks validados para crescimento sustentável. Destravamos seu potencial empreendedor com orientação especializada.",
      cta: "Acelerar crescimento"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('growth-models-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      const sectionTop = rect.top;

      // Se a seção está visível
      if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
        // Calcular qual step deve estar ativo baseado na posição do scroll
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)));
        const stepIndex = Math.floor(scrollProgress * businessSteps.length);
        const clampedStepIndex = Math.max(0, Math.min(businessSteps.length - 1, stepIndex));
        
        if (clampedStepIndex !== activeStep) {
          setActiveStep(clampedStepIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep, businessSteps.length]);

  const handleStepClick = (step: any) => {
    const message = `Olá! Quero ajuda com: ${step.title} - ${step.text}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="growth-models-section" className="min-h-[500vh] bg-slate-950 relative">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950/50 to-orange-950/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
                Em qual momento seu negócio está?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Para <span className="font-semibold text-blue-400">Criar e Validar</span>, 
              <span className="font-semibold text-orange-400"> Regularizar</span>, 
              <span className="font-semibold text-blue-400"> Vender e Emitir Notas</span>, 
              <span className="font-semibold text-orange-400"> Cuidar do Fisco</span>, 
              <span className="font-semibold text-blue-400"> Tracionar e Evoluir</span>.
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative h-96">
              {businessSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    activeStep === index 
                      ? 'opacity-100 scale-100 transform translate-x-0' 
                      : 'opacity-0 scale-95 transform translate-x-8'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-gradient-to-r from-blue-500/30 to-orange-500/30"
                      style={{
                        boxShadow: '0 0 50px rgba(59, 130, 246, 0.3), 0 0 100px rgba(249, 115, 22, 0.2)'
                      }}
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                      {step.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Text side */}
            <div className="space-y-8">
              {businessSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`transition-all duration-1000 ease-in-out ${
                    activeStep === index 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-8 absolute'
                  }`}
                >
                  <h3 className="text-4xl font-bold text-white mb-6">
                    {step.title}
                  </h3>
                  <p className="text-xl text-slate-300 leading-relaxed mb-8">
                    {step.text}
                  </p>
                  <Button 
                    onClick={() => handleStepClick(step)}
                    className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    {step.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-16 space-x-4">
            {businessSteps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-blue-500 to-orange-500 scale-125' 
                    : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 bg-slate-950/90 backdrop-blur-xl py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-white mb-4">
            Não sabe em qual momento está?
          </h3>
          <p className="text-slate-300 mb-6">
            Nossa IA analisa seu perfil e recomenda o momento ideal para seu negócio atual.
          </p>
          <Button 
            onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero descobrir em qual momento meu negócio está")}`, '_blank')}
            className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 hover:from-blue-700 hover:via-blue-800 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2" />
            Descobrir meu momento ideal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GrowthModelsSection;
