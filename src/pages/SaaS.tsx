
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, TrendingUp, Shield } from "lucide-react";

const SaaS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero conhecer o modelo SaaS da Tucont")}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8">
              <Zap className="w-4 h-4" />
              <span className="font-medium">Modelo SaaS</span>
            </div>
            
            {/* Logo Tucont Money */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/c42b6d52-90c3-47dc-a699-9ab88033b4fe.png" 
                alt="Tucont Money - Financeiro as a Service" 
                className="h-20 mx-auto"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              Autoatendimento Inteligente
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Plataforma completa de gestão contábil e empresarial com IA integrada. 
              Autonomia total para sua empresa crescer sem depender de terceiros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 text-lg"
              >
                Começar agora - R$ 97/mês
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg">
                Ver demonstração
              </Button>
            </div>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
              Tudo que sua empresa precisa em uma plataforma
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Conformidade Total",
                  description: "IA processa 100% das obrigações fiscais automaticamente"
                },
                {
                  icon: TrendingUp,
                  title: "Gestão Financeira",
                  description: "Dashboards inteligentes e relatórios em tempo real"
                },
                {
                  icon: Zap,
                  title: "Automação Completa",
                  description: "Fluxos automatizados que eliminam trabalho manual"
                }
              ].map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SaaS;
