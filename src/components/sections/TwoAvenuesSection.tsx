
import { Scale, TrendingUp, Zap, Target } from "lucide-react";

const TwoAvenuesSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Toda empresa tem duas jornadas cruciais
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Enquanto outros cuidam apenas do compliance, nós <span className="font-semibold text-white">revolucionamos ambas as avenidas</span> 
            para criar o ecossistema completo do seu crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Avenida Legal */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Scale className="w-10 h-10 text-white" />
              </div>
              
              <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">
                <h3 className="text-3xl font-bold">Avenida Legal</h3>
              </div>
              
              <h4 className="text-xl font-semibold text-white mb-4">
                Automação da conformidade. Sem erros. Sem planilhas.
              </h4>
              
              <p className="text-blue-200 mb-6 leading-relaxed">
                Nossa IA cuida de toda burocracia fiscal e legal, deixando você livre para focar no que realmente importa: seu negócio.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-blue-300">
                <Zap className="w-5 h-5" />
                <span className="font-medium">100% Automatizado</span>
              </div>
            </div>
          </div>

          {/* Avenida Negócios */}
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-xl border border-orange-400/30 rounded-3xl p-8 shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500 transform hover:scale-105 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              
              <div className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent mb-4">
                <h3 className="text-3xl font-bold">Avenida Negócios</h3>
              </div>
              
              <h4 className="text-xl font-semibold text-white mb-4">
                Mentoria, planejamento e frameworks para escalar.
              </h4>
              
              <p className="text-orange-200 mb-6 leading-relaxed">
                Metodologias validadas e mentoria 1:1 para transformar sua contabilidade em vantagem competitiva real.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-orange-300">
                <Target className="w-5 h-5" />
                <span className="font-medium">Crescimento Estratégico</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            <span className="font-semibold text-orange-300">Nossa revolução:</span> Unir compliance perfeito com crescimento estratégico. 
            Porque sua empresa merece mais que apenas "estar em dia".
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoAvenuesSection;
