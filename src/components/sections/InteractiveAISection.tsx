
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { CaptureFormModal } from "@/components/ui/capture-form-modal";

const InteractiveAISection = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputSubmit = async () => {
    if (!inputValue.trim()) return;
    
    setIsTyping(true);
    setAiResponse("");
    
    // Simular resposta da IA
    setTimeout(() => {
      const responses = [
        "Entendi sua demanda! Nossa equipe especializada vai te ajudar a estruturar uma solução completa. Vou conectar você agora mesmo.",
        "Perfeito! Identifiquei que você precisa de nossa Avenida de Negócios. Vou preparar um plano personalizado para você.",
        "Excelente pergunta! Sua situação requer uma análise detalhada. Nossa IA já preparou algumas recomendações iniciais."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setAiResponse(randomResponse);
      setIsTyping(false);
    }, 2500);
  };

  const openWhatsApp = () => {
    const message = inputValue 
      ? `Olá! Acabei de usar a IA no site da Tucont e minha demanda é: ${inputValue}`
      : "Olá! Quero falar com um especialista da Tucont";
    window.open(`https://wa.me/5531975740510?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-slate-900/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-tucont-royal/5 via-transparent to-tucont-orange/5"></div>
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-tucont-royal/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm border border-tucont-royal/40 rounded-full px-6 py-3 mb-8">
            <Bot className="w-5 h-5 text-tucont-royal" />
            <span className="text-sm font-semibold text-tucont-royal">
              IA Interativa
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">
              Escreve daí, que vamos resolvendo de cá
            </span>
          </h2>
          
          <p className="text-lg text-tucont-text-secondary max-w-5xl mx-auto leading-relaxed">
            Nossa IA entende sua necessidade e conecta você diretamente com a solução.
          </p>
        </div>

        {/* Input Interface - Estilo da imagem anexa */}
        <div className="space-y-6">
          <div className="relative">
            <div className="flex gap-3 bg-background/90 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-2xl max-w-2xl mx-auto">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Emitir NF, o que é MVP, abrir empresa..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-lg focus:outline-none"
                />
              </div>
              <Button 
                onClick={handleInputSubmit}
                disabled={!inputValue.trim() || isTyping}
                className="bg-tucont-cta-green hover:bg-tucont-cta-green/90 px-6 py-3 rounded-xl font-semibold text-white"
              >
                {isTyping ? (
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 animate-pulse" />
                    Analisando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Resolver
                  </div>
                )}
              </Button>
            </div>
            
            <p className="text-white text-sm font-semibold text-center mt-3">
              Sem formulários • Sem enrolação
            </p>
          </div>

          {/* AI Response */}
          {(isTyping || aiResponse) && (
            <div className="bg-secondary backdrop-blur-xl border border-primary/30 rounded-2xl p-6 max-w-2xl mx-auto">
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
                      Processando sua demanda...
                    </div>
                  ) : (
                    <>
                      <p className="text-foreground leading-relaxed mb-4">{aiResponse}</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          onClick={openWhatsApp}
                          className="bg-tucont-cta-green hover:bg-tucont-cta-green/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Conversar no WhatsApp
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button 
                          onClick={() => setIsModalOpen(true)}
                          className="bg-tucont-orange hover:bg-tucont-orange/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
                        >
                          Configurar minha empresa agora
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      <CaptureFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default InteractiveAISection;
