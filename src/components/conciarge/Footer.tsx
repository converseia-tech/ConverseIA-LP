import { Separator } from "@/components/ui/separator";
import { Envelope, Phone, MapPin, IdentificationBadge, InstagramLogo, LinkedinLogo } from "phosphor-react"; // Trocado para Phosphor Icons
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2 animate-in fade-in-0 slide-in-from-left-4 duration-1000">
            <img 
              src="/logo_header.png" 
              alt="Conciarge" 
              className="h-16 w-auto mb-4 brightness-0 invert hover:scale-105 transition-transform duration-300"
            />
            <p className="text-white/80 mb-6 max-w-md">
              A plataforma de inteligência que transforma leads em pacientes agendados, 
              automatizando o atendimento para clínicas e profissionais de saúde.
            </p>
            <div className="space-y-2 text-sm">
                {/* Email e telefone removidos conforme solicitado */}
              <div className="flex items-center space-x-2 group hover:translate-x-1 transition-transform duration-300">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" weight="duotone" />
                <span>Av. Eng. Domingos Ferreira, 4023 - Sl 1004 - Recife, PE</span>
              </div>
              {/* LINHA DO CNPJ ADICIONADA AQUI */}
              <div className="flex items-center space-x-2 group hover:translate-x-1 transition-transform duration-300">
                <IdentificationBadge className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" weight="duotone" />
                <span>CNPJ: 61.378.806/0001-02</span>
              </div>
                {/* Ícones Instagram e LinkedIn nativos do Phosphor */}
                <div className="flex items-center space-x-3 pt-3 mb-0 pb-0 self-end" style={{marginBottom: 0, paddingBottom: 0}}>
                  <a href="https://instagram.com/conciarge.ia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <InstagramLogo className="w-9 h-9 hover:scale-110 transition-transform duration-300" weight="duotone" />
                  </a>
                  <a href="https://linkedin.com/company/converseia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LinkedinLogo className="w-9 h-9 hover:scale-110 transition-transform duration-300" weight="duotone" />
                  </a>
                </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#solucao" className="hover:text-white transition-all duration-300 hover:translate-x-1 block">Agente Concierge</a></li>
              <li><a href="#solucao" className="hover:text-white transition-all duration-300 hover:translate-x-1 block">Agente de Qualificação</a></li>
              <li><a href="#solucao" className="hover:text-white transition-all duration-300 hover:translate-x-1 block">Agendamento Automático</a></li>
              <li><a href="#solucao" className="hover:text-white transition-all duration-300 hover:translate-x-1 block">Follow-Up Personalizado</a></li>
              <li><a href="#recursos" className="hover:text-white transition-all duration-300 hover:translate-x-1 block">CRM Integrado</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 block">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 block">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 block">Treinamentos</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 block">Status da Plataforma</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 block">Contato</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8 animate-in fade-in-0 duration-1000 delay-600" />

        <div className="flex flex-col items-center justify-center text-sm text-white/60 animate-in fade-in-0 slide-in-from-bottom-2 duration-1000 delay-700">
          <div className="hover:text-white transition-colors duration-300 text-center">
            © 2025 Conciarge. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;