
import { Check, Star, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlansSection = () => {
  const plans = [
    {
      name: "Essencial",
      description: "Para empreendedores que estão começando",
      price: "R$ 297",
      period: "/mês",
      features: [
        "Abertura de empresa completa",
        "Emissão de notas fiscais",
        "Compliance fiscal automatizado",
        "Suporte via WhatsApp",
        "Relatórios mensais"
      ],
      cta: "Começar agora",
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Crescimento",
      description: "Para empresas que querem escalar",
      price: "R$ 597",
      period: "/mês",
      features: [
        "Tudo do plano Essencial",
        "Mentoria estratégica mensal",
        "Análise de mercado personalizada",
        "Planejamento tributário avançado",
        "BPO financeiro incluído",
        "Certificado digital gratuito"
      ],
      cta: "Escolher este plano",
      popular: true,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Enterprise",
      description: "Para empresas estabelecidas",
      price: "Sob consulta",
      period: "",
      features: [
        "Tudo do plano Crescimento",
        "Mentoria semanal dedicada",
        "Auditoria completa trimestral",
        "Implementação de frameworks exclusivos",
        "Consultoria para IPO/M&A",
        "Suporte prioritário 24/7"
      ],
      cta: "Falar com especialista",
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const handlePlanClick = (plan: any) => {
    const message = `Olá! Tenho interesse no plano ${plan.name}. Gostaria de mais informações.`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="planos" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-orange-950/30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
              Escolha o plano ideal para sua empresa
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Soluções completas que combinam <span className="font-semibold text-blue-400">tecnologia avançada</span> 
            com <span className="font-semibold text-orange-400">mentoria estratégica</span> para o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative group ${plan.popular ? 'transform scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
              
              {/* Card */}
              <div className={`relative bg-slate-900/80 backdrop-blur-xl border ${plan.popular ? 'border-orange-400/50' : 'border-slate-700/50'} rounded-3xl p-8 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl group-hover:shadow-xl h-full flex flex-col`}>
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center gap-2">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-400 text-lg">{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => handlePlanClick(plan)}
                  className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg text-white rounded-xl py-4 font-semibold hover-glow-orange text-lg`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Não sabe qual plano escolher?
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Fale conosco e nossa equipe te ajudará a encontrar a solução perfeita para sua empresa.
            </p>
            <Button 
              onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero ajuda para escolher o melhor plano para minha empresa")}`, '_blank')}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-6 h-6 mr-3" />
              Falar com especialista
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
