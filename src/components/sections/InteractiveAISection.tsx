
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const InteractiveAISection = () => {
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
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
            <Bot className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-200">
              IA Interativa
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Descreva sua demanda
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nossa IA entende sua necessidade e conecta você diretamente com o especialista certo.
          </p>
        </div>

        {/* Input Interface */}
        <div className="space-y-6">
          <div className="relative">
            <div className="flex gap-3 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-2xl">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Ex: Quero abrir uma empresa de tecnologia"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
                  className="w-full bg-transparent text-white placeholder:text-slate-400 text-lg focus:outline-none"
                />
              </div>
              <Button 
                onClick={handleInputSubmit}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-3 rounded-xl font-semibold"
              >
                {isTyping ? (
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 animate-pulse" />
                    Analisando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Analisar
                  </div>
                )}
              </Button>
            </div>
          </div>

          {/* AI Response */}
          {(isTyping || aiResponse) && (
            <div className="bg-gradient-to-r from-purple-900/30 to-slate-800/30 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-purple-300 mb-2">IA Tucont</h4>
                  {isTyping ? (
                    <div className="flex items-center gap-2 text-slate-400">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                      Processando sua demanda...
                    </div>
                  ) : (
                    <>
                      <p className="text-slate-200 leading-relaxed mb-4">{aiResponse}</p>
                      <Button 
                        onClick={openWhatsApp}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Fale com um especialista pelo WhatsApp
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* CTA when no response yet */}
          {!isTyping && !aiResponse && (
            <div className="text-center">
              <p className="text-slate-400 mb-4">
                Ou fale diretamente com nossa equipe:
              </p>
              <Button 
                onClick={openWhatsApp}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50 px-6 py-3 rounded-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Conversar no WhatsApp
              </Button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default InteractiveAISection;
