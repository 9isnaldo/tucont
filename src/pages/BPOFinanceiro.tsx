
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  Heart, 
  Eye, 
  Handshake, 
  TrendingUp,
  Users,
  BarChart3,
  Bot,
  FileText,
  CreditCard,
  Banknote,
  ArrowRight,
  CheckCircle,
  DollarSign
} from "lucide-react";

const BPOFinanceiro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const valores = [
    {
      icon: Target,
      title: "Excelência",
      description: "Comprometimento com a qualidade em todos os processos"
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description: "Tecnologia de ponta para otimizar sua gestão financeira"
    },
    {
      icon: Eye,
      title: "Transparência",
      description: "Clareza total em todos os relatórios e processos"
    },
    {
      icon: Handshake,
      title: "Parceria",
      description: "Relacionamento duradouro focado no seu crescimento"
    }
  ];

  const solucoes = [
    {
      icon: Users,
      title: "Equipe especializada e atualizada",
      description: "Profissionais capacitados com conhecimento sempre atualizado"
    },
    {
      icon: BarChart3,
      title: "Relatórios e dashboards personalizados",
      description: "Visualização clara e customizada dos seus dados financeiros"
    },
    {
      icon: TrendingUp,
      title: "Outsourcing completo",
      description: "Terceirização de processos financeiros e administrativos"
    },
    {
      icon: Bot,
      title: "Software próprio ou integração",
      description: "Nossa tecnologia ou integração com seu sistema atual"
    },
    {
      icon: Target,
      title: "Automação inteligente",
      description: "Processos automatizados com IA preditiva"
    }
  ];

  const pacoteBasico = [
    "Emissão de Notas Fiscais",
    "Contas a Pagar",
    "Contas a Receber", 
    "Conciliação Bancária"
  ];

  const pacoteIntermediario = [
    "Todos os serviços do Básico",
    "Fluxo de Caixa",
    "Dashboard Financeiro"
  ];

  const openWhatsApp = (service = "BPO Financeiro") => {
    const message = `Olá! Tenho interesse no serviço de ${service}. Gostaria de saber mais informações.`;
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
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                BPO Financeiro
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Terceirize sua gestão financeira com quem entende do seu negócio
            </p>
          </div>
        </section>

        {/* Missão Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nossa Missão</h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                "Transformar a gestão financeira e administrativa de PMEs através de serviços especializados e tecnologia de ponta"
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {valores.map((valor, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <valor.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{valor.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 text-center">
                      {valor.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-slate-900/50 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Nosso Diferencial</h3>
                <p className="text-lg text-blue-200">
                  "Combinamos experiência em gestão financeira com tecnologia própria adaptável"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Soluções Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nossa Solução Completa
              </h2>
              <p className="text-slate-300 text-lg">
                Tecnologia e expertise para otimizar sua gestão financeira
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solucoes.map((solucao, index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                    <solucao.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{solucao.title}</h3>
                  <p className="text-slate-400">{solucao.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pacotes Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pacotes de Serviços
              </h2>
              <p className="text-slate-300 text-lg">
                Escolha o pacote ideal para sua empresa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Pacote Básico */}
              <Card className="bg-slate-900/50 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Básico</CardTitle>
                  <CardDescription className="text-slate-400">
                    Essencial para sua gestão financeira
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pacoteBasico.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => openWhatsApp("Pacote Básico")}
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>

              {/* Pacote Intermediário */}
              <Card className="bg-slate-900/50 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 relative">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Recomendado
                </div>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Intermediário</CardTitle>
                  <CardDescription className="text-slate-400">
                    Controle completo das suas finanças
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pacoteIntermediario.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => openWhatsApp("Pacote Intermediário")}
                    className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Pronto para otimizar sua gestão financeira?
              </h3>
              <p className="text-slate-300 mb-6 text-lg">
                Fale conosco e descubra como podemos transformar a gestão da sua empresa.
              </p>
              <Button 
                onClick={() => openWhatsApp()}
                className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <DollarSign className="w-6 h-6 mr-3" />
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

export default BPOFinanceiro;
