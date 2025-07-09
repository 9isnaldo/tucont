
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Briefcase, Users, Heart, Rocket, Building2, User } from "lucide-react";

const ForWhomSection = () => {
  const segments = [
    {
      name: "Startups",
      icon: Rocket,
      description: "Inovação e crescimento acelerado"
    },
    {
      name: "Prestadores de Serviços",
      icon: Briefcase,  
      description: "Profissionais especializados"
    },
    {
      name: "Profissionais da Saúde",
      icon: Heart,
      description: "Cuidado com quem cuida"
    },
    {
      name: "Empreendedores Iniciantes",
      icon: User,
      description: "Primeiros passos no empreendedorismo"
    },
    {
      name: "PMEs",
      icon: Building2,
      description: "Pequenas e médias empresas"
    },
    {
      name: "MEIs",
      icon: Users,
      description: "Microempreendedores individuais"
    }
  ];

  return (
    <section className="py-16 bg-slate-900/50 backdrop-blur-sm border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Para quem somos
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Atendemos diversos segmentos com soluções personalizadas para cada necessidade
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {segments.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 h-full hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:border-blue-400/30">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                          <IconComponent className="w-8 h-8 text-blue-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {segment.name}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            {segment.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:text-white -left-4 md:-left-12" />
          <CarouselNext className="bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:text-white -right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default ForWhomSection;
