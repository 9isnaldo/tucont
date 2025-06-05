
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
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <img src="/lovable-uploads/08c8fd63-07d5-4e07-8f26-6eb8bd4508d4.png" alt="Tucont" className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">tucont</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
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
            <h3 className="font-semibold text-white mb-6 text-lg">Soluções para Empresas</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-slate-400 hover:text-orange-400 transition-colors text-left"
              >
                Abertura de Empresa
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-slate-400 hover:text-orange-400 transition-colors text-left"
              >
                Contabilidade Automática
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-slate-400 hover:text-orange-400 transition-colors text-left"
              >
                Consultoria Estratégica
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')} 
                className="block text-slate-400 hover:text-orange-400 transition-colors text-left"
              >
                BPO Financeiro
              </button>
            </div>
          </div>

          {/* Para Contadores */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Para Contadores</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('agentes')} 
                className="block text-slate-400 hover:text-orange-400 transition-colors text-left"
              >
                <Calculator className="w-4 h-4 inline mr-2" />
                Área para Contadores
              </button>
              <button 
                onClick={() => scrollToSection('agentes')} 
                className="block text-slate-400 hover:text-orange-400 transition-colors text-left"
              >
                Seja um Agente Tucont
              </button>
              <Link to="/cec" className="block text-slate-400 hover:text-orange-400 transition-colors">Programa CEC</Link>
              <Link to="/poder-contabil" className="block text-slate-400 hover:text-orange-400 transition-colors">Poder Contábil</Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <MessageCircle className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5" />
                <span>contato@tucont.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
              "Sua contabilidade passou a olhar para o futuro."
            </p>
            <p className="text-slate-400">
              &copy; 2024 Tucont. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
