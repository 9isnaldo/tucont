import { Scale, TrendingUp, Zap, Target, ArrowRight, Shield, Route } from "lucide-react";
import { Button } from "@/components/ui/button";

const TwoAvenuesSection = () => {
  const openWhatsApp = (avenue: string) => {
    const message = avenue === 'legal' 
      ? "Quero conhecer a Avenida Legal - automação de obrigações"
      : avenue === 'business'
      ? "Quero conhecer a Avenida Empreendedora - jornada estratégica"
      : "Quero as duas avenidas integradas";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-orange-500/5"></div>
      
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
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-blue-300 px-6 py-3 rounded-full mb-8">
            <Route className="w-5 h-5" />
            <span className="font-medium">Integratividade</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
              A Tucont resolve as duas principais avenidas: a Empreendedora e a Legal.
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-shadow-glow">
              Nossa revolução
            </span>
            : Unir compliance perfeito, com crescimento estratégico. 
            Porque sua empresa merece mais que apenas "estar em dia" com o fisco.
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
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-orange-400/50 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full">
              
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
                    <span>Você em boa companhia</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-white mb-4">
                Planos, estratégia e operação
              </h4>
              
              <p className="text-orange-200 mb-6 leading-relaxed">
                Da ideia a operação, nós vamos com você. Nossa tecnologia é proprietária, simples de usar, os materiais e frameworks aplicáveis imediatamente.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Estruturação e consultoria, do MVP ao Go-to-Market</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Frameworks de evolução validados</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Software para vendas, emissão de notas e financeiro</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Mentoria 1:1 especializada</span>
                </li>
              </ul>

              <Button 
                onClick={() => openWhatsApp('business')}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl py-4 font-semibold text-lg shadow-lg"
              >
                Ver soluções desta avenida
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Avenida Legal - Right side (destination) */}
          <div className="group relative order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full">
              
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
              
              <h4 className="text-xl font-semibold text-white mb-4">
                Conformidade fiscal e operacional
              </h4>
              
              <p className="text-blue-200 mb-6 leading-relaxed">
                Nossa IA cuida de toda burocracia fiscal: impostos, folha, regularização. 
                Deixando você livre para focar no que realmente importa.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Emissão automática de notas fiscais</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Compliance fiscal em tempo real</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Regularização inteligente</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Relatórios automatizados</span>
                </li>
              </ul>

              <Button 
                onClick={() => openWhatsApp('legal')}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl py-4 font-semibold text-lg"
              >
                Ver soluções desta avenida
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Texto explicativo antes do CTA */}
        <div className="text-center mb-8">
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Enquanto outros cuidam apenas do fisco, nós revolucionamos. 
            Navegue pelas avenidas que transformam completamente o seu negócio.
          </p>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <Button 
            onClick={() => openWhatsApp('both')}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Quero as duas avenidas integradas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TwoAvenuesSection;
