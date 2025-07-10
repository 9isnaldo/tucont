
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Increased size */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/06946f78-e9ff-48f7-b9a5-26f5f246320c.png" alt="Tucont" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-white hover:text-orange-400 transition-colors font-medium flex items-center gap-1">
                Para você e sua empresa
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 w-[600px] bg-slate-800 border border-slate-700 p-6 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-md shadow-lg">
                <div className="flex gap-8">
                  <div className="flex-1">
                    <h3 className="text-orange-400 font-semibold mb-3">Contabilidade Integrativa</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      A Tucont simplifica e combina serviços ao seu momento, em uma Plataforma All-in-one. 
                      Isso é a Contabilidade Integrativa. Empresários e empresárias, não querem sistemas e processos fragmentados, querem uma única plataforma que una ERP, emissão de NF, financeiro, contabilidade, IA, produtos e consultoria estratégica.
                    </p>
                  </div>
                  <div className="flex-1 space-y-3">
                    <a 
                      href="https://rouvbymulgc.typeform.com/to/OSIekGSL?typeform-source=www.tucont.com.br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 hover:bg-slate-700 rounded-md cursor-pointer text-white hover:text-white transition-colors"
                    >
                      <Home className="w-5 h-5 text-orange-400" />
                      <span>Abrir empresa</span>
                    </a>
                    
                    <Link to="/avenida-legal" className="flex items-center gap-3 p-3 hover:bg-slate-700 rounded-md cursor-pointer text-white hover:text-white transition-colors">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      <span>Contabilidade Completa - Avenida Legal</span>
                    </Link>
                    
                    <Link to="/avenida-empreendedora" className="flex items-center gap-3 p-3 hover:bg-slate-700 rounded-md cursor-pointer text-white hover:text-white transition-colors">
                      <TrendingUp className="w-5 h-5 text-orange-400" />
                      <span>Jornada Empreendedora</span>
                    </Link>
                    
                    <Link to="/bem-balcao" className="flex items-center gap-3 p-3 hover:bg-slate-700 rounded-md cursor-pointer text-white hover:text-white transition-colors">
                      <ShoppingCart className="w-5 h-5 text-orange-400" />
                      <span>Plataforma para Vendas, NFs e Financeiro</span>
                    </Link>
                    
                    <Link to="/bpo-financeiro" className="flex items-center gap-3 p-3 hover:bg-slate-700 rounded-md cursor-pointer text-white hover:text-white transition-colors">
                      <DollarSign className="w-5 h-5 text-orange-400" />
                      <span>BPO Financeiro</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/parceiros-contadores" className="text-white hover:text-orange-400 transition-colors font-medium">
              Para Contabilidades
            </Link>
            
            <Link to="/marketplace" className="text-white hover:text-orange-400 transition-colors font-medium">
              Marketplace
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/planos">
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 bg-transparent backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
              >
                Planos
              </Button>
            </Link>
            <Button 
              onClick={() => window.open('https://app.tucont.com.br/auth/login', '_blank')} 
              className="bg-orange-500/20 border border-orange-500 text-orange-500 backdrop-blur-sm hover:bg-orange-500/30 hover:border-orange-400 hover:text-orange-400 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              Acessar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-700">
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-white hover:text-orange-400 w-full text-left"
              >
                Para você e sua empresa
              </button>
              <Link to="/parceiros-contadores" className="block text-white hover:text-orange-400 w-full text-left">
                Para Contabilidades
              </Link>
              <Link to="/marketplace" className="block text-white hover:text-orange-400 w-full text-left">
                Marketplace
              </Link>
              <div className="flex gap-4 pt-4">
                <Link to="/planos" className="flex-1">
                  <Button 
                    variant="outline" 
                    className="w-full border-orange-500 text-orange-500 bg-transparent backdrop-blur-sm hover:bg-orange-500/10"
                  >
                    Planos
                  </Button>
                </Link>
                <Button 
                  onClick={() => window.open('https://app.tucont.com.br/auth/login', '_blank')} 
                  className="flex-1 bg-orange-500/20 border border-orange-500 text-orange-500 backdrop-blur-sm hover:bg-orange-500/30"
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
