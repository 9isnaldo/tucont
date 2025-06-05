
import { Link } from "react-router-dom";

const GrowthModelsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Escolha seu modelo de crescimento
          </h2>
          <p className="text-xl text-blue-200">Soluções para cada momento da sua jornada empresarial</p>
        </div>
        
        {/* Layout seguindo exatamente a imagem anexa */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* Grupo Para sua empresa (esquerda) */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-300">Para sua empresa</h3>
            <div className="flex gap-6">
              <Link to="/saas">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 w-64 h-80 flex flex-col">
                  <h4 className="text-3xl font-bold mb-3 text-white">SaaS</h4>
                  <p className="text-lg mb-4 text-orange-100">Softwares as a Service</p>
                  <h5 className="text-xl font-semibold mb-6 text-blue-900">Simplificamos<br />Sua Operação</h5>
                  <p className="text-white text-base leading-relaxed flex-grow">
                    Venda, emita notas fiscais, gerencie o financeiro
                  </p>
                </div>
              </Link>

              <Link to="/tucont">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 w-64 h-80 flex flex-col relative overflow-hidden">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-orange-900 px-4 py-1 rounded-full text-sm font-bold">
                      Mais Popular
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold mb-3 text-white">Tucont</h4>
                  <p className="text-lg mb-4 text-orange-100">Contabilidade Integrativa</p>
                  <h5 className="text-xl font-semibold mb-6 text-blue-900">Unificamos<br />Legal e Negócios</h5>
                  <p className="text-white text-base leading-relaxed flex-grow">
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
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 w-48 h-80 flex flex-col">
                  <h4 className="text-2xl font-bold mb-3 text-white">Tucont</h4>
                  <p className="text-base mb-4 text-orange-100">Partner Integrativo</p>
                  <h5 className="text-lg font-semibold mb-6 text-blue-900">Fazemos<br />juntos</h5>
                  <p className="text-white text-sm leading-relaxed flex-grow">
                    Acesso a plataforma personalizada, processos, automações e IA
                  </p>
                </div>
              </Link>

              <Link to="/cec">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 w-48 h-80 flex flex-col">
                  <h4 className="text-2xl font-bold mb-3 text-white">CEC</h4>
                  <p className="text-base mb-4 text-orange-100">Cada Etapa Conta</p>
                  <h5 className="text-lg font-semibold mb-6 text-blue-900">Fazemos<br />pra você</h5>
                  <p className="text-white text-sm leading-relaxed flex-grow">
                    Implementação na prática, de processos, IA e automações. Personalizadas para sua empresa.
                  </p>
                </div>
              </Link>

              <Link to="/poder-contabil">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 w-48 h-80 flex flex-col">
                  <h4 className="text-2xl font-bold mb-3 text-white">Poder Contábil</h4>
                  <p className="text-base mb-4 text-orange-100"></p>
                  <h5 className="text-lg font-semibold mb-6 text-blue-900">Compartilhamos<br />com você</h5>
                  <p className="text-white text-sm leading-relaxed flex-grow">
                    Comunidade com acesso em primeira mão, a todas soluções Tucont
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
