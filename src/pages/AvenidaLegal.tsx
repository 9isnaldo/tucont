import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  Shield, 
  Bot, 
  FileText, 
  Clock, 
  CheckCircle, 
  Zap, 
  ArrowRight,
  Lock,
  Database,
  BarChart3,
  AlertTriangle,
  Calendar,
  Users,
  TrendingUp,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StepCard = ({ step, index }: { step: any, index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      transition: { duration: 0.5 }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="relative z-[1]"
      style={{ zIndex: 4 - index }}
    >
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Step Icon */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
            <step.icon className="w-8 h-8 text-white" />
          </div>
          <div className="hidden md:block">
            <span className="text-3xl font-bold text-slate-800-custom">{step.step}</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-gray-100 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-800-custom mb-2">{step.title}</h3>
            <p className="text-gray-600 mb-4">{step.description}</p>
            
            <div className="grid md:grid-cols-2 gap-3">
              {step.details.map((detail: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AvenidaLegal = () => {
  const automationSteps = [
    {
      step: "01",
      title: "Captura Inteligente",
      description: "Dados automaticamente coletados de múltiplas fontes",
      details: [
        "Integração com bancos e sistemas",
        "Coleta automática de documentos",
        "Sincronização em tempo real",
        "Validação automática de dados"
      ],
      icon: Database,
      color: "bg-gradient-to-br from-blue-600 to-blue-400 shadow-blue-500/20"
    },
    {
      step: "02",
      title: "Processamento IA",
      description: "Análise inteligente e classificação fiscal automática",
      details: [
        "Classificação fiscal automática",
        "Análise de conformidade",
        "Detecção de inconsistências",
        "Sugestões de otimização"
      ],
      icon: Bot,
      color: "bg-gradient-to-br from-cyan-500 to-blue-500 shadow-cyan-500/20"
    },
    {
      step: "03",
      title: "Emissão Automática",
      description: "Geração automática de documentos fiscais",
      details: [
        "Notas fiscais automáticas",
        "Guias de impostos",
        "Relatórios obrigatórios",
        "Documentos trabalhistas"
      ],
      icon: FileText,
      color: "bg-gradient-to-br from-indigo-500 to-blue-600 shadow-indigo-500/20"
    },
    {
      step: "04",
      title: "Compliance Real-time",
      description: "Monitoramento contínuo e alertas preventivos",
      details: [
        "Monitoramento 24/7",
        "Alertas preventivos",
        "Correções automáticas",
        "Atualizações legislativas"
      ],
      icon: Shield,
      color: "bg-gradient-to-br from-blue-700 to-indigo-600 shadow-blue-700/20"
    }
  ];

  const services = [
    {
      icon: FileText,
      title: "Emissão Automática",
      description: "Notas fiscais, boletos e guias de impostos gerados automaticamente",
      features: [
        "Emissão automática de NFe/NFSe",
        "Geração de boletos e guias",
        "Controle de numeração",
        "Validação em tempo real"
      ],
      benefits: [
        "Economia de 80% do tempo",
        "Zero erro de digitação",
        "Conformidade garantida"
      ]
    },
    {
      icon: Clock,
      title: "Compliance Fiscal",
      description: "Monitoramento contínuo de todas as obrigações fiscais",
      features: [
        "Monitoramento de prazos",
        "Entrega automática de obrigações",
        "Acompanhamento de pendências",
        "Alertas preventivos"
      ],
      benefits: [
        "Zero multas por atraso",
        "Conformidade 100%",
        "Tranquilidade total"
      ]
    },
    {
      icon: Zap,
      title: "Regularização Inteligente",
      description: "Correção automática de pendências e inconsistências",
      features: [
        "Detecção automática de erros",
        "Correção de inconsistências",
        "Regularização de pendências",
        "Otimização tributária"
      ],
      benefits: [
        "Redução de 70% em multas",
        "Processo automatizado",
        "Economia fiscal garantida"
      ]
    },
    {
      icon: BarChart3,
      title: "Relatórios Automatizados",
      description: "Dashboards executivos e relatórios em tempo real",
      features: [
        "Dashboards interativos",
        "Relatórios personalizados",
        "Análise de indicadores",
        "Insights estratégicos"
      ],
      benefits: [
        "Visão clara do negócio",
        "Tomada de decisão rápida",
        "Controle total"
      ]
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Criptografia Avançada",
      description: "Proteção de dados com criptografia de ponta a ponta"
    },
    {
      icon: Shield,
      title: "Conformidade LGPD",
      description: "100% compatível com a Lei Geral de Proteção de Dados"
    },
    {
      icon: Database,
      title: "Backup Automatizado",
      description: "Backup automático e redundante em múltiplas localizações"
    },
    {
      icon: Users,
      title: "Controle de Acesso",
      description: "Gestão granular de permissões e acessos"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Garantido" },
    { value: "24/7", label: "Suporte Disponível" },
    { value: "0", label: "Multas por Atraso" },
    { value: "100%", label: "Conformidade Fiscal" }
  ];

  const handleServiceClick = (service: any) => {
    const message = `Olá! Tenho interesse no serviço da Avenida Legal: ${service.title}`;
    window.open(`https://wa.me/5531975740510?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-20 animate-[float_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-20 animate-[float_12s_ease-in-out_infinite]"></div>
      </div>

      <Header />
      
      <main className="pt-24 relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex shadow-lg items-center gap-2 bg-secondary backdrop-blur-xl border border-primary/30 text-primary mb-8 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Zero Preocupação com Fisco</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Avenida Legal
              </span>
              <br />
              <span className="text-slate-800-custom">100% Automatizada</span>
            </h1>
            
            <p className="text-2xl text-tucont-text-secondary font-semibold mb-6">
              Nossa IA cuida de toda burocracia fiscal e trabalhista, 
              deixando você livre para focar no crescimento do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://rouvbymulgc.typeform.com/to/OSIekGSL?typeform-source=www.tucont.com.br" 
                target="_blank" 
              >
              <Button 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Zap className="w-5 h-5 mr-2" />
                Automatizar meu Fisco
              </Button>
              </a>
              <Button 
                onClick={() => window.open(`https://wa.me/5531975740510?text=${encodeURIComponent("Quero falar com um especialista da Avenida Legal")}`, '_blank')}
                variant="outline"
                className="border-blue-500 text-blue-600 bg-white hover:bg-slate-800/90 hover:border-white hover:text-white transition-all duration-300 px-8 py-4 text-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Users className="w-5 h-5 mr-2" />
                Fale com um Especialista
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-900/95">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Process */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-tucont-royal md:text-6xl font-bold leading-tight mb-4">
                Esteira Automatizada
              </h2>
              <p className="text-2xl text-tucont-text-secondary font-semibold">
                Como nossa IA cuida de tudo para você
              </p>
            </div>

            <div className="space-y-32 md:space-y-48 relative">
              {automationSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < automationSteps.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-[120%] bg-gradient-to-b from-blue-400 to-cyan-400 z-0"></div>
                  )}
                  
                  <StepCard step={step} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-orange-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-tucont-royal md:text-6xl font-bold leading-tight mb-4">
                Serviços Detalhados
              </h2>
              <p className="text-2xl text-tucont-text-secondary font-semibold">
                Tudo automatizado para sua tranquilidade
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-14">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-2xl transition-all duration-300 group border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Recursos:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefícios:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleServiceClick(service)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl py-3 transition-all duration-300"
                  >
                    Quero este serviço
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-tucont-royal md:text-6xl font-bold leading-tight mb-4">
                Segurança e Confiabilidade
              </h2>
              <p className="text-2xl text-tucont-text-secondary font-semibold">
                Seus dados protegidos com a mais alta tecnologia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-900/95">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Benefícios da Automação
              </h2>
              <p className="text-xl text-tucont-royal text-semibold">
                Liberdade para focar no que realmente importa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 text-center hover:shadow-lg shadow-white transition-all duration-300">
                <div className="text-5xl font-bold text-cyan-500 mb-2">80%</div>
                <div className="text-gray-900 font-semibold mb-2">Redução de Tempo</div>
                <div className="text-gray-600 text-sm">Economize até 80% do tempo gasto com burocracia fiscal</div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-blue-500 mb-2">0</div>
                <div className="text-gray-900 font-semibold mb-2">Erros Humanos</div>
                <div className="text-gray-600 text-sm">Eliminação completa de erros de digitação e cálculo</div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-indigo-500 mb-2">24/7</div>
                <div className="text-gray-900 font-semibold mb-2">Monitoramento</div>
                <div className="text-gray-600 text-sm">Vigilância contínua de prazos e obrigações</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-tucont-royal mb-4">
              Pronto para automatizar sua conformidade fiscal?
            </h2>
            <p className="text-xl text-tucont-text-secondary font-semibold mb-8">
              Deixe nossa IA cuidar de tudo enquanto você foca no crescimento
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://rouvbymulgc.typeform.com/to/OSIekGSL?typeform-source=www.tucont.com.br" 
                target="_blank" 
              >
              <Button 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Zap className="w-5 h-5 mr-2" />
                Automatizar agora
              </Button>
              </a>
              <Button 
                onClick={() => window.open(`https://wa.me/5531975740510?text=${encodeURIComponent("Quero conhecer mais sobre as soluções legais da Tucont")}`, '_blank')}
                variant="outline"
                className="border-blue-500 text-blue-600 bg-white hover:bg-slate-800/90 hover:border-white hover:text-white transition-all duration-300 px-8 py-4 text-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Conhecer Soluções Legais
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

export default AvenidaLegal;