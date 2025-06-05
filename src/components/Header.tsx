
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Quero conhecer a Tucont")}`, '_blank');
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
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-orange-600">
                  Soluções para Empresas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-6 bg-white rounded-lg shadow-xl border">
                    <div className="space-y-4">
                      <Link to="/plataforma-notas" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-semibold text-slate-900">Plataforma para Emissão de Notas e Financeiro</div>
                        <div className="text-sm text-slate-600">Automação completa para suas operações</div>
                      </Link>
                      <Link to="/contabilidade-online" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-semibold text-slate-900">Contabilidade Online</div>
                        <div className="text-sm text-slate-600">Gestão contábil 100% digital</div>
                      </Link>
                      <Link to="/jornada-negocios" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-semibold text-slate-900">Jornada de Negócios</div>
                        <div className="text-sm text-slate-600">Mentoria estratégica para crescimento</div>
                      </Link>
                      <Link to="/bpo-financeiro" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-semibold text-slate-900">BPO Financeiro</div>
                        <div className="text-sm text-slate-600">Terceirização inteligente de processos</div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-orange-600">
                  Partners Contabilidades
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-6 bg-white rounded-lg shadow-xl border">
                    <div className="space-y-4">
                      <Link to="/plataforma-integrativa" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-semibold text-slate-900">Plataforma de Contabilidade Integrativa</div>
                        <div className="text-sm text-slate-600">Tecnologia e método para escalar</div>
                      </Link>
                      <Link to="/cec" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-semibold text-slate-900">CEC - Cada Etapa Conta</div>
                        <div className="text-sm text-slate-600">Implementação total via IA</div>
                      </Link>
                      <Link to="/poder-contabil" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-semibold text-slate-900">Poder Contábil</div>
                        <div className="text-sm text-slate-600">Comunidade exclusiva de contadores</div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/marketplace" className="px-4 py-2 text-slate-700 hover:text-orange-600 transition-colors">
                  Marketplace - BEM
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/blog" className="px-4 py-2 text-slate-700 hover:text-orange-600 transition-colors">
                  Blog
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-600">
              Planos
            </Button>
            <Button onClick={openWhatsApp} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
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
              <div>
                <div className="font-semibold text-slate-900 mb-2">Soluções para Empresas</div>
                <div className="space-y-2 pl-4">
                  <Link to="/plataforma-notas" className="block text-slate-600 hover:text-orange-600">Plataforma para Emissão de Notas</Link>
                  <Link to="/contabilidade-online" className="block text-slate-600 hover:text-orange-600">Contabilidade Online</Link>
                  <Link to="/jornada-negocios" className="block text-slate-600 hover:text-orange-600">Jornada de Negócios</Link>
                  <Link to="/bpo-financeiro" className="block text-slate-600 hover:text-orange-600">BPO Financeiro</Link>
                </div>
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-2">Partners Contabilidades</div>
                <div className="space-y-2 pl-4">
                  <Link to="/plataforma-integrativa" className="block text-slate-600 hover:text-orange-600">Plataforma Integrativa</Link>
                  <Link to="/cec" className="block text-slate-600 hover:text-orange-600">CEC - Cada Etapa Conta</Link>
                  <Link to="/poder-contabil" className="block text-slate-600 hover:text-orange-600">Poder Contábil</Link>
                </div>
              </div>
              <Link to="/marketplace" className="block text-slate-700 hover:text-orange-600">Marketplace - BEM</Link>
              <Link to="/blog" className="block text-slate-700 hover:text-orange-600">Blog</Link>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="flex-1">Planos</Button>
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
