
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [animatedText, setAnimatedText] = useState("");

  const typeWriterTexts = [
    "Como abrir minha empresa rapidamente?",
    "Preciso de consultoria tributária urgente",
    "Quero escalar meu negócio com segurança",
    "Como otimizar meus impostos?"
  ];

  const aiResponse = "Perfeito! Vou analisar sua situação e criar um plano personalizado. Nossa IA já identificou 3 oportunidades de economia fiscal e um caminho estratégico para seu crescimento. Vamos conversar no WhatsApp?";

  useEffect(() => {
    const animateText = () => {
      const currentText = typeWriterTexts[Math.floor(Math.random() * typeWriterTexts.length)];
      let index = 0;
      setAnimatedText("");
      
      const interval = setInterval(() => {
        if (index < currentText.length) {
          setAnimatedText(currentText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            animateText();
          }, 3000);
        }
      }, 80);
    };

    const timer = setTimeout(animateText, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setShowResponse(true);
    }, 2000);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Vim do site e quero conhecer a Tucont")}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        {/* Left Side - Human Face */}
        <div className="text-center lg:text-left">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Empreendedor"
              className="w-32 h-32 rounded-full mx-auto lg:mx-0 border-4 border-blue-400/50 shadow-2xl shadow-blue-500/20"
            />
            <div className="mt-4 text-blue-300 font-medium">Empreendedor Real</div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
              Contabilidade era para o governo.
            </span>
            <br />
            <span className="text-orange-400">
              Agora é para o seu negócio.
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
            Tucont resolve sua empresa com <span className="text-blue-400 font-semibold">IA + mentoria estratégica</span>
          </p>

          <Button 
            onClick={openWhatsApp}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-orange-500/30 transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Começar Agora - Grátis
          </Button>
        </div>

        {/* Right Side - AI Avatar and Interactive Chat */}
        <div className="space-y-8">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                <Sparkles className="w-16 h-16 text-white animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <div className="text-cyan-300 font-medium">IA Tucont Online</div>
          </div>

          {/* Interactive Chat Interface */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={animatedText || "Descreva o que você precisa..."}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-2xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <Button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 rounded-xl p-2"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </form>

            {/* Typing Animation */}
            {isTyping && (
              <div className="mt-4 flex items-center gap-2 text-slate-400">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                </div>
                <span>IA analisando...</span>
              </div>
            )}

            {/* AI Response */}
            {showResponse && (
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-200 leading-relaxed">{aiResponse}</p>
                    <Button 
                      onClick={openWhatsApp}
                      className="mt-3 bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 text-sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Continuar no WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
