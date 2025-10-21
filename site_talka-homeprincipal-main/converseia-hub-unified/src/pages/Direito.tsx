import { Header } from '@/components/direito/header';
import { Hero } from '@/components/direito/hero';
import { Convertional } from '@/components/direito/convertional';
import { AnimatedSection } from '@/components/direito/animate-section';
import { Video } from '@/components/direito/video';
import { Depoiment } from '@/components/direito/depoiment';
import { TechnologyIncorporte } from '@/components/direito/TechnologyIncorporte';
import { Plans } from '@/components/direito/plans';
import { FormContact } from '@/components/direito/form-contact';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const LINK_CTA_WHATSAPP = "https://wa.me/5511999999999";
const LINK_FOR_INSTAGRAM = "https://instagram.com/converseia";
const LINK_FOR_LINKEDIN = "https://linkedin.com/company/converseia";
const LINK_NAVIGATE = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#recursos", label: "Recursos" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

const Direito = () => {
  useEffect(() => {
    // Cria widget e carrega SDK diretamente no body
    (function(e: Document) {
      const a = e.createElement('ra-chatbot-widget');
      a.id = 'ra_wc_chatbot';
      a.setAttribute('slug', 'qs0VjV3e8DoFLrakFnU8jdUHuSzVyp8q7W4SKBkN');
      e.body.appendChild(a);

      const r = e.createElement('script');
      r.id = 'ra_chatbot_' + Math.floor(200 * Math.random());
      r.defer = true;
      r.src = 'https://sitewidget.net/chatbot-sdk.js';
      e.body.appendChild(r);
    })(document);
  }, []);

  return (
    <>
      <Header />
      <main>
        <AnimatedSection id="inicio" className="max-w-6xl mx-auto">
          <Hero />
          <Convertional />
        </AnimatedSection>

        <AnimatedSection className="w-full h-screen bg-dark-primary py-24" id="sobre">
          <Video />
        </AnimatedSection>

        <AnimatedSection id="recursos" className="w-full max-w-7xl mx-auto scroll-mt-24">
          <Depoiment />
        </AnimatedSection>

        <AnimatedSection className="size-full bg-dark-primary py-24">
          <TechnologyIncorporte />
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 max-w-6xl mx-auto scroll-mt-24" id="planos">
          <Plans />
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 max-w-6xl mx-auto scroll-mt-24" id="contato">
          <FormContact />
        </AnimatedSection>

        <footer className="bg-dark-third flex items-center justify-center flex-col gap-4 py-4">
          <img src="/direito/elements/logo.png" alt="logo" className="h-12" />
          <ul className="flex gap-4 font-bold flex-wrap justify-center">
            {LINK_NAVIGATE.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-primary transition-all">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                Contato
              </a>
            </Button>
            <a href={LINK_FOR_LINKEDIN} target="_blank" rel="noreferrer">
              <img src="/direito/elements/linkedin.svg" alt="linkedin" className="size-8" />
            </a>
            <a href={LINK_FOR_INSTAGRAM} target="_blank" rel="noreferrer">
              <img src="/direito/elements/instagram.svg" alt="instagram" className="size-8" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Direito;
