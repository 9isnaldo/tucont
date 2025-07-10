import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Lightbulb, 
  Rocket, 
  ArrowRight,
  CheckCircle,
  Star,
  MessageCircle,
  Calendar,
  Award,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AvenidaEmpreendedora = () => {
  const journeySteps = [
    {
      step: "01",
      title: "Estruturação",
      description: "MVP, validação e modelo de negócio",
      details: [
        "Análise de viabilidade do negócio",
        "Desenvolvimento do MVP",
        "Validação com público-alvo",
        "Estruturação do modelo de negócio"
      ],
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500"
    },
    {
      step: "02", 
      title: "Go-to-Market",
      description: "Estratégia de lançamento e posicionamento",
      details: [
        "Definição de posicionamento",
        "Estratégia de precificação",
        "Canais de distribuição",
        "Campanha de lançamento"
      ],
      icon: Rocket,
      color: "from-orange-500 to-red-500"
    },
    {
      step: "03",
      title: "Operação",
      description: "Processos, automações e team building",
      details: [
        "Mapeamento de processos",
        "Implementação de automações",
        "Estruturação da equipe",
        "Controles operacionais"
      ],
      icon: Users,
      color: "from-red-500 to-pink-500"
    },
    {
      step: "04",
      title: "Crescimento",
      description: "Expansão, parcerias e investimentos",
      details: [
        "Estratégias de crescimento",
        "Desenvolvimento de parcerias",
        "Captação de investimentos",
        "Expansão geográfica"
      ],
      icon: TrendingUp,
      color: "from-pink-500 to-purple-500"
    },
    {
      step: "05",
      title: "Escala",
      description: "Consolidação e novos mercados",
      details: [
        "Consolidação de mercado",
        "Expansão para novos mercados",
        "Estratégias de exit",
        "Perpetuação do negócio"
      ],
      icon: Target,
      color: "from-purple-500 to-blue-500"
    }
  ];

  const services = [
    {
      icon: BarChart3,
      title: "Consultoria Estratégica",
      description: "Diagnóstico completo, planejamento estratégico e acompanhamento da execução",
      features: [
        "Análise SWOT detalhada",
        "Plano estratégico 12 meses",
        "OKRs e métricas de performance",
        "Revisões mensais de progresso"
      ],
      price: "A partir de R$ 2.997"
    },
    {
      icon: Award,
      title: "Frameworks Exclusivos",
      description: "Metodologias validadas por centenas de empresas para crescimento sustentável",
      features: [
        "Framework de Crescimento Tucont",
        "Metodologia de Validação de Mercado",
        "Sistema de Gestão de Performance",
        "Playbooks executivos"
      ],
      price: "Incluso na consultoria"
    },
    {
      icon: Zap,
      title: "Software Integrado",
      description: "Plataforma completa para vendas, emissão de notas fiscais e controle financeiro",
      features: [
        "CRM integrado",
        "Emissão automática de NF",
        "Controle financeiro completo",
        "Relatórios executivos"
      ],
      price: "A partir de R$ 497/mês"
    },
    {
      icon: MessageCircle,
      title: "Mentoria 1:1",
      description: "Sessões personalizadas com especialistas certificados",
      features: [
        "Sessões semanais ou mensais",
        "Mentores especialistas certificados",
        "Plano de desenvolvimento personalizado",
        "Suporte entre sessões"
      ],
      price: "A partir de R$ 997/mês"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart",
      growth: "350%",
      quote: "Com a metodologia Tucont, crescemos 350% em 18 meses. A mentoria foi fundamental para estruturar nossos processos.",
      image: "/lovable-uploads/1b9f99f8-e6ea-4f81-a968-77762e3ad6d0.png"
    },
    {
      name: "Maria Santos",
      company: "EcoLogistics",
      growth: "280%",
      quote: "Os frameworks exclusivos da Tucont nos ajudaram a expandir para 3 novos estados em menos de 1 ano.",
      image: "/lovable-uploads/3cff2625-e342-4add-b38e-c92bcc0db520.png"
    },
    {
      name: "Roberto Lima",
      company: "FinTech Solutions",
      growth: "420%",
      quote: "A consultoria estratégica foi o diferencial. Hoje somos líderes no nosso segmento.",
      image: "/lovable-uploads/4c92d87f-6732-4486-a6bc-79b4f3e47c57.png"
    }
  ];

  const handleServiceClick = (service: any) => {
    const message = `Olá! Tenho interesse no serviço da Avenida Empreendedora: ${service.title}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-tucont-royal/20 via-tucont-orange/10 to-tucont-secondary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tucont-orange/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tucont-royal/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-secondary border border-border text-tucont-royal px-6 py-3 rounded-full mb-8">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Nosso Grande Diferencial</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-tucont-orange via-tucont-royal to-tucont-text-primary bg-clip-text text-transparent">
                Avenida Empreendedora
              </span>
              <br />
              <span className="text-tucont-text-primary">Da ideia à operação</span>
            </h1>
            
            <p className="text-xl text-tucont-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
              Jornada completa com metodologia exclusiva, frameworks validados e mentoria 1:1 
              para transformar sua ideia em um negócio de sucesso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero conhecer a Avenida Empreendedora")}`, '_blank')}
                className="bg-tucont-cta hover:bg-tucont-cta/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover-glow-cta transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Quero Empreender com a Tucont
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero falar com um consultor da Avenida Empreendedora")}`, '_blank')}
                variant="outline"
                className="border-tucont-orange text-tucont-orange bg-transparent hover:bg-tucont-orange/10 hover:border-tucont-orange/80 hover:text-tucont-orange/80 transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale com um Consultor
              </Button>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-24 px-4 bg-tucont-secondary">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tucont-text-primary mb-4">
                Sua Jornada Empreendedora
              </h2>
              <p className="text-xl text-tucont-text-secondary">
                5 etapas estruturadas para o crescimento sustentável
              </p>
            </div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-orange-500/50 to-red-500/50"></div>
                  )}
                  
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Step Icon */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="hidden md:block">
                        <span className="text-3xl font-bold text-slate-600">{step.step}</span>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-slate-300 mb-4">{step.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Nossos Serviços Detalhados
              </h2>
              <p className="text-xl text-slate-300">
                Tudo que você precisa para construir um negócio de sucesso
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-orange-400 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handleServiceClick(service)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl py-3"
                  >
                    Quero este serviço
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Casos de Sucesso
              </h2>
              <p className="text-xl text-slate-300">
                Empresas que cresceram com nossa metodologia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.company}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        +{testimonial.growth}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 italic">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-950/50 to-red-950/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pronto para transformar sua ideia em negócio?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Comece sua jornada empreendedora com quem entende do assunto
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero começar minha jornada empreendedora com a Tucont")}`, '_blank')}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Começar minha jornada
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero agendar uma consulta gratuita")}`, '_blank')}
                variant="outline"
                className="border-orange-500 text-orange-500 bg-transparent backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar consulta gratuita
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AvenidaEmpreendedora;