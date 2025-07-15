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

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: i % 2 === 0 ? 'rgba(251, 146, 60, 0.4)' : 'rgba(59, 130, 246, 0.4)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
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
          {/* Connecting Road Element - Enhanced */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 hidden lg:block">
            <div className="w-40 h-3 bg-gradient-to-r from-orange-500/40 via-yellow-400/60 to-blue-500/40 rounded-full blur-[6px]"></div>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-400 via-yellow-300 to-blue-400 rounded-full mt-1 mx-auto shadow-lg shadow-blue-400/30"></div>
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-yellow-200 shadow-lg animate-pulse"></div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-200 shadow-lg animate-pulse"></div>
          </div>

          {/* Avenida Empreendedora - Left side (start of journey) */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/30 rounded-3xl blur-xl group-hover:blur-lg transition-all duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-orange-400/30 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 h-full">
              
              {/* Rótulo da Avenida */}
              <div className="absolute -top-3 left-6 z-10">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-white transition-all duration-300">
                  <Handshake className="w-4 h-4" />
                  <span>Avenida Empreendedora</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-8 h-8 text-white" />
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
              
              <h4 className="text-xl font-semibold text-slate-800 mb-4">
                Planos, estratégia e operação
              </h4>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                Da ideia a operação, do plano a execução, nós vamos com você!
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <span>Educação, materiais e frameworks aplicáveis imediatamente</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <span>Do MVP ao Go-to-Market</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <span>Venda, emita notas e controle o financeiro em nosso ERP</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/30 rounded-3xl blur-xl group-hover:blur-lg transition-all duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 h-full">
              
              {/* Rótulo da Avenida */}
              <div className="absolute -top-3 left-6">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                  <Shield className="w-4 h-4" />
                  Avenida Legal
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-8 h-8 text-white" />
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
              
              <h4 className="text-xl font-semibold text-slate-800 mb-4">
                Conformidade Fiscal
              </h4>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                Automação e IA para agilizar cuidar da burocracia fiscal. Nossa equipe para cuidar de você e sua empresa. 
                Faz o seu. A gente cuida do resto.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>Emissão automática de notas fiscais</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>Compliance fiscal em tempo real</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>Seus documentos disponíveis 24/7</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
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

      {/* CSS for animations */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TwoAvenuesSection;