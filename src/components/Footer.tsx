
import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Quero conhecer a Tucont")}`, '_blank');
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <img src="/lovable-uploads/08c8fd63-07d5-4e07-8f26-6eb8bd4508d4.png" alt="Tucont" className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">tucont</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Revolucionando a contabilidade no Brasil com IA, automação e mentoria estratégica.
            </p>
            <div className="flex gap-4">
              <button onClick={openWhatsApp} className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Soluções para Empresas */}
          <div>
            <h3 className="font-semibold text-white mb-4">Soluções para Empresas</h3>
            <div className="space-y-3">
              <Link to="/plataforma-notas" className="block text-slate-400 hover:text-orange-400 transition-colors">Plataforma para Emissão de Notas</Link>
              <Link to="/contabilidade-online" className="block text-slate-400 hover:text-orange-400 transition-colors">Contabilidade Online</Link>
              <Link to="/jornada-negocios" className="block text-slate-400 hover:text-orange-400 transition-colors">Jornada de Negócios</Link>
              <Link to="/bpo-financeiro" className="block text-slate-400 hover:text-orange-400 transition-colors">BPO Financeiro</Link>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold text-white mb-4">Partners Contabilidades</h3>
            <div className="space-y-3">
              <Link to="/plataforma-integrativa" className="block text-slate-400 hover:text-orange-400 transition-colors">Plataforma Integrativa</Link>
              <Link to="/cec" className="block text-slate-400 hover:text-orange-400 transition-colors">CEC - Cada Etapa Conta</Link>
              <Link to="/poder-contabil" className="block text-slate-400 hover:text-orange-400 transition-colors">Poder Contábil</Link>
              <Link to="/marketplace" className="block text-slate-400 hover:text-orange-400 transition-colors">Marketplace - BEM</Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3">
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

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Tucont. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
