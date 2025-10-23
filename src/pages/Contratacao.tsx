import { useState } from "react";
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
import { MessageCircle, Sparkles, ArrowRight, CheckCircle, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const whatsappLink = "https://api.whatsapp.com/send/?phone=558197849998&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20apresenta%C3%A7%C3%A3o%20dos%20servi%C3%A7os%20ConverseIA.&type=phone_number&app_absent=0";
  
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
    // Montar mensagem para WhatsApp
    const message = `
*🤖 NOVA SOLICITAÇÃO DE CONTRATAÇÃO - ConverseIA*

*NICHO:* ${formData.nicho}

*📋 DADOS DA EMPRESA*
Empresa: ${formData.nomeEmpresa}
Responsável: ${formData.nomeResponsavel}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
CNPJ: ${formData.cnpj || "Não informado"}
Localização: ${formData.cidade} - ${formData.estado}
Profissionais: ${formData.numProfissionais}

*🎯 PERSONALIZAÇÃO DO AGENTE*
Nome do Agente: ${formData.nomeAgente}
Linguagem: ${formData.linguagem}
Tom de Voz: ${formData.tomVoz}
Canais: ${formData.canaisDesejados.join(", ")}

*💬 OBSERVAÇÕES*
${formData.observacoes || "Nenhuma observação adicional"}

*📎 Arquivos Anexados:* ${formData.arquivos.length} arquivo(s)
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
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Selecione seu <span className="gradient-text">segmento</span>
        </h2>
        <p className="text-muted-foreground">
          Escolha a área de atuação do seu negócio para personalizarmos sua experiência
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => updateFormData("nicho", "Advocacia")}
          className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-glow ${
            formData.nicho === "Advocacia"
              ? "border-primary bg-primary/10"
              : "border-border bg-card/50"
          }`}
        >
          <div className="text-center">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-2">Advocacia</h3>
            <p className="text-sm text-muted-foreground">
              Escritórios jurídicos, advogados e departamentos legais
            </p>
          </div>
        </div>

        <div
          onClick={() => updateFormData("nicho", "Clínica")}
          className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-glow ${
            formData.nicho === "Clínica"
              ? "border-primary bg-primary/10"
              : "border-border bg-card/50"
          }`}
        >
          <div className="text-center">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold mb-2">Clínica</h3>
            <p className="text-sm text-muted-foreground">
              Clínicas médicas, consultórios e centros de saúde
            </p>
          </div>
        </div>

        <div
          onClick={() => updateFormData("nicho", "Outro")}
          className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-glow ${
            formData.nicho === "Outro"
              ? "border-primary bg-primary/10"
              : "border-border bg-card/50"
          }`}
        >
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">Outro Setor</h3>
            <p className="text-sm text-muted-foreground">
              Comércio, serviços, consultorias e demais áreas
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Dados da <span className="gradient-text">Empresa</span>
        </h2>
        <p className="text-muted-foreground">
          Informações básicas para configurarmos seu agente
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nomeEmpresa">
            Nome da {formData.nicho === "Advocacia" ? "Escritório" : formData.nicho === "Clínica" ? "Clínica" : "Empresa"} *
          </Label>
          <Input
            id="nomeEmpresa"
            placeholder="Digite o nome"
            value={formData.nomeEmpresa}
            onChange={(e) => updateFormData("nomeEmpresa", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nomeResponsavel">Nome do Responsável *</Label>
          <Input
            id="nomeResponsavel"
            placeholder="Nome completo"
            value={formData.nomeResponsavel}
            onChange={(e) => updateFormData("nomeResponsavel", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            type="email"
            placeholder="contato@empresa.com.br"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp / Telefone *</Label>
          <Input
            id="whatsapp"
            type="tel"
            placeholder="(00) 00000-0000"
            value={formData.whatsapp}
            onChange={(e) => updateFormData("whatsapp", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cnpj">CNPJ (opcional)</Label>
          <Input
            id="cnpj"
            placeholder="00.000.000/0000-00"
            value={formData.cnpj}
            onChange={(e) => updateFormData("cnpj", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="numProfissionais">
            Número de {formData.nicho === "Advocacia" ? "Advogados" : formData.nicho === "Clínica" ? "Profissionais" : "Colaboradores"} *
          </Label>
          <Input
            id="numProfissionais"
            type="number"
            placeholder="Ex: 5"
            value={formData.numProfissionais}
            onChange={(e) => updateFormData("numProfissionais", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cidade">Cidade *</Label>
          <Input
            id="cidade"
            placeholder="São Paulo"
            value={formData.cidade}
            onChange={(e) => updateFormData("cidade", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="estado">Estado *</Label>
          <Select value={formData.estado} onValueChange={(value) => updateFormData("estado", value)}>
            <SelectTrigger id="estado">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="AC">Acre</SelectItem>
              <SelectItem value="AL">Alagoas</SelectItem>
              <SelectItem value="AP">Amapá</SelectItem>
              <SelectItem value="AM">Amazonas</SelectItem>
              <SelectItem value="BA">Bahia</SelectItem>
              <SelectItem value="CE">Ceará</SelectItem>
              <SelectItem value="DF">Distrito Federal</SelectItem>
              <SelectItem value="ES">Espírito Santo</SelectItem>
              <SelectItem value="GO">Goiás</SelectItem>
              <SelectItem value="MA">Maranhão</SelectItem>
              <SelectItem value="MT">Mato Grosso</SelectItem>
              <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
              <SelectItem value="MG">Minas Gerais</SelectItem>
              <SelectItem value="PA">Pará</SelectItem>
              <SelectItem value="PB">Paraíba</SelectItem>
              <SelectItem value="PR">Paraná</SelectItem>
              <SelectItem value="PE">Pernambuco</SelectItem>
              <SelectItem value="PI">Piauí</SelectItem>
              <SelectItem value="RJ">Rio de Janeiro</SelectItem>
              <SelectItem value="RN">Rio Grande do Norte</SelectItem>
              <SelectItem value="RS">Rio Grande do Sul</SelectItem>
              <SelectItem value="RO">Rondônia</SelectItem>
              <SelectItem value="RR">Roraima</SelectItem>
              <SelectItem value="SC">Santa Catarina</SelectItem>
              <SelectItem value="SP">São Paulo</SelectItem>
              <SelectItem value="SE">Sergipe</SelectItem>
              <SelectItem value="TO">Tocantins</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const renderStep3Advocacia = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Estrutura <span className="gradient-text">Operacional</span>
        </h2>
        <p className="text-muted-foreground">
          Como funciona sua operação jurídica atualmente
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Possui CRM Jurídico? *</Label>
          <RadioGroup value={formData.possuiCRM} onValueChange={(value) => updateFormData("possuiCRM", value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="crm-sim" />
              <Label htmlFor="crm-sim" className="cursor-pointer">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="crm-nao" />
              <Label htmlFor="crm-nao" className="cursor-pointer">Não</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.possuiCRM === "sim" && (
          <div className="space-y-2">
            <Label htmlFor="qualCRM">Qual CRM você utiliza?</Label>
            <Input
              id="qualCRM"
              placeholder="Ex: ADVBOX, CPJ, Legal One"
              value={formData.qualCRM}
              onChange={(e) => updateFormData("qualCRM", e.target.value)}
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="captacaoClientes">Como é feita a captação de clientes hoje?</Label>
          <Textarea
            id="captacaoClientes"
            placeholder="Ex: Indicações, Google Ads, redes sociais..."
            value={formData.captacaoClientes}
            onChange={(e) => updateFormData("captacaoClientes", e.target.value)}
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label>Principais áreas de atuação (selecione todas que se aplicam)</Label>
          <div className="grid grid-cols-2 gap-4">
            {["Previdenciário", "Bancário", "Trabalhista", "Cível", "Criminal", "Família", "Consumidor", "Empresarial"].map((area) => (
              <div key={area} className="flex items-center space-x-2">
                <Checkbox
                  id={`area-${area}`}
                  checked={formData.areasAtuacao.includes(area)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      updateFormData("areasAtuacao", [...formData.areasAtuacao, area]);
                    } else {
                      updateFormData("areasAtuacao", formData.areasAtuacao.filter(a => a !== area));
                    }
                  }}
                />
                <Label htmlFor={`area-${area}`} className="cursor-pointer">{area}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Deseja agentes diferentes por área de atuação?</Label>
          <RadioGroup value={formData.agentesPorArea} onValueChange={(value) => updateFormData("agentesPorArea", value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="agentes-sim" />
              <Label htmlFor="agentes-sim" className="cursor-pointer">Sim, um agente para cada área</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="agentes-nao" />
              <Label htmlFor="agentes-nao" className="cursor-pointer">Não, um agente geral</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );

  const renderStep3Clinica = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Estrutura e <span className="gradient-text">Agendamentos</span>
        </h2>
        <p className="text-muted-foreground">
          Como funciona sua operação clínica atualmente
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="areaPrincipal">Área Principal da Clínica</Label>
          <Select value={formData.setorAtuacao} onValueChange={(value) => updateFormData("setorAtuacao", value)}>
            <SelectTrigger id="areaPrincipal">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Nutrição">Nutrição</SelectItem>
              <SelectItem value="Psicologia">Psicologia</SelectItem>
              <SelectItem value="Estética">Estética</SelectItem>
              <SelectItem value="Odontologia">Odontologia</SelectItem>
              <SelectItem value="Fisioterapia">Fisioterapia</SelectItem>
              <SelectItem value="Medicina Geral">Medicina Geral</SelectItem>
              <SelectItem value="Outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="agendamentoAtual">Como realiza agendamentos atualmente?</Label>
          <Textarea
            id="agendamentoAtual"
            placeholder="Ex: WhatsApp, telefone, site..."
            value={formData.agendamentoAtual}
            onChange={(e) => updateFormData("agendamentoAtual", e.target.value)}
            rows={2}
          />
        </div>

        <div className="space-y-2">
          <Label>Possui sistema de gestão ou prontuário?</Label>
          <RadioGroup value={formData.sistemaGestao} onValueChange={(value) => updateFormData("sistemaGestao", value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="sistema-sim" />
              <Label htmlFor="sistema-sim" className="cursor-pointer">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="sistema-nao" />
              <Label htmlFor="sistema-nao" className="cursor-pointer">Não</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.sistemaGestao === "sim" && (
          <div className="space-y-2">
            <Label htmlFor="qualSistema">Qual sistema você utiliza?</Label>
            <Input
              id="qualSistema"
              placeholder="Ex: IClinic, Ninsaúde, Clinicorp..."
              value={formData.qualCRM}
              onChange={(e) => updateFormData("qualCRM", e.target.value)}
            />
          </div>
        )}

        <div className="space-y-2">
          <Label>Deseja que a IA realize agendamentos automáticos?</Label>
          <RadioGroup value={formData.agendamentoAutomatico} onValueChange={(value) => updateFormData("agendamentoAutomatico", value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="auto-sim" />
              <Label htmlFor="auto-sim" className="cursor-pointer">Sim, agendamento totalmente automatizado</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="auto-nao" />
              <Label htmlFor="auto-nao" className="cursor-pointer">Não, apenas coleta de informações</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Deseja integração com: (selecione todas que se aplicam)</Label>
          <div className="space-y-2">
            {["IClinic", "Google Agenda", "Planilhas Google", "Ninsaúde", "Outro"].map((integracao) => (
              <div key={integracao} className="flex items-center space-x-2">
                <Checkbox
                  id={`integracao-${integracao}`}
                  checked={formData.integracoes.includes(integracao)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      updateFormData("integracoes", [...formData.integracoes, integracao]);
                    } else {
                      updateFormData("integracoes", formData.integracoes.filter(i => i !== integracao));
                    }
                  }}
                />
                <Label htmlFor={`integracao-${integracao}`} className="cursor-pointer">{integracao}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3Outro = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Estrutura <span className="gradient-text">Operacional</span>
        </h2>
        <p className="text-muted-foreground">
          Como funciona sua operação atualmente
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="setorAtuacao">Setor de Atuação</Label>
          <Input
            id="setorAtuacao"
            placeholder="Ex: Vendas, Consultoria, Comércio, Educação..."
            value={formData.setorAtuacao}
            onChange={(e) => updateFormData("setorAtuacao", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Possui site ou e-commerce?</Label>
          <RadioGroup value={formData.possuiSite} onValueChange={(value) => updateFormData("possuiSite", value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="site-sim" />
              <Label htmlFor="site-sim" className="cursor-pointer">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="site-nao" />
              <Label htmlFor="site-nao" className="cursor-pointer">Não</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.possuiSite === "sim" && (
          <div className="space-y-2">
            <Label htmlFor="linkSite">Informe o link do site</Label>
            <Input
              id="linkSite"
              type="url"
              placeholder="https://seusite.com.br"
              value={formData.linkSite}
              onChange={(e) => updateFormData("linkSite", e.target.value)}
            />
          </div>
        )}

        <div className="space-y-2">
          <Label>Usa CRM ou sistema de atendimento?</Label>
          <RadioGroup value={formData.possuiCRM} onValueChange={(value) => updateFormData("possuiCRM", value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="crm-outro-sim" />
              <Label htmlFor="crm-outro-sim" className="cursor-pointer">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="crm-outro-nao" />
              <Label htmlFor="crm-outro-nao" className="cursor-pointer">Não</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.possuiCRM === "sim" && (
          <div className="space-y-2">
            <Label htmlFor="qualCRMOutro">Qual sistema você utiliza?</Label>
            <Input
              id="qualCRMOutro"
              placeholder="Ex: RD Station, HubSpot, Pipedrive..."
              value={formData.qualCRM}
              onChange={(e) => updateFormData("qualCRM", e.target.value)}
            />
          </div>
        )}

        <div className="space-y-2">
          <Label>Como realiza contato com clientes hoje? (selecione todas que se aplicam)</Label>
          <div className="space-y-2">
            {["WhatsApp", "E-mail", "Telefone", "Site", "Instagram", "Facebook"].map((canal) => (
              <div key={canal} className="flex items-center space-x-2">
                <Checkbox
                  id={`contato-${canal}`}
                  checked={formData.contatoAtual.includes(canal)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      updateFormData("contatoAtual", [...formData.contatoAtual, canal]);
                    } else {
                      updateFormData("contatoAtual", formData.contatoAtual.filter(c => c !== canal));
                    }
                  }}
                />
                <Label htmlFor={`contato-${canal}`} className="cursor-pointer">{canal}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Deseja que a IA: (selecione todas que se aplicam)</Label>
          <div className="space-y-2">
            {[
              "Faça triagem de clientes",
              "Envie orçamentos automáticos",
              "Realize follow-up automático",
              "Qualifique leads",
              "Agende reuniões"
            ].map((funcionalidade) => (
              <div key={funcionalidade} className="flex items-center space-x-2">
                <Checkbox
                  id={`func-${funcionalidade}`}
                  checked={formData.funcionalidadesIA.includes(funcionalidade)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      updateFormData("funcionalidadesIA", [...formData.funcionalidadesIA, funcionalidade]);
                    } else {
                      updateFormData("funcionalidadesIA", formData.funcionalidadesIA.filter(f => f !== funcionalidade));
                    }
                  }}
                />
                <Label htmlFor={`func-${funcionalidade}`} className="cursor-pointer">{funcionalidade}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Personalização do <span className="gradient-text">Agente</span>
        </h2>
        <p className="text-muted-foreground">
          Como você quer que seu agente de IA se comporte
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="nomeAgente">Nome desejado para o Agente *</Label>
          <Input
            id="nomeAgente"
            placeholder="Ex: Julia, Assistente Legal, Dr. AI..."
            value={formData.nomeAgente}
            onChange={(e) => updateFormData("nomeAgente", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linguagem">Linguagem Desejada</Label>
          <Select value={formData.linguagem} onValueChange={(value) => updateFormData("linguagem", value)}>
            <SelectTrigger id="linguagem">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="amigavel">Amigável</SelectItem>
              <SelectItem value="tecnica">Técnica</SelectItem>
              <SelectItem value="acolhedora">Acolhedora</SelectItem>
              <SelectItem value="objetiva">Objetiva</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tomVoz">Tom de Voz</Label>
          <Select value={formData.tomVoz} onValueChange={(value) => updateFormData("tomVoz", value)}>
            <SelectTrigger id="tomVoz">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="empatico">Empático</SelectItem>
              <SelectItem value="direto">Direto</SelectItem>
              <SelectItem value="tecnico">Técnico</SelectItem>
              <SelectItem value="neutro">Neutro</SelectItem>
              <SelectItem value="institucional">Institucional</SelectItem>
              <SelectItem value="comercial">Comercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Deve direcionar para humano após triagem?</Label>
          <RadioGroup value={formData.direcionarHumano} onValueChange={(value) => updateFormData("direcionarHumano", value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="humano-sim" />
              <Label htmlFor="humano-sim" className="cursor-pointer">Sim, sempre encaminhar para atendente</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="humano-nao" />
              <Label htmlFor="humano-nao" className="cursor-pointer">Não, agente totalmente autônomo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="casos" id="humano-casos" />
              <Label htmlFor="humano-casos" className="cursor-pointer">Apenas em casos específicos</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Canais Desejados (selecione todos que se aplicam)</Label>
          <div className="space-y-2">
            {["WhatsApp Business", "Site / Chat Web", "CRM Interno", "Instagram Direct", "Facebook Messenger", "Telegram"].map((canal) => (
              <div key={canal} className="flex items-center space-x-2">
                <Checkbox
                  id={`canal-${canal}`}
                  checked={formData.canaisDesejados.includes(canal)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      updateFormData("canaisDesejados", [...formData.canaisDesejados, canal]);
                    } else {
                      updateFormData("canaisDesejados", formData.canaisDesejados.filter(c => c !== canal));
                    }
                  }}
                />
                <Label htmlFor={`canal-${canal}`} className="cursor-pointer">{canal}</Label>
              </div>
            ))}
          </div>
        </div>

        {formData.nicho === "Clínica" && (
          <>
            <div className="space-y-2">
              <Label>Dados que o agente deve coletar: (selecione todos que se aplicam)</Label>
              <div className="space-y-2">
                {["Nome do paciente", "Motivo da consulta", "Convênio", "Horário preferencial", "CPF", "Data de nascimento"].map((dado) => (
                  <div key={dado} className="flex items-center space-x-2">
                    <Checkbox
                      id={`dado-${dado}`}
                      checked={formData.coletarDados.includes(dado)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData("coletarDados", [...formData.coletarDados, dado]);
                        } else {
                          updateFormData("coletarDados", formData.coletarDados.filter(d => d !== dado));
                        }
                      }}
                    />
                    <Label htmlFor={`dado-${dado}`} className="cursor-pointer">{dado}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>IA deve enviar lembretes automáticos de consulta?</Label>
              <RadioGroup value={formData.lembretesAutomaticos} onValueChange={(value) => updateFormData("lembretesAutomaticos", value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sim" id="lembrete-sim" />
                  <Label htmlFor="lembrete-sim" className="cursor-pointer">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nao" id="lembrete-nao" />
                  <Label htmlFor="lembrete-nao" className="cursor-pointer">Não</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>IA deve realizar pós-consulta (feedback/satisfação)?</Label>
              <RadioGroup value={formData.posConsulta} onValueChange={(value) => updateFormData("posConsulta", value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sim" id="pos-sim" />
                  <Label htmlFor="pos-sim" className="cursor-pointer">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nao" id="pos-nao" />
                  <Label htmlFor="pos-nao" className="cursor-pointer">Não</Label>
                </div>
              </RadioGroup>
            </div>
          </>
        )}

        <div className="space-y-2">
          <Label>Deseja relatórios automáticos de performance?</Label>
          <RadioGroup value={formData.relatorios} onValueChange={(value) => updateFormData("relatorios", value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="relatorio-sim" />
              <Label htmlFor="relatorio-sim" className="cursor-pointer">Sim, enviar relatórios periódicos</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="relatorio-nao" />
              <Label htmlFor="relatorio-nao" className="cursor-pointer">Não</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Deseja integração com planilhas ou API personalizada?</Label>
          <RadioGroup value={formData.integracaoPersonalizada} onValueChange={(value) => updateFormData("integracaoPersonalizada", value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="api-sim" />
              <Label htmlFor="api-sim" className="cursor-pointer">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="api-nao" />
              <Label htmlFor="api-nao" className="cursor-pointer">Não</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Finalização e <span className="gradient-text">Confirmação</span>
        </h2>
        <p className="text-muted-foreground">
          Última etapa antes de criarmos seu agente personalizado
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="observacoes">Observações Adicionais</Label>
          <Textarea
            id="observacoes"
            placeholder="Conte-nos mais sobre suas necessidades, expectativas ou requisitos específicos..."
            value={formData.observacoes}
            onChange={(e) => updateFormData("observacoes", e.target.value)}
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Anexar Arquivos (opcional)
          </Label>
          <Input
            type="file"
            multiple
            accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx"
            onChange={handleFileUpload}
            className="cursor-pointer"
          />
          {formData.arquivos.length > 0 && (
            <div className="text-sm text-muted-foreground mt-2">
              {formData.arquivos.length} arquivo(s) selecionado(s)
            </div>
          )}
          <p className="text-xs text-muted-foreground">
            Você pode anexar imagens, vídeos, PDFs ou documentos que ajudem a entender melhor seu negócio
          </p>
        </div>

        <div className="bg-card/50 border border-border rounded-xl p-6 space-y-4">
          <h3 className="font-bold text-lg">Resumo da Solicitação</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Nicho:</strong> {formData.nicho}</p>
            <p><strong>Empresa:</strong> {formData.nomeEmpresa}</p>
            <p><strong>Responsável:</strong> {formData.nomeResponsavel}</p>
            <p><strong>Nome do Agente:</strong> {formData.nomeAgente || "A definir"}</p>
            <p><strong>Canais:</strong> {formData.canaisDesejados.join(", ") || "A definir"}</p>
          </div>
        </div>

        <div className="flex items-start space-x-2 bg-muted/50 p-4 rounded-lg">
          <Checkbox
            id="termos"
            checked={formData.aceitarTermos}
            onCheckedChange={(checked) => updateFormData("aceitarTermos", checked)}
          />
          <Label htmlFor="termos" className="cursor-pointer text-sm leading-relaxed">
            Aceito os termos de uso e autorizo o uso dos dados fornecidos para configuração e operação do Agente de IA. 
            Estou ciente de que a ConverseIA utilizará as informações exclusivamente para personalização e otimização do serviço contratado.
          </Label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Contratação Online</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Configure seu <span className="gradient-text">Agente de IA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Preencha o formulário e receba uma proposta personalizada em minutos
            </p>

            {/* Progress Bar */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      step === currentStep
                        ? "bg-primary text-primary-foreground scale-110"
                        : step < currentStep
                        ? "bg-primary/50 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                  </div>
                  {step < 5 && (
                    <div
                      className={`w-8 sm:w-16 h-1 transition-all duration-300 ${
                        step < currentStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 sm:p-12">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && formData.nicho === "Advocacia" && renderStep3Advocacia()}
              {currentStep === 3 && formData.nicho === "Clínica" && renderStep3Clinica()}
              {currentStep === 3 && formData.nicho === "Outro" && renderStep3Outro()}
              {currentStep === 4 && renderStep4()}
              {currentStep === 5 && renderStep5()}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-border">
                {currentStep > 1 && (
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Voltar
                  </Button>
                )}

                {currentStep < 5 ? (
                  <Button
                    onClick={nextStep}
                    size="lg"
                    className="w-full sm:flex-1"
                  >
                    Próxima Etapa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    size="lg"
                    className="w-full sm:flex-1"
                    disabled={!formData.aceitarTermos}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Enviar Solicitação
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MessageCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">
              Prefere falar com um <span className="gradient-text">especialista</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agende uma apresentação personalizada e tire todas as suas dúvidas
            </p>
            <Button asChild size="lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Apresentação
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contratacao;
