
import { Button } from "@/components/ui/button";
import { MessageCircle, Target, Rocket } from "lucide-react";

const ReadyToStartSection = () => {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-tucont-secondary-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tucont-orange to-tucont-royal bg-clip-text text-transparent">
            Pronto para Empreender com a Tucont?
          </h2>
          <p className="text-xl text-tucont-text-secondary max-w-3xl mx-auto">
            Escolha como quer começar sua jornada de crescimento empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: MessageCircle,
              title: "Conversa Inicial",
              description: "Bate-papo de 15 minutos para entender suas necessidades",
              action: "Iniciar conversa",
              gradient: "from-green-500/20 to-green-600/20",
              border: "border-green-400/30",
              shadow: "shadow-green-500/10"
            },
            {
              icon: Target,
              title: "Diagnóstico Completo",
              description: "Análise detalhada do seu negócio com nossas ferramentas de IA",
              action: "Solicitar diagnóstico",
              gradient: "from-blue-500/20 to-blue-600/20",
              border: "border-blue-400/30",
              shadow: "shadow-blue-500/10"
            },
            {
              icon: Rocket,
              title: "Implementação Express",
              description: "Começar imediatamente com nossa metodologia completa",
              action: "Quero começar agora",
              gradient: "from-orange-500/20 to-orange-600/20",
              border: "border-orange-400/30",
              shadow: "shadow-orange-500/10"
            }
          ].map((option, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-tucont-royal rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-tucont-text-primary mb-4">{option.title}</h3>
                <p className="text-tucont-text-secondary mb-6 leading-relaxed">{option.description}</p>
                <Button 
                  onClick={() => openWhatsApp(`Quero ${option.action.toLowerCase()} com a Tucont`)}
                  variant="cta"
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {option.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadyToStartSection;
