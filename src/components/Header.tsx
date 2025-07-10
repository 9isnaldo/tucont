
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Home, CheckCircle, TrendingUp, ShoppingCart, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Quero conhecer a Tucont")}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Increased size */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/06946f78-e9ff-48f7-b9a5-26f5f246320c.png" alt="Tucont" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-foreground hover:text-tucont-orange transition-colors font-medium flex items-center gap-1">
                Para você e sua empresa
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 w-[600px] bg-card border border-border p-6 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-md shadow-lg">
                <div className="flex gap-8">
                  <div className="flex-1">
                    <h3 className="text-tucont-orange font-semibold mb-3">Contabilidade Integrativa</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A Tucont simplifica e combina serviços ao seu momento, em uma Plataforma All-in-one. 
                      Isso é a Contabilidade Integrativa. Empresários e empresárias, não querem sistemas e processos fragmentados, querem uma única plataforma que una ERP, emissão de NF, financeiro, contabilidade, IA, produtos e consultoria estratégica.
                    </p>
                  </div>
                  <div className="flex-1 space-y-3">
                    <a 
                      href="https://rouvbymulgc.typeform.com/to/OSIekGSL?typeform-source=www.tucont.com.br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 hover:bg-accent rounded-md cursor-pointer text-foreground hover:text-foreground transition-colors"
                    >
                      <Home className="w-5 h-5 text-tucont-orange" />
                      <span>Abrir empresa</span>
                    </a>
                    
                    <Link to="/avenida-legal" className="flex items-center gap-3 p-3 hover:bg-accent rounded-md cursor-pointer text-foreground hover:text-foreground transition-colors">
                      <CheckCircle className="w-5 h-5 text-tucont-orange" />
                      <span>Contabilidade Completa - Avenida Legal</span>
                    </Link>
                    
                    <Link to="/avenida-empreendedora" className="flex items-center gap-3 p-3 hover:bg-accent rounded-md cursor-pointer text-foreground hover:text-foreground transition-colors">
                      <TrendingUp className="w-5 h-5 text-tucont-orange" />
                      <span>Jornada Empreendedora</span>
                    </Link>
                    
                    <Link to="/bem-balcao" className="flex items-center gap-3 p-3 hover:bg-accent rounded-md cursor-pointer text-foreground hover:text-foreground transition-colors">
                      <ShoppingCart className="w-5 h-5 text-tucont-orange" />
                      <span>Plataforma para Vendas, NFs e Financeiro</span>
                    </Link>
                    
                    <Link to="/bpo-financeiro" className="flex items-center gap-3 p-3 hover:bg-accent rounded-md cursor-pointer text-foreground hover:text-foreground transition-colors">
                      <DollarSign className="w-5 h-5 text-tucont-orange" />
                      <span>BPO Financeiro</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/parceiros-contadores" className="text-foreground hover:text-tucont-orange transition-colors font-medium">
              Para Contabilidades
            </Link>
            
            <Link to="/bem-balcao" className="text-foreground hover:text-tucont-orange transition-colors font-medium">
              Marketplace
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/planos">
              <Button 
                variant="outline" 
                className="border-tucont-orange text-tucont-orange bg-transparent backdrop-blur-sm hover:bg-tucont-orange/10 hover:border-tucont-orange hover:text-tucont-orange transition-all duration-300"
              >
                Planos
              </Button>
            </Link>
            <Button 
              onClick={() => window.open('https://app.tucont.com.br/auth/login', '_blank')} 
              className="bg-tucont-orange/20 border border-tucont-orange text-tucont-orange backdrop-blur-sm hover:bg-tucont-orange/30 hover:border-tucont-orange hover:text-tucont-orange hover:shadow-lg hover:shadow-orange-glow transition-all duration-300"
            >
              Acessar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-foreground hover:text-tucont-orange w-full text-left"
              >
                Para você e sua empresa
              </button>
              <Link to="/parceiros-contadores" className="block text-foreground hover:text-tucont-orange w-full text-left">
                Para Contabilidades
              </Link>
              <Link to="/bem-balcao" className="block text-foreground hover:text-tucont-orange w-full text-left">
                Marketplace
              </Link>
              <div className="flex gap-4 pt-4">
                <Link to="/planos" className="flex-1">
                  <Button 
                    variant="outline" 
                    className="w-full border-tucont-orange text-tucont-orange bg-transparent backdrop-blur-sm hover:bg-tucont-orange/10"
                  >
                    Planos
                  </Button>
                </Link>
                <Button 
                  onClick={() => window.open('https://app.tucont.com.br/auth/login', '_blank')} 
                  className="flex-1 bg-tucont-orange/20 border border-tucont-orange text-tucont-orange backdrop-blur-sm hover:bg-tucont-orange/30"
                >
                  Acessar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
