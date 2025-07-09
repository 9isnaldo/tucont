
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('solucoes')} 
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Soluções
            </button>
            <Link to="/planos" className="text-white hover:text-orange-400 transition-colors font-medium">
              Planos
            </Link>
            <Link to="/produtos" className="text-white hover:text-orange-400 transition-colors font-medium">
              Produtos
            </Link>
            <Link to="/parceiros-contadores" className="text-white hover:text-orange-400 transition-colors font-medium">
              Sou contador
            </Link>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/solucoes">
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 bg-transparent backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
              >
                Ver todas as soluções
              </Button>
            </Link>
            <Button 
              onClick={openWhatsApp} 
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
                onClick={() => scrollToSection('hero')} 
                className="block text-white hover:text-orange-400 w-full text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-white hover:text-orange-400 w-full text-left"
              >
                Soluções
              </button>
              <Link to="/planos" className="block text-white hover:text-orange-400 w-full text-left">
                Planos
              </Link>
              <Link to="/produtos" className="block text-white hover:text-orange-400 w-full text-left">
                Produtos
              </Link>
              <Link to="/parceiros-contadores" className="block text-white hover:text-orange-400 w-full text-left">
                Sou contador
              </Link>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="block text-white hover:text-orange-400 w-full text-left"
              >
                Contato
              </button>
              <div className="flex gap-4 pt-4">
                <Link to="/solucoes" className="flex-1">
                  <Button 
                    variant="outline" 
                    className="w-full border-orange-500 text-orange-500 bg-transparent backdrop-blur-sm hover:bg-orange-500/10"
                  >
                    Ver soluções
                  </Button>
                </Link>
                <Button 
                  onClick={openWhatsApp} 
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
