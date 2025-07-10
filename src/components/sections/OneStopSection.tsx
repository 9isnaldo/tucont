
import { useState } from "react";
import { 
  FileText, 
  Building, 
  Calculator, 
  Shield, 
  CreditCard, 
  Users,
  CheckCircle,
  Zap,
  Sparkles
} from "lucide-react";
import { CaptureFormModal } from "@/components/ui/capture-form-modal";

const OneStopSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    { icon: Building, label: "CNPJ", color: "from-blue-500 to-cyan-400" },
    { icon: FileText, label: "Emissão de Nota", color: "from-green-500 to-emerald-400" },
    { icon: Shield, label: "Certificado Digital", color: "from-purple-500 to-pink-400" },
    { icon: Calculator, label: "Impostos", color: "from-orange-500 to-red-400" },
    { icon: CreditCard, label: "Financeiro", color: "from-indigo-500 to-blue-400" },
    { icon: Users, label: "Consultoria", color: "from-teal-500 to-cyan-400" }
  ];

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero a integração total da Tucont - Tudo em um só lugar")}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-tucont-cta/5 via-transparent to-tucont-royal/5"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-tucont-cta/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 bg-secondary backdrop-blur-xl border border-border text-tucont-cta px-6 py-3 rounded-full mb-8">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Plataforma All-in-one</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-tucont-text-primary">
            Tudo em um só lugar.
          </span>
          <br />
          <span className="text-tucont-orange text-4xl md:text-6xl">
            Tudo agora.
          </span>
        </h2>


        {/* Grid de Serviços */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transform transition-all duration-300 group-hover:shadow-xl`}>
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="font-semibold text-tucont-text-primary text-sm md:text-base group-hover:text-tucont-orange transition-colors">
                {service.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Frase de Impacto Final */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-tucont-text-primary">
            "Sua empresa conectada, automatizada e crescendo. <span className="text-tucont-orange">Tudo agora.</span>"
          </p>
        </div>
      </div>

      <CaptureFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default OneStopSection;
