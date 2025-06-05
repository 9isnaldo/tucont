
import { 
  FileText, 
  Building, 
  Calculator, 
  Shield, 
  CreditCard, 
  Users,
  CheckCircle,
  Zap
} from "lucide-react";

const OneStopSection = () => {
  const services = [
    { icon: Building, label: "CNPJ", color: "from-blue-500 to-cyan-400" },
    { icon: FileText, label: "Notas Fiscais", color: "from-green-500 to-emerald-400" },
    { icon: Shield, label: "Certificado", color: "from-purple-500 to-pink-400" },
    { icon: Calculator, label: "Impostos", color: "from-orange-500 to-red-400" },
    { icon: CreditCard, label: "Financeiro", color: "from-indigo-500 to-blue-400" },
    { icon: Users, label: "Consultoria", color: "from-teal-500 to-cyan-400" }
  ];

  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-green-300 px-6 py-3 rounded-full mb-8">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Solução Completa</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-green-200 to-orange-300 bg-clip-text text-transparent">
            Tudo em um só lugar.
          </span>
          <br />
          <span className="text-orange-400">E sem enrolação.</span>
        </h2>

        <p className="text-xl text-slate-300 mb-16 max-w-3xl mx-auto">
          Pare de usar 10 sistemas diferentes. Com a Tucont, você tem tudo integrado 
          em uma única plataforma inteligente.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transform transition-all duration-300`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-white text-sm">{service.label}</h3>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
          <Zap className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Integração Total em 24 horas
          </h3>
          <p className="text-slate-300 mb-6">
            Nossa equipe configura tudo para você. Amanhã sua empresa já estará rodando no piloto automático.
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero a integração total da Tucont")}`, '_blank')}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Configurar minha empresa agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default OneStopSection;
