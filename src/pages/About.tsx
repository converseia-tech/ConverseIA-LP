import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Timeline } from "@/components/ui/timeline";
import {
  ScrollAnimation,
  ScrollScale,
  ScrollTranslateX,
  ScrollTranslateY,
  TeamCard
} from "@/components/ui/team-section";
import { Brain, MessageSquare, Sparkles, Target, Users, Rocket, CheckCircle2, Eye, Heart, Bot, Zap, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20ConverseIA";

const About = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-foreground dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lançamos nossas soluções especializadas: <strong>ConverseIA Direito</strong> para o setor jurídico e <strong>Conciarge</strong> para o setor de saúde.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
              alt="Setor de saúde digital"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80"
              alt="Direito e advocacia digital"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=80"
              alt="Chatbot e atendimento digital"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop&q=80"
              alt="Assistente virtual de saúde"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-foreground dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Fundação da <strong>ConverseIA</strong> com a missão de democratizar o acesso à Inteligência Artificial.
            Desenvolvemos nossa primeira plataforma de Agentes Autônomos, trazendo automação inteligente para empresas de todos os tamanhos.
          </p>
          <p className="text-foreground dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Criamos tecnologia que vai além dos chatbots tradicionais: nossos agentes interpretam contexto, tomam decisões e se integram
            perfeitamente aos sistemas existentes das empresas.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80"
              alt="Inteligência Artificial generativa"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80"
              alt="Agentes autônomos de IA"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
              alt="Time fundador ConverseIA"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80"
              alt="Desenvolvimento de plataforma"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Conquistas",
      content: (
        <div>
          <p className="text-foreground dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Principais marcos alcançados em nossa jornada de transformação digital
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-center text-foreground dark:text-neutral-300 text-xs md:text-sm">
              <CheckCircle2 className="h-4 w-4 text-purple-500" />
              +50 empresas atendidas com sucesso
            </div>
            <div className="flex gap-2 items-center text-foreground dark:text-neutral-300 text-xs md:text-sm">
              <CheckCircle2 className="h-4 w-4 text-purple-500" />
              +200 Agentes de IA implementados
            </div>
            <div className="flex gap-2 items-center text-foreground dark:text-neutral-300 text-xs md:text-sm">
              <CheckCircle2 className="h-4 w-4 text-purple-500" />
              95% de satisfação dos clientes
            </div>
            <div className="flex gap-2 items-center text-foreground dark:text-neutral-300 text-xs md:text-sm">
              <CheckCircle2 className="h-4 w-4 text-purple-500" />
              70% de redução em tempo de atendimento
            </div>
            <div className="flex gap-2 items-center text-foreground dark:text-neutral-300 text-xs md:text-sm">
              <CheckCircle2 className="h-4 w-4 text-purple-500" />
              Disponibilidade 24/7 para todos os clientes
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
              alt="Crescimento e métricas"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
              alt="Analytics e dashboards"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
              alt="Cliente satisfeito"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80"
              alt="Equipe celebrando resultados"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  const teamMembers = [
    {
      avatar: "/Fotos_equipe/Erico_Henrique-Sócio_Fundador.JPG",
      name: "Erico Henrique",
      role: "Sócio Fundador",
    },
    {
      avatar: "/Fotos_equipe/Victor_Medeiros-Sócio_Fundador.png",
      name: "Victor Medeiros",
      role: "Sócio Fundador",
    },
    {
      avatar: "/Fotos_equipe/Luca_Aguiar-Desenvolvedor_RPA.JPG",
      name: "Luca Aguiar",
      role: "Desenvolvedor RPA",
    },
    {
      avatar: "/Fotos_equipe/Thiago-Desenvolvedor_BI.JPG",
      name: "Thiago",
      role: "Desenvolvedor BI",
    },
    {
      avatar: "/Fotos_equipe/Eliel-Desenvolvedor_Integracoes.JPG",
      name: "Eliel",
      role: "Desenvolvedor Integrações",
    },
    {
      avatar: "/Fotos_equipe/Emanuel-Desenvolvedor_Suporte.JPG",
      name: "Emanuel",
      role: "Desenvolvedor Suporte",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 opacity-100">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight opacity-100">
                <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent opacity-100">
                  Nossa Jornada de Transformação Digital
                </span>
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 mx-auto rounded-full mb-8 opacity-100"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed opacity-100">
                Descubra como evoluímos para nos tornar referência em automação e inteligência artificial.
              </p>
            </div>
          </div>
        </section>

        {/* About ConverseIA Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Quem é a <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">ConverseIA</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed text-justify">
                Somos uma empresa especializada em desenvolver <strong>Agentes de Inteligência Artificial autônomos</strong> que funcionam como verdadeiros membros da sua equipe.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed text-justify">
                Nossa missão é democratizar o acesso à IA de ponta, permitindo que empresas de todos os tamanhos automatizem processos complexos, melhorem o atendimento ao cliente e aumentem sua eficiência operacional.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
                Com expertise em integração com sistemas existentes e um time de especialistas dedicado, transformamos desafios em oportunidades de crescimento através da tecnologia.
              </p>
              <Button
                onClick={() => {
                  const timeline = document.getElementById('timeline');
                  if (timeline) timeline.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Conheça nossa história
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <div id="timeline">
          <Timeline data={timelineData} />
        </div>

        {/* Team Section */}
        <section className="py-20 overflow-hidden">
          <ScrollAnimation>
            <ScrollTranslateY>
              <ScrollScale
                inputRange={[0, 0.5]}
                scaleRange={[1.4, 1]}
                className="w-10/12 flex flex-col justify-center text-center items-center mx-auto origin-center py-12"
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold">
                  Equipe de <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">especialistas</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
                  Profissionais apaixonados por tecnologia e inovação, dedicados a transformar negócios através da IA
                </p>
              </ScrollScale>
              <div className="w-full">
                <ScrollTranslateX
                  inputRange={[0.4, 0.9]}
                  xRange={['100%', '-50%']}
                  className="flex flex-nowrap gap-4 px-4"
                >
                  {teamMembers.map((member, index) => (
                    <TeamCard
                      className="min-w-[48vw] md:min-w-[20vw] bg-card border border-border rounded-xl overflow-hidden"
                      key={index}
                      member={member}
                    />
                  ))}
                </ScrollTranslateX>
              </div>
            </ScrollTranslateY >
          </ScrollAnimation >
        </section >


      </main >
      <Footer />
    </div >
  );
};

export default About;