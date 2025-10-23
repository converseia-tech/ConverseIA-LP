import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

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
    let query = supabase
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
    const { data, error } = await supabase
      .from('form_fields')
      .insert(field)
      .select()
      .single();
    
    if (error) throw error;
    return data as FormField;
  },

  // Update form field
  async update(id: string, updates: Partial<FormField>) {
    const { data, error } = await supabase
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
    const { error } = await supabase
      .from('form_fields')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

export const leadsAPI = {
  // Create lead
  async create(lead: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('leads')
      .insert(lead)
      .select()
      .single();
    
    if (error) throw error;
    return data as Lead;
  },

  // Get all leads
  async getAll(filters?: { nicho?: string; status?: string; limit?: number; offset?: number }) {
    let query = supabase
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
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as Lead;
  },

  // Update lead
  async update(id: string, updates: Partial<Lead>) {
    const { data, error } = await supabase
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
    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Get analytics
  async getAnalytics(dateRange?: { start: string; end: string }) {
    let query = supabase
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
      await supabase.from('webhook_logs').insert({
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
      await supabase.from('webhook_logs').insert({
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
      await supabase.from('webhook_logs').insert({
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
      await supabase.from('webhook_logs').insert({
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
    const { data, error } = await supabase
      .from('webhook_delivery_stats')
      .select('*');
    
    if (error) throw error;
    return data;
  }
};

export const storageAPI = {
  // Upload file
  async uploadFile(file: File, leadId: string) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${leadId}/${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('lead-attachments')
      .upload(fileName, file);

    if (error) throw error;

    // Log file upload
    await supabase.from('file_uploads').insert({
      lead_id: leadId,
      file_name: file.name,
      file_type: file.type,
      file_size: file.size,
      storage_path: data.path
    });

    // Get public URL
    const { data: urlData } = supabase.storage
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
    const { data } = supabase.storage
      .from('lead-attachments')
      .getPublicUrl(path);

    return data.publicUrl;
  }
};

export const authAPI = {
  // Sign in
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // Update last login
    if (data.user) {
      await supabase
        .from('admin_users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', data.user.id);
    }

    return data;
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  // Get current user
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;

    if (!user) return null;

    // Get admin user details
    const { data: adminUser, error: adminError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (adminError) throw adminError;

    return adminUser as AdminUser;
  },

  // Check if authenticated
  async isAuthenticated() {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
  }
};
