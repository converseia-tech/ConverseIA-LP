import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkle, ArrowRight, Upload, Scales, FirstAid, Globe, CaretLeft } from "phosphor-react";
import { GlobalBackground } from "@/components/GlobalBackground";

interface FormData {
  // Step 1
  nicho: string;
  
  // Step 2 - Dados Gerais
  nomeEmpresa: string;
  nomeResponsavel: string;
  email: string;
  whatsapp: string;
  cnpj: string;
  cidade: string;
  estado: string;
  numProfissionais: string;
  
  // Step 3 - Estrutura (varia por nicho)
  possuiCRM: string;
  qualCRM: string;
  softwaresUtilizados: string[];
  captacaoClientes: string;
  areasAtuacao: string[];
  agentesPorArea: string;
  sistemaGestao: string;
  agendamentoAtual: string;
  agendamentoAutomatico: string;
  integracoes: string[];
  setorAtuacao: string;
  possuiSite: string;
  linkSite: string;
  contatoAtual: string[];
  funcionalidadesIA: string[];
  
  // Step 4 - Personalização
  nomeAgente: string;
  linguagem: string;
  tomVoz: string;
  direcionarHumano: string;
  canaisDesejados: string[];
  relatorios: string;
  coletarDados: string[];
  lembretesAutomaticos: string;
  posConsulta: string;
  integracaoPersonalizada: string;
  
  // Step 5 - Final
  observacoes: string;
  aceitarTermos: boolean;
  arquivos: File[];
}

