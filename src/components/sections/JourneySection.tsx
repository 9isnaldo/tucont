
import { MessageCircle, Bot, Users, TrendingUp, ArrowRight } from "lucide-react";

const JourneySection = () => {
  const journeySteps = [
    {
      icon: MessageCircle,
      title: "Você fala com a IA",
      description: "Descreva sua necessidade em linguagem natural. Nossa IA entende e analisa sua situação em segundos.",
      color: "from-blue-500 to-cyan-400",
      delay: "delay-0"
    },
    {
      icon: Bot,
      title: "Ela resolve ou sugere plano",
      description: "Receba soluções imediatas ou um plano estratégico personalizado baseado em milhares de casos similares.",
      color: "from-purple-500 to-pink-400",
      delay: "delay-200"
    },
    {
      icon: Users,
      title: "Acompanhamento via WhatsApp",
      description: "Nossa equipe especializada acompanha cada etapa via WhatsApp, garantindo que tudo aconteça no prazo.",
      color: "from-green-500 to-emerald-400",
      delay: "delay-400"
    },
    {
      icon: TrendingUp,
      title: "Seu negócio cresce com nossa mentoria",
      description: "Com a base legal sólida, focamos 100% no crescimento estratégico da sua empresa.",
      color: "from-orange-500 to-red-400",
      delay: "delay-600"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-purple-300 px-6 py-3 rounded-full mb-8">
            <Bot className="w-5 h-5" />
            <span className="font-medium">Jornada Inteligente</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-orange-300 bg-clip-text text-transparent">
              Como funciona na prática
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Um processo <span className="font-semibold text-purple-400">simples e inteligente</span> que 
            resolve seus problemas e constrói o futuro da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <div key={index} className={`group animate-fade-in ${step.delay}`}>
              <div className="relative">
                {/* Connection Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-600 to-transparent z-0"></div>
                )}
                
                {/* Step Card */}
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl group-hover:shadow-purple-500/20">
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < journeySteps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <ArrowRight className="w-6 h-6 text-slate-600" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-slate-300 mb-6">
              Fale com nossa IA agora e descubra como podemos revolucionar sua empresa em minutos.
            </p>
            <button 
              onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero começar minha jornada com a Tucont")}`, '_blank')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2 inline" />
              Iniciar conversa com IA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
