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
  ExternalLink
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
  
  // Integration settings
  const [integrationConfig, setIntegrationConfig] = useState<IntegrationConfig>({
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL || "",
    supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    supabaseServiceKey: import.meta.env.VITE_SUPABASE_SERVICE_KEY || "",
    webhookN8nUrl: import.meta.env.VITE_WEBHOOK_N8N_URL || "",
    webhookCrmUrl: import.meta.env.VITE_WEBHOOK_CRM_URL || "",
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
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    Credenciais Supabase
                  </CardTitle>
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

                  <div className="pt-4">
                    <Button className="w-full">
                      <Save className="mr-2 h-4 w-4" />
                      Salvar Configurações do Supabase
                    </Button>
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
    </div>
  );
};

export default GerenciarFormularios;
