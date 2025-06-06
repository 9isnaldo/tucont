
import { TrendingUp, Users, Lightbulb } from "lucide-react";

const WhyChooseTucontSection = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-orange-900/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Por que escolhem a Tucont Integrativa?
            </span>
          </h2>
          <p className="text-2xl text-slate-300 font-semibold">
            Porque também somos empreendedores, te entendemos!
          </p>
        </div>

        {/* 1º Bloco - Nosso Sonho Grande */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-white mb-6">
                Nosso Sonho Grande:
              </h3>
              <div className="text-xl text-slate-300 leading-relaxed space-y-4">
                <p>
                  Contribuir o Brasil a chegar a <span className="text-orange-400 font-bold">50 milhões de PJs</span> e
                  mudar a sociedade, pelo despertar do empreendedorismo e acesso às oportunidades.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 shadow-2xl">
                <div className="text-center space-y-8">
                  <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-400 mb-2">21MM</div>
                      <div className="text-slate-400 text-sm">Atual</div>
                    </div>
                    <div className="flex-1 relative">
                      <div className="h-2 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full"></div>
                      <TrendingUp className="w-8 h-8 text-blue-400 absolute -top-3 right-0 transform translate-x-4" />
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-400 mb-2">50MM</div>
                      <div className="text-slate-400 text-sm">Meta</div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm">
                    Pessoas Jurídicas no Brasil
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2º Bloco - Temos experiência */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-orange-500/30 rounded-3xl blur-xl"></div>
                <img 
                  src="/lovable-uploads/693aec20-2c27-48a1-8efe-f12b58bff5bf.png" 
                  alt="Geraldo Oliveira" 
                  className="relative w-80 h-96 object-cover rounded-3xl shadow-2xl border border-slate-700/50"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                  Geraldo Oliveira
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-4xl font-bold text-white mb-6">
                Temos experiência
              </h3>
              <div className="text-xl text-slate-300 leading-relaxed space-y-4">
                <p>
                  Depois de criar, inspirar e ajudar mais de <span className="text-blue-400 font-bold">30 negócios</span>, 
                  tínhamos o dever de impactar e transformar mais empreendedores.
                </p>
                <p>
                  Eu sou o <span className="text-orange-400 font-bold">Geraldo Oliveira</span>, jornadeando no empreendedorismo 
                  com a Infoco, Iuptec, Iupcare e agora transformando o mercado com a <span className="text-blue-400 font-bold">Tucont!</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3º Bloco - Porque somos Integrativos */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-white mb-6">
                Porque somos Integrativos
              </h3>
              <div className="text-xl text-slate-300 leading-relaxed">
                <p>
                  "Para que todos atinjamos nossos objetivos, reunimos na Tucont, 
                  educação empreendedora, processos, tecnologia, contabilidade e pessoas, 
                  uma abundância delas."
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 shadow-2xl">
                <div className="grid grid-cols-3 gap-8 items-center">
                  {/* Pessoas */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm text-slate-300">Pessoas</div>
                  </div>
                  
                  {/* Tecnologia */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm text-slate-300">Tecnologia</div>
                  </div>
                  
                  {/* Crescimento */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm text-slate-300">Crescimento</div>
                  </div>
                </div>
                
                {/* Conectores */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 100" className="w-full h-24 opacity-30">
                    <path
                      d="M 30,50 Q 100,20 170,50"
                      stroke="url(#integrationGradient1)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 30,50 Q 100,80 170,50"
                      stroke="url(#integrationGradient2)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="integrationGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                      <linearGradient id="integrationGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTucontSection;
