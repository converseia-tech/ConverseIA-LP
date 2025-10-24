# 🔧 Correção: Integração Supabase com localStorage

## O Problema Detectado

### Erro no Console:
```
Erro ao carregar Supabase: Error: supabaseUrl is required
```

### Causa Raiz:
O arquivo `src/lib/supabase.ts` estava tentando criar o cliente Supabase usando **apenas** variáveis de ambiente:

```typescript
// ❌ ANTES (não funcionava)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
```

**Problema:** Você configurou as credenciais no **painel admin** e salvou no **localStorage**, mas o código estava ignorando isso e buscando no arquivo `.env` que não existe.

---

## A Solução Implementada

### 1️⃣ Priorização de Credenciais

**NOVA ORDEM DE PRIORIDADE:**
1. **1º:** localStorage (configurado no painel admin)
2. **2º:** Variáveis de ambiente (.env)
3. **3º:** Placeholder (para não quebrar o app)

```typescript
// ✅ AGORA (funciona)
const getSupabaseUrl = () => {
  const localStorageUrl = localStorage.getItem('supabase_url');
  return localStorageUrl || import.meta.env.VITE_SUPABASE_URL || '';
};

const getSupabaseAnonKey = () => {
  const localStorageKey = localStorage.getItem('supabase_anon_key');
  return localStorageKey || import.meta.env.VITE_SUPABASE_ANON_KEY || '';
};
```

---

### 2️⃣ Cliente Dinâmico

Antes o cliente era criado **uma vez** ao carregar o módulo. Agora ele é criado **dinamicamente** sempre que necessário:

```typescript
// ✅ Função para obter cliente com credenciais atualizadas
export const getSupabaseClient = () => {
  const supabaseUrl = getSupabaseUrl();
  const supabaseAnonKey = getSupabaseAnonKey();

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('⚠️ Supabase not configured');
    // Retorna placeholder para não quebrar
    return createClient('https://placeholder.supabase.co', 'placeholder-key');
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    }
  });
};
```

---

### 3️⃣ Todas as APIs Atualizadas

**Antes:** Todas as funções usavam `supabase` estático  
**Agora:** Todas usam `getSupabaseClient()` dinâmico

#### Exemplo - formFieldsAPI:
```typescript
// ❌ ANTES
async getAll() {
  const { data, error } = await supabase  // ← Cliente estático
    .from('form_fields')
    .select('*');
}

// ✅ AGORA
async getAll() {
  const client = getSupabaseClient();  // ← Cliente dinâmico
  const { data, error } = await client
    .from('form_fields')
    .select('*');
}
```

**APIs atualizadas:**
- ✅ `formFieldsAPI` (getAll, create, update, delete)
- ✅ `leadsAPI` (create, getAll, getById, update, delete, getAnalytics)
- ✅ `webhookAPI` (sendToN8N, sendToCRM, getStats)
- ✅ `storageAPI` (uploadFile, getFileUrl)
- ✅ `authAPI` (signIn, signOut, getCurrentUser, isAuthenticated)

---

## Como Funciona Agora

### Fluxo de Configuração:

```
1. Você abre /admin/formularios
        ↓
2. Preenche credenciais Supabase
        ↓
3. Clica em "Salvar e Testar Conexão"
        ↓
4. Sistema salva no localStorage:
   - supabase_url
   - supabase_anon_key
   - supabase_service_key
   - supabase_connected: 'true'
        ↓
5. QUALQUER página que usar Supabase agora
   automaticamente pega as credenciais do localStorage!
        ↓
6. Funciona em /contratacao, /insights, etc.
```

### Fluxo de Uso da API:

```
Componente chama: formFieldsAPI.getAll()
        ↓
formFieldsAPI executa: const client = getSupabaseClient()
        ↓
getSupabaseClient() busca:
  1º → localStorage.getItem('supabase_url')
  2º → import.meta.env.VITE_SUPABASE_URL
  3º → Placeholder (se nada existir)
        ↓
Cliente criado com credenciais corretas
        ↓
Query executada no Supabase
        ↓
Dados retornados ✅
```

