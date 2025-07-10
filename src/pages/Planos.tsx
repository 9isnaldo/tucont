import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check, Star, Zap, ArrowRight, Shield, Users, TrendingUp, Clock, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Planos = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "Zen Plus",
      description: "Para empreendedores que estão começando",
      monthlyPrice: "R$ 149,00",
      annualPrice: "R$ 134,10", // 10% discount
      features: [
        "Contabilidade completa",
        "Processo de abertura",
        "Emissão de NFs pela PJZen",
        "Até 1 sócio (Pró-Labore)",
        "Até 25K de faturamento/mês"
      ],
      cta: "COMECE AGORA",
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Zen Pro",
      description: "Para empresas que querem escalar",
      monthlyPrice: "R$ 299,00",
      annualPrice: "R$ 269,10", // 10% discount
      features: [
        "Contabilidade completa",
        "Processo de abertura",
        "Emissão de NFs pela PJZen",
        "Até 2 sócios (Pró-Labore)",
        "Até 100K de faturamento/mês"
      ],
      cta: "COMECE AGORA",
      popular: true,
      color: "from-orange-500 to-orange-600"
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary border border-border text-tucont-royal px-6 py-3 rounded-full mb-8">
              <Star className="w-5 h-5" />
              <span className="font-medium">Planos Validados para o seu momento</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-tucont-text-primary via-tucont-royal to-tucont-orange bg-clip-text text-transparent">
                Escolha o plano ideal para acelerar seu negócio
              </span>
            </h1>
            <p className="text-xl text-tucont-text-secondary max-w-4xl mx-auto leading-relaxed">
              Soluções completas que combinam <span className="font-semibold text-tucont-royal">tecnologia avançada</span> 
              com <span className="font-semibold text-tucont-orange">mentoria estratégica</span> para o crescimento sustentável.
            </p>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-24 px-4 bg-tucont-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tucont-royal/5 via-transparent to-tucont-orange/5"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-card border border-border rounded-full p-2 flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-tucont-royal text-white shadow-lg'
                      : 'text-tucont-text-secondary hover:text-tucont-text-primary'
                  }`}
                >
                  Mensal
                </button>
                <button
                  onClick={() => setBillingCycle('annually')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'annually'
                      ? 'bg-tucont-royal text-white shadow-lg'
                      : 'text-tucont-text-secondary hover:text-tucont-text-primary'
                  }`}
                >
                  Anual
                  <span className="ml-2 text-xs bg-tucont-cta-green text-white px-2 py-1 rounded-full">-10%</span>
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
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

                  {/* Card */}
                  <div className={`relative bg-card border ${plan.popular ? 'border-tucont-orange/50' : 'border-border'} rounded-3xl p-8 hover:shadow-lg transition-all duration-300 shadow-sm h-full flex flex-col`}>
                    
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.name}
                      </h3>
                      
                      <div className="flex items-baseline justify-center gap-2 mb-4">
                        <span className="text-4xl font-bold text-tucont-text-primary">
                          {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        <span className="text-tucont-text-secondary text-lg">MENSAL</span>
                      </div>
                    </div>

                    {/* Compact Features */}
                    <div className="space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-tucont-cta-green flex-shrink-0" />
                          <span className="text-tucont-text-secondary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={() => handlePlanClick(plan)}
                      className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg text-white rounded-xl py-4 font-semibold text-lg mb-4`}
                    >
                      {plan.cta}
                    </Button>

                    {/* Saiba Mais Button */}
                    <button
                      onClick={() => setExpandedPlan(expandedPlan === index ? null : index)}
                      className="text-tucont-royal hover:text-tucont-royal/80 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      Saiba mais
                      {expandedPlan === index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Expanded Content */}
                    {expandedPlan === index && (
                      <div className="mt-6 pt-6 border-t border-border animate-fade-in">
                        <p className="text-tucont-text-secondary mb-4">{plan.description}</p>
                        <div className="space-y-3">
                          <h4 className="text-tucont-text-primary font-semibold">Recursos adicionais:</h4>
                          <div className="text-sm text-tucont-text-secondary space-y-1">
                            <div>• Backup automático de dados</div>
                            <div>• Certificado digital incluído</div>
                            <div>• Relatórios personalizados</div>
                            <div>• Suporte especializado</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-tucont-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-tucont-text-primary mb-12">
              Compare todos os recursos
            </h2>
            
            <div className="bg-background border border-border rounded-3xl p-8 overflow-x-auto shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 text-tucont-text-primary">Recursos</th>
                    <th className="text-center py-4 text-tucont-royal">Zen Plus</th>
                    <th className="text-center py-4 text-tucont-orange">Zen Pro</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-border">
                    <td className="py-4 text-tucont-text-secondary">Notas fiscais/mês</td>
                    <td className="text-center py-4 text-tucont-text-primary">100</td>
                    <td className="text-center py-4 text-tucont-text-primary">500</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 text-tucont-text-secondary">Usuários</td>
                    <td className="text-center py-4 text-tucont-text-primary">1</td>
                    <td className="text-center py-4 text-tucont-text-primary">3</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 text-tucont-text-secondary">Mentoria</td>
                    <td className="text-center py-4 text-tucont-text-primary">-</td>
                    <td className="text-center py-4 text-tucont-text-primary">Mensal</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 text-tucont-text-secondary">BPO Financeiro</td>
                    <td className="text-center py-4 text-tucont-text-primary">-</td>
                    <td className="text-center py-4 text-tucont-text-primary">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-tucont-text-secondary">Suporte</td>
                    <td className="text-center py-4 text-tucont-text-primary">Comercial</td>
                    <td className="text-center py-4 text-tucont-text-primary">Prioritário</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-tucont-text-primary mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-tucont-text-primary mb-4">{faq.question}</h3>
                  <p className="text-tucont-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-tucont-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-tucont-text-primary mb-4">
                Não sabe qual plano escolher?
              </h3>
              <p className="text-tucont-text-secondary mb-6 text-lg">
                Fale conosco e nossa equipe te ajudará a encontrar a solução perfeita para sua empresa.
              </p>
              <Button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero ajuda para escolher o melhor plano para minha empresa")}`, '_blank')}
                className="bg-tucont-cta hover:bg-tucont-cta/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover-glow-cta transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar com nossa equipe
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

export default Planos;