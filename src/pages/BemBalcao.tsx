import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  ShoppingCart, 
  FileText, 
  DollarSign, 
  Users, 
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
  TrendingUp,
  Stethoscope,
  Gift,
  Handshake,
  Globe,
  UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CaptureFormModal } from "@/components/ui/capture-form-modal";

const BemBalcao = () => {
  const [showFormModal, setShowFormModal] = useState(false);

  const certificateProducts = [
    {
      title: "Certificado Digital",
      price: "A partir de R$ 167",
      subtitle: "Combo PF+PJ A1",
      highlight: "PF Grátis para novo cliente",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Benefícios",
      features: [
        "Processo 100% digital",
        "Entrega na hora", 
        "Suporte completo na instalação"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Recursos",
      features: [
        "Certificado A1 ou A3",
        "Renovação online disponível",
        "Compatível com todos os sistemas"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const mainProducts = [
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
    },
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
      benefits: [
        "Gestão completa da clínica",
        "Atendimento otimizado",
        "Receita organizada"
      ],
      color: "from-teal-500 to-cyan-500",
      popular: false
    }
  ];

  const partnerBenefits = [
    {
      icon: Gift,
      title: "3 Meses de Destaque Grátis",
      description: "Clientes Tucont ganham destaque premium no BEM por 3 meses"
    },
    {
      icon: Users,
      title: "Encontre e Seja Encontrado",
      description: "Conecte-se com empresários no momento certo de seus negócios"
    },
    {
      icon: TrendingUp,
      title: "Escale sua Receita",
      description: "Acesse um marketplace nacional de oportunidades"
    },
    {
      icon: Handshake,
      title: "Parcerias Estratégicas",
      description: "Faça parte de um ecossistema colaborativo e lucrativo"
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

  const handleCertificateClick = () => {
    const message = `Olá! Tenho interesse no Certificado Digital - Combo PF+PJ A1`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-tucont-royal/20 via-tucont-orange/10 to-tucont-secondary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tucont-royal/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tucont-orange/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-secondary border border-border text-tucont-royal px-6 py-3 rounded-full mb-8">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">Ecossistema Completo</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-tucont-royal via-tucont-orange to-tucont-text-primary bg-clip-text text-transparent">
                Bem - Balcão do Empresário
              </span>
              <br />
              <span className="text-tucont-text-primary">Marketplace Tucont</span>
            </h1>
            
            <p className="text-xl text-tucont-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
              Produtos e serviços adequados ao seu momento e integrados para acelerar seu negócio. 
              Uma abundância de parceiros, tudo em um só lugar.
            </p>
          </div>
        </section>


        {/* Certificate Offer Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Oferta Especial - Certificado Digital
              </h2>
              <p className="text-xl text-slate-300">
                Sua empresa segura e pronta para faturar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {certificateProducts.map((cert, index) => (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
                  
                  <div className={`relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl h-full flex flex-col justify-between`}>
                    
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                      
                      {cert.price && (
                        <>
                          <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                            {cert.price}
                          </div>
                          <div className="text-slate-300 mb-2">{cert.subtitle}</div>
                          {cert.highlight && (
                            <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-bold">
                              {cert.highlight}
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {cert.features && (
                      <div className="mb-6 flex-grow">
                        <div className="space-y-3">
                          {cert.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-slate-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button 
                      onClick={handleCertificateClick}
                      variant="cta-green"
                      size="lg"
                      className="w-full"
                    >
                      Adquirir
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Products */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Nossos Produtos em Destaque
              </h2>
              <p className="text-xl text-slate-300">
                Soluções completas para seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mainProducts.map((product, index) => (
                <div key={index} className={`relative group ${product.popular ? 'transform scale-105' : ''}`}>
                  {product.popular && (
                    <div className="absolute -top-4 left-6 z-10">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Mais Popular
                      </div>
                    </div>
                  )}

                  <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
                  
                  <div className={`relative bg-slate-900/80 backdrop-blur-xl border ${product.popular ? 'border-green-400/50' : 'border-slate-700/50'} rounded-3xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl h-full flex flex-col`}>
                    
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

                    <div className="flex gap-3">
                    <Button 
                        onClick={() => handleProductClick(product)}
                        variant="cta-orange"
                        size="lg"
                        className="flex-1"
                      >
                        Adquirir
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button 
                        onClick={() => handleProductClick(product)}
                        variant="primary-outline"
                        className="px-4"
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

        {/* Seja Parceiro do BEM */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">
                Seja Parceiro do BEM
              </h2>
              <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
                Troque a escassez pela abundância!
              </p>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                Faça parte do maior marketplace de serviços empresariais do Brasil. 
                Conecte-se com empresários no momento adequado do seu negócio e escale sua receita.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {partnerBenefits.map((benefit, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-slate-300">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Encontre e Seja Encontrado
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                No BEM você encontrará oportunidades e será encontrado por empresários 
                que precisam exatamente do que você oferece. Prestadores de serviços, 
                consultores, fornecedores - todos unidos em um ecossistema colaborativo.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  onClick={() => window.open('https://app.balcaodoempresario.com.br/acesso/cadastro', '_blank')}
                  variant="cta-orange"
                  size="lg"
                  className="px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Quero Ser Parceiro
                </Button>
              </div>
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
                onClick={() => setShowFormModal(true)}
                variant="royal"
                size="lg"
                className="px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar Conosco
              </Button>
              <Button 
                onClick={() => window.open('https://www.balcaodoempresario.com.br/', '_blank')}
                variant="primary-outline"
                size="lg"
                className="px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Ver o Bem - Balcão do Empresário
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
      <CaptureFormModal 
        isOpen={showFormModal} 
        onClose={() => setShowFormModal(false)}
        hasExtraFields={true}
      />
    </div>
  );
};

export default BemBalcao;