---

## Vantagens da Nova Abordagem

### ✅ Configuração Via UI
Não precisa mexer em arquivos `.env`, tudo pelo painel admin

### ✅ Persistência Automática
Credenciais salvas no navegador, disponíveis em todas as páginas

### ✅ Fallback Inteligente
Se localStorage vazio, tenta `.env`, se `.env` vazio, não quebra o app

### ✅ Hot Reload
Mudou credenciais no painel? Próxima chamada já usa novas credenciais

### ✅ Multi-Ambiente
Pode ter `.env` para produção e localStorage para desenvolvimento

---

## Teste Agora

### 1. Recarregue a Página
```
Ctrl + Shift + R (hard reload)
```

### 2. Verifique o Console
Antes tinha:
```
❌ Erro ao carregar Supabase: Error: supabaseUrl is required
```

Agora deve ter:
```
✅ (nenhum erro de Supabase)
```

ou se ainda não configurou:
```
⚠️ Supabase credentials not configured. Please configure in Admin Panel
```

### 3. Configure no Painel Admin
```
/admin/formularios → Aba "Integrações"
```

### 4. Teste em Qualquer Página
Acesse `/contratacao` ou qualquer outra página que use Supabase - agora deve funcionar!

---

## Diferenças Visuais

### ANTES ❌
```
Console:
  🔴 Erro ao carregar Supabase: Error: supabaseUrl is required
  🔴 Erro ao carregar Supabase: Error: supabaseUrl is required
  🔴 Erro ao carregar Supabase: Error: supabaseUrl is required
  (repetido várias vezes)

Resultado:
  - Nenhuma integração funciona
  - Formulários não salvam
  - Admin panel não sincroniza
```

### AGORA ✅
```
Console:
  (silencioso, sem erros)

Resultado:
  - Credenciais carregadas do localStorage
  - Cliente Supabase criado corretamente
  - Todas as APIs funcionando
  - Formulários sincronizam
  - Admin panel conectado
```

---

## Configuração com .env (Opcional)

Se preferir usar arquivo `.env` em vez de localStorage:

### 1. Crie `.env.local` na raiz do projeto:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbG...sua-key-aqui
VITE_WEBHOOK_N8N_URL=https://seu-n8n.com/webhook/xyz
VITE_WEBHOOK_CRM_URL=https://seu-crm.com/api/leads
```

### 2. Reinicie o servidor:
```bash
npm run dev
```

### 3. Prioridade:
```
localStorage (painel admin) > .env > placeholder
```

---

## Troubleshooting

### Ainda vendo "supabaseUrl is required"?
1. Recarregue com Ctrl + Shift + R
2. Limpe cache: F12 > Application > Storage > Clear site data
3. Configure novamente no painel admin

### localStorage não está salvando?
1. Verifique se cookies estão habilitados
2. Não está em modo anônimo/privado do navegador?
3. Tente outro navegador para testar

### Credenciais do .env não funcionam?
1. Arquivo deve ser `.env.local` (não `.env`)
2. Variáveis devem começar com `VITE_`
3. Reinicie o servidor após criar/editar

### Erro de CORS?
1. Configure CORS no Supabase Dashboard
2. Settings > API > CORS Settings
3. Adicione `http://localhost:8083` (ou sua URL)

---

## Arquivos Modificados

### ✅ src/lib/supabase.ts
- Adicionado: `getSupabaseUrl()`
- Adicionado: `getSupabaseAnonKey()`
- Adicionado: `getSupabaseClient()`
- Modificado: Todas as APIs agora usam cliente dinâmico

**Total de mudanças:** ~150 linhas atualizadas

---

**Data da Correção:** 23 de Outubro de 2025  
**Versão:** 3.0 - Integração Supabase com localStorage Dinâmico
