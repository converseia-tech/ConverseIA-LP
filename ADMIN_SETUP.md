# 🔧 Guia de Configuração do Admin - ConverseIA

## 📋 Pré-requisitos

- Conta no [Supabase](https://supabase.com)
- Projeto Supabase criado

## 🚀 Passo a Passo de Configuração

### 1. Criar Projeto no Supabase

1. Acesse [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Clique em **"New Project"**
3. Escolha um nome e senha forte
4. Aguarde a criação do projeto (~2 minutos)

### 2. Obter Credenciais

1. No dashboard do seu projeto, vá em **Settings > API**
2. Copie os seguintes valores:
   - **Project URL** → Use como `VITE_SUPABASE_URL`
   - **anon public** (em Project API keys) → Use como `VITE_SUPABASE_ANON_KEY`
   - **service_role** (em Project API keys) → Use como `VITE_SUPABASE_SERVICE_KEY`

> ⚠️ **IMPORTANTE**: A `service_role` key tem poderes admin. **NUNCA** exponha ela no frontend!

### 3. Configurar no Admin Panel

#### Opção A: Via Interface (Recomendado)

1. Acesse `/admin-login`
2. Entre com a senha: `converseia@admin2025`
3. Vá em `/gerenciar-formularios`
4. Clique na aba **"Integrações"**
5. Cole as credenciais copiadas:
   - Supabase URL
   - Supabase Anon Key
   - Supabase Service Role Key
6. Clique em **"Salvar e Testar Conexão"**

#### Resultado Esperado:

- ✅ **Conexão OK**: Status verde "Conectado" aparece
- ⚠️ **Tabelas não existem**: Status amarelo, execute o SQL
- ❌ **Erro de conexão**: Verifique as credenciais

### 4. Criar Tabelas no Banco de Dados

Se aparecer "⚠️ Tabelas não existem":

1. Um modal com SQL será aberto automaticamente
2. Clique em **"Copiar SQL"**
3. Clique em **"Abrir SQL Editor do Supabase"**
4. Cole o SQL copiado
5. Clique em **"Run"** (ou Ctrl+Enter)
6. Aguarde a execução (deve ver "Success")
7. Volte ao admin e clique em **"Salvar e Testar Conexão"** novamente

### 5. Sincronizar Campos do Formulário

Após conexão bem-sucedida:

1. Configure os campos na aba **"Campos do Formulário"**
2. Volte na aba **"Integrações"**
3. Clique em **"Sincronizar Campos com /contratacao"**
4. Aguarde a confirmação

Agora a página `/contratacao` usará os campos configurados dinamicamente!

## 🎯 Fluxo Completo

```
┌─────────────────────────────────────┐
│ 1. Criar Projeto Supabase           │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│ 2. Copiar Credenciais (URL + Keys)  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│ 3. Salvar no Admin Panel            │
│    (/gerenciar-formularios)         │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│ 4. Testar Conexão                   │
│    Botão "Salvar e Testar Conexão"  │
└──────────────┬──────────────────────┘
               │
         ┌─────┴─────┐
         │           │
    ❌ Erro    ✅ Sucesso
         │           │
         │     ┌─────▼──────────────┐
         │     │ Tabelas existem?   │
         │     └─────┬──────────────┘
         │           │
         │      ┌────┴────┐
         │      │         │
         │     Não       Sim
         │      │         │
         │  ┌───▼───────────────────┐
         │  │ 5. Executar SQL       │
         │  │    (modal automático) │
         │  └───┬───────────────────┘
         │      │
         │  ┌───▼───────────────────┐
         │  │ 6. Testar novamente   │
         │  └───┬───────────────────┘
         │      │
         └──────┴─────┐
                      │
            ┌─────────▼──────────────┐
            │ 7. ✅ Tudo OK!         │
            │    Status: Conectado   │
            └─────────┬──────────────┘
                      │
            ┌─────────▼──────────────┐
            │ 8. Sincronizar Campos  │
            │    com /contratacao    │
            └────────────────────────┘
```

## 🐛 Troubleshooting

### Erro: "Conexão recusada"
- Verifique se a URL está correta
- Certifique-se que o projeto Supabase está ativo

### Erro: "Invalid API key"
- Verifique se copiou as keys corretamente
- Não confunda `anon` com `service_role`

### Erro: "Tabelas não existem"
- Execute o SQL fornecido no SQL Editor
- Verifique se o SQL foi executado sem erros

### Sincronização não funciona
- Primeiro teste a conexão com Supabase
- Status deve estar "Conectado" (verde)
- Só então clique em "Sincronizar"

## 📊 Estrutura do Banco de Dados

Após executar o SQL, você terá:

### Tabelas
- `form_fields` - Campos do formulário dinâmico
- `leads` - Leads capturados via formulário
- `webhook_logs` - Logs de envio para webhooks
- `admin_users` - Usuários administradores
- `file_uploads` - Uploads de arquivos dos leads

### Views (Analytics)
- `leads_by_status` - Leads agrupados por status
- `leads_by_nicho` - Leads agrupados por nicho
- `conversion_funnel` - Funil de conversão por dia

### Segurança (RLS)
- Leitura pública de `form_fields`
- Inserção pública de `leads`
- Admin tem acesso total autenticado

## 🔐 Segurança

- ✅ Credenciais salvas no `localStorage` do navegador
- ✅ RLS ativo em todas as tabelas
- ✅ Service Role Key **nunca** usada no frontend
- ✅ Senha do admin em `sessionStorage`

> 💡 **Dica**: Em produção, migre as credenciais para variáveis de ambiente do servidor

## 📞 Suporte

Problemas? Entre em contato:
- Email: dev@converseia.com.br
- WhatsApp: (81) 97849-998

---

**Última atualização**: Outubro 2025
