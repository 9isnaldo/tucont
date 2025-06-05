
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Calculator, 
  TrendingUp, 
  Shield, 
  FileText, 
  Users, 
  Zap, 
  Target,
  ArrowRight,
  Sparkles
} from "lucide-react";

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Building,
      title: "Abertura de empresa",
      description: "CNPJ em 24h com orientação completa sobre melhor enquadramento tributário",
      price: "A partir de R$ 297",
      color: "from-blue-500 to-cyan-400",
      features: ["CNPJ em 24h", "Análise tributária", "Suporte completo"]
    },
    {
      icon: Calculator,
      title: "Diagnóstico tributário",
      description: "Análise completa da sua situação fiscal com oportunidades de economia",
      price: "Consulta gratuita",
      color: "from-green-500 to-emerald-400",
      features: ["Análise fiscal", "Economia de impostos", "Relatório detalhado"]
    },
    {
      icon: TrendingUp,
      title: "Consultoria para escalar",
      description: "Estratégias personalizadas para crescimento sustentável do seu negócio",
      price: "R$ 497/mês",
      color: "from-orange-500 to-red-400",
      features: ["Mentoria 1:1", "Plano estratégico", "Acompanhamento mensal"]
    },
    {
      icon: Shield,
      title: "Compliance automático",
      description: "Mantenha sua empresa sempre em dia com obrigações fiscais automatizadas",
      price: "R$ 197/mês",
      color: "from-purple-500 to-pink-400",
      features: ["Automação fiscal", "Alertas em tempo real", "Zero multas"]
    },
    {
      icon: FileText,
      title: "Emissão de notas",
      description: "Sistema inteligente para emissão automática de notas fiscais",
      price: "R$ 97/mês",
      color: "from-indigo-500 to-blue-400",
      features: ["Emissão automática", "Integração total", "Backup seguro"]
    },
    {
      icon: Users,
      title: "BPO Financeiro",
      description: "Terceirização completa do seu departamento financeiro",
      price: "Sob consulta",
      color: "from-teal-500 to-cyan-400",
      features: ["Equipe especializada", "Relatórios gerenciais", "Consultoria incluída"]
    }
  ];

  const handleServiceClick = (service: any) => {
    const message = `Olá! Quero conhecer o serviço: ${service.title}`;
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl group-hover:shadow-xl h-full flex flex-col">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
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
                <div className="space-y-2 mb-6">
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
                  className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white rounded-xl py-3 font-semibold transform transition-all duration-300 ${hoveredCard === index ? 'scale-105' : ''}`}
                >
                  Quero esse agora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Não sabe qual serviço escolher?
            </h3>
            <p className="text-slate-300 mb-6">
              Nossa IA analisa sua situação e recomenda a solução ideal para sua empresa.
            </p>
            <Button 
              onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero uma análise completa da minha empresa")}`, '_blank')}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Análise gratuita com IA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
