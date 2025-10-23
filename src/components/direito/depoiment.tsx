import { CardDepoiment } from './card-depoiment';

export const Depoiment = () => {
  return (
    <div className="flex flex-col gap-16 items-center mt-20 md:mt-40">
      <h2 className="text-4xl font-bold text-white text-center leading-tight">
        Descubra os <span className="text-secondary">Principais Recursos</span> da Nossa Plataforma
      </h2>

      <div className="grid base:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8 bg-dark-primary rounded-lg shadow-lg">
        <CardDepoiment
          icon="/icons/ia.png" // Caminho completo para o ícone
          name=""
          job="IA Conversacional Avançada"
          depoiment="
        Nossa plataforma garante um atendimento ágil e inteligente. Os áudios são transcritos automaticamente, e os agentes virtuais se comunicam com fluidez: 
		ouvem, falam, leem documentos e imagens, organizam e dividem mensagens conforme a necessidade. 
		Tudo isso enquanto capturam e preenchem automaticamente as principais informações da conversa, otimizando o tempo e melhorando a produtividade
          "
        />
        <CardDepoiment
          icon="/icons/multi.png" // Caminho completo para o ícone
          name=" "
          job="Multi Canais"
          depoiment="
            Conecte várias contas da mesma rede social – como múltiplos perfis do Instagram, Facebook, WhatsApp, Telegram, Twilio e outras – em um único lugar."
        />
        <CardDepoiment
          icon="/icons/smartflow.png" // Caminho completo para o ícone
          name=""
          job="Automações personalizadas"
          depoiment="
            Crie CHATBOTS, conversas personalizadas e automáticas com ações e condições lógicas para aumentar vendas e a satisfação do cliente."
        />
        <CardDepoiment
          icon="/icons/agendamento.png" // Caminho completo para o ícone
          name=""
          job="Agendamento automático"
          depoiment="
           Nossos agentes gerenciam a agenda dos advogados de forma automática e eficiente, 
		   agendando reuniões, enviando confirmações e programando lembretes para evitar faltas de leads e clientes, seja em reuniões ou até mesmo em audiências"
        />
		  <CardDepoiment
		  icon="/icons/integracoes.png" // Caminho completo para o ícone
          name=" "
          job="Principais Integrações"
          depoiment="
            Integrações diretas com o PJe, Asaas, ADVBOX e os principais CRMs do mercado, como Pipefy, Pipedrive, RD Station CRM, entre outros."
        />
		  <CardDepoiment
          icon="/icons/CRM.png" // Caminho completo para o ícone
          name=" "
          job="CRM Integrado"
          depoiment="
            Gerenciamento de relacionamento com o cliente (CRM) avançado, com visualização em quadro Kanban, que permite acompanhar cada etapa das negociações e garantir mais previsibilidade nos seus processos comerciais."
        />
      </div>
			<div className="flex base:flex-col md:flex-row items-center gap-8">
				<div className="flex-1 flex size-full">
					<img src="/elements/mobile-wrapper.png" alt="mobile-wrapper" />
				</div>

				<div className="flex flex-1 w-full flex-col gap-4 base:px-2 md:px-0">
					<h1 className="base:text-4xl md:text-6xl font-bold base:text-center md:text-left">
						O que é um <br /> Agente de IA?
					</h1>

					<div className="space-y-6 font-semibold  base:text-sm md:text-base">
						<p className="base:text-center md:text-left">
							É um funcionário de Inteligência Artificial personalizado, 
							como um "ChatGPT" adaptado exclusivamente para atender seus futuros
							e atuais clientes. Ele contém conteúdos específicos sobre
							seu escritório e sua atuação jurídica, garantindo disponibilidade
							24h por dia e resposta imediata.
						</p>

						<div className="flex items-center gap-2">
							<img src="/icons/user.svg" alt="icon-hammer" className="size-8" />{' '}
							<span className="leading-5 font-bold">
								Se comporta como um <br />
								especialista humano
							</span>
						</div>

						<p>
							Seu cliente terá uma experiência de atendimento humanizado,
							natural e fluida.
						</p>

						<div className="flex items-center gap-2">
							<img
								src="/icons/hammer.svg"
								alt="icon-hammer"
								className="size-8"
							/>
							<span className="leading-5 font-bold">
								Tenha mais tempo <br /> para gerir o seu negócio
							</span>
						</div>

						<p>
							Libere tempo hábil para focar
							na gestão do seu escritório, sem preocupações com 
							o atendimento.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
