
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JourneySection from "@/components/sections/JourneySection";
import { 
  Building, 
  Calculator, 
  TrendingUp, 
  FileText, 
  Shield, 
  BarChart3, 
  Users, 
  Zap,
  ArrowRight,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Solucoes = () => {
  const legalServices = [
    {
      icon: Building,
      title: "Abertura de empresa",
      description: "CNPJ em 24h com orientação completa sobre enquadramento tributário",
      price: "A partir de R$ 297"
    },
    {
      icon: FileText,
      title: "Emissão de notas fiscais",
      description: "Plataforma automatizada para emissão e controle fiscal",
      price: "Incluso nos planos"
    },
    {
      icon: Calculator,
      title: "Diagnóstico tributário",
      description: "Análise completa com oportunidades de economia fiscal",
      price: "Consulta gratuita"
    },
    {
      icon: Shield,
      title: "Compliance fiscal",
      description: "Automação completa de obrigações fiscais e trabalhistas",
      price: "A partir de R$ 197/mês"
    }
  ];

  const businessServices = [
    {
      icon: TrendingUp,
      title: "Mentoria estratégica",
      description: "Frameworks validados para crescimento sustentável",
      price: "R$ 497/mês"
    },
    {
      icon: BarChart3,
      title: "Análise de mercado",
      description: "Relatórios personalizados sobre seu setor e concorrência",
      price: "A partir de R$ 297"
    },
    {
      icon: Users,
      title: "BPO financeiro",
      description: "Terceirização inteligente de processos financeiros",
      price: "Sob consulta"
    },
    {
      icon: Globe,
      title: "Estruturação para escala",
      description: "Preparação completa para crescimento e expansão",
      price: "A partir de R$ 997"
    }
  ];

  const handleServiceClick = (service: any) => {
    const message = `Olá! Tenho interesse no serviço: ${service.title}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
                Todas as nossas soluções
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Descubra como a Tucont pode transformar sua empresa através das nossas duas avenidas integradas
            </p>
          </div>
        </section>

        {/* Como funciona na prática */}
        <JourneySection />

        {/* Avenida Legal */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Avenida Legal</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Conformidade e automação fiscal
              </h2>
              <p className="text-slate-300 text-lg">
                Deixe nossa IA cuidar de toda burocracia fiscal e trabalhista
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {legalServices.map((service, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
                  <p className="text-blue-400 font-semibold text-sm mb-4">{service.price}</p>
                  <Button 
                    onClick={() => handleServiceClick(service)}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl py-2 text-sm"
                  >
                    Quero este serviço
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avenida de Negócios */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full px-6 py-3 mb-6">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Avenida de Negócios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Crescimento estratégico e mentoria
              </h2>
              <p className="text-slate-300 text-lg">
                Frameworks validados e mentoria especializada para escalar seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessServices.map((service, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
                  <p className="text-orange-400 font-semibold text-sm mb-4">{service.price}</p>
                  <Button 
                    onClick={() => handleServiceClick(service)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl py-2 text-sm"
                  >
                    Quero este serviço
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Pronto para transformar sua empresa?
              </h3>
              <p className="text-slate-300 mb-6 text-lg">
                Fale conosco e descubra como a Tucont pode revolucionar seu negócio.
              </p>
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero conhecer todas as soluções da Tucont")}`, '_blank')}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-6 h-6 mr-3" />
                Falar com especialista
                <ArrowRight className="w-6 h-6 ml-3" />
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

export default Solucoes;
