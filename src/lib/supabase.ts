import { createClient } from '@supabase/supabase-js';

// Prioriza credenciais do localStorage (configuradas no painel admin)
// Se não existirem, usa variáveis de ambiente do .env
const getSupabaseUrl = () => {
  // Verifica se está no browser antes de acessar localStorage
  if (typeof window !== 'undefined' && window.localStorage) {
    const localStorageUrl = localStorage.getItem('supabase_url');
    if (localStorageUrl) return localStorageUrl;
  }
  return import.meta.env.VITE_SUPABASE_URL || '';
};

const getSupabaseAnonKey = () => {
  // Verifica se está no browser antes de acessar localStorage
  if (typeof window !== 'undefined' && window.localStorage) {
    const localStorageKey = localStorage.getItem('supabase_anon_key');
    if (localStorageKey) return localStorageKey;
  }
  return import.meta.env.VITE_SUPABASE_ANON_KEY || '';
};

// Função para obter cliente Supabase com credenciais atualizadas
export const getSupabaseClient = () => {
  const supabaseUrl = getSupabaseUrl();
  const supabaseAnonKey = getSupabaseAnonKey();

  if (!supabaseUrl || !supabaseAnonKey) {
    // Não loga warning se estiver no servidor (SSR)
    if (typeof window !== 'undefined') {
      console.warn('⚠️ Supabase credentials not configured. Please configure in Admin Panel (/admin/formularios) or set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file');
    }
    // Retorna cliente com valores vazios (não funcionará, mas não quebra o app)
    return createClient('https://placeholder.supabase.co', 'placeholder-key', {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    });
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    }
  });
};

// Cliente padrão exportado (criado lazy, só quando necessário)
let cachedClient: any = null;

export const supabase = new Proxy({} as any, {
  get(target, prop) {
    if (!cachedClient) {
      cachedClient = getSupabaseClient();
    }
    return cachedClient[prop];
  }
}) as ReturnType<typeof createClient>;

// Função helper para verificar se Supabase está configurado
export const isSupabaseConfigured = () => {
  const url = getSupabaseUrl();
  const key = getSupabaseAnonKey();
  return !!(url && key && url !== '' && key !== '');
};

// Função para resetar o cache (útil quando credenciais mudam)
export const resetSupabaseClient = () => {
  cachedClient = null;
};

