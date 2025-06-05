import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight, Bot, User, Calculator } from "lucide-react";

const HeroSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  const handleInputSubmit = async () => {
    if (!inputValue.trim()) return;
    
    setIsTyping(true);
    setAiResponse("");
    
    // Simular resposta da IA
    setTimeout(() => {
      const responses = [
        "Entendi! Vou conectar você com nossa equipe para regularizar sua empresa e criar um plano de crescimento personalizado.",
        "Perfeito! Nossa IA identificou 3 oportunidades de economia fiscal. Vou enviar um especialista via WhatsApp.",
        "Excelente! Seu caso requer nossa Avenida de Negócios. Vou preparar um diagnóstico completo para você."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setAiResponse(randomResponse);
      setIsTyping(false);
    }, 2000);
  };

  const openWhatsApp = () => {
    const message = inputValue 
      ? `Olá! Acabei de usar a IA no site e preciso de ajuda com: ${inputValue}`
      : "Olá! Vim do site e quero conhecer a Tucont 🚀";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-900 relative overflow-hidden flex items-center">
      {/* ... keep existing code (background effects) */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-blue-400/30 text-blue-300 px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">IA + Mentoria Estratégica</span>
          </div>

          {/* Headlines */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
                Contabilidade era para o governo.
              </span>
              <br />
              <span className="text-orange-400">
                Agora é para o seu negócio.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-blue-400">Tucont</span> une IA + mentoria para 
              resolver e impulsionar sua empresa.
            </p>

            {/* Pergunta de público-alvo */}
            <div className="space-y-4">
              <p className="text-lg text-slate-300 font-medium">
                Você é empreendedor ou contador?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => scrollToSection('services-section')}
                  variant="outline"
                  className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10 px-6 py-3 rounded-xl"
                >
                  <User className="w-5 h-5 mr-2" />
                  Sou empreendedor
                </Button>
                
                <Button 
                  onClick={() => scrollToSection('agentes-section')}
                  variant="outline"
                  className="border-orange-400/50 text-orange-300 hover:bg-orange-400/10 px-6 py-3 rounded-xl"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Sou contador
                </Button>
              </div>
            </div>
          </div>

          {/* ... keep existing code (AI Input Interface) */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="relative">
              <div className="flex gap-3 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-2xl">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Descreva o que você precisa..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
                    className="w-full bg-transparent text-white placeholder:text-slate-400 text-lg focus:outline-none"
                  />
                </div>
                <Button 
                  onClick={handleInputSubmit}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 px-6 py-3 rounded-xl font-semibold"
                >
                  {isTyping ? (
                    <div className="flex items-center gap-2">
                      <Bot className="w-5 h-5 animate-pulse" />
                      Pensando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Resolver
                    </div>
                  )}
                </Button>
              </div>
            </div>

            {/* AI Response */}
            {(isTyping || aiResponse) && (
              <div className="bg-gradient-to-r from-blue-900/30 to-slate-800/30 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-300 mb-2">IA Tucont</h4>
                    {isTyping ? (
                      <div className="flex items-center gap-2 text-slate-400">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                        Analisando sua demanda...
                      </div>
                    ) : (
                      <p className="text-slate-200 leading-relaxed">{aiResponse}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ... keep existing code (CTA Principal) */}
          <div className="space-y-4">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Começar agora pelo WhatsApp
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <p className="text-slate-400 text-sm">
              Resposta em minutos • Sem formulários • Sem enrolação
            </p>
          </div>

        </div>
      </div>

      {/* ... keep existing code (Scroll Indicator) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
