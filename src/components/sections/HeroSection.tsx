
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Bot, ArrowRight, User, Zap } from "lucide-react";
import { toast } from "sonner";

const HeroSection = () => {
  const [userInput, setUserInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  const handleInputSubmit = async () => {
    if (!userInput.trim()) {
      toast.error("Por favor, descreva sua necessidade");
      return;
    }
    
    setIsProcessing(true);
    
    // Simula resposta da IA
    setTimeout(() => {
      setAiResponse("Entendi! Vou criar um plano personalizado para você. Te chamo no WhatsApp em 2 minutos para começarmos!");
      setIsProcessing(false);
      
      setTimeout(() => {
        const whatsappMessage = encodeURIComponent(`Olá! Nossa IA analisou minha demanda: "${userInput}". Quero começar agora!`);
        window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
      }, 2000);
    }, 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Fundo animado com partículas */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-orange-500/10"></div>
        
        {/* Partículas animadas */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-orange-300 rounded-full animate-ping delay-2000"></div>
        
        {/* Efeitos de luz pulsante */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado esquerdo - Rosto humano */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-transparent rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Empreendedor</h3>
                  <p className="text-blue-200">Você com visão de futuro</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-blue-900/50 to-slate-800/50 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/46365f26-9adb-4a59-9910-83ed2a27e4a3.png"
                  alt="Empreendedor focado no crescimento"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Lado direito - Conteúdo principal */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
                Nova Geração Contábil
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Contabilidade era para o governo.
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                Agora é para o seu negócio.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              <span className="font-semibold text-white">Tucont resolve sua empresa</span> com 
              <span className="font-semibold text-orange-300"> IA + mentoria estratégica</span>
            </p>

            {/* Input IA interativo */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-6 shadow-2xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Nossa IA está escutando</h3>
                  <p className="text-sm text-blue-200">Descreva o que você precisa...</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Input
                  placeholder="Ex: Quero abrir minha empresa e ter controle financeiro completo..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="text-lg p-4 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  disabled={isProcessing}
                />
                
                <Button 
                  onClick={handleInputSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      IA analisando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Resolver agora
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </div>
              
              {/* Resposta da IA */}
              {isProcessing && (
                <div className="mt-4 bg-gradient-to-r from-blue-900/50 to-orange-900/50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-blue-200 font-medium">IA criando solução personalizada...</span>
                  </div>
                </div>
              )}
              
              {aiResponse && (
                <div className="mt-4 bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-xl p-4 border border-green-400/30">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-green-200 font-medium mb-1">Tucont IA</p>
                      <p className="text-white">{aiResponse}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "500+", label: "Empresas revolucionadas" },
                { number: "100%", label: "Automação fiscal" },
                { number: "50+", label: "Agentes parceiros" },
                { number: "24/7", label: "Suporte WhatsApp" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-orange-300 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
