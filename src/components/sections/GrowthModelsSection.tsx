
import { Link } from "react-router-dom";

const GrowthModelsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Escolha seu modelo de crescimento
          </h2>
          <p className="text-xl text-blue-200">Soluções para cada momento da sua jornada empresarial</p>
        </div>
        
        {/* Cards em linha conforme o print */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* Grupo Para sua empresa (esquerda) */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-300">Para sua empresa</h3>
            <div className="flex gap-6">
              <Link to="/saas">
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 text-white hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/10 w-48 h-64">
                  <h4 className="text-2xl font-bold mb-2 text-orange-300">SaaS</h4>
                  <p className="text-lg mb-4 text-blue-200">Softwares as a Service</p>
                  <h5 className="text-base font-semibold mb-4 text-white">Simplificamos<br />Sua Operação</h5>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Venda, emita notas fiscais, gerencie o financeiro
                  </p>
                </div>
              </Link>

              <Link to="/tucont">
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-orange-400/30 rounded-3xl p-6 text-white hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/10 w-48 h-64 relative overflow-hidden">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-orange-900 px-4 py-1 rounded-full text-xs font-bold">
                      Mais Popular
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-orange-300">Tucont</h4>
                  <p className="text-lg mb-4 text-orange-200">Contabilidade Integrativa</p>
                  <h5 className="text-base font-semibold mb-4 text-white">Unificamos<br />Legal e Negócios</h5>
                  <p className="text-orange-200 text-sm leading-relaxed">
                    Destravamos o empreendedorismo cuidando das duas avenidas
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Grupo Para contadores e escritórios (direita) */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-center mb-8 text-orange-300">Para contadores e escritórios</h3>
            <div className="flex gap-4">
              <Link to="/partner">
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-4 text-white hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/10 w-40 h-64">
                  <h4 className="text-xl font-bold mb-2 text-purple-300">Tucont</h4>
                  <p className="text-base mb-3 text-purple-200">Partner Integrativo</p>
                  <h5 className="text-sm font-semibold mb-3 text-white">Fazemos<br />juntos</h5>
                  <p className="text-purple-200 text-xs leading-relaxed">
                    Acesso a plataforma, processos e IA
                  </p>
                </div>
              </Link>

              <Link to="/cec">
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-green-400/30 rounded-3xl p-4 text-white hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/10 w-40 h-64">
                  <h4 className="text-xl font-bold mb-2 text-green-300">CEC</h4>
                  <p className="text-base mb-3 text-green-200">Cada Etapa Conta</p>
                  <h5 className="text-sm font-semibold mb-3 text-white">Fazemos<br />pra você</h5>
                  <p className="text-green-200 text-xs leading-relaxed">
                    Implementação de processos e automações
                  </p>
                </div>
              </Link>

              <Link to="/poder-contabil">
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-amber-400/30 rounded-3xl p-4 text-white hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/10 w-40 h-64">
                  <h4 className="text-xl font-bold mb-2 text-amber-300">Poder Contábil</h4>
                  <p className="text-base mb-3 text-amber-200"></p>
                  <h5 className="text-sm font-semibold mb-3 text-white">Compartilhamos<br />com você</h5>
                  <p className="text-amber-200 text-xs leading-relaxed">
                    Comunidade com acesso às soluções Tucont
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthModelsSection;
