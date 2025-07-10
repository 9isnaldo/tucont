
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Bot } from "lucide-react";

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

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-tucont-dark-blue/20 to-background relative overflow-hidden flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tucont-light-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tucont-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-tucont-light-blue/5 to-tucont-orange/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-xl border border-tucont-light-blue/30 text-tucont-light-blue px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Plataforma + IA + Jornada Empreendedora</span>
          </div>

          {/* Headlines */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-tucont-light-blue to-tucont-light-blue bg-clip-text text-transparent">
                A{" "}
              </span>
              <span className="text-tucont-orange">
                tucont{" "}
              </span>
              <span className="bg-gradient-to-r from-foreground via-tucont-light-blue to-tucont-light-blue bg-clip-text text-transparent">
                é a primeira contabilidade{" "}
              </span>
              <span className="text-tucont-orange">
                integrativa{" "}
              </span>
              <span className="bg-gradient-to-r from-foreground via-tucont-light-blue to-tucont-light-blue bg-clip-text text-transparent">
                do Brasil!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Destrave Seu Empreendedorismo Hoje!<br />
              CNPJ e Notas Fiscais em 24 horas.
            </p>
          </div>

          {/* User Type Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              className="border-tucont-orange text-tucont-orange bg-transparent backdrop-blur-sm hover:bg-tucont-orange/10 hover:border-tucont-orange hover:text-tucont-orange transition-all duration-300"
            >
              Abrir Empresa
            </Button>
            <Button 
              variant="outline" 
              className="border-tucont-orange text-tucont-orange bg-transparent backdrop-blur-sm hover:bg-tucont-orange/10 hover:border-tucont-orange hover:text-tucont-orange transition-all duration-300"
            >
              Migrar para Tucont
            </Button>
          </div>

          {/* AI Input Interface */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <div className="flex gap-3 bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-2xl">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Vamos destravar, escreva o que você precisa..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
                    className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-lg focus:outline-none"
                  />
                </div>
                <Button 
                  onClick={handleInputSubmit}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-tucont-light-blue to-tucont-orange hover:from-tucont-light-blue/80 hover:to-tucont-orange/80 px-6 py-3 rounded-xl font-semibold"
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

            <p className="text-muted-foreground text-sm">
              Resposta em minutos • Sem formulários • Sem enrolação
            </p>

            {/* AI Response */}
            {(isTyping || aiResponse) && (
              <div className="bg-gradient-to-r from-tucont-light-blue/10 to-card/30 backdrop-blur-xl border border-tucont-light-blue/30 rounded-2xl p-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-tucont-light-blue to-tucont-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-tucont-light-blue mb-2">IA Tucont</h4>
                    {isTyping ? (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-tucont-light-blue rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-tucont-light-blue rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-tucont-light-blue rounded-full animate-bounce delay-200"></div>
                        </div>
                        Analisando sua demanda...
                      </div>
                    ) : (
                      <p className="text-foreground/90 leading-relaxed">{aiResponse}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-tucont-light-blue to-tucont-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
