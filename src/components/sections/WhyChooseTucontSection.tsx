import { TrendingUp, Users, Lightbulb, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseTucontSection = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-orange-900/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
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
          
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-24 bg-gradient-to-b from-orange-400 to-purple-400 rounded-full shadow-lg shadow-orange-400/50 animate-pulse"></div>
          </div>
        </div>

        
        <div className="mb-24 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-orange-500/30 rounded-full blur-xl"></div>
                <img 
                  src="/lovable-uploads/693aec20-2c27-48a1-8efe-f12b58bff5bf.png" 
                  alt="Geraldo Oliveira" 
                  className="relative w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-gradient-to-r from-blue-500 to-orange-500"
                  style={{
                    boxShadow: '0 0 50px rgba(59, 130, 246, 0.3), 0 0 100px rgba(249, 115, 22, 0.2)',
                    objectPosition: 'center 50%'
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
          
          <div className="absolute -bottom-12 right-1/3 transform translate-x-1/2">
            <div className="w-1 h-24 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse delay-500"></div>
          </div>
        </div>

        {/* 3º Bloco - Somos Integrativos */}
        <div className="mb-16 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-white mb-6">
                Somos Integrativos, é <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Você no Centro</span>
              </h3>
              <div className="text-xl text-slate-300 leading-relaxed space-y-4">
                <p>
                  Enquanto a Contabilidade Tradicional é <span className="text-slate-400 italic">reativa e foca no Governo</span>.
                </p>
                <p>
                  A Tucont Integrativa foca no seu negócio, utiliza tecnologia proprietária para integrar e fluir a rotina empresarial.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center relative">
              <div className="relative w-96 h-96">
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm"></div>
                
                {/* Empreendedora no centro */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-orange-500/30 rounded-full blur-lg animate-pulse"></div>
                    <img 
                      src="/lovable-uploads/db1e5302-c6fa-40ce-ac0b-f2350248bdb8.png" 
                      alt="Empreendedora no centro" 
                      className="relative w-full h-full object-cover rounded-full shadow-2xl border-2 border-gradient-to-r from-blue-500 to-orange-500"
                      style={{
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(249, 115, 22, 0.2)'
                      }}
                    />
                  </div>
                </div>
                
                {/* Ícones orbitando */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    
                    {/* Pessoas - esquerda */}
                    <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 animate-bounce">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Educação - topo */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-bounce delay-500">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Tecnologia - direita */}
                    <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50 animate-bounce delay-1000">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Linhas conectoras animadas */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                      <defs>
                        <linearGradient id="flow1" x1="0%" y1="50%" x2="100%" y2="50%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                        </linearGradient>
                        <linearGradient id="flow2" x1="0%" y1="50%" x2="100%" y2="50%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      
                      {/* Linha da esquerda para o centro */}
                      <path
                        d="M 72,192 Q 140,192 152,192"
                        stroke="url(#flow1)"
                        strokeWidth="3"
                        fill="none"
                        className="animate-pulse"
                        filter="drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))"
                      />
                      
                      {/* Linha da direita para o centro */}
                      <path
                        d="M 232,192 Q 300,192 312,192"
                        stroke="url(#flow2)"
                        strokeWidth="3"
                        fill="none"
                        className="animate-pulse delay-500"
                        filter="drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))"
                      />
                      
                      {/* Linha do topo para o centro */}
                      <path
                        d="M 192,72 Q 192,140 192,152"
                        stroke="url(#flow1)"
                        strokeWidth="3"
                        fill="none"
                        className="animate-pulse delay-1000"
                        filter="drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))"
                      />
                    </svg>
                    
                    {/* Labels */}
                    <div className="absolute top-1/2 left-2 transform -translate-y-1/2 translate-y-12 text-xs text-slate-300 font-medium">Pessoas</div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 translate-y-12 text-xs text-slate-300 font-medium">Educação</div>
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 translate-y-12 text-xs text-slate-300 font-medium">Tecnologia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-3xl p-12 backdrop-blur-sm border border-gradient-to-r from-blue-500/20 to-orange-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">transformar</span> seu negócio?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Junte-se aos negócios que já transformaram suas jornadas empreendedoras conosco. 
              Vamos construir o futuro juntos!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/25"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-full transition-all duration-300"
              >
                Falar com Especialista
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Consultoria gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Resultados garantidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTucontSection;
