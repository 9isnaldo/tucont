
import { Scale, TrendingUp, Zap, Target, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const TwoAvenuesSection = () => {
  const openWhatsApp = (avenue: string) => {
    const message = avenue === 'legal' 
      ? "Quero conhecer a Avenida Legal - automação de obrigações"
      : "Quero conhecer a Avenida de Negócios - mentoria estratégica";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-orange-500/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-blue-300 px-6 py-3 rounded-full mb-8">
            <Target className="w-5 h-5" />
            <span className="font-medium">Duas Avenidas Integradas</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
              Sua empresa tem duas jornadas cruciais
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Enquanto outros cuidam apenas do compliance, nós <span className="font-semibold text-orange-400">revolucionamos ambas as avenidas</span> 
            para criar o ecossistema completo do seu crescimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Avenida Legal */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Avenida Legal
                  </h3>
                  <div className="flex items-center gap-2 text-blue-300 text-sm">
                    <Zap className="w-4 h-4" />
                    <span>100% Automatizado</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-white mb-4">
                Esteira automatizada de obrigações
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

          {/* Avenida Negócios - COM MAIOR DESTAQUE */}
          <div className="group relative">
            {/* Badge de destaque */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Nosso Grande Diferencial
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-orange-400/50 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
                    Avenida de Negócios
                  </h3>
                  <div className="flex items-center gap-2 text-orange-300 text-sm">
                    <Target className="w-4 h-4" />
                    <span>Crescimento Estratégico</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-white mb-4">
                Mentoria + plano de ação + estruturação estratégica
              </h4>
              
              <p className="text-orange-200 mb-6 leading-relaxed">
                Frameworks validados + mentoria 1:1 para transformar sua contabilidade 
                em vantagem competitiva real e impulsionar o crescimento.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Consultoria estratégica personalizada</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Frameworks de crescimento validados</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Mentoria 1:1 especializada</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Estruturação para escalar</span>
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
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-orange-400">Nossa revolução:</span> Unir compliance perfeito com crescimento estratégico. 
            Porque sua empresa merece mais que apenas "estar em dia".
          </p>
          
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
