
import { Users, Zap, TrendingUp, Crown, Shield, Target, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccountantsSection = () => {
  const benefits = [
    {
      icon: Crown,
      title: "Plataforma com IA e método exclusivo",
      description: "Acesso a tecnologia proprietária e frameworks validados em milhares de empresas"
    },
    {
      icon: Shield,
      title: "Autonomia com suporte",
      description: "Trabalhe de forma independente com backup completo da nossa equipe especializada"
    },
    {
      icon: TrendingUp,
      title: "Expansão com marca consolidada",
      description: "Cresça aproveitando nossa reputação e metodologia reconhecida no mercado"
    }
  ];

  const openWhatsApp = () => {
    const message = "Quero ser um Agente Integrativo Tucont - Conte-me mais sobre a parceria";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-yellow-500/10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header com destaque especial */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <Crown className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
              Oportunidade Exclusiva
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Contador,</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              torne-se um Agente Integrativo Tucont
            </span>
          </h2>
          
          <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed">
            Transforme sua prática contábil em um <span className="font-semibold text-yellow-400">negócio estratégico</span> 
            com nossa tecnologia, metodologia e suporte completo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Conteúdo à esquerda */}
          <div className="space-y-8">
            
            {/* Benefícios principais */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="group flex gap-4 p-6 bg-slate-800/30 backdrop-blur-sm border border-orange-500/20 rounded-2xl hover:bg-orange-500/10 hover:border-orange-500/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-orange-200 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Principal */}
            <div className="space-y-4">
              <Button 
                onClick={openWhatsApp}
                variant="cta-orange"
                size="lg"
                className="w-full md:w-auto px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Users className="w-6 h-6 mr-3" />
                Quero ser parceiro
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              
              <p className="text-orange-300 text-sm">
                Processo seletivo • Vagas limitadas • Suporte total
              </p>
            </div>

          </div>

          {/* Imagem/Visual à direita */}
          <div className="relative">
            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-400/30 rounded-3xl p-8 shadow-2xl shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-orange-900/50 to-slate-800/50 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/b7d10485-3f34-4c41-ba09-6dcd6889483f.png"
                  alt="Plataforma SpeedCont - Gestão contábil profissional"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-xl p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-400">300%</div>
                    <div className="text-xs text-slate-300">Aumento médio de receita</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">24h</div>
                    <div className="text-xs text-slate-300">Suporte especializado</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">100+</div>
                    <div className="text-xs text-slate-300">Agentes ativos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Seção de destaque final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Transforme sua contabilidade tradicional em consultoria estratégica
            </h3>
            <p className="text-orange-200 mb-6 text-lg">
              Junte-se aos contadores que já descobriram como <span className="font-semibold text-yellow-400">triplicar a receita</span> oferecendo valor real aos clientes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-slate-300">Tecnologia exclusiva</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-slate-300">Métodos validados</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-slate-300">Resultados garantidos</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AccountantsSection;
