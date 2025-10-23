-- =============================================
-- SCHEMA: ConverseIA Form System
-- Database: Supabase Self-Hosted
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- TABLE: form_fields
-- Stores dynamic form field configurations
-- =============================================
CREATE TABLE form_fields (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    label TEXT NOT NULL,
    field_type TEXT NOT NULL CHECK (field_type IN ('text', 'textarea', 'select', 'radio', 'checkbox', 'date', 'file', 'table')),
    placeholder TEXT,
    options JSONB, -- Array of options for select/radio/checkbox
    required BOOLEAN DEFAULT false,
    nicho TEXT CHECK (nicho IN ('Todos', 'Advocacia', 'Clínica', 'Outro')),
    step INTEGER NOT NULL CHECK (step BETWEEN 1 AND 5),
    display_order INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX idx_form_fields_nicho ON form_fields(nicho);
CREATE INDEX idx_form_fields_step ON form_fields(step);
CREATE INDEX idx_form_fields_order ON form_fields(display_order);

-- =============================================
-- TABLE: leads
-- Stores submitted lead data
-- =============================================
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nicho TEXT NOT NULL,
    nome_empresa TEXT NOT NULL,
    nome_responsavel TEXT NOT NULL,
    email TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    cnpj TEXT,
    cidade TEXT,
    estado TEXT,
    num_profissionais TEXT,
    
    -- Step 3 data (varies by niche)
    possui_crm TEXT,
    qual_crm TEXT,
    softwares_utilizados JSONB,
    captacao_clientes TEXT,
    areas_atuacao JSONB,
    agentes_por_area TEXT,
    sistema_gestao TEXT,
    agendamento_atual TEXT,
    agendamento_automatico TEXT,
    integracoes JSONB,
    setor_atuacao TEXT,
    possui_site TEXT,
    link_site TEXT,
    contato_atual JSONB,
    funcionalidades_ia JSONB,
    
    -- Step 4 data
    nome_agente TEXT,
    linguagem TEXT,
    tom_voz TEXT,
    direcionar_humano TEXT,
    canais_desejados JSONB,
    relatorios TEXT,
    coletar_dados JSONB,
    lembretes_automaticos TEXT,
    pos_consulta TEXT,
    integracao_personalizada TEXT,
    
    -- Step 5 data
    observacoes TEXT,
    aceitar_termos BOOLEAN DEFAULT false,
    arquivos JSONB, -- Array of file URLs
    
    -- Metadata
    status TEXT DEFAULT 'novo' CHECK (status IN ('novo', 'em_andamento', 'convertido', 'perdido')),
    origem TEXT DEFAULT 'formulario_site',
    sent_to_n8n BOOLEAN DEFAULT false,
    sent_to_crm BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for analytics and filtering
CREATE INDEX idx_leads_nicho ON leads(nicho);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created ON leads(created_at DESC);
CREATE INDEX idx_leads_email ON leads(email);

-- =============================================
-- TABLE: webhook_logs
-- Tracks webhook delivery status
-- =============================================
CREATE TABLE webhook_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    webhook_type TEXT NOT NULL CHECK (webhook_type IN ('n8n', 'crm')),
    webhook_url TEXT NOT NULL,
    payload JSONB NOT NULL,
    response_status INTEGER,
    response_body TEXT,
    success BOOLEAN DEFAULT false,
    error_message TEXT,
    attempted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_webhook_logs_lead ON webhook_logs(lead_id);
CREATE INDEX idx_webhook_logs_success ON webhook_logs(success);

-- =============================================
-- TABLE: users (for authentication)
-- Admin users who can access the dashboard
-- =============================================
CREATE TABLE admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'manager', 'viewer')),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE
);

-- =============================================
-- TABLE: file_uploads
-- Tracks uploaded files
-- =============================================
CREATE TABLE file_uploads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    file_name TEXT NOT NULL,
    file_type TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    storage_path TEXT NOT NULL,
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_file_uploads_lead ON file_uploads(lead_id);

-- =============================================
-- FUNCTIONS: Auto-update timestamps
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to tables
CREATE TRIGGER update_form_fields_updated_at BEFORE UPDATE ON form_fields
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================

-- Enable RLS
ALTER TABLE form_fields ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE webhook_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE file_uploads ENABLE ROW LEVEL SECURITY;