// Database types
export interface FormField {
  id: string;
  label: string;
  field_type: 'text' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'file' | 'table';
  placeholder?: string;
  options?: string[];
  required: boolean;
  nicho: 'Todos' | 'Advocacia' | 'Clínica' | 'Outro';
  step: number;
  display_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface Lead {
  id?: string;
  nicho: string;
  nome_empresa: string;
  nome_responsavel: string;
  email: string;
  whatsapp: string;
  cnpj?: string;
  cidade?: string;
  estado?: string;
  num_profissionais?: string;
  
  // Step 3 data
  possui_crm?: string;
  qual_crm?: string;
  softwares_utilizados?: string[];
  captacao_clientes?: string;
  areas_atuacao?: string[];
  agentes_por_area?: string;
  sistema_gestao?: string;
  agendamento_atual?: string;
  agendamento_automatico?: string;
  integracoes?: string[];
  setor_atuacao?: string;
  possui_site?: string;
  link_site?: string;
  contato_atual?: string[];
  funcionalidades_ia?: string[];
  
  // Step 4 data
  nome_agente?: string;
  linguagem?: string;
  tom_voz?: string;
  direcionar_humano?: string;
  canais_desejados?: string[];
  relatorios?: string;
  coletar_dados?: string[];
  lembretes_automaticos?: string;
  pos_consulta?: string;
  integracao_personalizada?: string;
  
  // Step 5 data
  observacoes?: string;
  aceitar_termos?: boolean;
  arquivos?: FileUpload[];
  
  // Metadata
  status?: 'novo' | 'em_andamento' | 'convertido' | 'perdido';
  origem?: string;
  sent_to_n8n?: boolean;
  sent_to_crm?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface FileUpload {
  file_name: string;
  file_type: string;
  file_size: number;
  storage_path: string;
}

export interface WebhookLog {
  id?: string;
  lead_id: string;
  webhook_type: 'n8n' | 'crm';
  webhook_url: string;
  payload: any;
  response_status?: number;
  response_body?: string;
  success: boolean;
  error_message?: string;
  attempted_at?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'manager' | 'viewer';
  is_active: boolean;
  created_at?: string;
  last_login?: string;
}

// API Functions
export const formFieldsAPI = {
  // Get all form fields
  async getAll(nicho?: string, step?: number) {
    const client = getSupabaseClient();
    let query = client
      .from('form_fields')
      .select('*')
      .order('step', { ascending: true })
      .order('display_order', { ascending: true });

    if (nicho) {
      query = query.or(`nicho.eq.${nicho},nicho.eq.Todos`);
    }

    if (step) {
      query = query.eq('step', step);
    }

    const { data, error } = await query;
    
    if (error) throw error;
    return data as FormField[];
  },

  // Create form field
  async create(field: Omit<FormField, 'id' | 'created_at' | 'updated_at'>) {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('form_fields')
      .insert(field)
      .select()
      .single();
    
    if (error) throw error;
    return data as FormField;
  },

  // Update form field
  async update(id: string, updates: Partial<FormField>) {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('form_fields')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as FormField;
  },

  // Delete form field
  async delete(id: string) {
    const client = getSupabaseClient();
    const { error } = await client
      .from('form_fields')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

export const leadsAPI = {
  // Create lead
  async create(lead: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('leads')
      .insert(lead)
      .select()
      .single();
    
    if (error) throw error;
    return data as Lead;
  },

  // Get all leads
  async getAll(filters?: { nicho?: string; status?: string; limit?: number; offset?: number }) {
    const client = getSupabaseClient();
    let query = client
      .from('leads')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    if (filters?.nicho) {
      query = query.eq('nicho', filters.nicho);
    }

    if (filters?.status) {
      query = query.eq('status', filters.status);
    }

    if (filters?.limit) {
      query = query.limit(filters.limit);
    }

    if (filters?.offset) {
      query = query.range(filters.offset, filters.offset + (filters.limit || 10) - 1);
    }

    const { data, error, count } = await query;
    
    if (error) throw error;
    return { data: data as Lead[], count: count || 0 };
  },

  // Get single lead
  async getById(id: string) {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('leads')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as Lead;
  },

  // Update lead
  async update(id: string, updates: Partial<Lead>) {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('leads')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as Lead;
  },

  // Delete lead
  async delete(id: string) {
    const client = getSupabaseClient();
    const { error } = await client
      .from('leads')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Get analytics
  async getAnalytics(dateRange?: { start: string; end: string }) {
    const client = getSupabaseClient();
    let query = client
      .from('daily_leads_summary')
      .select('*')
      .order('date', { ascending: false });

    if (dateRange) {
      query = query
        .gte('date', dateRange.start)
        .lte('date', dateRange.end);
    }

    const { data, error } = await query;
    
    if (error) throw error;
    return data;
  }
};

export const webhookAPI = {
  // Send to N8N
  async sendToN8N(lead: Lead) {
    const client = getSupabaseClient();
    const webhookUrl = import.meta.env.VITE_WEBHOOK_N8N_URL;
    if (!webhookUrl) {
      console.warn('N8N webhook URL not configured');
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'new_lead',
          timestamp: new Date().toISOString(),
          lead: lead
        }),
      });

      const responseBody = await response.text();

      // Log webhook attempt
      await client.from('webhook_logs').insert({
        lead_id: lead.id,
        webhook_type: 'n8n',
        webhook_url: webhookUrl,
        payload: lead,
        response_status: response.status,
        response_body: responseBody,
        success: response.ok
      });

      // Update lead
      if (response.ok && lead.id) {
        await leadsAPI.update(lead.id, { sent_to_n8n: true });
      }

      return response.ok;
    } catch (error: any) {
      // Log error
      await client.from('webhook_logs').insert({
        lead_id: lead.id,
        webhook_type: 'n8n',
        webhook_url: webhookUrl,
        payload: lead,
        success: false,
        error_message: error.message
      });

      console.error('N8N webhook error:', error);
      return false;
    }
  },

  // Send to CRM
  async sendToCRM(lead: Lead) {
    const client = getSupabaseClient();
    const webhookUrl = import.meta.env.VITE_WEBHOOK_CRM_URL;
    if (!webhookUrl) {
      console.warn('CRM webhook URL not configured');
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'new_lead',
          timestamp: new Date().toISOString(),
          lead: lead
        }),
      });

      const responseBody = await response.text();

      // Log webhook attempt
      await client.from('webhook_logs').insert({
        lead_id: lead.id,
        webhook_type: 'crm',
        webhook_url: webhookUrl,
        payload: lead,
        response_status: response.status,
        response_body: responseBody,
        success: response.ok
      });

      // Update lead
      if (response.ok && lead.id) {
        await leadsAPI.update(lead.id, { sent_to_crm: true });
      }

      return response.ok;
    } catch (error: any) {
      // Log error
      await client.from('webhook_logs').insert({
        lead_id: lead.id,
        webhook_type: 'crm',
        webhook_url: webhookUrl,
        payload: lead,
        success: false,
        error_message: error.message
      });

      console.error('CRM webhook error:', error);
      return false;
    }
  },

  // Get webhook stats
  async getStats() {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('webhook_delivery_stats')
      .select('*');
    
    if (error) throw error;
    return data;
  }
};

