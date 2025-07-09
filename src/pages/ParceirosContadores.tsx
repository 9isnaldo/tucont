import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  Users, 
  Bot, 
  Award, 
  TrendingUp, 
  Shield, 
  Handshake,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Phone,
  Mail,
  Target,
  Zap,
  Calculator,
  DollarSign,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ParceirosContadores = () => {
  const benefits = [
    {
      icon: Bot,
      title: "Plataforma com IA",
      description: "Acesso exclusivo à nossa tecnologia de automação fiscal",
      features: [
        "Emissão automática de documentos",
        "Compliance em tempo real",
        "Relatórios inteligentes",
        "Suporte 24/7 da plataforma"
      ]
    },
    {
      icon: Award,
      title: "Metodologia Exclusiva",
      description: "Frameworks validados e certificação na metodologia Tucont",
      features: [
        "Treinamento completo",
        "Certificação oficial",
        "Materiais exclusivos",
        "Atualizações constantes"
      ]
    },
    {
      icon: Handshake,
      title: "Suporte Especializado",
      description: "Equipe técnica e comercial dedicada aos parceiros",
      features: [
        "Gerente de conta exclusivo",
        "Suporte técnico prioritário",
        "Treinamentos regulares",
        "Materiais de marketing"
      ]
    },
    {
      icon: TrendingUp,
      title: "Expansão com Marca",
      description: "Leverage da marca Tucont para acelerar seu crescimento",
      features: [
        "Marca reconhecida no mercado",
        "Materiais de marketing prontos",
        "Leads qualificados",
        "Networking exclusivo"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Inscrição",
      description: "Formulário completo e análise de perfil",
      details: [
        "Preenchimento do formulário",
        "Análise de documentos",
        "Verificação de experiência",
        "Avaliação de potencial"
      ],
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Entrevista",
      description: "Avaliação técnica e comercial presencial",
      details: [
        "Entrevista com especialistas",
        "Avaliação técnica",
        "Análise de fit cultural",
        "Definição de território"
      ],
      icon: Shield,
      color: "from-cyan-500 to-blue-500"
    },
    {
      step: "03",
      title: "Treinamento",
      description: "Certificação completa na metodologia Tucont",
      details: [
        "Curso intensivo 40h",
        "Prática supervisionada",
        "Avaliação final",
        "Certificação oficial"
      ],
      icon: Award,
      color: "from-blue-500 to-indigo-500"
    },
    {
      step: "04",
      title: "Início",
      description: "Onboarding e primeiros clientes",
      details: [
        "Setup da operação",
        "Primeiros clientes",
        "Acompanhamento inicial",
        "Suporte contínuo"
      ],
      icon: Zap,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Ana Paula Silva",
      crc: "CRC-SP 1234567",
      growth: "150%",
      quote: "Desde que me tornei parceira Tucont, minha receita aumentou 150%. A plataforma é incrível!",
      image: "/lovable-uploads/1b9f99f8-e6ea-4f81-a968-77762e3ad6d0.png",
      clients: "45 clientes"
    },
    {
      name: "Carlos Henrique Santos",
      crc: "CRC-RJ 9876543",
      growth: "200%",
      quote: "O suporte da Tucont é excepcional. Tenho autonomia total com backup completo da equipe.",
      image: "/lovable-uploads/3cff2625-e342-4add-b38e-c92bcc0db520.png",
      clients: "67 clientes"
    },
    {
      name: "Mariana Costa",
      crc: "CRC-MG 5647382",
      growth: "180%",
      quote: "A metodologia Tucont me diferenciou no mercado. Meus clientes ficaram impressionados.",
      image: "/lovable-uploads/4c92d87f-6732-4486-a6bc-79b4f3e47c57.png",
      clients: "52 clientes"
    }
  ];

  const stats = [
    { value: "150%", label: "Aumento Médio de Receita" },
    { value: "95%", label: "Taxa de Aprovação" },
    { value: "50+", label: "Parceiros Ativos" },
    { value: "24/7", label: "Suporte Disponível" }
  ];

  const requirements = [
    "CRC ativo e regularizado",
    "Experiência mínima de 2 anos",
    "Disponibilidade para treinamento",
    "Comprometimento com excelência",
    "Visão de crescimento",
    "Perfil empreendedor"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-950 via-blue-950/30 to-orange-950/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-orange-500/20 backdrop-blur-xl border border-blue-500/30 text-blue-300 px-6 py-3 rounded-full mb-8">
              <Award className="w-5 h-5" />
              <span className="font-medium">Vagas Limitadas - Processo Seletivo</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Seja um</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
                Agente Integrativo Tucont
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transforme sua contabilidade com nossa plataforma IA, metodologia exclusiva 
              e suporte especializado. Junte-se aos contadores que aumentaram sua receita em 150%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero ser um Agente Integrativo Tucont")}`, '_blank')}
                className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Quero ser Parceiro
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero me inscrever no processo seletivo de parceiros")}`, '_blank')}
                variant="outline"
                className="border-orange-500 text-orange-500 bg-transparent backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Inscreva-se no Processo Seletivo
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Benefícios da Parceria
              </h2>
              <p className="text-xl text-slate-300">
                Tudo que você precisa para se destacar no mercado
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{benefit.description}</p>
                  
                  <div className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Processo Seletivo
              </h2>
              <p className="text-xl text-slate-300">
                4 etapas para se tornar um Agente Integrativo
              </p>
            </div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-blue-500/50 to-orange-500/50"></div>
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

        {/* Requirements Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Requisitos para Parceria
              </h2>
              <p className="text-xl text-slate-300">
                O que você precisa para se tornar um parceiro
              </p>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Depoimentos de Parceiros
              </h2>
              <p className="text-xl text-slate-300">
                O que nossos Agentes Integrativos dizem sobre a parceria
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
                      <p className="text-slate-400 text-sm">{testimonial.crc}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      +{testimonial.growth}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonial.clients}
                    </div>
                  </div>
                  
                  <p className="text-slate-300 italic mb-4">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-1">
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
        <section className="py-16 px-4 bg-gradient-to-r from-blue-950/50 to-orange-950/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pronto para transformar sua contabilidade?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Junte-se aos contadores que estão revolucionando o mercado
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero me inscrever para ser um Agente Integrativo Tucont")}`, '_blank')}
                className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Inscrever-se agora
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero falar com um especialista em parcerias")}`, '_blank')}
                variant="outline"
                className="border-orange-500 text-orange-500 bg-transparent backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar com Especialista em Parcerias
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

export default ParceirosContadores;