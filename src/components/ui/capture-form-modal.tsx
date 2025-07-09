import { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface CaptureFormData {
  name: string;
  email: string;
  phone: string;
  cnpj: string;
}

interface CaptureFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaptureFormModal = ({ isOpen, onClose }: CaptureFormModalProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CaptureFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: CaptureFormData) => {
    setIsSubmitting(true);
    // Aqui você pode implementar o envio dos dados
    console.log("Dados do formulário:", data);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirecionar para WhatsApp com os dados
    const message = `Olá! Gostaria de conhecer as duas avenidas integradas da Tucont.
    
Meus dados:
Nome: ${data.name}
Email: ${data.email}  
Telefone: ${data.phone}
CNPJ: ${data.cnpj}`;
    
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
    
    setIsSubmitting(false);
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-0 bg-transparent p-0 shadow-none">
        <div className="relative">
          {/* Background glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-600/20 to-slate-900/80 backdrop-blur-xl rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-purple-500/10 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative p-8 rounded-3xl border border-orange-400/30">
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-4 text-white hover:bg-white/10"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>

            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold text-white text-center">
                Tudo o que você precisa para a{" "}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  gestão do seu negócio
                </span>
              </DialogTitle>
              <p className="text-slate-300 text-center mt-2">
                Comece a usar o Tucont gratuitamente
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white font-medium">
                  Nome
                </Label>
                <Input
                  id="name"
                  placeholder="Nome"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-300 backdrop-blur-sm focus:bg-white/15 focus:border-orange-400/50"
                  {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-white font-medium">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-300 backdrop-blur-sm focus:bg-white/15 focus:border-orange-400/50"
                  {...register("email", { 
                    required: "E-mail é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "E-mail inválido"
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-white font-medium">
                  Telefone
                </Label>
                <div className="flex gap-2">
                  <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3 py-2 backdrop-blur-sm">
                    <span className="text-white text-sm">🇧🇷 +55</span>
                  </div>
                  <Input
                    id="phone"
                    placeholder="Telefone"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-300 backdrop-blur-sm focus:bg-white/15 focus:border-orange-400/50"
                    {...register("phone", { required: "Telefone é obrigatório" })}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="cnpj" className="text-white font-medium">
                  CNPJ
                </Label>
                <Input
                  id="cnpj"
                  placeholder="CNPJ"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-300 backdrop-blur-sm focus:bg-white/15 focus:border-orange-400/50"
                  {...register("cnpj", { required: "CNPJ é obrigatório" })}
                />
                {errors.cnpj && (
                  <p className="text-red-400 text-sm mt-1">{errors.cnpj.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? "Enviando..." : "Experimente agora"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};