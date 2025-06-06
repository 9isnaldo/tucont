
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
        <div className="mb-24 relative">
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
            
            <div className="flex justify-center relative">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">21MM</div>
                    <div className="text-slate-400 text-sm">Atual</div>
                  </div>
                  <div className="flex-1 relative">
                    <div className="h-2 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full shadow-lg shadow-orange-400/50"></div>
                    <TrendingUp className="w-8 h-8 text-blue-400 absolute -top-3 right-0 transform translate-x-4 filter drop-shadow-lg drop-shadow-blue-400/30" />
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
          
          {/* Conector Neon 1 */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-24 bg-gradient-to-b from-orange-400 to-purple-400 rounded-full shadow-lg shadow-orange-400/50 animate-pulse"></div>
          </div>
        </div>

        {/* 2º Bloco - Temos experiência */}
        <div className="mb-24 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-orange-500/30 rounded-full blur-xl"></div>
                <img 
                  src="/lovable-uploads/693aec20-2c27-48a1-8efe-f12b58bff5bf.png" 
                  alt="Geraldo Oliveira" 
                  className="relative w-80 h-80 object-cover object-top rounded-full shadow-2xl border-4 border-gradient-to-r from-blue-500 to-orange-500"
                  style={{
                    boxShadow: '0 0 50px rgba(59, 130, 246, 0.3), 0 0 100px rgba(249, 115, 22, 0.2)'
                  }}
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
          
          {/* Conector Neon 2 */}
          <div className="absolute -bottom-12 right-1/3 transform translate-x-1/2">
            <div className="w-1 h-24 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse delay-500"></div>
          </div>
        </div>

        {/* 3º Bloco - Porque somos Integrativos */}
        <div className="mb-16 relative">
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
            
            <div className="flex justify-center relative">
              <div className="relative w-96 h-96">
                {/* Fundo com efeito de integração */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm"></div>
                
                {/* Elementos integrativos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Centro - Pessoas */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Tecnologia - Canto superior direito */}
                    <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/40">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Crescimento - Canto inferior esquerdo */}
                    <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/40">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Conectores animados */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                      <defs>
                        <linearGradient id="connector1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                        </linearGradient>
                        <linearGradient id="connector2" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                      
                      {/* Linha conectando centro com tecnologia */}
                      <path
                        d="M 192,192 Q 280,120 320,64"
                        stroke="url(#connector1)"
                        strokeWidth="3"
                        fill="none"
                        className="animate-pulse"
                        filter="drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))"
                      />
                      
                      {/* Linha conectando centro com crescimento */}
                      <path
                        d="M 192,192 Q 100,260 64,320"
                        stroke="url(#connector2)"
                        strokeWidth="3"
                        fill="none"
                        className="animate-pulse delay-300"
                        filter="drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))"
                      />
                      
                      {/* Linha conectando tecnologia com crescimento */}
                      <path
                        d="M 320,64 Q 320,192 64,320"
                        stroke="url(#connector1)"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse delay-700"
                        opacity="0.6"
                      />
                    </svg>
                    
                    {/* Labels */}
                    <div className="absolute top-16 right-24 text-xs text-slate-300 font-medium">Tecnologia</div>
                    <div className="absolute bottom-16 left-24 text-xs text-slate-300 font-medium">Crescimento</div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-8 text-xs text-slate-300 font-medium">Pessoas</div>
                  </div>
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
