
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Calculator, 
  TrendingUp, 
  Shield, 
  Globe, 
  Users, 
  Zap, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Building,
      title: "Abertura de empresa",
      description: "CNPJ em 24h com orientação completa sobre melhor enquadramento tributário e estrutura legal",
      price: "A partir de R$ 297",
      color: "from-blue-500 to-cyan-400",
      features: ["CNPJ em 24h", "Análise tributária", "Suporte completo"]
    },
    {
      icon: Calculator,
      title: "Diagnóstico tributário",
      description: "Análise completa da sua situação fiscal com oportunidades de economia e otimização",
      price: "Consulta gratuita",
      color: "from-green-500 to-emerald-400",
      features: ["Análise fiscal", "Economia de impostos", "Relatório detalhado"]
    },
    {
      icon: TrendingUp,
      title: "Planejamento para escalar",
      description: "Estratégias personalizadas e frameworks validados para crescimento sustentável",
      price: "R$ 497/mês",
      color: "from-orange-500 to-red-400",
      features: ["Mentoria 1:1", "Plano estratégico", "Acompanhamento mensal"]
    },
    {
      icon: Shield,
      title: "Regularização fiscal",
      description: "Resolva pendências e mantenha sua empresa sempre em dia com automação inteligente",
      price: "R$ 197/mês",
      color: "from-purple-500 to-pink-400",
      features: ["Automação fiscal", "Alertas em tempo real", "Zero multas"]
    },
    {
      icon: Globe,
      title: "Criação de site + solução digital",
      description: "Site profissional + ferramentas digitais integradas ao seu negócio",
      price: "R$ 897",
      color: "from-indigo-500 to-blue-400",
      features: ["Site responsivo", "Integração total", "Suporte técnico"]
    }
  ];

  const handleServiceClick = (service: any) => {
    const message = `Olá! Quero este agora: ${service.title} 🚀`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-orange-950/30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-blue-300 px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Serviços Inteligentes</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
              Soluções que sua empresa precisa
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Cada serviço é <span className="font-semibold text-blue-400">otimizado por IA</span> e 
            acompanhado por especialistas para garantir resultados excepcionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl group-hover:shadow-xl h-full flex flex-col">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                    <div className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => handleServiceClick(service)}
                  className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white rounded-xl py-4 font-semibold transform transition-all duration-300 ${hoveredCard === index ? 'scale-105' : ''} text-lg`}
                >
                  Quero este agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Não sabe qual serviço escolher?
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Nossa IA analisa sua situação e recomenda a solução ideal para sua empresa.
            </p>
            <Button 
              onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero uma análise completa da minha empresa")}`, '_blank')}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-6 h-6 mr-3" />
              Análise gratuita com IA
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
