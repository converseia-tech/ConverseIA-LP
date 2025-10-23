# 🔐 Sistema de Autenticação do Painel Administrativo

## Senha de Acesso Temporária

Para acessar o painel de gerenciamento de formulários:

**URL:** `/admin-login`

**Senha:** `converseia@admin2025`

---

## Como Acessar o Painel

1. Navegue até: `http://localhost:8080/admin-login`
2. Digite a senha: `converseia@admin2025`
3. Clique em "Entrar no Painel"
4. Você será redirecionado para `/gerenciar-formularios`

---

## Funcionalidades do Painel

### 📝 Aba "Campos do Formulário"
- **Visualizar** todos os campos cadastrados no banco de dados (Supabase)
- **Adicionar** novos campos ao formulário
- **Editar** campos existentes (label, tipo, placeholder, nicho, etapa, ordem, obrigatoriedade)
- **Excluir** campos
- **Gerenciar opções** para campos do tipo select, radio e checkbox

### 🔑 Aba "Integrações"
- **Configurar credenciais do Supabase:**
  - Supabase URL
  - Supabase Anon Key
  - Supabase Service Role Key
- **Configurar URLs de Webhook:**
  - Webhook N8N
  - Webhook CRM Personalizado
- **Copiar** valores com um clique

### 🌐 Aba "Webhooks & API"
- **Visualizar endpoints gerados automaticamente:**
  - API Base URL
  - Webhook Receiver (Leads)
  - Form Fields Endpoint
- **Ver formato do payload JSON** enviado aos webhooks
- **Instruções de integração com N8N**

---

## Configuração das Credenciais

### Arquivo `.env.local`

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Webhook URLs
VITE_WEBHOOK_N8N_URL=https://n8n.seudominio.com/webhook/...
VITE_WEBHOOK_CRM_URL=https://api.seucrm.com/webhooks/...

# App Configuration
VITE_APP_URL=http://localhost:8080
VITE_WHATSAPP_PHONE=558197849998
```

### Onde Encontrar as Credenciais do Supabase

1. Acesse seu projeto no [Supabase Dashboard](https://supabase.com/dashboard)
2. Vá em **Settings** > **API**
3. Copie:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** key → `VITE_SUPABASE_ANON_KEY`
   - **service_role** key (Secret!) → `VITE_SUPABASE_SERVICE_KEY`

⚠️ **IMPORTANTE:** Nunca commit o arquivo `.env.local` no Git!

---

## Banco de Dados (Supabase)

### Tabelas Criadas

O arquivo `supabase/migrations/001_initial_schema.sql` contém:

1. **form_fields** - Campos dinâmicos do formulário
2. **leads** - Leads submetidos
3. **webhook_logs** - Logs de envio de webhooks
4. **admin_users** - Usuários administrativos
5. **file_uploads** - Arquivos enviados

### Como Aplicar as Migrações

**Opção 1: Via Supabase CLI**
```bash
supabase migration up
```

**Opção 2: Via SQL Editor no Dashboard**
1. Acesse seu projeto no Supabase
2. Vá em **SQL Editor**
3. Copie todo o conteúdo de `supabase/migrations/001_initial_schema.sql`
4. Cole no editor e execute

---

## Integração com N8N

### Configurar Webhook no N8N

1. Crie um novo workflow no N8N
2. Adicione um nó **Webhook** como trigger
3. Configure:
   - **HTTP Method:** POST
   - **Path:** /lead (ou qualquer path)
4. Copie a URL gerada (ex: `https://n8n.seudominio.com/webhook/lead`)
5. Cole na aba "Integrações" do painel admin
6. Adicione nós adicionais para processar os dados:
   - Enviar email de notificação
   - Criar card no CRM (HubSpot, Pipedrive, etc)
   - Enviar mensagem no Slack/Discord
   - Salvar em planilha do Google Sheets

### Formato do Payload

```json
{
  "event": "new_lead",
  "timestamp": "2025-10-23T10:30:00Z",
  "lead": {
    "id": "uuid-aqui",
    "nicho": "Advocacia",
    "nome_empresa": "Escritório Silva",
    "email": "contato@exemplo.com.br",
    "whatsapp": "5581999999999",
    ...
  }
}
```

---

## Segurança

### Autenticação Atual (Temporária)

- ✅ Senha hardcoded no código: `converseia@admin2025`
- ✅ Sessão armazenada em `sessionStorage`
- ✅ Redirecionamento automático se não autenticado

### Próximos Passos (Futuro)

- [ ] Migrar autenticação para Supabase Auth
- [ ] Criar tabela de usuários admin com senha hash
- [ ] Implementar logout com limpeza de sessão no backend
- [ ] Adicionar 2FA (autenticação de dois fatores)
- [ ] Implementar roles (admin, manager, viewer)

---

## Fluxo de Dados

```
Usuário preenche formulário em /contratacao
          ↓
Dados salvos na tabela 'leads' (Supabase)
          ↓
Webhook enviado para N8N (POST request)
          ↓
Webhook enviado para CRM (POST request)
          ↓
Log salvo em 'webhook_logs'
          ↓
Administrador visualiza lead no dashboard (futuro)
```

---

## Comandos Úteis

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Instalar Supabase CLI
npm install -g supabase

# Login no Supabase
supabase login

# Inicializar projeto
supabase init

# Aplicar migrações
supabase db push
```

---

## Troubleshooting

### Erro: "Erro ao carregar campos do banco de dados"

**Causa:** Credenciais do Supabase não configuradas ou incorretas.

**Solução:**
1. Verifique se o arquivo `.env.local` existe na raiz do projeto
2. Verifique se as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` estão corretas
3. Reinicie o servidor de desenvolvimento (`npm run dev`)

### Erro: "Cannot find module '@supabase/supabase-js'"

**Solução:**
```bash
npm install @supabase/supabase-js
```

### Painel não carrega os campos

**Causa:** Tabela `form_fields` não existe no banco.

**Solução:**
1. Execute o SQL em `supabase/migrations/001_initial_schema.sql` no SQL Editor do Supabase
2. Verifique se a tabela foi criada: `SELECT * FROM form_fields;`

---

## Contato

**Senha do Painel:** `converseia@admin2025`

**Para alterar a senha:**
Edite o arquivo `src/pages/AdminLogin.tsx`, linha 11:
```typescript
const ADMIN_PASSWORD = "sua-nova-senha-aqui";
```

---

**Desenvolvido com ❤️ pela ConverseIA**