export const storageAPI = {
  // Upload file
  async uploadFile(file: File, leadId: string) {
    const client = getSupabaseClient();
    const fileExt = file.name.split('.').pop();
    const fileName = `${leadId}/${Date.now()}.${fileExt}`;

    const { data, error } = await client.storage
      .from('lead-attachments')
      .upload(fileName, file);

    if (error) throw error;

    // Log file upload
    await client.from('file_uploads').insert({
      lead_id: leadId,
      file_name: file.name,
      file_type: file.type,
      file_size: file.size,
      storage_path: data.path
    });

    // Get public URL
    const { data: urlData } = client.storage
      .from('lead-attachments')
      .getPublicUrl(data.path);

    return {
      file_name: file.name,
      file_type: file.type,
      file_size: file.size,
      storage_path: urlData.publicUrl
    };
  },

  // Get file URL
  async getFileUrl(path: string) {
    const client = getSupabaseClient();
    const { data } = client.storage
      .from('lead-attachments')
      .getPublicUrl(path);

    return data.publicUrl;
  }
};

export const authAPI = {
  // Sign in
  async signIn(email: string, password: string) {
    const client = getSupabaseClient();
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // Update last login
    if (data.user) {
      await client
        .from('admin_users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', data.user.id);
    }

    return data;
  },

  // Sign out
  async signOut() {
    const client = getSupabaseClient();
    const { error } = await client.auth.signOut();
    if (error) throw error;
  },

  // Get current user
  async getCurrentUser() {
    const client = getSupabaseClient();
    const { data: { user }, error } = await client.auth.getUser();
    if (error) throw error;

    if (!user) return null;

    // Get admin user details
    const { data: adminUser, error: adminError } = await client
      .from('admin_users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (adminError) throw adminError;

    return adminUser as AdminUser;
  },

  // Check if authenticated
  async isAuthenticated() {
    const client = getSupabaseClient();
    const { data: { session } } = await client.auth.getSession();
    return !!session;
  }
};
