
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Rocket, Users, MessageCircle, CheckCircle, Star } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [userInput, setUserInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputSubmit = async () => {
    if (!userInput.trim()) {
      toast.error("Por favor, descreva sua necessidade");
      return;
    }
    
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse na Tucont. Minha necessidade: ${userInput}`);
      window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
    }, 2000);
  };

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Mais do que contabilidade.<br />
            <span className="text-orange-400">Um parceiro para sua jornada de crescimento.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Automação total da burocracia + mentoria estratégica real.
          </p>
          
          {/* Interactive Input */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-2xl">
            <div className="text-blue-900 mb-4">
              <h3 className="text-lg font-semibold">Descreva sua necessidade:</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Ex: Quero abrir minha empresa e ter controle financeiro..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 text-lg p-4"
                disabled={isProcessing}
              />
              <Button 
                onClick={handleInputSubmit}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
                disabled={isProcessing}
              >
                {isProcessing ? "Processando..." : "Comece agora"}
              </Button>
            </div>
            {isProcessing && (
              <div className="mt-4 text-blue-900">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <span className="ml-2">Nossa IA está analisando sua demanda...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Duas Avenidas */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
            Duas avenidas. Um só destino: seu crescimento.
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Cuidamos da burocracia enquanto você foca no que importa
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Avenida Legal</CardTitle>
                <CardDescription className="text-lg">
                  Conformidade automatizada com IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Esteira automatizada de obrigações fiscais</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Zero fricção, zero erro, 100% compliance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Supervisão de especialistas</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => openWhatsApp("Quero saber mais sobre a Avenida Legal")}
                >
                  Ver como funciona
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-900">Avenida de Negócios</CardTitle>
                <CardDescription className="text-lg text-orange-700">
                  Mentoria estratégica para crescimento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Mentorias personalizadas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Frameworks práticos de crescimento</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Decisões baseadas em dados</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  onClick={() => openWhatsApp("Quero saber mais sobre a Avenida de Negócios")}
                >
                  Ver como funciona
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modelos de Atuação */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Escolha seu modelo de atuação
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "SaaS", desc: "Autoatendimento", price: "A partir de R$ 97/mês" },
              { title: "Tucont", desc: "Modelo unificado", price: "A partir de R$ 297/mês" },
              { title: "Partner", desc: "Agente integrativo", price: "Sob demanda" },
              { title: "CEC", desc: "Implementação IA", price: "Consulte" },
              { title: "Poder Contábil", desc: "Comunidade", price: "Acesso VIP" }
            ].map((model, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">{model.title}</CardTitle>
                  <CardDescription>{model.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-orange-600 mb-4">{model.price}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => openWhatsApp(`Quero saber mais sobre o modelo ${model.title}`)}
                  >
                    Saiba mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção para Contadores */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-orange-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer empreender com a Tucont?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Torne-se um Agente de Contabilidade Integrativa. 
            Tenha nossa tecnologia, método, marca e suporte para transformar seus clientes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Tecnologia</h3>
              <p className="text-blue-200">Plataforma completa já desenvolvida</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Método</h3>
              <p className="text-blue-200">Frameworks validados de crescimento</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Suporte</h3>
              <p className="text-blue-200">Time especializado sempre disponível</p>
            </div>
          </div>
          
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            onClick={() => openWhatsApp("Quero ser parceiro da Tucont")}
          >
            Quero ser parceiro
          </Button>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Como funciona
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Descreva sua demanda</h3>
              <p className="text-gray-600">Nossa IA analisa suas necessidades em tempo real</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Esteira IA em ação</h3>
              <p className="text-gray-600">Processamento automático com supervisão especializada</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Resultado entregue</h3>
              <p className="text-gray-600">Plano personalizado com contratação imediata</p>
            </div>
          </div>
        </div>
      </section>

      {/* One Stop Shop */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            Um só lugar. Todas as soluções. Agora.
          </h2>
          <p className="text-xl mb-12 text-gray-600">
            Balcão único para todas suas necessidades empresariais
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Certificado Digital",
              "Abertura de Empresa",
              "Emissão de Notas",
              "BPO Financeiro",
              "Consultoria",
              "Sites",
              "Marketplace",
              "E-commerce"
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-medium text-blue-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Integration */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Você resolve sua contabilidade direto do WhatsApp
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Atendimento omnichannel no canal que você mais usa
          </p>
          <Button 
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
            onClick={() => openWhatsApp("Olá! Quero conhecer os serviços da Tucont")}
          >
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            O que nossos clientes dizem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Eu cuidava de tudo sozinho. Agora tenho uma plataforma e um plano para crescer.",
                author: "João Silva",
                role: "CEO, TechStart"
              },
              {
                text: "A automação da Tucont me permitiu focar 100% no meu negócio.",
                author: "Maria Santos",
                role: "Fundadora, EcoStyle"
              },
              {
                text: "Como parceiro, consegui escalar meu escritório sem aumentar a equipe.",
                author: "Carlos Oliveira",
                role: "Contador Parceiro"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-blue-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar sua contabilidade?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Junte-se a centenas de empresas que já escolheram crescer com a Tucont
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg"
              onClick={() => openWhatsApp("Quero começar minha jornada com a Tucont")}
            >
              Começar agora
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
              onClick={() => openWhatsApp("Quero agendar uma demonstração")}
            >
              Agendar demo
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 shadow-lg"
          onClick={() => openWhatsApp("Olá! Preciso de ajuda com minha contabilidade")}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
