
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <img src="/lovable-uploads/08c8fd63-07d5-4e07-8f26-6eb8bd4508d4.png" alt="Tucont" className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-slate-900">tucont</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('solucoes')} 
              className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('planos')} 
              className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('agentes')} 
              className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
            >
              Sou contador
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/solucoes">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-600">
                Ver todas as soluções
              </Button>
            </Link>
            <Button 
              onClick={openWhatsApp} 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover-glow-orange"
            >
              Acessar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="block text-slate-700 hover:text-orange-600 w-full text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-slate-700 hover:text-orange-600 w-full text-left"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('planos')} 
                className="block text-slate-700 hover:text-orange-600 w-full text-left"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('agentes')} 
                className="block text-slate-700 hover:text-orange-600 w-full text-left"
              >
                Sou contador
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="block text-slate-700 hover:text-orange-600 w-full text-left"
              >
                Contato
              </button>
              <div className="flex gap-4 pt-4">
                <Link to="/solucoes" className="flex-1">
                  <Button variant="outline" className="w-full">Ver soluções</Button>
                </Link>
                <Button onClick={openWhatsApp} className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600">Acessar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
