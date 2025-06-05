
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Handshake, 
  TrendingUp, 
  Award, 
  Zap, 
  Target,
  ArrowRight,
  Crown,
  Building
} from "lucide-react";

const AccountantsSection = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Sou contador e quero ser um Agente Tucont")}`, '_blank');
  };

  const benefits = [
    {
      icon: Zap,
      title: "Tecnologia",
      description: "Plataforma completa com IA para automatizar 90% dos processos"
    },
    {
      icon: Target,
      title: "Método",
      description: "Metodologia exclusiva testada em milhares de empresas"
    },
    {
      icon: Award,
      title: "Marca",
      description: "Use a força da marca Tucont no seu mercado local"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Network exclusivo com os melhores contadores do Brasil"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full mb-8">
                <Crown className="w-5 h-5" />
                <span className="font-medium">Para Contadores Visionários</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Você é contador 
                </span>
                <br />
                <span className="text-white">
                  e quer escalar?
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Torne-se um <span className="font-semibold text-orange-400">Agente Integrativo Tucont</span> e 
                transforme sua contabilidade tradicional em uma máquina de crescimento para seus clientes.
              </p>

              <div className="bg-slate-800/50 backdrop-blur-xl border border-orange-400/30 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Handshake className="w-6 h-6 text-orange-400" />
                  O que você recebe como parceiro:
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-700/50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{benefit.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex-1"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Quero ser um Agente Tucont
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-6 py-4 text-lg rounded-full"
                >
                  Ver apresentação
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            {/* Partnership Illustration */}
            <div className="relative bg-slate-800/30 backdrop-blur-xl border border-orange-400/30 rounded-3xl p-8 shadow-2xl">
              
              {/* Partnership Visual */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-8 mb-6">
                  {/* Contador */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-blue-300 font-semibold text-sm">Seu Escritório</div>
                  </div>

                  {/* Plus */}
                  <div className="text-3xl font-bold text-orange-400">+</div>

                  {/* Tucont */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <Building className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-orange-300 font-semibold text-sm">Tucont</div>
                  </div>
                </div>

                {/* Equals */}
                <div className="text-2xl font-bold text-white mb-6">=</div>

                {/* Result */}
                <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-2xl p-6">
                  <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Crescimento Exponencial</h3>
                  <p className="text-slate-300 text-sm">
                    Seus clientes crescem 3x mais rápido com nossa metodologia integrada
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-400 mb-1">90%</div>
                  <div className="text-slate-400 text-xs">Menos trabalho manual</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-400 mb-1">3x</div>
                  <div className="text-slate-400 text-xs">Mais receita</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-400 mb-1">100%</div>
                  <div className="text-slate-400 text-xs">Clientes satisfeitos</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountantsSection;
