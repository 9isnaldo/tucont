
import { Button } from "@/components/ui/button";
import { Crown, CheckCircle, TrendingUp } from "lucide-react";

const BusinessAvenueSection = () => {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  return (
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
              <div className="aspect-square bg-gradient-to-br from-orange-900/50 to-slate-800/50 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/46365f26-9adb-4a59-9910-83ed2a27e4a3.png"
                  alt="Founder na jornada de negócios"
                  className="w-full h-full object-cover rounded-xl"
                />
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
  );
};

export default BusinessAvenueSection;
