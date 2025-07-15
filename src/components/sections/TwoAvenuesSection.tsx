import { Handshake, Zap, Target, Shield, ArrowRight, Route, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaptureFormModal } from "@/components/ui/capture-form-modal";
import { useState } from "react";

const TwoAvenuesSection = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const navigateToAvenue = (avenue: string) => {
    if (avenue === 'legal') {
      window.location.href = '/avenida-legal';
    } else if (avenue === 'business') {
      window.location.href = '/avenida-empreendedora';
    }
  };

  // Gerador de bolhas com mais variedade
  const generateBubbles = () => {
    const bubbles = [];
    const bubbleCount = 40;
    
    for (let i = 0; i < bubbleCount; i++) {
      const size = Math.random() * 8 + 2;
      const color = i % 3 === 0 
        ? 'rgba(251, 146, 60, 0.4)'
        : i % 3 === 1 
          ? 'rgba(59, 130, 246, 0.4)'
          : 'rgba(16, 185, 129, 0.4)';
      
      const animationDuration = Math.random() * 15 + 10;
      const delay = Math.random() * 10;
      
      bubbles.push(
        <div 
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background: color,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${animationDuration}s ease-in-out ${delay}s infinite`,
            opacity: Math.random() * 0.6 + 0.4
          }}
        />
      );
    }
    return bubbles;
  };

  return (
    <section className="py-24 px-4 min-h-screen bg-gradient-to-br from-background via-secondary to-muted relative overflow-hidden flex items-center">
      {/* Background effects - matching HeroSection */}
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tucont-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-tucont-orange/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Bolhas animadas - agora com mais variedade */}
      <div className="absolute inset-0 overflow-hidden">
        {generateBubbles()}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-primary/30 text-primary px-6 py-3 rounded-full mb-8 shadow-lg">
            <Route className="w-5 h-5" />
            <span className="font-medium">Integratividade</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-slate-900/95">
              A Tucont resolve as duas principais avenidas: a <span className="text-tucont-orange">Empreendedora</span> e a <span className="text-tucont-royal">Legal</span>.
            </span>
          </h2>
          
          <p className="text-xl text-foreground font-semibold max-w-4xl mx-auto">
            <span className="text-tucont-royal font-bold">
              Nossa revolução
            </span>
            : Muito mais que somente atender ao Governo, somos um copiloto estratégico, que automatiza a burocracia e impulsiona seu crescimento!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16 relative">
          
          {/* Avenida Empreendedora - Left side (start of journey) */}
          <div className="group relative">
            <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border h-full transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2">
              
              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-tucont-orange">
                    Avenida Empreendedora
                  </h3>
                  <div className="flex items-center gap-2 text-foreground text-sm">
                    <Target className="w-4 h-4" />
                    <span>A Plataforma da Jornada Empreendedora!</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Planos, estratégia e operação
              </h4>
              
              <p className="text-foreground mb-6 leading-relaxed">
                Da ideia a operação, do plano a execução, nós vamos com você!
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-orange-500">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <span>Educação, materiais e frameworks aplicáveis imediatamente</span>
                </li>
                <li className="flex items-center gap-3 text-orange-500">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <span>Do MVP ao Go-to-Market</span>
                </li>
                <li className="flex items-center gap-3 text-orange-500">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <span>Venda, emita notas e controle o financeiro em nosso ERP</span>
                </li>
                <li className="flex items-center gap-3 text-orange-500">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <span>Mentoria 1:1 especializada</span>
                </li>
              </ul>

              <Button 
                onClick={() => navigateToAvenue('business')}
                variant="cta-orange"
                size="lg"
                className="w-full group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all"
              >
                Ver soluções desta avenida
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Avenida Legal - Right side (destination) */}
          <div className="group relative">
            <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border h-full transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2">
              
              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-tucont-royal">
                    Avenida Legal
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Zap className="w-4 h-4" />
                    <span>Esteira 100% Automatizada</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Conformidade Fiscal
              </h4>
              
              <p className="text-foreground mb-6 leading-relaxed">
                Automação e IA para agilizar cuidar da burocracia fiscal. Nossa equipe para cuidar de você e sua empresa. 
                Faz o seu. A gente cuida do resto.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-blue-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>Emissão automática de notas fiscais</span>
                </li>
                <li className="flex items-center gap-3 text-blue-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>Compliance fiscal em tempo real</span>
                </li>
                <li className="flex items-center gap-3 text-blue-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>Seus documentos disponíveis 24/7</span>
                </li>
                <li className="flex items-center gap-3 text-blue-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>WhatsApp, chat e e-mail SEM enrolação, perguntas ou solicitações no seu tempo</span>
                </li>
              </ul>

              <Button 
                onClick={() => navigateToAvenue('legal')}
                variant="royal"
                size="lg"
                className="w-full group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all"
              >
                Ver soluções desta avenida
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Texto explicativo antes do CTA */}
        <div className="text-center mb-8">
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Enquanto outros cuidam apenas do fisco, nós revolucionamos. 
            Navegue pelas avenidas que transformam completamente o seu negócio.
          </p>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <Button 
            onClick={() => setIsFormModalOpen(true)}
            variant="royal"
            size="lg"
            className="px-10 py-5 text-xl shadow-2xl hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300"
          >
            Quero as duas avenidas integradas
          </Button>
        </div>
      </div>
      
      <CaptureFormModal 
        isOpen={isFormModalOpen} 
        onClose={() => setIsFormModalOpen(false)} 
      />

      {/* CSS for animations - CORRIGIDO */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-5px) rotate(0deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-20px) translateX(-10px) rotate(-5deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};

export default TwoAvenuesSection;