
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Users, Award, Star } from "lucide-react";

const PoderContabil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero fazer parte do Poder Contábil")}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-slate-50">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-8">
              <Crown className="w-4 h-4" />
              <span className="font-medium">Comunidade Exclusiva</span>
            </div>
            
            {/* Logo Poder Contábil */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/c21c9d3f-66aa-498b-992c-6021e181d483.png" 
                alt="Poder Contábil" 
                className="h-20 mx-auto"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-slate-900 bg-clip-text text-transparent">
              Poder Contábil
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              A comunidade mais exclusiva de contadores e empresários do Brasil. 
              Networking, conhecimento e oportunidades de alto nível.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-4 text-lg"
              >
                Solicitar acesso VIP
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg">
                Conhecer a comunidade
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PoderContabil;
