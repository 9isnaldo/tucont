import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check, Star, Zap, ArrowRight, Shield, Users, TrendingUp, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Planos = () => {
  const plans = [
    {
      name: "Essencial",
      description: "Para empreendedores que estão começando",
      price: "R$ 297",
      period: "/mês",
      features: [
        "Abertura de empresa completa",
        "Emissão de notas fiscais",
        "Compliance fiscal automatizado",
        "Suporte via WhatsApp",
        "Relatórios mensais",
        "Certificado digital básico",
        "Backup automático de dados"
      ],
      limits: [
        "Até 100 notas fiscais/mês",
        "1 usuário",
        "Suporte em horário comercial"
      ],
      cta: "Começar agora",
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Crescimento",
      description: "Para empresas que querem escalar",
      price: "R$ 597",
      period: "/mês",
      features: [
        "Tudo do plano Essencial",
        "Mentoria estratégica mensal",
        "Análise de mercado personalizada",
        "Planejamento tributário avançado",
        "BPO financeiro incluído",
        "Certificado digital premium",
        "Relatórios executivos semanais",
        "Integração com bancos",
        "Dashboard avançado"
      ],
      limits: [
        "Até 500 notas fiscais/mês",
        "3 usuários",
        "Suporte prioritário"
      ],
      cta: "Escolher este plano",
      popular: true,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Enterprise",
      description: "Para empresas estabelecidas",
      price: "Sob consulta",
      period: "",
      features: [
        "Tudo do plano Crescimento",
        "Mentoria semanal dedicada",
        "Auditoria completa trimestral",
        "Implementação de frameworks exclusivos",
        "Consultoria para IPO/M&A",
        "Suporte prioritário 24/7",
        "Gerente de conta dedicado",
        "Integrações customizadas",
        "Relatórios personalizados"
      ],
      limits: [
        "Notas fiscais ilimitadas",
        "Usuários ilimitados",
        "Suporte 24/7"
      ],
      cta: "Falar com especialista",
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const faqs = [
    {
      question: "Posso mudar de plano a qualquer momento?",
      answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas no próximo ciclo de faturamento."
    },
    {
      question: "O que está incluído no BPO Financeiro?",
      answer: "O BPO Financeiro inclui: conciliação bancária, controle de fluxo de caixa, emissão de relatórios financeiros, gestão de contas a pagar e receber, e análise de indicadores financeiros."
    },
    {
      question: "Como funciona a mentoria estratégica?",
      answer: "A mentoria é realizada por especialistas certificados através de sessões individuais, onde desenvolvemos estratégias personalizadas para o crescimento do seu negócio."
    },
    {
      question: "Existe período de carência ou fidelidade?",
      answer: "Não há período de carência ou fidelidade. Você pode cancelar seu plano a qualquer momento com 30 dias de antecedência."
    },
    {
      question: "Os dados da minha empresa ficam seguros?",
      answer: "Sim, utilizamos criptografia de ponta a ponta, servidores seguros e compliance total com a LGPD. Seus dados estão 100% protegidos."
    }
  ];

  const handlePlanClick = (plan: any) => {
    const message = `Olá! Tenho interesse no plano ${plan.name}. Gostaria de mais informações.`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-blue-400/30 text-blue-300 px-6 py-3 rounded-full mb-8">
              <Star className="w-5 h-5" />
              <span className="font-medium">Planos Validados por +1000 Empresas</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
                Escolha o plano ideal para acelerar seu negócio
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Soluções completas que combinam <span className="font-semibold text-blue-400">tecnologia avançada</span> 
              com <span className="font-semibold text-orange-400">mentoria estratégica</span> para o crescimento sustentável.
            </p>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-orange-950/30"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative group ${plan.popular ? 'transform scale-105' : ''}`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Mais Popular
                      </div>
                    </div>
                  )}

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
                  
                  {/* Card */}
                  <div className={`relative bg-slate-900/80 backdrop-blur-xl border ${plan.popular ? 'border-orange-400/50' : 'border-slate-700/50'} rounded-3xl p-8 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl group-hover:shadow-xl h-full flex flex-col`}>
                    
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-slate-400 mb-6">{plan.description}</p>
                      
                      <div className="flex items-baseline justify-center gap-2">
                        <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-slate-400 text-lg">{plan.period}</span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-6 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Limits */}
                    <div className="space-y-2 mb-8 pt-4 border-t border-slate-700/50">
                      <p className="text-sm text-slate-400 font-medium">Limites:</p>
                      {plan.limits.map((limit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                          <span className="text-slate-400 text-sm">{limit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={() => handlePlanClick(plan)}
                      className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg text-white rounded-xl py-4 font-semibold hover-glow-orange text-lg`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Compare todos os recursos
            </h2>
            
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 text-slate-300">Recursos</th>
                    <th className="text-center py-4 text-blue-400">Essencial</th>
                    <th className="text-center py-4 text-orange-400">Crescimento</th>
                    <th className="text-center py-4 text-purple-400">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-4 text-slate-300">Notas fiscais/mês</td>
                    <td className="text-center py-4">100</td>
                    <td className="text-center py-4">500</td>
                    <td className="text-center py-4">Ilimitado</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-4 text-slate-300">Usuários</td>
                    <td className="text-center py-4">1</td>
                    <td className="text-center py-4">3</td>
                    <td className="text-center py-4">Ilimitado</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-4 text-slate-300">Mentoria</td>
                    <td className="text-center py-4">-</td>
                    <td className="text-center py-4">Mensal</td>
                    <td className="text-center py-4">Semanal</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-4 text-slate-300">BPO Financeiro</td>
                    <td className="text-center py-4">-</td>
                    <td className="text-center py-4">✓</td>
                    <td className="text-center py-4">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-slate-300">Suporte</td>
                    <td className="text-center py-4">Comercial</td>
                    <td className="text-center py-4">Prioritário</td>
                    <td className="text-center py-4">24/7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Não sabe qual plano escolher?
              </h3>
              <p className="text-slate-300 mb-6 text-lg">
                Fale conosco e nossa equipe te ajudará a encontrar a solução perfeita para sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero ajuda para escolher o melhor plano para minha empresa")}`, '_blank')}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com especialista
                </Button>
                <Button 
                  onClick={() => window.open('mailto:contato@tucont.com.br', '_blank')}
                  variant="outline"
                  className="border-orange-500 text-orange-500 bg-transparent backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 px-8 py-4 text-lg rounded-full"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar e-mail
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Planos;