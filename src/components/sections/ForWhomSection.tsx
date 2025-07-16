import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Briefcase, Users, Heart, Rocket, Building2, User } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section className="py-16 bg-tucont-secondary-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-slate-800-custom text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Para <span className="text-tucont-orange">quem</span> somos?
          </h2>
          <p className="text-2xl text-tucont-text-secondary font-semibold">
            Atendemos diversos segmentos com soluções personalizadas para cada necessidade
          </p>
        </div>

        <Carousel
          autoplay={true}
          autoplayInterval={5000} // 5 segundos entre transições (ajuste conforme necessidade)
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {segments.map((segment, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1 h-full">
                  <div className={cn(
                    "bg-background border border-border rounded-2xl p-6 h-full min-h-[200px]",
                    "hover:bg-secondary transition-all duration-300",
                    "hover:scale-105 hover:border-tucont-orange",
                    "hover:shadow-lg hover:shadow-tucont-orange/20 group"
                  )}>
                    <div className="text-center space-y-4 h-full flex flex-col justify-between">
                      <div className={cn(
                        "w-16 h-16 mx-auto bg-tucont-royal/10 rounded-full",
                        "flex items-center justify-center border border-tucont-royal/30",
                        "group-hover:border-tucont-orange group-hover:shadow-md",
                        "group-hover:shadow-tucont-orange/30 transition-all duration-300"
                      )}>
                        <segment.icon className="w-8 h-8 text-tucont-royal group-hover:text-tucont-orange transition-colors duration-300" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-lg font-semibold text-tucont-text-primary mb-2 group-hover:text-tucont-orange transition-colors duration-300">
                          {segment.name}
                        </h3>
                        <p className="text-tucont-text-secondary text-sm group-hover:text-tucont-text-primary transition-colors duration-300">
                          {segment.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ForWhomSection;