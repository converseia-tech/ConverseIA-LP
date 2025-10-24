# 🔍 Sistema de Diagnóstico Avançado - Supabase Connection

## Visão Geral

O novo sistema de diagnóstico realiza **6 etapas de verificação progressiva**, fornecendo feedback detalhado em cada passo. Isso permite identificar exatamente onde está o problema e como resolvê-lo.

## As 6 Etapas do Diagnóstico

### 📋 Etapa 1/6: Validar Credenciais Preenchidas
**O que verifica:**
- Se a URL do Supabase foi preenchida
- Se a Anon Key foi preenchida

**Possíveis erros:**
- ❌ Campos vazios ou incompletos

**Como resolver:**
- Preencha todos os campos obrigatórios antes de testar

---

### 📋 Etapa 2/6: Validar Formato da URL
**O que verifica:**
- Se a URL contém "supabase.co" ou "supabase.com"
- Se está no formato correto: `https://seu-projeto.supabase.co`

**Possíveis erros:**
- ❌ URL não contém domínio do Supabase
- ❌ URL copiada incorretamente

**Como resolver:**
1. Acesse: Supabase Dashboard > Settings > API
2. Copie o valor de **"Project URL"**
3. Cole no campo "Supabase URL"

---

### 📋 Etapa 3/6: Validar Formato da Anon Key
**O que verifica:**
- Se a Anon Key começa com "eyJ" (padrão JWT)
- Se parece ser uma key válida

**Possíveis erros:**
- ❌ Key não começa com "eyJ"
- ❌ Confundiu "anon" com "service_role"
- ❌ Key incompleta ou truncada

**Como resolver:**
1. Acesse: Supabase Dashboard > Settings > API
2. Em **"Project API keys"**, copie "anon public" (não a service_role!)
3. Cole no campo "Supabase Anon Key"

---

### 📋 Etapa 4/6: Criar Cliente Supabase
**O que verifica:**
- Se a biblioteca @supabase/supabase-js está instalada
- Se consegue inicializar o cliente

**Possíveis erros:**
- ❌ Biblioteca não instalada
- ❌ Erro de import

**Como resolver:**
```bash
npm install @supabase/supabase-js
```

---

### 📋 Etapa 5/6: Testar Conexão com Banco
**O que verifica:**
- Se consegue estabelecer conexão com o servidor Supabase
- Se as credenciais são válidas
- Se o projeto está ativo

**Possíveis erros e soluções:**

#### ⚠️ "Tabelas não existem"
**Diagnóstico:** Conexão OK, mas banco não configurado  
**Solução:** Execute o SQL Schema fornecido

#### ❌ "Invalid API key / JWT"
**Diagnóstico:** Credenciais inválidas ou expiradas  
**Solução:**
- Verifique se copiou corretamente
- Não confunda "anon" com "service_role"
- Gere novas keys se necessário

#### ❌ "CORS / Access-Control"
**Diagnóstico:** Erro de política de segurança  
**Solução:**
1. Supabase Dashboard > Settings > API > CORS Settings
2. Adicione a URL do seu site
3. Ou use "*" para permitir todos (apenas dev)

#### ❌ "Failed to fetch"
**Diagnóstico:** Não consegue conectar ao servidor  
**Possíveis causas:**
- Projeto Supabase pausado (plano gratuito inativo)
- Sem conexão com internet
- Firewall bloqueando
- URL incorreta

**Solução:**
- Verifique status do projeto no dashboard
- Confirme conexão com internet
- Verifique a URL novamente

---

### 📋 Etapa 6/6: Verificar Estrutura do Banco
**O que verifica:**
- Se consegue fazer queries no banco
- Se a tabela `form_fields` existe
- Quantos campos já estão cadastrados

**Resultado esperado:**
```
✅ Diagnóstico Completo: 6/6 Etapas OK

🎉 Conexão estabelecida com sucesso!

📊 Status do Sistema:
   • URL: Válida e acessível
   • Credenciais: Autenticadas
   • Banco de dados: Conectado
   • Tabelas: Criadas e funcionais
   • Campos cadastrados: X

✅ Sistema pronto para uso!
   Agora você pode sincronizar os campos com /contratacao
```

---

## 📊 Interpretando os Resultados

### ✅ Sucesso (Verde)
- Todas as 6 etapas passaram
- Sistema pronto para uso
- Pode sincronizar campos

