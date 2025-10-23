// src/app.tsx
'use client';

import { useEffect } from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Convertional } from './components/convertional';
import { AnimatedSection } from './components/animate-section';
import { Video } from './components/video';
import { Depoiment } from './components/depoiment';
import { TechnologyIncorporte } from './components/TechnologyIncorporte';
import { Plans } from './components/plans';
import { FormContact } from './components/form-contact';
import { Button } from './components/ui/button';

import {
  LINK_CTA_WHATSAPP,
  LINK_FOR_INSTAGRAM,
  LINK_FOR_LINKEDIN,
  LINK_NAVIGATE,
} from './lib/constants';

export default function App() {
  useEffect(() => {
    // Cria widget e carrega SDK diretamente no body para garantir execução
    (function(e: Document) {
      const a = e.createElement('ra-chatbot-widget');
      a.id = 'ra_wc_chatbot';
      a.setAttribute('slug', 'qs0VjV3e8DoFLrakFnU8jdUHuSzVyp8q7W4SKBkN');
      e.body.appendChild(a);

      const r = e.createElement('script');
      r.id = 'ra_chatbot_' + Math.floor(200 * Math.random());
      r.defer = true;
      r.src = 'https://sitewidget.net/chatbot-sdk.js';
      r.onload = () => {
        // SDK carregado: pop deve aparecer
      };
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
          <img src="/elements/logo.png" alt="logo" className="h-12" />
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
              <img src="/elements/linkedin.svg" alt="linkedin" className="size-8" />
            </a>
            <a href={LINK_FOR_INSTAGRAM} target="_blank" rel="noreferrer">
              <img src="/elements/instagram.svg" alt="instagram" className="size-8" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
