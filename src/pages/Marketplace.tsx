import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Marketplace Tucont
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Descubra soluções integradas para potencializar seu negócio. 
              Conecte-se com parceiros estratégicos e amplie suas possibilidades.
            </p>
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              Explorar Marketplace
            </Button>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Em Construção
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Estamos desenvolvendo uma experiência incrível para conectar você 
                aos melhores parceiros e soluções do mercado. Em breve!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Marketplace;