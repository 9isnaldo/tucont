
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
    <section className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted relative overflow-hidden flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tucont-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-tucont-orange/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary backdrop-blur-xl border border-primary/30 text-primary px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Plataforma + IA + Jornada Empreendedora</span>
          </div>

          {/* Headlines */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-foreground">
                A{" "}
              </span>
              <span className="text-tucont-orange">
                tucont{" "}
              </span>
              <span className="text-foreground">
                é a primeira contabilidade{" "}
              </span>
              <span className="text-tucont-orange">
                integrativa{" "}
              </span>
              <span className="text-foreground">
                do Brasil!
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Seu sonho precisa de um CNPJ? A gente resolve.
              </p>
              <p className="text-lg md:text-xl font-semibold text-foreground max-w-4xl mx-auto">
                24h sua empresa está pronta. Já estou faturando.
              </p>
            </div>
          </div>

          {/* User Type Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
              Quero minha empresa agora
            </Button>
            <Button 
              variant="cta" 
              size="lg"
              className="bg-tucont-orange hover:bg-tucont-orange/90 text-white"
            >
              Fale Conosco no WhatsApp
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Abertura de CNPJ em 48h</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Atendimento 24/7 WhatsApp</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Economia até 40% impostos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>100% Digital</span>
            </div>
          </div>

          {/* AI Input Interface */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <div className="flex gap-3 bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-2xl">
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
                  variant="cta"
                  size="lg"
                  className="px-6 py-3 rounded-xl font-semibold"
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
              <div className="bg-secondary backdrop-blur-xl border border-primary/30 rounded-2xl p-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-2">IA Tucont</h4>
                    {isTyping ? (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                        </div>
                        Analisando sua demanda...
                      </div>
                    ) : (
                      <p className="text-foreground leading-relaxed">{aiResponse}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          </div>

          {/* Right Side - WhatsApp Conversation */}
          <div className="hidden lg:block">
            <div className="bg-card rounded-3xl p-6 shadow-2xl border border-border max-w-md mx-auto">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 bg-tucont-cta-green rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">T</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Assistente TuCont</h4>
                  <p className="text-sm text-tucont-cta-green">agora online</p>
                </div>
              </div>

              {/* Conversation */}
              <div className="space-y-4">
                <div className="bg-muted rounded-2xl rounded-tl-sm p-3">
                  <p className="text-sm text-foreground">
                    Olá Geraldo 👋! Seja bem-vindo(a) à <strong>Tucont sua contabilidade integrativa!</strong>
                  </p>
                </div>

                <div className="bg-muted rounded-2xl rounded-tl-sm p-3">
                  <p className="text-sm text-foreground mb-2">Como vamos te ajudar hoje?</p>
                  <p className="text-xs text-muted-foreground italic mb-3">Digite uma opção</p>
                  <div className="space-y-2 text-sm">
                    <p>1. Abra minha empresa e ganhe um <strong>PLANO DE NEGÓCIO 🧡</strong></p>
                    <p>2. Transferir minha empresa para a Tucont Integrativa</p>
                    <p>3. Conhecer a jornada integrativa da Tucont</p>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 ml-8">
                  <p className="text-sm">1</p>
                </div>

                <div className="bg-muted rounded-2xl rounded-tl-sm p-3">
                  <p className="text-sm text-foreground">Ótima escolha! Você vai nos ajudar a alcançar nosso Grande Sonho!</p>
                  <p className="text-sm text-foreground mt-2">
                    Contribuir para que o Brasil chegue a <strong>50 milhões de CNPJs</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-tucont-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
