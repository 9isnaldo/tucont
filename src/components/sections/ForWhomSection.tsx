
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
      name: "Empreendedores",
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
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-y border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Para quem <span className="text-tucont-orange">somos</span>
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
                  <div className="p-1 h-full">
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-6 h-full min-h-[200px] hover:bg-gradient-to-br hover:from-slate-700/80 hover:to-slate-800/80 transition-all duration-300 hover:scale-105 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20 group">
                      <div className="text-center space-y-4 h-full flex flex-col justify-between">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500/30 to-blue-500/30 rounded-full flex items-center justify-center border border-orange-400/40 group-hover:border-orange-300/60 group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300">
                          <IconComponent className="w-8 h-8 text-orange-300 group-hover:text-orange-200 transition-colors duration-300" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-100 transition-colors duration-300">
                            {segment.name}
                          </h3>
                          <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
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
          <CarouselPrevious className="bg-orange-500/20 border-orange-400/50 text-orange-200 hover:bg-orange-500/30 hover:text-white hover:border-orange-300 -left-4 md:-left-12 transition-all duration-300" />
          <CarouselNext className="bg-orange-500/20 border-orange-400/50 text-orange-200 hover:bg-orange-500/30 hover:text-white hover:border-orange-300 -right-4 md:-right-12 transition-all duration-300" />
        </Carousel>
      </div>
    </section>
  );
};

export default ForWhomSection;
