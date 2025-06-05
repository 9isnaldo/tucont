
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  Users, 
  Zap, 
  TrendingUp, 
  Crown, 
  Shield, 
  Target, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Bot,
  CheckCircle,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Parceiros = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Plataforma completa",
      description: "Acesso total à nossa tecnologia de automação fiscal e contábil já validada no mercado"
    },
    {
      icon: Bot,
      title: "IA integrada", 
      description: "Use nossa inteligência artificial e frameworks exclusivos em seus atendimentos diários"
    },
    {
      icon: Crown,
      title: "Modelo validado",
      description: "Metodologia comprovada inspirada no modelo XP que transforma contadores em consultores estratégicos"
    },
    {
      icon: Shield,
      title: "Suporte total",
      description: "Apoio completo com marca consolidada e rede de parceiros para trocar experiências"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Processo seletivo",
      description: "Análise do perfil e entrevista para garantir fit cultural"
    },
    {
      step: "02", 
      title: "Onboarding completo",
      description: "Treinamento na metodologia e acesso às ferramentas"
    },
    {
      step: "03",
      title: "Certificação",
      description: "Certificação como Agente de Contabilidade Integrativa"
    },
    {
      step: "04",
      title: "Suporte contínuo",
      description: "Acompanhamento e suporte para crescimento sustentável"
    }
  ];

  const results = [
    {
      icon: DollarSign,
      metric: "300%",
      description: "Aumento médio de receita dos agentes"
    },
    {
      icon: Users,
      metric: "100+",
      description: "Agentes ativos em todo o Brasil"
    },
    {
      icon: TrendingUp,
      metric: "95%",
      description: "Taxa de satisfação dos parceiros"
    }
  ];

  const openWhatsApp = () => {
    const message = "Quero ser um Agente Tucont - Conte-me mais sobre a parceria";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
              <Crown className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
                Para Contadores
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Torne-se um Agente de Contabilidade Integrativa
              </span>
            </h1>
            
            <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Transforme sua contabilidade tradicional em um negócio estratégico. 
              Com a Tucont, você deixa de ser apenas operacional e passa a construir 
              um <span className="font-semibold text-yellow-400">negócio de verdade</span>.
            </p>

            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-slate-900 px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Users className="w-6 h-6 mr-3" />
              Quero ser um Agente Tucont
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Por que se tornar um Agente Tucont?
              </h2>
              <p className="text-slate-300 text-lg">
                Acesso completo ao ecossistema de tecnologia e método da Tucont
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group flex gap-4 p-6 bg-slate-800/30 backdrop-blur-sm border border-orange-500/20 rounded-2xl hover:bg-orange-500/10 hover:border-orange-500/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-orange-200 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Como funciona o processo
              </h2>
              <p className="text-slate-300 text-lg">
                Passo a passo para se tornar um Agente de Contabilidade Integrativa
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Resultados dos nossos agentes
              </h2>
              <p className="text-slate-300 text-lg">
                Números que comprovam o sucesso da nossa metodologia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <result.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">{result.metric}</div>
                  <p className="text-slate-300">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perguntas frequentes
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Preciso ter experiência prévia em contabilidade?",
                  answer: "Sim, buscamos contadores já formados e com experiência prática. O programa é focado em elevar o nível de atuação, não em ensinar contabilidade básica."
                },
                {
                  question: "Quanto tempo leva para estar operando como agente?",
                  answer: "O processo completo leva entre 30 a 60 dias, incluindo seleção, treinamento e certificação."
                },
                {
                  question: "Existe taxa de entrada ou mensalidade?",
                  answer: "Não cobramos taxa de entrada. O modelo é baseado em parceria comercial com divisão de receitas."
                },
                {
                  question: "Posso manter meus clientes atuais?",
                  answer: "Sim, você pode manter sua carteira atual e ainda ter acesso às nossas ferramentas para melhorar o atendimento."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Pronto para transformar sua carreira?
              </h3>
              <p className="text-orange-200 mb-6 text-lg">
                Junte-se aos contadores que já descobriram como triplicar a receita oferecendo valor real aos clientes.
              </p>
              
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-slate-900 px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Crown className="w-6 h-6 mr-3" />
                Iniciar processo seletivo
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

export default Parceiros;
