import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface PlansModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PlansModal = ({ open, onOpenChange }: PlansModalProps) => {
  const navigate = useNavigate();
  const [nicho, setNicho] = useState("");

  const handleNichoChange = (value: string) => {
    setNicho(value);
    if (value === "direito") {
      onOpenChange(false);
      setTimeout(() => {
        navigate("/direito#planos");
      }, 100);
    } else if (value === "clinica") {
      onOpenChange(false);
      setTimeout(() => {
        navigate("/conciarge#planos");
      }, 100);
    } else if (value === "outros") {
      onOpenChange(false);
      setTimeout(() => {
        navigate("/contato");
      }, 100);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Escolha seu Plano
          </DialogTitle>
          <DialogDescription className="text-base">
            Selecione o nicho do seu negócio para ver planos personalizados ou entre em contato conosco.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="nicho">Nicho do Negócio *</Label>
            <Select value={nicho} onValueChange={handleNichoChange}>
              <SelectTrigger id="nicho">
                <SelectValue placeholder="Selecione o nicho" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="direito">
                  Escritório de Advocacia / Jurídico
                </SelectItem>
                <SelectItem value="clinica">
                  Clínica / Saúde
                </SelectItem>
                <SelectItem value="nichadas">
                  Soluções nichadas
                </SelectItem>
              </SelectContent>
            </Select>
            {nicho === "outros" && (
              <p className="text-sm text-muted-foreground mt-2">
                Você será redirecionado para nossa página de contato
              </p>
            )}
          </div>

          {!nicho && (
            <p className="text-sm text-muted-foreground text-center py-4">
              Selecione um nicho para continuar
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlansModal;
