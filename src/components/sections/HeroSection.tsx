
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Bot, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const HeroSection = () => {
  const [userInput, setUserInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputSubmit = async () => {
    if (!userInput.trim()) {
      toast.error("Por favor, descreva sua necessidade");
      return;
    }
    
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse na Tucont. Minha necessidade: ${userInput}`);
      window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
    }, 3000);
  };

  return (
    <section className="relative py-32 px-4 text-center pt-40">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-orange-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-medium bg-gradient-to-r from-blue-200 to-orange-200 bg-clip-text text-transparent">
            Revolução na Contabilidade Brasileira
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-200 via-white to-orange-200 bg-clip-text text-transparent">
            Mais que contabilidade.
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
            Seu parceiro de crescimento.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
          <span className="font-semibold text-white">Automação total da burocracia</span> + 
          <span className="font-semibold text-orange-300"> mentoria estratégica real</span>.
          <br />
          A primeira plataforma que une IA, compliance e crescimento empresarial.
        </p>
        
        {/* Interactive AI Input */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Nossa IA está escutando</h3>
                <p className="text-sm text-blue-200">Descreva sua necessidade em linguagem natural</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Ex: Quero abrir minha empresa e ter controle financeiro completo..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 text-lg p-6 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isProcessing}
              />
              <Button 
                onClick={handleInputSubmit}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Analisando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Começar agora
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </Button>
            </div>
            
            {isProcessing && (
              <div className="mt-6 bg-gradient-to-r from-blue-900/50 to-orange-900/50 rounded-xl p-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="text-blue-200 font-medium">Nossa IA está criando sua solução personalizada...</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Empresas transformadas" },
            { number: "100%", label: "Automação fiscal" },
            { number: "50+", label: "Contadores parceiros" },
            { number: "24/7", label: "Suporte WhatsApp" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-orange-300 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
