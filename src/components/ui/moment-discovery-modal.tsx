import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, Send } from "lucide-react";

interface MomentDiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MomentDiscoveryModal = ({ isOpen, onClose }: MomentDiscoveryModalProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const options = [
    "Tenho uma ideia mas não sei por onde começar",
    "Preciso de um CNPJ para faturar",
    "Já tenho um CNPJ mas preciso automatizar a emissão de notas fiscais",
    "Preciso cumprir minhas obrigações fiscais",
    "Preciso dominar temas empresariais e evoluir meu negócio"
  ];

  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    }
  };

  const handleSubmit = () => {
    const selectedText = selectedOptions.join(", ");
    const fullMessage = `Opções selecionadas: ${selectedText}. Informações adicionais: ${additionalInfo}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(fullMessage)}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">
            Descobrir meu momento
          </h3>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-4 mb-6">
          <p className="text-slate-200 text-sm font-medium">
            Marque as opções que se aplicam ao seu momento atual:
          </p>
          
          {options.map((option, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
              <Checkbox
                id={`option-${index}`}
                checked={selectedOptions.includes(option)}
                onCheckedChange={(checked) => 
                  handleOptionChange(option, checked as boolean)
                }
                className="mt-1 border-2 border-orange-400 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
              />
              <Label 
                htmlFor={`option-${index}`}
                className="text-white text-sm leading-relaxed cursor-pointer flex-1"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-6">
          <Label htmlFor="additional-info" className="text-white text-sm font-medium">
            Conte-nos mais sobre seu momento
          </Label>
          <Textarea
            id="additional-info"
            placeholder="Descreva sua situação atual, desafios ou objetivos..."
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="bg-slate-800/70 border-slate-500 text-white placeholder:text-slate-400 resize-none focus:border-orange-400 focus:ring-orange-400"
            rows={4}
          />
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 hover:from-blue-700 hover:via-blue-800 hover:to-orange-700 text-white rounded-full py-3 font-semibold shadow-lg"
        >
          <Send className="w-4 h-4 mr-2" />
          Enviar para nossa equipe
        </Button>
      </div>
    </div>
  );
};