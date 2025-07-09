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
      color: "from-blue-500 to-cyan-500"
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
      color: "from-cyan-500 to-blue-500"
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
      color: "from-blue-500 to-indigo-500"
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
      color: "from-indigo-500 to-purple-500"
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
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-500/30 text-blue-300 px-6 py-3 rounded-full mb-8">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Zero Preocupação com Fisco</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Avenida Legal
              </span>
              <br />
              <span className="text-white">100% Automatizada</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Nossa IA cuida de toda burocracia fiscal e trabalhista, 
              deixando você livre para focar no crescimento do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero automatizar meu fisco com a Avenida Legal")}`, '_blank')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Automatizar meu Fisco
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero falar com um especialista da Avenida Legal")}`, '_blank')}
                variant="outline"
                className="border-blue-500 text-blue-500 bg-transparent backdrop-blur-sm hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                <Users className="w-5 h-5 mr-2" />
                Fale com um Especialista
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
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Process */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Esteira Automatizada
              </h2>
              <p className="text-xl text-slate-300">
                Como nossa IA cuida de tudo para você
              </p>
            </div>

            <div className="space-y-12">
              {automationSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < automationSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-blue-500/50 to-cyan-500/50"></div>
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
                Serviços Detalhados
              </h2>
              <p className="text-xl text-slate-300">
                Tudo automatizado para sua tranquilidade
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Recursos:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Benefícios:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleServiceClick(service)}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl py-3"
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
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Segurança e Confiabilidade
              </h2>
              <p className="text-xl text-slate-300">
                Seus dados protegidos com a mais alta tecnologia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-800/80 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-950/50 to-cyan-950/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Benefícios da Automação
              </h2>
              <p className="text-xl text-slate-300">
                Liberdade para focar no que realmente importa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-white font-semibold mb-2">Redução de Tempo</div>
                <div className="text-slate-300 text-sm">Economize até 80% do tempo gasto com burocracia fiscal</div>
              </div>
              
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">0</div>
                <div className="text-white font-semibold mb-2">Erros Humanos</div>
                <div className="text-slate-300 text-sm">Eliminação completa de erros de digitação e cálculo</div>
              </div>
              
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-white font-semibold mb-2">Monitoramento</div>
                <div className="text-slate-300 text-sm">Vigilância contínua de prazos e obrigações</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pronto para automatizar sua conformidade fiscal?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Deixe nossa IA cuidar de tudo enquanto você foca no crescimento
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero automatizar minha conformidade fiscal com a Avenida Legal")}`, '_blank')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Automatizar agora
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero conhecer mais sobre as soluções legais da Tucont")}`, '_blank')}
                variant="outline"
                className="border-blue-500 text-blue-500 bg-transparent backdrop-blur-sm hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 px-8 py-4 text-lg rounded-full"
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