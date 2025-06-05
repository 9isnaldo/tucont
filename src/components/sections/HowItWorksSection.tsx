
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, TrendingUp, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-orange-300 bg-clip-text text-transparent">
            Como revolucionaremos sua empresa
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Nossa metodologia proprietária para transformar contabilidade em vantagem competitiva
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Target,
              title: "Diagnóstico 360°",
              description: "Análise completa do seu negócio com IA e consultores especializados"
            },
            {
              icon: Zap,
              title: "Automação Inteligente",
              description: "Implementação de processos automatizados para compliance e gestão"
            },
            {
              icon: TrendingUp,
              title: "Crescimento Sustentável",
              description: "Estratégias personalizadas para escalar seu negócio com segurança"
            }
          ].map((step, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-400/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-200 text-center">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => openWhatsApp("Quero conhecer como a Tucont pode revolucionar minha empresa")}
            className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Rocket className="w-6 h-6 mr-3" />
            Revolucionar minha empresa agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
