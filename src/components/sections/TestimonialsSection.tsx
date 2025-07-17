
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      text: "A Tucont revolucionou nossa empresa. Em 3 meses, economizamos R$ 15.000 em impostos e nossa receita cresceu 40%.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Fundadora, BeautyBox",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      text: "Finalmente uma contabilidade que entende de negócios! A mentoria estratégica é o diferencial que eu precisava.",
      rating: 5
    },
    {
      name: "Ricardo Mendes",
      role: "Agente Tucont, SP",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      text: "Como Agente Tucont, deixei de ser apenas operacional. Hoje atuo como consultor estratégico e minha receita triplicou!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-blue-50 to-orange-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-tucont-text-primary">
              Quem já transformou sua empresa
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background border border-border rounded-3xl p-6 hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-tucont-orange fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-tucont-royal mb-4" />
              
              <p className="text-tucont-text-secondary mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-tucont-royal/50"
                />
                <div>
                  <h4 className="font-semibold text-tucont-text-primary">{testimonial.name}</h4>
                  <p className="text-tucont-text-secondary text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
