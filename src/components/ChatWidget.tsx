import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Verificar se o widget já existe
    const existingWidget = document.getElementById('ra_wc_chatbot');
    const existingScript = document.querySelector('script[src*="chatbot-sdk.js"]');
    
    // Se já existe, não adicionar novamente
    if (existingWidget || existingScript) {
      return;
    }

    // Criar e adicionar o widget
    const widget = document.createElement('ra-chatbot-widget');
    widget.id = 'ra_wc_chatbot';
    widget.setAttribute('slug', 'qs0VjV3e8DoFLrakFnU8jdUHuSzVyp8q7W4SKBkN');
    document.body.appendChild(widget);

    // Criar e adicionar o script
    const script = document.createElement('script');
    script.id = 'ra_chatbot_' + Math.floor(200 * Math.random());
    script.defer = true;
    script.src = 'https://sitewidget.net/chatbot-sdk.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup ao desmontar
    return () => {
      // Remover widget e script quando o componente desmontar
      const widgetElement = document.getElementById('ra_wc_chatbot');
      const scriptElement = document.querySelector('script[src*="chatbot-sdk.js"]');
      
      if (widgetElement) {
        widgetElement.remove();
      }
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return null; // Componente invisível, apenas injeta o widget
};

export default ChatWidget;
