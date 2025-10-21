import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen bg-hub-dark">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-hub-primary to-hub-accent bg-clip-text text-transparent">
                  Entre em Contato
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Fale com nossos especialistas e descubra como podemos transformar seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulário */}
              <div className="bg-hub-darker border border-hub-primary/30 rounded-2xl p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Nome Completo</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      className="mt-2 bg-hub-dark border-hub-primary/30 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="mt-2 bg-hub-dark border-hub-primary/30 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="mt-2 bg-hub-dark border-hub-primary/30 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest" className="text-white">Área de Interesse</Label>
                    <Select>
                      <SelectTrigger className="mt-2 bg-hub-dark border-hub-primary/30 text-white">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hub">ConverseIA Hub Innovation</SelectItem>
                        <SelectItem value="conciarge">ConverseIA Conciarge (Saúde)</SelectItem>
                        <SelectItem value="direito">ConverseIA Direito</SelectItem>
                        <SelectItem value="parceria">Parcerias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      className="mt-2 bg-hub-dark border-hub-primary/30 text-white"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-hub-primary hover:bg-hub-secondary">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* Informações de Contato */}
              <div className="space-y-8">
                <div className="bg-hub-darker border border-hub-primary/30 rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Informações de Contato
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-hub-primary mt-1" />
                      <div>
                        <p className="text-white font-medium">E-mail</p>
                        <p className="text-white/60">contato@converseia.com.br</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-hub-primary mt-1" />
                      <div>
                        <p className="text-white font-medium">Telefone</p>
                        <p className="text-white/60">(11) 99999-9999</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-hub-primary mt-1" />
                      <div>
                        <p className="text-white font-medium">Endereço</p>
                        <p className="text-white/60">
                          Av. Eng. Domingos Ferreira, 4023 - Sl 1004<br />
                          Recife, PE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-hub-primary/10 to-hub-accent/10 border border-hub-primary/30 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Horário de Atendimento
                  </h3>
                  <p className="text-white/70">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
