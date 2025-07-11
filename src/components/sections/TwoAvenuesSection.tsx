import { Scale, TrendingUp, Zap, Target, ArrowRight, Shield, Route } from "lucide-react";
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

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-tucont-royal/5 via-transparent to-tucont-orange/5"></div>
      
      {/* Road/Path Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          <path
            d="M 0,600 Q 300,500 600,400 Q 900,300 1200,200"
            stroke="url(#roadGradient)"
            strokeWidth="40"
            fill="none"
            strokeDasharray="20,10"
          />
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary backdrop-blur-xl border border-border text-tucont-royal px-6 py-3 rounded-full mb-8">
            <Route className="w-5 h-5" />
            <span className="font-medium">Integratividade</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-tucont-text-primary">
              A Tucont resolve as duas principais avenidas: a <span className="text-tucont-orange">Empreendedora</span> e a <span className="text-tucont-royal">Legal</span>.
            </span>
          </h2>
          
          <p className="text-xl text-tucont-text-secondary max-w-4xl mx-auto leading-relaxed">
            <span className="text-tucont-orange font-bold">
              Nossa revolução
            </span>
            : Muito mais que somente atender ao Governo, somos um copiloto estratégico, que automatiza a burocracia e impulsiona seu crescimento!
          </p>
        </div>

        {/* ... keep existing code (grid with the two avenues cards) */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16 relative">
          {/* Connecting Road Element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 hidden lg:block">
            <div className="w-32 h-2 bg-gradient-to-r from-orange-500/30 via-yellow-400/50 to-blue-500/30 rounded-full blur-sm"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-yellow-300 to-blue-400 rounded-full mt-1 mx-auto"></div>
          </div>

          {/* Avenida Empreendedora - Left side (start of journey) */}
          <div className="group relative order-1">
            {/* Rótulo da Avenida */}
            <div className="absolute -top-3 left-6 z-10">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-slate-900 transition-all duration-300">
                <TrendingUp className="w-4 h-4" />
                <span className="group-hover:hidden">Avenida Empreendedora</span>
                <span className="hidden group-hover:block">Nosso Grande Diferencial</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-background backdrop-blur-xl border border-orange-400/50 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full">
              
              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
                    Jornada Empreendedora
                  </h3>
                  <div className="flex items-center gap-2 text-orange-300 text-sm">
                    <Target className="w-4 h-4" />
                    <span>A Plataforma!</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Planos, estratégia e operação
              </h4>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Da ideia a operação, do plano a execução, nós vamos com você!
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Educação, materiais e frameworks aplicáveis imediatamente</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Do MVP ao Go-to-Market</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Venda, emita notas e controle o financeiro em nosso ERP</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Mentoria 1:1 especializada</span>
                </li>
              </ul>

              <Button 
                onClick={() => navigateToAvenue('business')}
                variant="cta-orange"
                size="lg"
                className="w-full"
              >
                Ver soluções desta avenida
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Avenida Legal - Right side (destination) */}
          <div className="group relative order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-background backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full">
              
              {/* Rótulo da Avenida */}
              <div className="absolute -top-3 left-6">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Avenida Legal
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Esteira automatizada
                  </h3>
                  <div className="flex items-center gap-2 text-blue-300 text-sm">
                    <Zap className="w-4 h-4" />
                    <span>100% Automatizado</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Conformidade Fiscal
              </h4>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Automação e IA para agilizar cuidar da burocracia fiscal. Nossa equipe para cuidar de você e sua empresa. 
                Faz o seu. A gente cuida do resto.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Emissão automática de notas fiscais</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Compliance fiscal em tempo real</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Seus documentos disponíveis 24/7</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>WhatsApp, chat e e-mail SEM enrolação, perguntas ou solicitações no seu tempo</span>
                </li>
              </ul>

              <Button 
                onClick={() => navigateToAvenue('legal')}
                variant="royal"
                size="lg"
                className="w-full"
              >
                Ver soluções desta avenida
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Texto explicativo antes do CTA */}
        <div className="text-center mb-8">
          <p className="text-lg text-tucont-text-secondary max-w-4xl mx-auto leading-relaxed font-medium">
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
            className="px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Quero as duas avenidas integradas
          </Button>
        </div>
      </div>
      
      <CaptureFormModal 
        isOpen={isFormModalOpen} 
        onClose={() => setIsFormModalOpen(false)} 
      />
    </section>
  );
};

export default TwoAvenuesSection;