-- Policies for form_fields (public read, admin write)
CREATE POLICY "Anyone can view form fields"
    ON form_fields FOR SELECT
    USING (true);

CREATE POLICY "Admins can insert form fields"
    ON form_fields FOR INSERT
    WITH CHECK (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

CREATE POLICY "Admins can update form fields"
    ON form_fields FOR UPDATE
    USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

CREATE POLICY "Admins can delete form fields"
    ON form_fields FOR DELETE
    USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- Policies for leads (public insert, admin read/update)
CREATE POLICY "Anyone can create leads"
    ON leads FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Admins can view all leads"
    ON leads FOR SELECT
    USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

CREATE POLICY "Admins can update leads"
    ON leads FOR UPDATE
    USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- Policies for webhook_logs (admin only)
CREATE POLICY "Admins can view webhook logs"
    ON webhook_logs FOR SELECT
    USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- Policies for admin_users (admin only)
CREATE POLICY "Admins can view admin users"
    ON admin_users FOR SELECT
    USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- Policies for file_uploads (public insert, admin read)
CREATE POLICY "Anyone can upload files"
    ON file_uploads FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Admins can view files"
    ON file_uploads FOR SELECT
    USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- =============================================
-- SEED DATA: Initial form fields
-- =============================================
INSERT INTO form_fields (label, field_type, placeholder, nicho, step, display_order, required) VALUES
-- Step 2 - Universal fields
('Nome da Empresa', 'text', 'Digite o nome da empresa', 'Todos', 2, 1, true),
('Nome do Responsável', 'text', 'Nome completo', 'Todos', 2, 2, true),
('E-mail', 'text', 'contato@empresa.com.br', 'Todos', 2, 3, true),
('WhatsApp / Telefone', 'text', '(00) 00000-0000', 'Todos', 2, 4, true),
('CNPJ', 'text', '00.000.000/0000-00', 'Todos', 2, 5, false),
('Cidade', 'text', 'São Paulo', 'Todos', 2, 6, true),
('Estado', 'select', null, 'Todos', 2, 7, true),
('Número de Profissionais', 'text', 'Ex: 5', 'Todos', 2, 8, true);

-- Step 3 - Advocacia specific
INSERT INTO form_fields (label, field_type, options, nicho, step, display_order, required) VALUES
('Possui CRM Jurídico?', 'radio', '["Sim", "Não"]', 'Advocacia', 3, 1, true),
('Qual CRM você utiliza?', 'text', 'Ex: ADVBOX, CPJ, Legal One', 'Advocacia', 3, 2, false),
('Como é feita a captação de clientes hoje?', 'textarea', 'Ex: Indicações, Google Ads...', 'Advocacia', 3, 3, false),
('Principais áreas de atuação', 'checkbox', '["Previdenciário", "Bancário", "Trabalhista", "Cível", "Criminal", "Família", "Consumidor", "Empresarial"]', 'Advocacia', 3, 4, false),
('Deseja agentes diferentes por área?', 'radio', '["Sim, um agente para cada área", "Não, um agente geral"]', 'Advocacia', 3, 5, false);

-- Step 3 - Clínica specific
INSERT INTO form_fields (label, field_type, options, nicho, step, display_order, required) VALUES
('Área Principal da Clínica', 'select', '["Nutrição", "Psicologia", "Estética", "Odontologia", "Fisioterapia", "Medicina Geral", "Outro"]', 'Clínica', 3, 1, false),
('Como realiza agendamentos atualmente?', 'textarea', 'Ex: WhatsApp, telefone, site...', 'Clínica', 3, 2, false),
('Possui sistema de gestão ou prontuário?', 'radio', '["Sim", "Não"]', 'Clínica', 3, 3, false),
('Qual sistema você utiliza?', 'text', 'Ex: IClinic, Ninsaúde...', 'Clínica', 3, 4, false),
('Deseja que a IA realize agendamentos automáticos?', 'radio', '["Sim, agendamento totalmente automatizado", "Não, apenas coleta de informações"]', 'Clínica', 3, 5, false),
('Deseja integração com:', 'checkbox', '["IClinic", "Google Agenda", "Planilhas Google", "Ninsaúde", "Outro"]', 'Clínica', 3, 6, false);

-- Step 3 - Outros specific
INSERT INTO form_fields (label, field_type, options, nicho, step, display_order, required) VALUES
('Setor de Atuação', 'text', 'Ex: Vendas, Consultoria...', 'Outro', 3, 1, false),
('Possui site ou e-commerce?', 'radio', '["Sim", "Não"]', 'Outro', 3, 2, false),
('Informe o link do site', 'text', 'https://seusite.com.br', 'Outro', 3, 3, false),
('Usa CRM ou sistema de atendimento?', 'radio', '["Sim", "Não"]', 'Outro', 3, 4, false),
('Qual sistema você utiliza?', 'text', 'Ex: RD Station, HubSpot...', 'Outro', 3, 5, false),
('Como realiza contato com clientes hoje?', 'checkbox', '["WhatsApp", "E-mail", "Telefone", "Site", "Instagram", "Facebook"]', 'Outro', 3, 6, false),
('Deseja que a IA:', 'checkbox', '["Faça triagem de clientes", "Envie orçamentos automáticos", "Realize follow-up automático", "Qualifique leads", "Agende reuniões"]', 'Outro', 3, 7, false);

-- Step 4 - Universal personalization
INSERT INTO form_fields (label, field_type, options, placeholder, nicho, step, display_order, required) VALUES
('Nome desejado para o Agente', 'text', null, 'Ex: Julia, Assistente Legal...', 'Todos', 4, 1, true),
('Linguagem Desejada', 'select', '["Formal", "Amigável", "Técnica", "Acolhedora", "Objetiva"]', null, 'Todos', 4, 2, false),
('Tom de Voz', 'select', '["Empático", "Direto", "Técnico", "Neutro", "Institucional", "Comercial"]', null, 'Todos', 4, 3, false),
('Deve direcionar para humano após triagem?', 'radio', '["Sim, sempre encaminhar para atendente", "Não, agente totalmente autônomo", "Apenas em casos específicos"]', null, 'Todos', 4, 4, false),
('Canais Desejados', 'checkbox', '["WhatsApp Business", "Site / Chat Web", "CRM Interno", "Instagram Direct", "Facebook Messenger", "Telegram"]', null, 'Todos', 4, 5, false),
('Deseja relatórios automáticos de performance?', 'radio', '["Sim, enviar relatórios periódicos", "Não"]', null, 'Todos', 4, 6, false),
('Deseja integração com planilhas ou API personalizada?', 'radio', '["Sim", "Não"]', null, 'Todos', 4, 7, false);

-- Step 4 - Clínica specific
INSERT INTO form_fields (label, field_type, options, nicho, step, display_order, required) VALUES
('Dados que o agente deve coletar:', 'checkbox', '["Nome do paciente", "Motivo da consulta", "Convênio", "Horário preferencial", "CPF", "Data de nascimento"]', 'Clínica', 4, 8, false),
('IA deve enviar lembretes automáticos de consulta?', 'radio', '["Sim", "Não"]', 'Clínica', 4, 9, false),
('IA deve realizar pós-consulta (feedback/satisfação)?', 'radio', '["Sim", "Não"]', 'Clínica', 4, 10, false);

-- =============================================
-- ANALYTICS VIEWS
-- =============================================

-- View: Daily leads summary
CREATE OR REPLACE VIEW daily_leads_summary AS
SELECT 
    DATE(created_at) as date,
    nicho,
    COUNT(*) as total_leads,
    COUNT(CASE WHEN status = 'convertido' THEN 1 END) as convertidos,
    COUNT(CASE WHEN status = 'novo' THEN 1 END) as novos,
    COUNT(CASE WHEN status = 'em_andamento' THEN 1 END) as em_andamento,
    COUNT(CASE WHEN status = 'perdido' THEN 1 END) as perdidos
FROM leads
GROUP BY DATE(created_at), nicho
ORDER BY date DESC;

-- View: Webhook delivery status
CREATE OR REPLACE VIEW webhook_delivery_stats AS
SELECT 
    webhook_type,
    COUNT(*) as total_attempts,
    COUNT(CASE WHEN success = true THEN 1 END) as successful,
    COUNT(CASE WHEN success = false THEN 1 END) as failed,
    ROUND(AVG(CASE WHEN success = true THEN 1 ELSE 0 END) * 100, 2) as success_rate
FROM webhook_logs
GROUP BY webhook_type;

-- Grant permissions
GRANT SELECT ON daily_leads_summary TO authenticated;
GRANT SELECT ON webhook_delivery_stats TO authenticated;
