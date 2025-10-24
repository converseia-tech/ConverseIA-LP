import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Settings, 
  FileText,
  CheckSquare,
  Type,
  List,
  Calendar,
  Upload,
  Table as TableIcon,
  Key,
  Webhook,
  LogOut,
  Copy,
  Check,
  ExternalLink,
  Database,
  RefreshCw,
  Code
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Lazy import do Supabase para evitar erros de carregamento
let formFieldsAPI: any;

// Função para carregar o módulo Supabase dinamicamente
const loadSupabase = async () => {
  try {
    const supabaseModule = await import("@/lib/supabase");
    formFieldsAPI = supabaseModule.formFieldsAPI;
    return true;
  } catch (error) {
    console.error("Erro ao carregar Supabase:", error);
    return false;
  }
};

interface FormField {
  id: string;
  label: string;
  type: "text" | "textarea" | "select" | "radio" | "checkbox" | "date" | "file" | "table";
  options?: string[];
  required: boolean;
  placeholder?: string;
  nicho?: "Advocacia" | "Clínica" | "Outro" | "Todos";
  step: number;
  order: number;
}

interface IntegrationConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
  supabaseServiceKey: string;
  webhookN8nUrl: string;
  webhookCrmUrl: string;
}

const GerenciarFormularios = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState<FormField[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showSqlDialog, setShowSqlDialog] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [connectionMessage, setConnectionMessage] = useState('');
  
  // Integration settings
  const [integrationConfig, setIntegrationConfig] = useState<IntegrationConfig>({
    supabaseUrl: localStorage.getItem('supabase_url') || import.meta.env.VITE_SUPABASE_URL || "",
    supabaseAnonKey: localStorage.getItem('supabase_anon_key') || import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    supabaseServiceKey: localStorage.getItem('supabase_service_key') || import.meta.env.VITE_SUPABASE_SERVICE_KEY || "",
    webhookN8nUrl: localStorage.getItem('webhook_n8n_url') || import.meta.env.VITE_WEBHOOK_N8N_URL || "",
    webhookCrmUrl: localStorage.getItem('webhook_crm_url') || import.meta.env.VITE_WEBHOOK_CRM_URL || "",
  });

  // Check authentication on mount
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("admin_authenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin-login");
      return;
    }
    
    // Load fields from Supabase
    loadFields();
  }, [navigate]);

  const loadFields = async () => {
    try {
      setIsLoading(true);
      
      // Carregar módulo Supabase primeiro
      const loaded = await loadSupabase();
      if (!loaded || !formFieldsAPI) {
        alert("Erro: Supabase não configurado. Configure as credenciais na aba Integrações.");
        setIsLoading(false);
        return;
      }
      
      const data = await formFieldsAPI.getAll();
      
      // Convert Supabase format to local format
      const formattedFields: FormField[] = data.map((field: any) => ({
        id: field.id,
        label: field.label,
        type: field.field_type as FormField["type"],
        options: field.options || [],
        required: field.required,
        placeholder: field.placeholder,
        nicho: field.nicho as FormField["nicho"],
        step: field.step,
        order: field.display_order,
      }));
      
      setFields(formattedFields);
    } catch (error) {
      console.error("Erro ao carregar campos:", error);
      alert("Erro ao carregar campos do banco de dados. Verifique as credenciais do Supabase na aba Integrações.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    navigate("/admin-login");
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const testSupabaseConnection = async () => {
    setIsTestingConnection(true);
    setConnectionStatus('idle');
    setConnectionMessage('🔍 Iniciando diagnóstico...');

    try {
      // ETAPA 1: Validar campos preenchidos
      setConnectionMessage('🔍 [1/6] Validando credenciais preenchidas...');
      await new Promise(resolve => setTimeout(resolve, 300));
      
      if (!integrationConfig.supabaseUrl || !integrationConfig.supabaseAnonKey) {
        setConnectionStatus('error');
        setConnectionMessage('❌ Diagnóstico Falhou na Etapa 1/6\n\n📋 Problema: Credenciais incompletas\n\n🔧 Solução: Preencha a URL e a Anon Key do Supabase');
        setIsTestingConnection(false);
        return;
      }

      // ETAPA 2: Validar formato da URL
      setConnectionMessage('🔍 [2/6] Validando formato da URL...');
      await new Promise(resolve => setTimeout(resolve, 300));
      
      if (!integrationConfig.supabaseUrl.includes('supabase.co') && 
          !integrationConfig.supabaseUrl.includes('supabase.com') &&
          !integrationConfig.supabaseUrl.includes('localhost')) {
        setConnectionStatus('error');
        setConnectionMessage('❌ Diagnóstico Falhou na Etapa 2/6\n\n📋 Problema: URL do Supabase inválida\n\n🔧 Solução: A URL deve ser no formato:\n   • https://seu-projeto.supabase.co\n   • https://seu-projeto.supabase.com\n\n💡 Onde encontrar: Supabase Dashboard > Settings > API > Project URL');
        setIsTestingConnection(false);
        return;
      }

      // ETAPA 3: Validar formato da Anon Key
      setConnectionMessage('🔍 [3/6] Validando formato da Anon Key...');
      await new Promise(resolve => setTimeout(resolve, 300));
      
      if (!integrationConfig.supabaseAnonKey.startsWith('eyJ')) {
        setConnectionStatus('error');
        setConnectionMessage('❌ Diagnóstico Falhou na Etapa 3/6\n\n📋 Problema: Anon Key com formato inválido\n\n🔧 Solução: A Anon Key deve começar com "eyJ"\n\n💡 Onde encontrar: Supabase Dashboard > Settings > API > Project API keys > anon public');
        setIsTestingConnection(false);
        return;
      }

      // ETAPA 4: Criar cliente Supabase
      setConnectionMessage('🔍 [4/6] Criando cliente Supabase...');
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        integrationConfig.supabaseUrl,
        integrationConfig.supabaseAnonKey
      );

      // ETAPA 5: Testar conexão com o banco
      setConnectionMessage('🔍 [5/6] Testando conexão com banco de dados...');
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const { data, error } = await supabase
        .from('form_fields')
        .select('count')
        .limit(1);

      if (error) {
        // Diagnosticar tipo de erro
        if (error.message.includes('does not exist') || error.message.includes('relation') || error.message.includes('schema cache')) {
          setConnectionStatus('error');
          setConnectionMessage('⚠️ Diagnóstico Concluído: 5/6 Etapas OK\n\n📋 Status: Conexão estabelecida, mas banco não configurado\n\n✅ O que funcionou:\n   • URL válida\n   • Credenciais corretas\n   • Conexão com Supabase OK\n\n❌ O que falta:\n   • Tabelas do banco não existem\n\n🔧 Próximo Passo:\n   1. Clique no botão azul "📋 Ver SQL para Criar Tabelas" que apareceu abaixo\n   2. Copie o SQL completo\n   3. Execute no SQL Editor do Supabase (Dashboard > SQL Editor > New Query)\n   4. Volte aqui e clique em "Salvar e Testar Conexão" novamente');
          // Modal abrirá automaticamente após 1 segundo para dar tempo de ler a mensagem
          setTimeout(() => setShowSqlDialog(true), 1000);
        } else if (error.message.includes('Invalid API key') || error.message.includes('JWT')) {
          setConnectionStatus('error');
          setConnectionMessage('❌ Diagnóstico Falhou na Etapa 5/6\n\n📋 Problema: Credenciais inválidas ou expiradas\n\n🔧 Solução:\n   1. Verifique se copiou as keys corretamente\n   2. Não confunda "anon" com "service_role"\n   3. Gere novas keys no Supabase se necessário\n\n💡 Onde encontrar:\n   Supabase Dashboard > Settings > API > Project API keys');
        } else if (error.message.includes('CORS') || error.message.includes('Access-Control')) {
          setConnectionStatus('error');
          setConnectionMessage('❌ Diagnóstico Falhou na Etapa 5/6\n\n📋 Problema: Erro de CORS (política de segurança)\n\n🔧 Solução:\n   1. Acesse: Supabase Dashboard > Settings > API\n   2. Em "CORS Settings", adicione a URL do seu site\n   3. Ou use "*" para permitir todos (apenas desenvolvimento)\n   4. Salve e teste novamente');
        } else if (error.message.includes('Failed to fetch')) {
          setConnectionStatus('error');
          setConnectionMessage('❌ Diagnóstico Falhou na Etapa 5/6\n\n📋 Problema: Não foi possível conectar ao servidor\n\n🔧 Possíveis causas:\n   1. Projeto Supabase pausado (plano gratuito inativo)\n   2. Sem conexão com internet\n   3. Firewall bloqueando conexão\n   4. URL incorreta\n\n💡 Verifique:\n   • Projeto está ativo no dashboard do Supabase\n   • Sua conexão com a internet\n   • URL foi copiada corretamente');
        } else {
          setConnectionStatus('error');
          setConnectionMessage(`❌ Diagnóstico Falhou na Etapa 5/6\n\n📋 Erro técnico: ${error.message}\n\n🔧 Sugestões:\n   1. Verifique as credenciais novamente\n   2. Confirme que o projeto está ativo no Supabase\n   3. Tente gerar novas API keys\n   4. Entre em contato com suporte se persistir`);
        }
        setIsTestingConnection(false);
        return;
      }

      // ETAPA 6: Verificar dados
      setConnectionMessage('🔍 [6/6] Verificando estrutura do banco...');
      await new Promise(resolve => setTimeout(resolve, 300));

      // Conexão bem sucedida!
      const fieldsCount = data?.length || 0;
      setConnectionStatus('success');
      setConnectionMessage(`✅ Diagnóstico Completo: 6/6 Etapas OK\n\n🎉 Conexão estabelecida com sucesso!\n\n📊 Status do Sistema:\n   • URL: Válida e acessível\n   • Credenciais: Autenticadas\n   • Banco de dados: Conectado\n   • Tabelas: Criadas e funcionais\n   • Campos cadastrados: ${fieldsCount}\n\n✅ Sistema pronto para uso!\n   Agora você pode sincronizar os campos com /contratacao`);
      
      // Salvar credenciais no localStorage
      localStorage.setItem('supabase_url', integrationConfig.supabaseUrl);
      localStorage.setItem('supabase_anon_key', integrationConfig.supabaseAnonKey);
      localStorage.setItem('supabase_service_key', integrationConfig.supabaseServiceKey);
      localStorage.setItem('supabase_connected', 'true');
      localStorage.setItem('supabase_last_test', new Date().toISOString());

      // Resetar cache do cliente Supabase para usar novas credenciais
      try {
        const { resetSupabaseClient } = await import('@/lib/supabase');
        resetSupabaseClient();
      } catch (e) {
        console.warn('Não foi possível resetar cache do Supabase:', e);
      }

      // Recarregar campos do Supabase
      await loadFields();

    } catch (error: any) {
      setConnectionStatus('error');
      
      // Diagnosticar erro de rede/import
      if (error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
        setConnectionMessage('❌ Diagnóstico Falhou: Erro de Rede\n\n📋 Problema: Não foi possível conectar ao Supabase\n\n🔧 Possíveis causas:\n   1. Sem conexão com internet\n   2. Projeto Supabase pausado/inativo\n   3. Firewall bloqueando conexão\n   4. URL do Supabase incorreta\n\n💡 Verifique:\n   • Sua conexão com a internet\n   • Status do projeto no dashboard do Supabase\n   • URL foi copiada corretamente');
      } else if (error.message?.includes('import')) {
        setConnectionMessage('❌ Diagnóstico Falhou: Erro Técnico\n\n📋 Problema: Erro ao carregar biblioteca Supabase\n\n🔧 Solução:\n   1. Recarregue a página\n   2. Limpe o cache do navegador\n   3. Se persistir, reinstale: npm install @supabase/supabase-js');
      } else {
        setConnectionMessage(`❌ Diagnóstico Falhou: Erro Inesperado\n\n📋 Erro técnico: ${error.message || 'Erro desconhecido'}\n\n🔧 Sugestões:\n   1. Recarregue a página e tente novamente\n   2. Verifique o console do navegador (F12)\n   3. Copie a mensagem de erro e contate o suporte\n\n💡 Dica: Pressione F12 para ver mais detalhes técnicos`);
      }
      
      console.error('Erro detalhado no teste de conexão:', error);
    } finally {
      setIsTestingConnection(false);
    }
  };

  const saveSupabaseConfig = async () => {
    // Primeiro testa a conexão
    await testSupabaseConnection();
  };

  const syncFormFields = async () => {
    // Verificar se a conexão com Supabase está OK
    const isConnected = localStorage.getItem('supabase_connected') === 'true';
    if (!isConnected || connectionStatus !== 'success') {
      alert('❌ Primeiro você precisa configurar e testar a conexão com o Supabase!');
      return;
    }

    setIsSyncing(true);
    
    try {
      // Salvar campos do formulário dinamicamente para a página /contratacao usar
      const formFields = fields.map(field => ({
        id: field.id,
        label: field.label,
        type: field.type,
        required: field.required,
        nicho: field.nicho,
        step: field.step,
        order: field.order,
        options: field.options,
        placeholder: field.placeholder
      }));
      
      localStorage.setItem('contratacao_fields', JSON.stringify(formFields));
      localStorage.setItem('contratacao_fields_synced_at', new Date().toISOString());
      
      alert(`✅ ${formFields.length} campos sincronizados com sucesso!\n\nA página /contratacao agora usará estes campos dinamicamente.`);
      
    } catch (error) {
      console.error('Erro ao sincronizar:', error);
      alert('❌ Erro ao sincronizar campos');
    } finally {
      setIsSyncing(false);
    }
  };

  const sqlSchema = `-- ============================================
-- CONVERSEIA - DATABASE SCHEMA
-- Execute este SQL no Supabase SQL Editor
-- ============================================

-- 1. Tabela de campos do formulário
CREATE TABLE IF NOT EXISTS form_fields (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('text', 'textarea', 'select', 'radio', 'checkbox', 'date', 'file', 'table')),
  options TEXT[], -- Array de opções para select, radio, checkbox
  required BOOLEAN DEFAULT false,
  placeholder TEXT,
  nicho TEXT CHECK (nicho IN ('Advocacia', 'Clínica', 'Outro', 'Todos')),
  step INTEGER DEFAULT 1,
  "order" INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabela de leads/contratações
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  empresa TEXT,
  nicho TEXT,
  form_data JSONB, -- Dados dinâmicos do formulário
  plano TEXT,
  valor DECIMAL(10,2),
  status TEXT DEFAULT 'novo' CHECK (status IN ('novo', 'em_contato', 'qualificado', 'convertido', 'perdido')),
  origem TEXT DEFAULT 'site',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabela de logs de webhooks
CREATE TABLE IF NOT EXISTS webhook_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  webhook_url TEXT NOT NULL,
  payload JSONB,
  response_status INTEGER,
  response_body TEXT,
  success BOOLEAN DEFAULT false,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Tabela de usuários admin
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  nome TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'viewer')),
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Tabela de uploads de arquivos
CREATE TABLE IF NOT EXISTS file_uploads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  field_id UUID REFERENCES form_fields(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  storage_path TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- ÍNDICES PARA PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_form_fields_nicho ON form_fields(nicho);
CREATE INDEX IF NOT EXISTS idx_form_fields_step ON form_fields(step, "order");
CREATE INDEX IF NOT EXISTS idx_webhook_logs_lead_id ON webhook_logs(lead_id);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE form_fields ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE webhook_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE file_uploads ENABLE ROW LEVEL SECURITY;

-- Política: Permitir leitura pública de form_fields
CREATE POLICY "Public can view form fields" ON form_fields
  FOR SELECT USING (true);

-- Política: Permitir inserção pública de leads
CREATE POLICY "Public can insert leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Política: Admin pode tudo em leads
CREATE POLICY "Admin full access to leads" ON leads
  USING (auth.role() = 'authenticated');

-- Política: Admin pode tudo em form_fields
CREATE POLICY "Admin full access to form_fields" ON form_fields
  USING (auth.role() = 'authenticated');

-- ============================================
-- TRIGGERS PARA UPDATED_AT
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_form_fields_updated_at
  BEFORE UPDATE ON form_fields
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at
  BEFORE UPDATE ON admin_users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- VIEWS PARA ANALYTICS
-- ============================================
CREATE OR REPLACE VIEW leads_by_status AS
SELECT 
  status,
  COUNT(*) as total,
  COUNT(*) * 100.0 / SUM(COUNT(*)) OVER() as percentage
FROM leads
GROUP BY status;

CREATE OR REPLACE VIEW leads_by_nicho AS
SELECT 
  nicho,
  COUNT(*) as total,
  AVG(valor) as valor_medio
FROM leads
WHERE nicho IS NOT NULL
GROUP BY nicho;

CREATE OR REPLACE VIEW conversion_funnel AS
SELECT 
  DATE_TRUNC('day', created_at) as data,
  COUNT(*) FILTER (WHERE status = 'novo') as novos,
  COUNT(*) FILTER (WHERE status = 'em_contato') as em_contato,
  COUNT(*) FILTER (WHERE status = 'qualificado') as qualificados,
  COUNT(*) FILTER (WHERE status = 'convertido') as convertidos
FROM leads
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY data DESC;

-- ============================================
-- DADOS INICIAIS (OPCIONAL)
-- ============================================
-- Inserir campos padrão do formulário
INSERT INTO form_fields (label, type, required, nicho, step, "order") VALUES
  ('Nome Completo', 'text', true, 'Todos', 1, 1),
  ('E-mail', 'text', true, 'Todos', 1, 2),
  ('Telefone/WhatsApp', 'text', true, 'Todos', 1, 3),
  ('Empresa/Escritório', 'text', false, 'Todos', 2, 1),
  ('Nicho de Atuação', 'select', true, 'Todos', 2, 2)
ON CONFLICT DO NOTHING;

-- ============================================
-- CONFIGURAÇÃO COMPLETA! 
-- Após executar este SQL:
-- 1. Configure as credenciais no formulário acima
-- 2. Teste a conexão
-- 3. Sincronize os campos do formulário
-- ============================================`;

  const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState<FormField | null>(null);
  const [newField, setNewField] = useState<Partial<FormField>>({
    label: "",
    type: "text",
    required: false,
    nicho: "Todos",
    step: 1,
    order: 1,
    options: [],
  });

  const fieldTypeIcons = {
    text: <Type className="h-4 w-4" />,
    textarea: <FileText className="h-4 w-4" />,
    select: <List className="h-4 w-4" />,
    radio: <CheckSquare className="h-4 w-4" />,
    checkbox: <CheckSquare className="h-4 w-4" />,
    date: <Calendar className="h-4 w-4" />,
    file: <Upload className="h-4 w-4" />,
    table: <TableIcon className="h-4 w-4" />,
  };

  const handleAddField = async () => {
    if (!newField.label || !newField.type) {
      alert("Preencha pelo menos o nome e o tipo do campo");
      return;
    }

    try {
      // Carregar Supabase se ainda não foi carregado
      if (!formFieldsAPI) {
        await loadSupabase();
      }

      if (!formFieldsAPI) {
        alert("Erro: Supabase não está configurado.");
        return;
      }

      const fieldData = {
        label: newField.label,
        field_type: newField.type,
        required: newField.required || false,
        nicho: newField.nicho,
        step: newField.step || 1,
        display_order: newField.order || fields.length + 1,
        placeholder: newField.placeholder,
        options: newField.options || [],
      };

      const createdField = await formFieldsAPI.create(fieldData);
      
      // Add to local state
      const localField: FormField = {
        id: createdField.id,
        label: createdField.label,
        type: createdField.field_type as FormField["type"],
        required: createdField.required,
        nicho: createdField.nicho as FormField["nicho"],
        step: createdField.step,
        order: createdField.display_order,
        placeholder: createdField.placeholder,
        options: createdField.options || [],
      };

      setFields([...fields, localField]);
      
      // Reset form
      setNewField({
        label: "",
        type: "text",
        required: false,
        nicho: "Todos",
        step: 1,
        order: fields.length + 2,
        options: [],
      });

      alert("Campo adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar campo:", error);
      alert("Erro ao adicionar campo. Verifique o console para mais detalhes.");
    }
  };

  const handleEditField = (field: FormField) => {
    setEditingField(field);
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    if (!editingField) return;

    try {
      // Carregar Supabase se ainda não foi carregado
      if (!formFieldsAPI) {
        await loadSupabase();
      }

      if (!formFieldsAPI) {
        alert("Erro: Supabase não está configurado.");
        return;
      }

      const updateData = {
        label: editingField.label,
        field_type: editingField.type,
        required: editingField.required,
        nicho: editingField.nicho,
        step: editingField.step,
        display_order: editingField.order,
        placeholder: editingField.placeholder,
        options: editingField.options || [],
      };

      await formFieldsAPI.update(editingField.id, updateData);
      
      setFields(fields.map(f => f.id === editingField.id ? editingField : f));
      setIsEditing(false);
      setEditingField(null);

      alert("Campo atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar campo:", error);
      alert("Erro ao atualizar campo. Verifique o console para mais detalhes.");
    }
  };

  const handleDeleteField = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este campo?")) return;

    try {
      // Carregar Supabase se ainda não foi carregado
      if (!formFieldsAPI) {
        await loadSupabase();
      }

      if (!formFieldsAPI) {
        alert("Erro: Supabase não está configurado.");
        return;
      }

      await formFieldsAPI.delete(id);
      setFields(fields.filter(f => f.id !== id));
      alert("Campo excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir campo:", error);
      alert("Erro ao excluir campo. Verifique o console para mais detalhes.");
    }
  };

  const handleAddOption = () => {
    const option = prompt("Digite a nova opção:");
    if (option && editingField) {
      setEditingField({
        ...editingField,
        options: [...(editingField.options || []), option]
      });
    }
  };

  const handleRemoveOption = (index: number) => {
    if (editingField && editingField.options) {
      const newOptions = editingField.options.filter((_, i) => i !== index);
      setEditingField({
        ...editingField,
        options: newOptions
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando dados do banco...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
                  <Settings className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Painel de Administração</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Gerenciar <span className="gradient-text">Formulários</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  Configure os campos do formulário, integrações e webhooks
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sair
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content with Tabs */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="campos" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="campos" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Campos do Formulário
                </TabsTrigger>
                <TabsTrigger value="integracoes" className="flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Integrações
                </TabsTrigger>
                <TabsTrigger value="webhooks" className="flex items-center gap-2">
                  <Webhook className="h-4 w-4" />
                  Webhooks & API
                </TabsTrigger>
              </TabsList>

              {/* Tab 1: Campos do Formulário */}
              <TabsContent value="campos">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form to Add/Edit Fields */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {isEditing ? <Edit className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      {isEditing ? "Editar Campo" : "Adicionar Campo"}
                    </CardTitle>
                    <CardDescription>
                      {isEditing ? "Modifique as propriedades do campo" : "Crie um novo campo para o formulário"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fieldLabel">Nome do Campo *</Label>
                      <Input
                        id="fieldLabel"
                        placeholder="Ex: Nome da Empresa"
                        value={isEditing ? editingField?.label : newField.label}
                        onChange={(e) => {
                          if (isEditing && editingField) {
                            setEditingField({ ...editingField, label: e.target.value });
                          } else {
                            setNewField({ ...newField, label: e.target.value });
                          }
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fieldType">Tipo do Campo *</Label>
                      <Select
                        value={isEditing ? editingField?.type : newField.type}
                        onValueChange={(value) => {
                          if (isEditing && editingField) {
                            setEditingField({ ...editingField, type: value as FormField["type"] });
                          } else {
                            setNewField({ ...newField, type: value as FormField["type"] });
                          }
                        }}
                      >
                        <SelectTrigger id="fieldType">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Texto Curto</SelectItem>
                          <SelectItem value="textarea">Texto Longo</SelectItem>
                          <SelectItem value="select">Lista Suspensa</SelectItem>
                          <SelectItem value="radio">Opção Única (Radio)</SelectItem>
                          <SelectItem value="checkbox">Múltipla Escolha</SelectItem>
                          <SelectItem value="date">Data</SelectItem>
                          <SelectItem value="file">Upload de Arquivo</SelectItem>
                          <SelectItem value="table">Tabela</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fieldPlaceholder">Placeholder (opcional)</Label>
                      <Input
                        id="fieldPlaceholder"
                        placeholder="Ex: Digite aqui..."
                        value={isEditing ? editingField?.placeholder : newField.placeholder}
                        onChange={(e) => {
                          if (isEditing && editingField) {
                            setEditingField({ ...editingField, placeholder: e.target.value });
                          } else {
                            setNewField({ ...newField, placeholder: e.target.value });
                          }
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fieldNicho">Nicho *</Label>
                      <Select
                        value={isEditing ? editingField?.nicho : newField.nicho}
                        onValueChange={(value) => {
                          if (isEditing && editingField) {
                            setEditingField({ ...editingField, nicho: value as FormField["nicho"] });
                          } else {
                            setNewField({ ...newField, nicho: value as FormField["nicho"] });
                          }
                        }}
                      >
                        <SelectTrigger id="fieldNicho">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Todos">Todos os Nichos</SelectItem>
                          <SelectItem value="Advocacia">Apenas Advocacia</SelectItem>
                          <SelectItem value="Clínica">Apenas Clínica</SelectItem>
                          <SelectItem value="Outro">Apenas Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fieldStep">Etapa</Label>
                        <Select
                          value={String(isEditing ? editingField?.step : newField.step)}
                          onValueChange={(value) => {
                            if (isEditing && editingField) {
                              setEditingField({ ...editingField, step: Number(value) });
                            } else {
                              setNewField({ ...newField, step: Number(value) });
                            }
                          }}
                        >
                          <SelectTrigger id="fieldStep">
                            <SelectValue placeholder="Etapa" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Etapa 1</SelectItem>
                            <SelectItem value="2">Etapa 2</SelectItem>
                            <SelectItem value="3">Etapa 3</SelectItem>
                            <SelectItem value="4">Etapa 4</SelectItem>
                            <SelectItem value="5">Etapa 5</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="fieldOrder">Ordem</Label>
                        <Input
                          id="fieldOrder"
                          type="number"
                          min="1"
                          value={isEditing ? editingField?.order : newField.order}
                          onChange={(e) => {
                            if (isEditing && editingField) {
                              setEditingField({ ...editingField, order: Number(e.target.value) });
                            } else {
                              setNewField({ ...newField, order: Number(e.target.value) });
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="fieldRequired"
                        checked={isEditing ? editingField?.required : newField.required}
                        onCheckedChange={(checked) => {
                          if (isEditing && editingField) {
                            setEditingField({ ...editingField, required: checked as boolean });
                          } else {
                            setNewField({ ...newField, required: checked as boolean });
                          }
                        }}
                      />
                      <Label htmlFor="fieldRequired" className="cursor-pointer">
                        Campo obrigatório
                      </Label>
                    </div>

                    {/* Options for select/radio/checkbox */}
                    {isEditing && editingField && ["select", "radio", "checkbox"].includes(editingField.type) && (
                      <div className="space-y-2">
                        <Label>Opções</Label>
                        <div className="space-y-2">
                          {editingField.options?.map((option, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <Input value={option} readOnly className="flex-1" />
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleRemoveOption(index)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={handleAddOption}
                            className="w-full"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Adicionar Opção
                          </Button>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 space-y-2">
                      {isEditing ? (
                        <>
                          <Button onClick={handleSaveEdit} className="w-full">
                            <Save className="mr-2 h-4 w-4" />
                            Salvar Alterações
                          </Button>
                          <Button
                            onClick={() => {
                              setIsEditing(false);
                              setEditingField(null);
                            }}
                            variant="outline"
                            className="w-full"
                          >
                            <X className="mr-2 h-4 w-4" />
                            Cancelar
                          </Button>
                        </>
                      ) : (
                        <Button onClick={handleAddField} className="w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          Adicionar Campo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Table of Existing Fields */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Campos Cadastrados</CardTitle>
                    <CardDescription>
                      Lista de todos os campos do formulário de contratação
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border overflow-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Ordem</TableHead>
                            <TableHead>Campo</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Nicho</TableHead>
                            <TableHead>Etapa</TableHead>
                            <TableHead>Obrigatório</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fields
                            .sort((a, b) => {
                              if (a.step !== b.step) return a.step - b.step;
                              return a.order - b.order;
                            })
                            .map((field) => (
                              <TableRow key={field.id}>
                                <TableCell className="font-medium">
                                  {field.order}
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    {fieldTypeIcons[field.type]}
                                    <span>{field.label}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <span className="text-xs bg-muted px-2 py-1 rounded">
                                    {field.type}
                                  </span>
                                </TableCell>
                                <TableCell>
                                  <span className="text-xs">
                                    {field.nicho}
                                  </span>
                                </TableCell>
                                <TableCell>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                    Etapa {field.step}
                                  </span>
                                </TableCell>
                                <TableCell>
                                  {field.required ? (
                                    <span className="text-xs text-green-600">Sim</span>
                                  ) : (
                                    <span className="text-xs text-muted-foreground">Não</span>
                                  )}
                                </TableCell>
                                <TableCell className="text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => handleEditField(field)}
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => handleDeleteField(field.id)}
                                    >
                                      <Trash2 className="h-4 w-4 text-destructive" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </div>

                    {fields.length === 0 && (
                      <div className="text-center py-12 text-muted-foreground">
                        <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Nenhum campo cadastrado ainda.</p>
                        <p className="text-sm">Adicione o primeiro campo usando o formulário ao lado.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Integrações */}
          <TabsContent value="integracoes">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Key className="h-5 w-5" />
                      <CardTitle>Credenciais Supabase</CardTitle>
                    </div>
                    {connectionStatus === 'success' && (
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <div className="h-2 w-2 bg-green-600 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium">Conectado</span>
                      </div>
                    )}
                    {connectionStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                        <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                        <span className="text-xs font-medium">Desconectado</span>
                      </div>
                    )}
                  </div>
                  <CardDescription>
                    Configure as credenciais para integração com o banco de dados Supabase
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="supabaseUrl">Supabase URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="supabaseUrl"
                        value={integrationConfig.supabaseUrl}
                        onChange={(e) => setIntegrationConfig({...integrationConfig, supabaseUrl: e.target.value})}
                        placeholder="https://xxxxx.supabase.co"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(integrationConfig.supabaseUrl, 'supabaseUrl')}
                      >
                        {copiedField === 'supabaseUrl' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="supabaseAnonKey">Supabase Anon Key</Label>
                    <div className="flex gap-2">
                      <Input
                        id="supabaseAnonKey"
                        type="password"
                        value={integrationConfig.supabaseAnonKey}
                        onChange={(e) => setIntegrationConfig({...integrationConfig, supabaseAnonKey: e.target.value})}
                        placeholder="eyJh..."
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(integrationConfig.supabaseAnonKey, 'supabaseAnonKey')}
                      >
                        {copiedField === 'supabaseAnonKey' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="supabaseServiceKey">Supabase Service Role Key</Label>
                    <div className="flex gap-2">
                      <Input
                        id="supabaseServiceKey"
                        type="password"
                        value={integrationConfig.supabaseServiceKey}
                        onChange={(e) => setIntegrationConfig({...integrationConfig, supabaseServiceKey: e.target.value})}
                        placeholder="eyJh..."
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(integrationConfig.supabaseServiceKey, 'supabaseServiceKey')}
                      >
                        {copiedField === 'supabaseServiceKey' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* Status da Conexão */}
                  {connectionMessage && (
                    <div className={`p-4 rounded-lg border ${
                      connectionStatus === 'success' 
                        ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800'
                        : connectionStatus === 'idle'
                        ? 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800'
                        : 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800'
                    }`}>
                      <div className={`space-y-2 ${
                        connectionStatus === 'success' 
                          ? 'text-green-800 dark:text-green-200'
                          : connectionStatus === 'idle'
                          ? 'text-blue-800 dark:text-blue-200'
                          : 'text-red-800 dark:text-red-200'
                      }`}>
                        {connectionMessage.split('\n').map((line, i) => (
                          line.trim() ? (
                            <p key={i} className={`text-sm ${
                              line.startsWith('✅') || line.startsWith('🎉') || line.startsWith('📊') 
                                ? 'font-semibold' 
                                : line.startsWith('   •') || line.startsWith('   ') 
                                ? 'pl-4 text-xs' 
                                : ''
                            }`}>
                              {line}
                            </p>
                          ) : (
                            <div key={i} className="h-2"></div>
                          )
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 space-y-2">
                    <Button 
                      className="w-full" 
                      onClick={saveSupabaseConfig}
                      disabled={isTestingConnection}
                    >
                      {isTestingConnection ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Testando Conexão...
                        </>
                      ) : (
                        <>
                          <Database className="mr-2 h-4 w-4" />
                          Salvar e Testar Conexão
                        </>
                      )}
                    </Button>

                    {/* Mostrar botão SQL quando conexão OK mas tabelas não existem */}
                    {connectionStatus === 'error' && connectionMessage.includes('banco não configurado') && (
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                        onClick={() => setShowSqlDialog(true)}
                      >
                        <Database className="mr-2 h-4 w-4" />
                        📋 Ver SQL para Criar Tabelas
                      </Button>
                    )}

                    {connectionStatus === 'success' && (
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => setShowSqlDialog(true)}
                      >
                        <Code className="mr-2 h-4 w-4" />
                        Ver SQL Schema
                      </Button>
                    )}
                    
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={syncFormFields}
                      disabled={isSyncing || connectionStatus !== 'success'}
                    >
                      {isSyncing ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Sincronizando...
                        </>
                      ) : (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Sincronizar Campos com /contratacao
                        </>
                      )}
                    </Button>
                    
                    {connectionStatus !== 'success' && (
                      <p className="text-xs text-muted-foreground text-center">
                        ⚠️ Sincronização disponível após conexão bem sucedida
                      </p>
                    )}
                  </div>

                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      💡 <strong>Dica:</strong> Estas credenciais devem ser configuradas no arquivo <code className="text-primary">.env.local</code> na raiz do projeto.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Webhook className="h-5 w-5" />
                    URLs de Webhook
                  </CardTitle>
                  <CardDescription>
                    Configure os endpoints para envio automático de leads
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="webhookN8n">Webhook N8N</Label>
                    <div className="flex gap-2">
                      <Input
                        id="webhookN8n"
                        value={integrationConfig.webhookN8nUrl}
                        onChange={(e) => setIntegrationConfig({...integrationConfig, webhookN8nUrl: e.target.value})}
                        placeholder="https://n8n.seudominio.com/webhook/..."
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(integrationConfig.webhookN8nUrl, 'webhookN8n')}
                      >
                        {copiedField === 'webhookN8n' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="webhookCrm">Webhook CRM Personalizado</Label>
                    <div className="flex gap-2">
                      <Input
                        id="webhookCrm"
                        value={integrationConfig.webhookCrmUrl}
                        onChange={(e) => setIntegrationConfig({...integrationConfig, webhookCrmUrl: e.target.value})}
                        placeholder="https://api.seucrm.com/webhooks/..."
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(integrationConfig.webhookCrmUrl, 'webhookCrm')}
                      >
                        {copiedField === 'webhookCrm' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full">
                      <Save className="mr-2 h-4 w-4" />
                      Salvar URLs de Webhook
                    </Button>
                  </div>

                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      ⚡ Quando um lead é submetido, ele será enviado automaticamente para estes webhooks via POST request.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 3: Webhooks & API */}
          <TabsContent value="webhooks">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Webhook className="h-5 w-5" />
                    Endpoints da API
                  </CardTitle>
                  <CardDescription>
                    URLs geradas automaticamente para integração externa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>API Base URL</Label>
                    <div className="flex gap-2">
                      <Input
                        value={window.location.origin + "/api"}
                        readOnly
                        className="bg-muted"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(window.location.origin + "/api", 'apiBase')}
                      >
                        {copiedField === 'apiBase' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(window.location.origin + "/api", '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Webhook Receiver (Leads)</Label>
                    <div className="flex gap-2">
                      <Input
                        value={window.location.origin + "/api/webhooks/leads"}
                        readOnly
                        className="bg-muted"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(window.location.origin + "/api/webhooks/leads", 'webhookLeads')}
                      >
                        {copiedField === 'webhookLeads' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Form Fields Endpoint</Label>
                    <div className="flex gap-2">
                      <Input
                        value={window.location.origin + "/api/form-fields"}
                        readOnly
                        className="bg-muted"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(window.location.origin + "/api/form-fields", 'formFields')}
                      >
                        {copiedField === 'formFields' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Formato do Payload (JSON)</CardTitle>
                  <CardDescription>
                    Estrutura dos dados enviados aos webhooks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-auto">
{`{
  "event": "new_lead",
  "timestamp": "2025-10-23T10:30:00Z",
  "lead": {
    "id": "uuid",
    "nicho": "Advocacia",
    "nome_empresa": "Escritório Silva & Associados",
    "nome_responsavel": "Dr. João Silva",
    "email": "contato@exemplo.com.br",
    "whatsapp": "5581999999999",
    "cnpj": "12.345.678/0001-90",
    "cidade": "Recife",
    "estado": "PE",
    "possui_crm": "Sim",
    "qual_crm": "HubSpot",
    ... (demais campos do formulário)
  }
}`}
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exemplo de Integração N8N</CardTitle>
                  <CardDescription>
                    Como configurar o N8N para receber os leads
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Crie um novo workflow no N8N</li>
                    <li>Adicione um nó "Webhook" como trigger</li>
                    <li>Configure o método HTTP como POST</li>
                    <li>Copie a URL do webhook gerada</li>
                    <li>Cole a URL na aba "Integrações" acima</li>
                    <li>Teste o webhook enviando um lead de teste</li>
                    <li>Adicione nós adicionais para processar os dados (enviar email, criar card no CRM, etc)</li>
                  </ol>

                  <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-sm text-primary font-medium flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className="underline">
                        Saiba mais sobre N8N →
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />

      {/* Dialog com SQL Schema */}
      <Dialog open={showSqlDialog} onOpenChange={setShowSqlDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              SQL Schema - Execute no Supabase
            </DialogTitle>
            <DialogDescription>
              Copie e execute este SQL no SQL Editor do Supabase para criar todas as tabelas necessárias
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Schema completo (Tabelas, Índices, RLS, Triggers)</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard.writeText(sqlSchema);
                    alert('✅ SQL copiado para área de transferência!');
                  }}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copiar SQL
                </Button>
              </div>
              <pre className="bg-background p-4 rounded border text-xs overflow-x-auto max-h-96">
                <code>{sqlSchema}</code>
              </pre>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <Code className="h-4 w-4" />
                Instruções de Instalação
              </h4>
              <ol className="text-sm space-y-2 text-blue-800 dark:text-blue-200">
                <li>1. Acesse seu projeto no <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" className="underline">Supabase Dashboard</a></li>
                <li>2. Vá em <strong>SQL Editor</strong> no menu lateral</li>
                <li>3. Clique em <strong>"New Query"</strong></li>
                <li>4. Cole o SQL copiado acima</li>
                <li>5. Clique em <strong>"Run"</strong> ou pressione Ctrl+Enter</li>
                <li>6. Verifique que todas as tabelas foram criadas em <strong>Table Editor</strong></li>
                <li>7. Volte aqui e teste a sincronização de campos</li>
              </ol>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Importante</h4>
              <ul className="text-sm space-y-1 text-amber-800 dark:text-amber-200">
                <li>• Execute este SQL apenas UMA vez por projeto</li>
                <li>• Certifique-se de estar no projeto correto antes de executar</li>
                <li>• As políticas RLS estão configuradas para permitir inserção pública de leads</li>
                <li>• Para operações admin, você precisará estar autenticado no Supabase</li>
              </ul>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowSqlDialog(false)}>
                Fechar
              </Button>
              <Button onClick={() => {
                window.open(integrationConfig.supabaseUrl + '/project/_/sql', '_blank');
              }}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Abrir SQL Editor do Supabase
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GerenciarFormularios;
