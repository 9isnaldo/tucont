
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Rocket, Users, MessageCircle, CheckCircle, Star, ArrowRight, Zap, TrendingUp, Target, Sparkles, Bot, Crown, Briefcase, Building, Award, Trophy, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-orange-500/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center pt-40">
        <div className="max-w-6xl mx-auto">
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
          
          {/* Interactive AI Input com visual do Hero */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
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

      {/* Seção das Duas Avenidas - Gancho */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Toda empresa tem duas jornadas cruciais:
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
              A Avenida de Negócios e a Avenida Legal
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Enquanto outros cuidam apenas do compliance, nós <span className="font-semibold text-white">revolucionamos ambas as avenidas</span> 
            para criar o ecossistema completo do seu crescimento.
          </p>
        </div>
      </section>

      {/* Avenida de Negócios - Primeiro */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-orange-500/10"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-8">
              <Crown className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
                Nosso Grande Diferencial
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Avenida de Negócios
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Imagem à esquerda com bordas neon */}
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8 shadow-2xl shadow-orange-500/10">
                <div className="aspect-square bg-gradient-to-br from-orange-900/50 to-slate-800/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Rocket className="w-24 h-24 text-orange-400 mx-auto mb-4" />
                    <p className="text-orange-200 text-lg">Founder pessoalmente na sua jornada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto à direita */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Transformação Empresarial</h3>
              <p className="text-xl text-orange-200 mb-8">
                Frameworks validados + Mentoria 1:1 + Decisões baseadas em dados
              </p>
              
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
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => openWhatsApp("Quero conhecer a Avenida de Negócios da Tucont")}
              >
                <TrendingUp className="w-6 h-6 mr-2" />
                Acelerar crescimento agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conector Visual Animado */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="group cursor-pointer">
            <div className="w-2 h-32 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 rounded-full mx-auto opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50"></div>
            <div className="flex items-center justify-center mt-4">
              <ChevronRight className="w-8 h-8 text-blue-400 opacity-50 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Avenida Legal */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                Avenida Legal
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              <span className="font-semibold text-blue-300">Conformidade 100% automatizada</span> com supervisão de especialistas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Texto à esquerda */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Conformidade Total</h3>
              <p className="text-xl text-blue-200 mb-8">
                IA processa 100% das obrigações fiscais automaticamente
              </p>
              
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
                className="border-blue-400/30 text-blue-300 hover:bg-blue-500/10 hover:text-blue-200 px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300"
                onClick={() => openWhatsApp("Quero conhecer a Avenida Legal da Tucont")}
              >
                <Zap className="w-5 h-5 mr-2" />
                Ver como funciona
              </Button>
            </div>

            {/* Imagem à direita com bordas neon */}
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
                <div className="aspect-square bg-gradient-to-br from-blue-900/50 to-slate-800/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                    <p className="text-blue-200 text-lg">Compliance e obrigações automatizadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelos de Atuação - Cards mais finos e alongados */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Escolha seu modelo de crescimento
            </h2>
            <p className="text-xl text-blue-200">Soluções para cada momento da sua jornada empresarial</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Para sua empresa */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-300">Para sua empresa</h3>
              <div className="grid gap-6">
                <Link to="/saas">
                  <Card className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 h-full">
                    <CardHeader className="pb-4 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-white mb-2">SaaS</CardTitle>
                      <CardDescription className="text-slate-300">Autoatendimento inteligente</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold mb-6 text-blue-300">
                        A partir de R$ 97/mês
                      </div>
                      <Button variant="outline" className="w-full border-blue-400/30 text-slate-300 hover:bg-slate-700/50 rounded-xl">
                        Saiba mais
                      </Button>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/tucont">
                  <Card className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-orange-900/50 to-slate-800/50 backdrop-blur-xl border border-orange-400/30 shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 relative overflow-hidden h-full">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                        Mais Popular
                      </div>
                    </div>
                    <CardHeader className="pb-4 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Rocket className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-white mb-2">Tucont</CardTitle>
                      <CardDescription className="text-orange-200">Modelo unificado completo</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold mb-6 text-orange-300">
                        A partir de R$ 297/mês
                      </div>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl">
                        Começar agora
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Para contadores e escritórios */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-center mb-8 text-orange-300">Para contadores e escritórios</h3>
              <div className="grid gap-4">
                <Card className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 h-full">
                  <CardHeader className="pb-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white mb-2">Partner</CardTitle>
                    <CardDescription className="text-slate-300 text-sm">Agente integrativo</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-lg font-bold mb-4 text-purple-300">Sob demanda</div>
                    <Button variant="outline" className="w-full border-blue-400/30 text-slate-300 hover:bg-slate-700/50 rounded-xl text-sm py-2">
                      Saiba mais
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 h-full">
                  <CardHeader className="pb-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white mb-2">Cada Passo Conta - CEC</CardTitle>
                    <CardDescription className="text-slate-300 text-sm">Implementação total via IA</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-lg font-bold mb-4 text-green-300">Consulte</div>
                    <Button variant="outline" className="w-full border-blue-400/30 text-slate-300 hover:bg-slate-700/50 rounded-xl text-sm py-2">
                      Saiba mais
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 h-full">
                  <CardHeader className="pb-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white mb-2">Poder Contábil</CardTitle>
                    <CardDescription className="text-slate-300 text-sm">Comunidade exclusiva</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-lg font-bold mb-4 text-amber-300">Acesso VIP</div>
                    <Button variant="outline" className="w-full border-blue-400/30 text-slate-300 hover:bg-slate-700/50 rounded-xl text-sm py-2">
                      Saiba mais
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona com CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Como revolucionamos sua empresa
            </h2>
            <p className="text-xl text-blue-200">Em 3 passos simples para resultados extraordinários</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
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

          {/* CTA */}
          <div className="text-center">
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => openWhatsApp("Quero revolucionar minha empresa com a Tucont agora mesmo")}
            >
              <Rocket className="w-6 h-6 mr-3" />
              Revolucionar minha empresa
            </Button>
          </div>
        </div>
      </section>

      {/* CTA para Contadores com cards no padrão neon */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-orange-500/5"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Building className="w-12 h-12 text-white" />
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
              { 
                title: "Tecnologia", 
                desc: "Plataforma completa já desenvolvida", 
                icon: Zap,
                gradient: "from-blue-500 to-blue-600"
              },
              { 
                title: "Método", 
                desc: "Frameworks validados de crescimento", 
                icon: Target,
                gradient: "from-purple-500 to-purple-600"
              },
              { 
                title: "Suporte", 
                desc: "Time especializado 24/7", 
                icon: Award,
                gradient: "from-orange-500 to-orange-600"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:border-blue-400/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-200">{item.desc}</p>
                </CardContent>
              </Card>
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

      {/* CTA Final - Inspirado na XP Investimentos */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-orange-500/5"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-8">
            <Trophy className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
              A Maior Rede de Contabilidade Integrativa do Brasil
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Seja parte da
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
              revolução contábil
            </span>
          </h2>
          
          <p className="text-2xl mb-12 text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Assim como a XP revolucionou o mercado financeiro, 
            <span className="font-semibold text-white"> a Tucont está transformando a contabilidade brasileira</span>. 
            Junte-se aos pioneiros que escolheram crescer conosco.
          </p>
          
          {/* Stats Impressionantes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
            {[
              { number: "10x", label: "Mais eficiência" },
              { number: "95%", label: "Redução de erros" },
              { number: "24h", label: "Implementação" },
              { number: "∞", label: "Possibilidades" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => openWhatsApp("Quero fazer parte da revolução contábil da Tucont agora mesmo")}
            >
              <Rocket className="w-6 h-6 mr-3" />
              Começar minha revolução
            </Button>
            <Button 
              className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-12 py-6 text-xl font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              onClick={() => openWhatsApp("Quero agendar uma demonstração executiva da plataforma Tucont")}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Demonstração executiva
            </Button>
          </div>
          
          <div className="mt-12 text-slate-400">
            <p className="text-lg">
              "O futuro da contabilidade já chegou. A questão é: você vai liderar ou ser liderado?"
            </p>
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

      <Footer />
    </div>
  );
};

export default Index;
