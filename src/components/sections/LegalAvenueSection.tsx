
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Zap, ChevronRight } from "lucide-react";

const LegalAvenueSection = () => {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
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
                variant="primary-outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => openWhatsApp("Quero conhecer a Avenida Legal da Tucont")}
              >
                <Zap className="w-5 h-5 mr-2" />
                Ver como funciona
              </Button>
            </div>

            {/* Imagem à direita com bordas neon */}
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
                <div className="aspect-square bg-gradient-to-br from-blue-900/50 to-slate-800/50 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&h=800"
                    alt="Relação empresa e governo - compliance automatizado"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalAvenueSection;