const Contratacao = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nicho: "",
    nomeEmpresa: "",
    nomeResponsavel: "",
    email: "",
    whatsapp: "",
    cnpj: "",
    cidade: "",
    estado: "",
    numProfissionais: "",
    possuiCRM: "",
    qualCRM: "",
    softwaresUtilizados: [],
    captacaoClientes: "",
    areasAtuacao: [],
    agentesPorArea: "",
    sistemaGestao: "",
    agendamentoAtual: "",
    agendamentoAutomatico: "",
    integracoes: [],
    setorAtuacao: "",
    possuiSite: "",
    linkSite: "",
    contatoAtual: [],
    funcionalidadesIA: [],
    nomeAgente: "",
    linguagem: "",
    tomVoz: "",
    direcionarHumano: "",
    canaisDesejados: [],
    relatorios: "",
    coletarDados: [],
    lembretesAutomaticos: "",
    posConsulta: "",
    integracaoPersonalizada: "",
    observacoes: "",
    aceitarTermos: false,
    arquivos: [],
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      updateFormData("arquivos", [...formData.arquivos, ...filesArray]);
    }
  };

  const handleSubmit = () => {
    const message = `
*NOVA SOLICITAÇÃO DE CONTRATAÇÃO - ConverseIA*

*NICHO:* ${formData.nicho}

*DADOS DA EMPRESA*
Empresa: ${formData.nomeEmpresa}
Responsável: ${formData.nomeResponsavel}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
CNPJ: ${formData.cnpj || "Não informado"}
Localização: ${formData.cidade} - ${formData.estado}
Profissionais: ${formData.numProfissionais}

*PERSONALIZAÇÃO DO AGENTE*
Nome do Agente: ${formData.nomeAgente}
Linguagem: ${formData.linguagem}
Tom de Voz: ${formData.tomVoz}
Canais: ${formData.canaisDesejados.join(", ")}

*OBSERVAÇÕES*
${formData.observacoes || "Nenhuma observação adicional"}

*Arquivos Anexados:* ${formData.arquivos.length} arquivo(s)
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const finalWhatsappLink = `https://api.whatsapp.com/send/?phone=558197849998&text=${encodedMessage}&type=phone_number&app_absent=0`;
    
    window.open(finalWhatsappLink, '_blank');
  };

  const nextStep = () => {
    if (currentStep === 1 && !formData.nicho) {
      alert("Por favor, selecione um nicho antes de continuar.");
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const renderStep1 = () => (
    <motion.div
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-white mb-4">
          Qual é o seu <span className="font-bold text-purple-400">segmento?</span>
        </h2>
        <p className="text-slate-400 font-light">
          Personalizaremos a experiência baseada na sua área de atuação
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { id: "Advocacia", icon: Scales, label: "Advocacia", desc: "Escritórios e Departamentos Jurídicos", color: "blue" },
          { id: "Clínica", icon: FirstAid, label: "Saúde", desc: "Clínicas, Consultórios e Hospitais", color: "teal" },
          { id: "Outro", icon: Globe, label: "Outros", desc: "Comércio, Serviços e Consultorias", color: "purple" }
        ].map((item) => {
          const isSelected = formData.nicho === item.id;
          const colorClasses = {
            blue: {
              border: "border-blue-500",
              bg: "bg-blue-500/10",
              hoverBorder: "hover:border-blue-500/50",
              gradient: "from-blue-500/20",
              iconBg: "bg-blue-500",
              hoverIconText: "group-hover:text-blue-400"
            },
            teal: {
              border: "border-teal-500",
              bg: "bg-teal-500/10",
              hoverBorder: "hover:border-teal-500/50",
              gradient: "from-teal-500/20",
              iconBg: "bg-teal-500",
              hoverIconText: "group-hover:text-teal-400"
            },
            purple: {
              border: "border-purple-500",
              bg: "bg-purple-500/10",
              hoverBorder: "hover:border-purple-500/50",
              gradient: "from-purple-500/20",
              iconBg: "bg-purple-500",
              hoverIconText: "group-hover:text-purple-400"
            }
          }[item.color as "blue" | "teal" | "purple"];

          return (
            <div
              key={item.id}
              onClick={() => updateFormData("nicho", item.id)}
              className={`cursor-pointer p-8 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                isSelected
                  ? `${colorClasses.border} ${colorClasses.bg}`
                  : `border-white/10 bg-white/5 ${colorClasses.hoverBorder} hover:bg-white/[0.07]`
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} to-transparent opacity-0 transition-opacity duration-500 ${isSelected ? 'opacity-100' : 'group-hover:opacity-50'}`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${
                  isSelected ? `${colorClasses.iconBg} text-white` : `bg-white/10 text-slate-400 ${colorClasses.hoverIconText}`
                }`}>
                  <item.icon size={32} weight={isSelected ? "fill" : "light"} />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{item.label}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-white mb-4">
          Dados da <span className="font-bold text-purple-400">Empresa</span>
        </h2>
        <p className="text-slate-400 font-light">
          Informações essenciais para iniciarmos o setup
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <Label className="text-slate-300">Nome da Empresa</Label>
          <Input
            className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 h-12"
            placeholder="Digite o nome oficial"
            value={formData.nomeEmpresa}
            onChange={(e) => updateFormData("nomeEmpresa", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-slate-300">Responsável</Label>
          <Input
            className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 h-12"
            placeholder="Seu nome completo"
            value={formData.nomeResponsavel}
            onChange={(e) => updateFormData("nomeResponsavel", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-slate-300">E-mail Corporativo</Label>
          <Input
            className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 h-12"
            type="email"
            placeholder="nome@empresa.com.br"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-slate-300">WhatsApp / Telefone</Label>
          <Input
            className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 h-12"
            placeholder="(00) 00000-0000"
            value={formData.whatsapp}
            onChange={(e) => updateFormData("whatsapp", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-slate-300">CNPJ (Opcional)</Label>
          <Input
            className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 h-12"
            placeholder="00.000.000/0000-00"
            value={formData.cnpj}
            onChange={(e) => updateFormData("cnpj", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-slate-300">Número de Colaboradores</Label>
          <Input
            className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 h-12"
            type="number"
            placeholder="Ex: 10"
            value={formData.numProfissionais}
            onChange={(e) => updateFormData("numProfissionais", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-slate-300">Cidade</Label>
          <Input
            className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 h-12"
            placeholder="Sua cidade"
            value={formData.cidade}
            onChange={(e) => updateFormData("cidade", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-slate-300">Estado</Label>
          <Select value={formData.estado} onValueChange={(value) => updateFormData("estado", value)}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
              <SelectValue placeholder="UF" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
              {["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"].map(uf => (
                <SelectItem key={uf} value={uf}>{uf}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-white mb-4">
          Detalhes da <span className="font-bold text-purple-400">Operação</span>
        </h2>
        <p className="text-slate-400 font-light">
          Entendendo seu fluxo de trabalho atual
        </p>
      </div>

      <div className="space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <Label className="text-lg text-white font-medium">Possui CRM ou Sistema de Gestão?</Label>
          <RadioGroup 
            value={formData.possuiCRM} 
            onValueChange={(value) => updateFormData("possuiCRM", value)}
            className="grid grid-cols-2 gap-4"
          >
            <div className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all ${formData.possuiCRM === 'sim' ? 'bg-purple-500/20 border-purple-500' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
              <RadioGroupItem value="sim" id="crm-sim" className="sr-only" />
              <Label htmlFor="crm-sim" className="cursor-pointer w-full text-center text-white">Sim</Label>
            </div>
            <div className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all ${formData.possuiCRM === 'nao' ? 'bg-purple-500/20 border-purple-500' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
              <RadioGroupItem value="nao" id="crm-nao" className="sr-only" />
              <Label htmlFor="crm-nao" className="cursor-pointer w-full text-center text-white">Não</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.possuiCRM === "sim" && (
          <div className="space-y-3 animate-in fade-in slide-in-from-top-4">
            <Label className="text-slate-300">Qual sistema utiliza?</Label>
            <Input
              className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 h-12"
              placeholder="Nome do software"
              value={formData.qualCRM}
              onChange={(e) => updateFormData("qualCRM", e.target.value)}
            />
          </div>
        )}

        <div className="space-y-3">
          <Label className="text-slate-300">Como é feita a captação/agendamento hoje?</Label>
          <Textarea
            className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 min-h-[120px]"
            placeholder="Descreva brevemente seu processo atual..."
            value={formData.captacaoClientes || formData.agendamentoAtual}
            onChange={(e) => {
              updateFormData("captacaoClientes", e.target.value);
              updateFormData("agendamentoAtual", e.target.value);
            }}
          />
        </div>
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-white mb-4">
          Personalize seu <span className="font-bold text-purple-400">Agente</span>
        </h2>
        <p className="text-slate-400 font-light">
          Defina a personalidade e comportamento da IA
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <Label className="text-slate-300">Nome do Agente</Label>
          <Input
            className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 h-12"
            placeholder="Ex: Assistente Virtual"
            value={formData.nomeAgente}
            onChange={(e) => updateFormData("nomeAgente", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-slate-300">Tom de Voz</Label>
          <Select value={formData.tomVoz} onValueChange={(value) => updateFormData("tomVoz", value)}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="amigavel">Amigável</SelectItem>
              <SelectItem value="tecnico">Técnico</SelectItem>
              <SelectItem value="empatico">Empático</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-1 md:col-span-2 space-y-4">
          <Label className="text-slate-300 block mb-2">Canais de Atuação</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["WhatsApp", "Instagram", "Site", "E-mail", "Telegram", "Facebook"].map((canal) => (
              <div 
                key={canal}
                onClick={() => {
                  const newCanais = formData.canaisDesejados.includes(canal)
                    ? formData.canaisDesejados.filter(c => c !== canal)
                    : [...formData.canaisDesejados, canal];
                  updateFormData("canaisDesejados", newCanais);
                }}
                className={`flex items-center space-x-3 p-4 rounded-xl border cursor-pointer transition-all ${
                  formData.canaisDesejados.includes(canal)
                    ? "bg-purple-500/20 border-purple-500"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <Checkbox 
                  checked={formData.canaisDesejados.includes(canal)}
                  className="border-white/30 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                />
                <span className="text-white">{canal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderStep5 = () => (
    <motion.div
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-white mb-4">
          Últimos <span className="font-bold text-purple-400">Detalhes</span>
        </h2>
        <p className="text-slate-400 font-light">
          Revise e envie sua solicitação
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="space-y-3">
          <Label className="text-slate-300">Observações Extras</Label>
          <Textarea
            className="bg-white/5 border-white/10 text-white focus:border-purple-500/50 min-h-[150px]"
            placeholder="Algum detalhe específico que não perguntamos?"
            value={formData.observacoes}
            onChange={(e) => updateFormData("observacoes", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-slate-300">Anexar Arquivos (Opcional)</Label>
          <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-purple-500/50 transition-colors bg-white/[0.02]">
            <Upload className="mx-auto h-8 w-8 text-slate-400 mb-4" />
            <Input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              onChange={handleFileUpload}
            />
            <Label htmlFor="file-upload" className="cursor-pointer text-purple-400 hover:text-purple-300">
              Clique para selecionar arquivos
            </Label>
            <p className="text-xs text-slate-500 mt-2">PDF, DOC, Imagens (Max 10MB)</p>
            {formData.arquivos.length > 0 && (
              <div className="mt-4 text-sm text-white bg-white/10 py-2 px-4 rounded-lg inline-block">
                {formData.arquivos.length} arquivo(s) selecionado(s)
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-3 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 mt-8">
          <Checkbox
            id="termos"
            checked={formData.aceitarTermos}
            onCheckedChange={(checked) => updateFormData("aceitarTermos", checked === true)}
            className="mt-1 border-purple-500 data-[state=checked]:bg-purple-500"
          />
          <Label htmlFor="termos" className="text-sm text-slate-300 leading-relaxed cursor-pointer">
            Concordo com o processamento dos meus dados para fins de contato comercial e personalização da proposta da ConverseIA.
          </Label>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen relative text-slate-200 selection:bg-purple-500/30 flex flex-col">
      <GlobalBackground />
      <Navigation transparent />
      
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Progress Steps */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      step === currentStep
                        ? "bg-purple-500 scale-150 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                        : step < currentStep
                        ? "bg-purple-500/50"
                        : "bg-white/10"
                    }`}
                  />
                  {step < 5 && (
                    <div className={`w-8 h-[1px] mx-2 transition-colors duration-500 ${step < currentStep ? "bg-purple-500/30" : "bg-white/5"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <AnimatePresence mode="wait">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
              {currentStep === 5 && renderStep5()}
            </AnimatePresence>

            {/* Navigation Actions */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
              <Button
                variant="ghost"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`text-slate-400 hover:text-white hover:bg-white/5 ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <CaretLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>

              <Button
                onClick={currentStep === 5 ? handleSubmit : nextStep}
                disabled={currentStep === 5 && !formData.aceitarTermos}
                className="bg-purple-600 hover:bg-purple-500 text-white px-8 h-12 rounded-full shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300"
              >
                {currentStep === 5 ? (
                  <>
                    Finalizar Solicitação
                    <Sparkle className="ml-2 h-4 w-4" weight="fill" />
                  </>
                ) : (
                  <>
                    Próxima Etapa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contratacao;
