
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
  Sparkles,
  Handshake,
  Crown,
  BarChart3
} from "lucide-react";

const GrowthModelsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const businessModels = [
    {
      icon: Building,
      title: "SaaS",
      subtitle: "Softwares as a Service",
      description: "Venda, emita notas fiscais, gerencie o financeiro",
      tagline: "Simplificamos Sua Operação",
      price: "A partir de R$ 297/mês",
      color: "from-blue-500 to-cyan-400",
      features: ["Emissão automática", "Gestão financeira", "Relatórios inteligentes"],
      route: "/saas"
    },
    {
      icon: Target,
      title: "Tucont",
      subtitle: "Contabilidade Integrativa",
      description: "Destravamos o empreendedorismo cuidando das duas avenidas",
      tagline: "Unificamos Legal e Negócios",
      price: "Mais Popular",
      color: "from-green-500 to-emerald-400",
      features: ["IA + Mentoria", "Duas avenidas", "Crescimento sustentável"],
      route: "/tucont",
      popular: true
    },
    {
      icon: Building,
      title: "Abertura de empresa",
      subtitle: "CNPJ Rápido",
      description: "CNPJ em 24h com orientação completa sobre melhor enquadramento tributário e estrutura legal",
      tagline: "Empresa regularizada em 24h",
      price: "A partir de R$ 297",
      color: "from-blue-500 to-cyan-400",
      features: ["CNPJ em 24h", "Análise tributária", "Suporte completo"],
      isService: true
    },
    {
      icon: Calculator,
      title: "Diagnóstico tributário",
      subtitle: "Análise Fiscal Completa",
      description: "Análise completa da sua situação fiscal com oportunidades de economia e otimização",
      tagline: "Economia garantida",
      price: "Consulta gratuita",
      color: "from-green-500 to-emerald-400",
      features: ["Análise fiscal", "Economia de impostos", "Relatório detalhado"],
      isService: true
    },
    {
      icon: TrendingUp,
      title: "Mentoria Estratégica",
      subtitle: "Crescimento Orientado",
      description: "Estratégias personalizadas e frameworks validados para crescimento sustentável do seu negócio",
      tagline: "Mentoria especializada",
      price: "R$ 497/mês",
      color: "from-orange-500 to-red-400",
      features: ["Mentoria 1:1", "Plano estratégico", "Acompanhamento mensal"],
      isService: true
    }
  ];

  const partnerModels = [
    {
      icon: Handshake,
      title: "Tucont Partner",
      subtitle: "Partner Integrativo",
      description: "Acesso a plataforma personalizada, processos, automações e IA",
      tagline: "Fazemos juntos",
      price: "Sob consulta",
      color: "from-orange-500 to-red-400",
      features: ["Plataforma exclusiva", "Automações", "Suporte completo"],
      route: "/partner"
    },
    {
      icon: Zap,
      title: "CEC",
      subtitle: "Cada Etapa Conta",
      description: "Implementação na prática, de processos, IA e automações personalizadas",
      tagline: "Fazemos pra você",
      price: "Implementação completa",
      color: "from-purple-500 to-pink-400",
      features: ["Implementação total", "IA personalizada", "Processos otimizados"],
      route: "/cec"
    },
    {
      icon: Crown,
      title: "Poder Contábil",
      subtitle: "Comunidade Premium",
      description: "Comunidade com acesso em primeira mão, a todas soluções Tucont",
      tagline: "Compartilhamos com você",
      price: "Acesso antecipado",
      color: "from-indigo-500 to-blue-400",
      features: ["Primeira mão", "Comunidade exclusiva", "Todas as soluções"],
      route: "/poder-contabil"
    }
  ];

  const handleModelClick = (model: any) => {
    if (model.route) {
      window.location.href = model.route;
    } else if (model.isService) {
      const message = `Olá! Quero este serviço agora: ${model.title} 🚀`;
      window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handleSeeAllServices = () => {
    const message = "Quero ver todos os serviços disponíveis";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const renderModelGrid = (models: any[], title: string, titleColor: string) => (
    <div className="mb-16">
      <h3 className={`text-3xl font-bold text-center mb-12 ${titleColor}`}>
        {title}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model, index) => (
          <div 
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Popular Badge */}
            {model.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Mais Popular
                </div>
              </div>
            )}

            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${model.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
            
            {/* Card */}
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl group-hover:shadow-xl h-full flex flex-col">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${model.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <model.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white leading-tight">
                    {model.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{model.subtitle}</p>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}>
                    {model.price}
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <h5 className="text-lg font-semibold mb-4 text-blue-300">
                {model.tagline}
              </h5>

              {/* Description */}
              <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                {model.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {model.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${model.color}`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                onClick={() => handleModelClick(model)}
                className={`w-full bg-gradient-to-r ${model.color} hover:shadow-lg text-white rounded-xl py-3 font-semibold transform transition-all duration-300 ${hoveredCard === index ? 'scale-105' : ''}`}
              >
                {model.isService ? "Quero este agora" : "Quero conhecer"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-orange-950/30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-blue-300 px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Modelos de Crescimento</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
              Escolha seu modelo de crescimento
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Para quem busca abrir, regularizar ou escalar seu negócio com <span className="font-semibold text-blue-400">tecnologia</span>, 
            inteligência contábil e <span className="font-semibold text-orange-400">orientação estratégica real</span>.
          </p>
        </div>

        {/* Soluções personalizadas */}
        {renderModelGrid(businessModels, "Soluções personalizadas para cada momento da sua jornada empresarial", "text-blue-300")}

        {/* Ver todos os serviços */}
        <div className="text-center mb-16">
          <Button 
            onClick={handleSeeAllServices}
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-slate-500 px-8 py-4 text-lg rounded-xl transition-all duration-300"
          >
            Ver todos os serviços
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Não sabe qual modelo escolher?
            </h3>
            <p className="text-slate-300 mb-6">
              Nossa IA analisa seu perfil e recomenda o modelo ideal para seu momento atual.
            </p>
            <Button 
              onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero descobrir o modelo ideal para mim")}`, '_blank')}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Descobrir meu modelo ideal
            </Button>
          </div>
        </div>
      </div>

      {/* Seção Para contadores e escritórios - movida para o final */}
      <div className="max-w-7xl mx-auto relative z-10 mt-24">
        {renderModelGrid(partnerModels, "Para contadores e escritórios", "text-orange-300")}
      </div>
    </section>
  );
};

export default GrowthModelsSection;
