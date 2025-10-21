import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    phone: "",
    challenge: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve para discutir como podemos ajudar sua empresa.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      position: "",
      phone: "",
      challenge: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Vamos construir o <span className="gradient-text">futuro</span> da sua empresa, <span className="gradient-text">juntos</span>
            </h1>
            <p className="text-xl text-corporate-lg">
              Preencha o formulário abaixo ou entre em contato por um dos nossos canais. 
              Nossa equipe de especialistas está pronta para entender seu desafio e desenhar uma solução.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">Fale com nossos especialistas</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Corporativo *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="email@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-foreground">Empresa *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="position" className="text-foreground">Seu Cargo</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Diretor, Gerente, etc."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="challenge" className="text-foreground">Qual seu principal desafio? *</Label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-32"
                    placeholder="Descreva brevemente o principal desafio que sua empresa enfrenta e como acredita que a automação ou IA pode ajudar..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-talka rounded-xl">
                      <Mail className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Email</p>
                      <a 
                        href="mailto:contato@talka.com.br" 
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        contato@talka.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-talka rounded-xl">
                      <Linkedin className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/company/talka" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        linkedin.com/company/talka
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Próximos Passos</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-talka rounded-full flex items-center justify-center text-foreground font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold">Análise do Desafio</h4>
                      <p className="text-muted-foreground text-sm">Entendemos profundamente sua operação e identificamos oportunidades.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-talka rounded-full flex items-center justify-center text-foreground font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold">Proposta Personalizada</h4>
                      <p className="text-muted-foreground text-sm">Criamos uma solução específica para seus objetivos e orçamento.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-talka rounded-full flex items-center justify-center text-foreground font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold">Implementação</h4>
                      <p className="text-muted-foreground text-sm">Executamos o projeto com acompanhamento próximo e resultados mensuráveis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;