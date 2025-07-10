
import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Instagram, Calculator } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Quero conhecer a Tucont")}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/lovable-uploads/06946f78-e9ff-48f7-b9a5-26f5f246320c.png" alt="Tucont" className="h-10" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Revolucionando a contabilidade no Brasil com IA, automação e mentoria estratégica.
            </p>
            <div className="flex gap-4">
              <button onClick={openWhatsApp} className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </button>
              <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Soluções para Empresas */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Soluções para Empresas</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-muted-foreground hover:text-tucont-orange transition-colors text-left"
              >
                Abertura de Empresa
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-muted-foreground hover:text-tucont-orange transition-colors text-left"
              >
                Contabilidade Automática
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-muted-foreground hover:text-tucont-orange transition-colors text-left"
              >
                Consultoria Estratégica
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-muted-foreground hover:text-tucont-orange transition-colors text-left"
              >
                BPO Financeiro
              </button>
              <Link to="/solucoes" className="block text-muted-foreground hover:text-tucont-orange transition-colors">Ver todas as soluções</Link>
            </div>
          </div>

          {/* Para Contadores */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Para Contadores</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('agentes')} 
                className="block text-muted-foreground hover:text-tucont-orange transition-colors text-left"
              >
                <Calculator className="w-4 h-4 inline mr-2" />
                Área para Contadores
              </button>
              <button 
                onClick={() => scrollToSection('agentes')} 
                className="block text-muted-foreground hover:text-tucont-orange transition-colors text-left"
              >
                Seja um Agente Tucont
              </button>
              <Link to="/parceiros" className="block text-muted-foreground hover:text-tucont-orange transition-colors">Programa de Parceiros</Link>
              <Link to="/poder-contabil" className="block text-muted-foreground hover:text-tucont-orange transition-colors">Poder Contábil</Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>contato@tucont.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-tucont-orange mb-4">
              "Sua contabilidade passou a olhar para o futuro."
            </p>
            <p className="text-muted-foreground">
              &copy; 2024 Tucont. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
