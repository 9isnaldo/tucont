import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  ShoppingCart, 
  FileText, 
  DollarSign, 
  Users, 
  Award,
  Shield,
  Bot,
  BookOpen,
  CreditCard,
  Stethoscope,
  Calculator,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Phone,
  Zap,
  Target,
  TrendingUp,
  Building
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Produtos = () => {
  const tucontProducts = [
    {
      category: "Produto Principal",
      icon: Shield,
      title: "Certificado Digital",
      description: "Aquisição facilitada e suporte completo para seu certificado digital",
      price: "A partir de R$ 167",
      features: [
        "Certificado A1 ou A3",
        "Suporte completo na instalação",
        "Renovação automática disponível",
        "Compatível com todos os sistemas"
      ],
      benefits: [
        "Processo 100% digital",
        "Entrega em 24h",
        "Suporte técnico incluso"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      category: "SaaS Exclusivo",
      icon: FileText,
      title: "Tucont NF",
      description: "Software proprietário para emissão de notas fiscais com IA",
      price: "A partir de R$ 97/mês",
      features: [
        "Emissão automática de NFe/NFSe",
        "Integração com sistemas existentes",
        "Relatórios em tempo real",
        "Backup automático na nuvem"
      ],
      benefits: [
        "Economia de 90% do tempo",
        "Zero erro de emissão",
        "Compliance garantido"
      ],
      color: "from-green-500 to-emerald-500",
      popular: true
    },
    {
      category: "BPO Financeiro",
      icon: DollarSign,
      title: "Tucont Money",
      description: "Terceirização completa de processos financeiros",
      price: "A partir de R$ 497/mês",
      features: [
        "Conciliação bancária automática",
        "Controle de fluxo de caixa",
        "Gestão de contas a pagar/receber",
        "Relatórios financeiros executivos"
      ],
      benefits: [
        "Redução de 70% nos custos",
        "Visibilidade total das finanças",
        "Equipe especializada"
      ],
      color: "from-orange-500 to-red-500",
      popular: false
    },
    {
      category: "Consultoria",
      icon: Users,
      title: "Tucont Consulting",
      description: "Consultoria estratégica especializada para crescimento",
      price: "A partir de R$ 1.997/mês",
      features: [
        "Análise estratégica completa",
        "Plano de crescimento personalizado",
        "Mentoria executiva",
        "Acompanhamento mensal"
      ],
      benefits: [
        "Crescimento médio de 200%",
        "Metodologia validada",
        "Resultados garantidos"
      ],
      color: "from-purple-500 to-pink-500",
      popular: false
    }
  ];

  const partnerProducts = [
    {
      category: "Saúde",
      icon: Stethoscope,
      title: "Iupcare",
      description: "SaaS completo para gestão de clínicas e consultórios médicos",
      price: "A partir de R$ 297/mês",
      features: [
        "Agenda eletrônica integrada",
        "Prontuário eletrônico",
        "Controle financeiro",
        "Telemedicina integrada"
      ],
      partner: "Parceiro Oficial",
      color: "from-teal-500 to-cyan-500"
    },
    {
      category: "Educação",
      icon: BookOpen,
      title: "Tucont Academy",
      description: "Cursos e treinamentos para empreendedores e contadores",
      price: "A partir de R$ 197/curso",
      features: [
        "Cursos online certificados",
        "Workshops presenciais",
        "Materiais exclusivos",
        "Networking entre alunos"
      ],
      partner: "Produto Próprio",
      color: "from-indigo-500 to-blue-500"
    },
    {
      category: "Financeiro",
      icon: CreditCard,
      title: "Tucont Capital",
      description: "Soluções de crédito e investimento para empresas",
      price: "Sob consulta",
      features: [
        "Análise de crédito rápida",
        "Taxas competitivas",
        "Aprovação em 48h",
        "Acompanhamento personalizado"
      ],
      partner: "Parceiro Financeiro",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const comingSoon = [
    {
      icon: Bot,
      title: "Tucont AI Assistant",
      description: "Assistente de IA para consultas fiscais e tributárias",
      eta: "Q2 2024"
    },
    {
      icon: Target,
      title: "Tucont CRM",
      description: "Sistema de gestão de relacionamento com clientes",
      eta: "Q3 2024"
    },
    {
      icon: Building,
      title: "Tucont Franquias",
      description: "Modelo de franquia da metodologia Tucont",
      eta: "Q4 2024"
    }
  ];

  const stats = [
    { value: "50+", label: "Produtos Disponíveis" },
    { value: "1000+", label: "Clientes Ativos" },
    { value: "99%", label: "Satisfação" },
    { value: "24/7", label: "Suporte" }
  ];

  const handleProductClick = (product: any) => {
    const message = `Olá! Tenho interesse no produto: ${product.title}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

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
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">Ecossistema Completo</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
                Marketplace Tucont
              </span>
              <br />
              <span className="text-white">Soluções Completas</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Produtos e serviços integrados para acelerar seu negócio. 
              Desde software até consultoria, tudo em um só lugar.
            </p>
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

        {/* Tucont Products */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Produtos Tucont
              </h2>
              <p className="text-xl text-slate-300">
                Soluções desenvolvidas pela nossa equipe
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tucontProducts.map((product, index) => (
                <div key={index} className={`relative group ${product.popular ? 'transform scale-105' : ''}`}>
                  {/* Popular Badge */}
                  {product.popular && (
                    <div className="absolute -top-4 left-6 z-10">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Mais Popular
                      </div>
                    </div>
                  )}

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
                  
                  {/* Card */}
                  <div className={`relative bg-slate-900/80 backdrop-blur-xl border ${product.popular ? 'border-green-400/50' : 'border-slate-700/50'} rounded-3xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl h-full flex flex-col`}>
                    
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center`}>
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">{product.category}</div>
                        <h3 className="text-xl font-bold text-white">{product.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4">{product.description}</p>
                    
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
                      {product.price}
                    </div>

                    {/* Features */}
                    <div className="mb-4 flex-grow">
                      <h4 className="font-semibold text-white mb-2">Recursos:</h4>
                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Benefícios:</h4>
                      <div className="space-y-2">
                        {product.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleProductClick(product)}
                        className={`flex-1 bg-gradient-to-r ${product.color} hover:shadow-lg text-white rounded-xl py-3 font-semibold`}
                      >
                        Adquirir
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button 
                        onClick={() => handleProductClick(product)}
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-800 rounded-xl px-4"
                      >
                        Saiba Mais
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Products */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Produtos Parceiros
              </h2>
              <p className="text-xl text-slate-300">
                Soluções selecionadas de parceiros estratégicos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnerProducts.map((product, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center`}>
                      <product.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{product.partner}</div>
                      <h3 className="text-lg font-bold text-white">{product.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4 text-sm">{product.description}</p>
                  
                  <div className="text-lg font-bold text-green-400 mb-4">
                    {product.price}
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handleProductClick(product)}
                    className={`w-full bg-gradient-to-r ${product.color} hover:shadow-lg text-white rounded-xl py-3 text-sm`}
                  >
                    Experimentar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Em Breve
              </h2>
              <p className="text-xl text-slate-300">
                Novos produtos em desenvolvimento
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {comingSoon.map((product, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-slate-300 text-sm mb-4">{product.description}</p>
                    
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                      <Clock className="w-4 h-4" />
                      {product.eta}
                    </div>
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
              Precisa de ajuda para escolher?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Nossa equipe está pronta para te ajudar a encontrar a solução perfeita
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Preciso de ajuda para escolher os produtos ideais para minha empresa")}`, '_blank')}
                className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar com um Consultor
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero conhecer todos os produtos do Marketplace Tucont")}`, '_blank')}
                variant="outline"
                className="border-orange-500 text-orange-500 bg-transparent backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Ver Catálogo Completo
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

export default Produtos;