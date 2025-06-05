
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Rocket, Users, MessageCircle, CheckCircle, Star, ArrowRight, Zap, TrendingUp, Target, Sparkles, Bot } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [userInput, setUserInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputSubmit = async () => {
    if (!userInput.trim()) {
      toast.error("Por favor, descreva sua necessidade");
      return;
    }
    
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse na Tucont. Minha necessidade: ${userInput}`);
      window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
    }, 3000);
  };

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-orange-500/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-orange-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-200 to-orange-200 bg-clip-text text-transparent">
              Revolução na Contabilidade Brasileira
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-200 via-white to-orange-200 bg-clip-text text-transparent">
              Mais que contabilidade.
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Seu parceiro de crescimento.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">Automação total da burocracia</span> + 
            <span className="font-semibold text-orange-300"> mentoria estratégica real</span>.
            <br />
            A primeira plataforma que une IA, compliance e crescimento empresarial.
          </p>
          
          {/* Interactive AI Input */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Nossa IA está escutando</h3>
                  <p className="text-sm text-blue-200">Descreva sua necessidade em linguagem natural</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  placeholder="Ex: Quero abrir minha empresa e ter controle financeiro completo..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="flex-1 text-lg p-6 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isProcessing}
                />
                <Button 
                  onClick={handleInputSubmit}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Analisando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Começar agora
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </div>
              
              {isProcessing && (
                <div className="mt-6 bg-gradient-to-r from-blue-900/50 to-orange-900/50 rounded-xl p-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-blue-200 font-medium">Nossa IA está criando sua solução personalizada...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Empresas transformadas" },
              { number: "100%", label: "Automação fiscal" },
              { number: "50+", label: "Contadores parceiros" },
              { number: "24/7", label: "Suporte WhatsApp" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-orange-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duas Avenidas */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Duas avenidas. Um destino:
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                seu crescimento exponencial
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Enquanto automatizamos 100% da sua burocracia, você foca no que realmente importa: crescer.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Avenida Legal */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl border-slate-600/50 hover:border-blue-500/50 transition-all duration-500 group hover:scale-105">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-white mb-4">Avenida Legal</CardTitle>
                <CardDescription className="text-lg text-blue-200">
                  <span className="font-semibold text-blue-300">Conformidade 100% automatizada</span> com supervisão de especialistas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  {[
                    "IA processa 100% das obrigações fiscais",
                    "Zero erro, zero retrabalho, compliance total",
                    "Supervisão de contadores certificados",
                    "Alertas inteligentes e automações"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-500 text-blue-300 hover:bg-blue-500/10 hover:text-blue-200 py-3 rounded-xl font-semibold transition-all duration-300"
                  onClick={() => openWhatsApp("Quero conhecer a Avenida Legal da Tucont")}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Ver como funciona
                </Button>
              </CardContent>
            </Card>

            {/* Avenida de Negócios */}
            <Card className="bg-gradient-to-br from-orange-900/40 to-slate-800/50 backdrop-blur-xl border-orange-500/30 hover:border-orange-400/60 transition-all duration-500 group hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-2xl"></div>
              <CardHeader className="text-center pb-8 relative">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-white mb-4">Avenida de Negócios</CardTitle>
                <CardDescription className="text-lg text-orange-200">
                  <span className="font-semibold text-orange-300">Mentoria estratégica</span> para crescimento acelerado
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4 mb-8">
                  {[
                    "Frameworks validados de crescimento",
                    "Mentorias 1:1 com especialistas",
                    "Decisões baseadas em dados reais",
                    "Planos de ação personalizados"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => openWhatsApp("Quero conhecer a Avenida de Negócios da Tucont")}
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Acelerar crescimento
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Como revolucionamos sua empresa
            </h2>
            <p className="text-xl text-blue-200">Em 3 passos simples para resultados extraordinários</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "IA analisa sua demanda",
                description: "Nossa inteligência artificial processa suas necessidades em tempo real e cria uma solução personalizada",
                icon: Bot,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                step: "02", 
                title: "Esteira automática em ação",
                description: "Processamento completo com supervisão especializada. Zero fricção, máxima eficiência",
                icon: Zap,
                gradient: "from-purple-500 to-purple-600"
              },
              {
                step: "03",
                title: "Resultados entregues",
                description: "Plano executável, mentoria ativa e crescimento mensurável. Contratação em 1 clique",
                icon: Target,
                gradient: "from-orange-500 to-orange-600"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-400 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos de Atuação */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Escolha seu modelo de crescimento
            </h2>
            <p className="text-xl text-blue-200">Soluções para cada momento da sua jornada empresarial</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: "SaaS", 
                desc: "Autoatendimento inteligente", 
                price: "A partir de R$ 97/mês",
                popular: false
              },
              { 
                title: "Tucont", 
                desc: "Modelo unificado completo", 
                price: "A partir de R$ 297/mês",
                popular: true
              },
              { 
                title: "Partner", 
                desc: "Agente integrativo", 
                price: "Sob demanda",
                popular: false
              },
              { 
                title: "CEC", 
                desc: "Implementação total via IA", 
                price: "Consulte",
                popular: false
              },
              { 
                title: "Poder Contábil", 
                desc: "Comunidade exclusiva", 
                price: "Acesso VIP",
                popular: false
              }
            ].map((model, index) => (
              <Card key={index} className={`text-center transition-all duration-300 hover:scale-105 ${
                model.popular 
                  ? 'bg-gradient-to-br from-orange-900/50 to-slate-800/50 border-orange-500/50' 
                  : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-600/50'
              } backdrop-blur-xl`}>
                {model.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-white mb-2">{model.title}</CardTitle>
                  <CardDescription className="text-slate-300">{model.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold mb-6 ${
                    model.popular ? 'text-orange-300' : 'text-blue-300'
                  }`}>
                    {model.price}
                  </div>
                  <Button 
                    variant={model.popular ? "default" : "outline"}
                    className={model.popular 
                      ? "w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl"
                      : "w-full border-slate-500 text-slate-300 hover:bg-slate-700/50 rounded-xl"
                    }
                    onClick={() => openWhatsApp(`Quero saber mais sobre o modelo ${model.title}`)}
                  >
                    {model.popular ? 'Começar agora' : 'Saiba mais'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA para Contadores */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Pronto para empreender
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              com a Tucont?
            </span>
          </h2>
          <p className="text-xl mb-12 text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Torne-se um <span className="font-semibold text-white">Agente de Contabilidade Integrativa</span>. 
            Nossa tecnologia, método validado, marca forte e suporte completo para transformar seus clientes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              { title: "Tecnologia", desc: "Plataforma completa já desenvolvida", icon: "💻" },
              { title: "Método", desc: "Frameworks validados de crescimento", icon: "📈" },
              { title: "Suporte", desc: "Time especializado 24/7", icon: "🚀" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <Button 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
            onClick={() => openWhatsApp("Quero ser parceiro da Tucont e me tornar um Agente de Contabilidade Integrativa")}
          >
            <Users className="w-6 h-6 mr-3" />
            Quero ser parceiro
          </Button>
        </div>
      </section>

      {/* WhatsApp Integration */}
      <section className="py-24 px-4 bg-gradient-to-r from-green-900/30 to-slate-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Sua contabilidade resolve no WhatsApp
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Atendimento omnichannel no canal que você mais usa. Simples, rápido e eficiente.
          </p>
          <Button 
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => openWhatsApp("Olá! Quero conhecer todos os serviços da Tucont")}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Histórias de transformação
            </h2>
            <p className="text-xl text-blue-200">Empresas reais, resultados extraordinários</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "De caótico a organizado. A Tucont me deu a estrutura que eu precisava para focar no crescimento.",
                author: "João Silva",
                role: "CEO, TechStart",
                avatar: "👨‍💼"
              },
              {
                text: "Agora tenho dados reais para tomar decisões. Meu faturamento cresceu 300% em 8 meses.",
                author: "Maria Santos", 
                role: "Fundadora, EcoStyle",
                avatar: "👩‍💼"
              },
              {
                text: "Como parceiro, consegui escalar sem aumentar equipe. Meus clientes estão crescendo mais que nunca.",
                author: "Carlos Oliveira",
                role: "Contador Parceiro",
                avatar: "👨‍💻"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-600/50 hover:border-blue-500/30 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-6">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic text-slate-200 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-blue-300">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-4 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-orange-500/5"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Pronto para revolucionar
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
              sua contabilidade?
            </span>
          </h2>
          <p className="text-2xl mb-12 text-blue-200 max-w-3xl mx-auto">
            Junte-se a centenas de empresas que já escolheram crescer com a Tucont
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => openWhatsApp("Quero começar minha transformação com a Tucont agora mesmo")}
            >
              <Rocket className="w-6 h-6 mr-3" />
              Começar transformação
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-12 py-6 text-xl font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300"
              onClick={() => openWhatsApp("Quero agendar uma demonstração completa da plataforma Tucont")}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Agendar demo
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full w-16 h-16 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110"
          onClick={() => openWhatsApp("Olá! Preciso de ajuda com minha contabilidade")}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