### ⚠️ Parcial (Amarelo/Vermelho)
- Exemplo: "5/6 Etapas OK"
- Conexão estabelecida, mas falta configurar banco
- Solução: Execute o SQL Schema

### ❌ Falha (Vermelho)
- Indica exatamente qual etapa falhou
- Fornece diagnóstico do problema
- Sugere solução específica

---

## 🎯 Fluxo de Troubleshooting

```
┌─────────────────────────────┐
│  Etapa 1: Campos Vazios?    │
├─────────────────────────────┤
│  ❌ Sim → Preencher campos  │
│  ✅ Não → Próxima etapa     │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│  Etapa 2: URL Inválida?     │
├─────────────────────────────┤
│  ❌ Sim → Copiar URL corret │
│  ✅ Não → Próxima etapa     │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│  Etapa 3: Key Inválida?     │
├─────────────────────────────┤
│  ❌ Sim → Copiar Anon Key   │
│  ✅ Não → Próxima etapa     │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│  Etapa 4: Erro de Import?   │
├─────────────────────────────┤
│  ❌ Sim → npm install       │
│  ✅ Não → Próxima etapa     │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│  Etapa 5: Erro de Conexão?  │
├─────────────────────────────┤
│  ❌ Tabelas? → Exec SQL     │
│  ❌ JWT? → Verificar keys   │
│  ❌ CORS? → Config CORS     │
│  ❌ Fetch? → Check internet │
│  ✅ OK → Próxima etapa      │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│  Etapa 6: Verificar Banco   │
├─────────────────────────────┤
│  ✅ OK → Sistema Pronto! 🎉 │
└─────────────────────────────┘
```

---

## 💡 Dicas Importantes

### ⏱️ Delays entre Etapas
O diagnóstico tem delays de 300ms entre etapas para:
- Dar tempo de ver cada etapa
- Evitar que passe muito rápido
- Melhorar experiência do usuário

### 📝 Logs Detalhados
Erros são logados no console (F12) para debug técnico:
```javascript
console.error('Erro detalhado no teste de conexão:', error);
```

### 💾 Informações Salvas
Após conexão bem-sucedida, salva no localStorage:
- `supabase_url`
- `supabase_anon_key`
- `supabase_service_key`
- `supabase_connected: 'true'`
- `supabase_last_test: timestamp`

### 🔄 Teste Novamente
Depois de corrigir um problema:
1. Ajuste as configurações
2. Clique em "Salvar e Testar Conexão" novamente
3. O diagnóstico começará do zero
4. Cada etapa será verificada novamente

---

## 🚀 Casos de Uso Comuns

### Caso 1: Primeira Configuração
```
Usuário está configurando pela primeira vez

Etapa 1 ✅ → Etapa 2 ✅ → Etapa 3 ✅ → Etapa 4 ✅ → Etapa 5 ❌
Resultado: "Conexão OK, mas tabelas não existem"
Ação: Modal com SQL abre automaticamente
```

### Caso 2: Credenciais Erradas
```
Usuário copiou a key errada

Etapa 1 ✅ → Etapa 2 ✅ → Etapa 3 ✅ → Etapa 4 ✅ → Etapa 5 ❌
Resultado: "Credenciais inválidas ou expiradas"
Ação: Verificar qual key foi copiada (anon vs service_role)
```

### Caso 3: Projeto Pausado
```
Projeto Supabase inativo (plano gratuito sem uso)

Etapa 1 ✅ → Etapa 2 ✅ → Etapa 3 ✅ → Etapa 4 ✅ → Etapa 5 ❌
Resultado: "Não foi possível conectar ao servidor"
Ação: Ativar projeto no dashboard do Supabase
```

### Caso 4: Tudo Certo
```
Configuração completa e correta

Etapa 1 ✅ → Etapa 2 ✅ → Etapa 3 ✅ → Etapa 4 ✅ → Etapa 5 ✅ → Etapa 6 ✅
Resultado: "Sistema pronto para uso!"
Ação: Pode sincronizar campos agora
```

---

## 📞 Suporte

Se mesmo com o diagnóstico detalhado você não conseguir conectar:

1. **Copie a mensagem de erro completa**
2. **Pressione F12** e copie também os erros do console
3. **Tire um screenshot** da tela
4. **Entre em contato** com: dev@converseia.com.br

Inclua:
- Mensagem de erro do diagnóstico
- Screenshot da tela
- Logs do console (F12)
- Qual etapa está falha ndo

---

**Última atualização**: Outubro 2025
