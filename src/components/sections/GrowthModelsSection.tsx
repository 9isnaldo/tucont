import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, X, Send } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const GrowthModelsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showDiscoveryForm, setShowDiscoveryForm] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const businessSteps = [
    {
      id: 0,
      title: "Criar e Validar",
      image: "/lovable-uploads/41fcb3b9-a11b-4ca7-aac8-3e452f41999b.png",
      text: "Transforme sua ideia em realidade. Validamos seu modelo de negócio, definimos a estrutura legal ideal e orientamos os primeiros passos para criar uma base sólida.",
      cta: "Começar minha jornada"
    },
    {
      id: 1,
      title: "Regularizar",
      image: "/lovable-uploads/186878a1-99b4-4f84-877a-85bf6fb1e737.png",
      text: "CNPJ em 24h com orientação completa. Cuidamos de toda burocracia legal, escolhemos o melhor enquadramento tributário e deixamos sua empresa 100% regularizada.",
      cta: "Regularizar agora"
    },
    {
      id: 2,
      title: "Vender e Emitir Notas",
      image: "/lovable-uploads/f32255a9-8411-4496-88d0-12256b5cadb3.png",
      text: "Plataforma completa para vendas e emissão automática de notas fiscais. Simplifique sua operação e foque no que realmente importa: crescer.",
      cta: "Automatizar vendas"
    },
    {
      id: 3,
      title: "Cuidar do Fisco",
      image: "/lovable-uploads/3cff2625-e342-4add-b38e-c92bcc0db520.png",
      text: "Compliance fiscal automatizado com IA. Nossa tecnologia cuida de todas as obrigações fiscais, relatórios e deadlines para você dormir tranquilo.",
      cta: "Automatizar fisco"
    },
    {
      id: 4,
      title: "Tracionar e Evoluir",
      image: "/lovable-uploads/05c65c48-85aa-4a2b-ad4b-75e4beea5a17.png",
      text: "Plataforma de Jornada Empreendedora, Frameworks Validados para crescimento sustentável e Mentoria estratégica. Destravamos seu potencial empreendedor com orientação especializada.",
      cta: "Acelerar crescimento"
    }
  ];

  const discoveryOptions = [
    "Tenho uma ideia mas não sei por onde começar",
    "Preciso de um CNPJ para faturar",
    "Já tenho um CNPJ mas preciso automatizar a emissão de notas fiscais",
    "Preciso cumprir minhas obrigações fiscais",
    "Preciso dominar temas empresariais e evoluir meu negócio"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('growth-models-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        const scrolledIntoSection = Math.abs(rect.top);
        const totalScrollableHeight = sectionHeight - viewportHeight;
        const scrollProgress = Math.min(scrolledIntoSection / totalScrollableHeight, 1);
        
        const stepProgress = scrollProgress * (businessSteps.length - 1);
        const newActiveStep = Math.round(stepProgress);
        
        if (newActiveStep !== activeStep && newActiveStep >= 0 && newActiveStep < businessSteps.length) {
          setActiveStep(newActiveStep);
        }
      }
    };

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [activeStep, businessSteps.length]);

  const handleStepClick = (step: any) => {
    const message = `Olá! Quero ajuda com: ${step.title} - ${step.text}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    }
  };

  const handleDiscoverySubmit = () => {
    const selectedText = selectedOptions.join(", ");
    const fullMessage = `Opções selecionadas: ${selectedText}. Informações adicionais: ${additionalInfo}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(fullMessage)}`, '_blank');
    setShowDiscoveryForm(false);
  };

  return (
    <div className="relative">
      {/* Main scrollable section */}
      <section id="growth-models-section" className="relative bg-tucont-secondary-gray" style={{ height: `${businessSteps.length * 100}vh` }}>
        {/* Sticky container */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tucont-royal/5 via-background/50 to-tucont-orange/5"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
                <span className="text-tucont-text-primary">
                  Em qual momento seu negócio está?
                </span>
              </h2>
              <p className="text-lg font-semibold text-tucont-royal md:text-xl text-tucont-text-secondary max-w-4xl mx-auto leading-relaxed">
                <span>Criar e Validar, Regularizar, Vender e Emitir Notas, Cuidar do Fisco, Tracionar e Evoluir</span>
              </p>
            </div>

            {/* Main content */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image side */}
              <div className="relative h-80 md:h-96 order-2 lg:order-1">
                {businessSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${
                      activeStep === index 
                        ? 'opacity-100 scale-100 transform translate-x-0' 
                        : index < activeStep 
                          ? 'opacity-0 scale-95 transform -translate-x-8'
                          : 'opacity-0 scale-95 transform translate-x-8'
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-2xl blur-2xl"></div>
                      <div className={`relative w-full h-full rounded-2xl shadow-2xl overflow-hidden ${
                        step.id === 4 ? 'backdrop-blur-md bg-white/10 border border-white/20' : ''
                      }`}>
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="relative w-full h-full object-cover rounded-2xl"
                          style={{
                            boxShadow: '0 0 40px rgba(59, 130, 246, 0.2), 0 0 80px rgba(249, 115, 22, 0.1)'
                          }}
                          loading="lazy"
                        />
                        {step.id === 4 && (
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Text side */}
              <div className="space-y-8 relative order-1 lg:order-2">
                {businessSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`transition-all duration-1000 ease-out ${
                      activeStep === index 
                        ? 'opacity-100 transform translate-x-0' 
                        : 'opacity-0 transform translate-x-8 absolute inset-0'
                    }`}
                  >
                    <h3 className="text-3xl lg:text-4xl font-bold text-tucont-text-primary mb-4 lg:mb-6">
                      {step.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-tucont-text-secondary leading-relaxed mb-6 lg:mb-8">
                      {step.text}
                    </p>
                    <Button 
                      onClick={() => handleStepClick(step)}
                      variant="cta-green"
                      size="lg"
                      className="font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      {step.cta}
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center mt-12 lg:mt-16 space-x-3">
              {businessSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-gradient-to-r from-blue-500 to-orange-500 scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500 cursor-pointer'
                  }`}
                  onClick={() => setActiveStep(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ir para etapa ${index + 1}: ${businessSteps[index].title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStep(index);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - appears naturally after scroll */}
      <div className="relative bg-background/95 backdrop-blur-xl border-t border-border py-12 lg:py-16">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <h3 className="text-xl lg:text-2xl font-bold text-tucont-text-primary mb-4">
            Não sabe em qual momento está?
          </h3>
          <p className="text-tucont-text-secondary mb-6 text-sm lg:text-base">
            Calma, nós te ajudamos. Conte-nos um pouco, que nossa equipe humana e de IA, recomendará.
          </p>
          <Button 
            onClick={() => setShowDiscoveryForm(true)}
            variant="royal"
            size="lg"
            className="px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
            Descobrir meu momento ideal
          </Button>
        </div>
      </div>

      {/* Discovery Form - integrated directly in the page */}
      {showDiscoveryForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                Descobrir meu momento
              </h3>
              <Button
                onClick={() => setShowDiscoveryForm(false)}
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-slate-200 text-sm font-medium">
                Marque as opções que se aplicam ao seu momento atual:
              </p>
              
              {discoveryOptions.map((option, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                  <Checkbox
                    id={`option-${index}`}
                    checked={selectedOptions.includes(option)}
                    onCheckedChange={(checked) => 
                      handleOptionChange(option, checked as boolean)
                    }
                    className="mt-1 border-2 border-orange-400 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                  />
                  <Label 
                    htmlFor={`option-${index}`}
                    className="text-white text-sm leading-relaxed cursor-pointer flex-1"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6">
              <Label htmlFor="additional-info" className="text-white text-sm font-medium">
                Conte-nos mais sobre seu momento
              </Label>
              <Textarea
                id="additional-info"
                placeholder="Descreva sua situação atual, desafios ou objetivos..."
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className="bg-slate-800/70 border-slate-500 text-white placeholder:text-slate-400 resize-none focus:border-orange-400 focus:ring-orange-400"
                rows={4}
              />
            </div>

            <Button
              onClick={handleDiscoverySubmit}
              className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 hover:from-blue-700 hover:via-blue-800 hover:to-orange-700 text-white rounded-full py-3 font-semibold shadow-lg"
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar para nossa equipe
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrowthModelsSection;