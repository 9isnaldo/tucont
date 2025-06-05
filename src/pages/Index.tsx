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
                  <Rocket className="w-24 h-24 text-orange-400 mx-auto mb-4" />
                  <p className="text-orange-200 text-lg">Founder pessoalmente na sua jornada</p>
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
                  <Shield className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-blue-200 text-lg">Compliance e obrigações automatizadas</p>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Para sua empresa */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-300">Para sua empresa</h3>
              <div className="grid gap-6">
                <Link to="/saas">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    <h4 className="text-3xl font-bold mb-2">SaaS</h4>
                    <p className="text-xl mb-4 text-orange-100">Softwares as a Service</p>
                    <h5 className="text-lg font-semibold mb-4">Simplificamos<br />Sua Operação</h5>
                    <p className="text-orange-100 leading-relaxed">
                      Venda, emita notas fiscais, gerencie o financeiro
                    </p>
                  </div>
                </Link>

                <Link to="/tucont">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-orange-900 px-6 py-1 rounded-full text-sm font-bold">
                        Mais Popular
                      </div>
                    </div>
                    <h4 className="text-3xl font-bold mb-2">Tucont</h4>
                    <p className="text-xl mb-4 text-orange-100">Contabilidade Integrativa</p>
                    <h5 className="text-lg font-semibold mb-4">Unificamos<br />Legal e Negócios</h5>
                    <p className="text-orange-100 leading-relaxed">
                      Destravamos o empreendedorismo e cuidamos das duas principais avenidas, a Legal e a de Negócios
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Para contadores e escritórios */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-orange-300">Para contadores e escritórios</h3>
              <div className="grid gap-4">
                <Link to="/partner">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    <h4 className="text-2xl font-bold mb-2">Tucont</h4>
                    <p className="text-lg mb-3 text-orange-100">Partner Integrativo</p>
                    <h5 className="text-base font-semibold mb-3">Fazemos<br />juntos</h5>
                    <p className="text-orange-100 text-sm leading-relaxed">
                      Acesso a plataforma personalizada, processos, automações e IA
                    </p>
                  </div>
                </Link>

                <Link to="/cec">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    <h4 className="text-2xl font-bold mb-2">CEC</h4>
                    <p className="text-lg mb-3 text-orange-100">Cada Etapa Conta</p>
                    <h5 className="text-base font-semibold mb-3">Fazemos<br />pra você</h5>
                    <p className="text-orange-100 text-sm leading-relaxed">
                      Implementação na prática, de Processos, IA e automações. Personalizadas para sua empresa.
                    </p>
                  </div>
                </Link>

                <Link to="/poder-contabil">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    <h4 className="text-2xl font-bold mb-2">Poder Contábil</h4>
                    <p className="text-lg mb-3 text-orange-100"></p>
                    <h5 className="text-base font-semibold mb-3">Compartilhamos<br />com você</h5>
                    <p className="text-orange-100 text-sm leading-relaxed">
                      Comunidade com acesso em primeira mão, a todas soluções Tucont
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
