export function getInitials(name: string): string {
	// Split the name into words
	const words = name.split(' ');
	// Get the first letter of each word, capitalize it, and join them
	const initials = words.map((word) => word[0].toUpperCase()).join('');
	return initials;
}

export const TITLE = "Agentes e Módulos Disponíveis";

export const CHARGES_AVALIABLE = [
	{
		title: 'Secretária',
		type: 'Agente',
		list: [
			'Compreende a demanda inicial',
			'Encaminha para o setor ou Agente de IA responsável',
			
		],
	},
	{
		title: 'SDR - Pré Vendedor(a)',
		type: 'Agente',
		list: [
			'Investiga a viabilidade do caso',
			'Entende a situação do potencial cliente',
			'Faz o processo de qualificação',
			'Convida e encaminha o cliente para o agendamento',
		],
	},
	{
		title: 'Suporte - Consulta de Processos',
		type: 'Agente',
		list: [
			'Faz a consulta de dados no PJE',
			'Retorna informações sobre o processo sem jurisdiquês',
			'Responde todas as dúvidas do cliente',
			'Acompanha a movimentação processual em tempo real',
			
		],
	},
	{
		title: 'Social Selling',
		type: 'Agente',
		list: [
			'Identifica a demanda',
			'Compreende a demanda inicial',
			'Encaminha para o setor ou Agente de IA responsável',
			'Recolhe o contato e faz contato ativo no whatsapp',
		],
	},
	{
		title: 'Agendamento Automático',
		type: 'Módulo',
		list: [
			'Agenda, cancela e remarcar reuniões',
			'Organiza a Agenda da Equipe',
		],
	},
	{
		title: 'Follow UP',
		type: 'Módulo',
		list: [
		'Envia lembretes automáticos para leads que ainda não responderam',
		'Realiza tentativas de retorno com abordagens personalizadas',
		'Retoma conversas pausadas de forma contextualizada',
		],
	},
];
export const PLANS_AVALIABLE = [
  {
    title: 'Escritório Essencial',
    monthlyPrice: 799, // Preço atualizado
    periods: [
      // Opção de 1 ano agora é a primeira (índice 0)
	{ months: 12, discount: 0.20, label: 'Anual', installments: 12 },
	{ months: 6, discount: 0.10, label: 'Semestral', installments: 6 },
	{ months: 1, discount: 0, label: 'Mensal', installments: 1 },
    ],
    list: [
      'Pacote/ plano com os seguintes recursos:',
      'Até 5 Usuários e 5 mil contatos',
      'Conexão a 3 canais de atendimento: whatsapp, instagram e faceboook',
      'Autônomia para criar chatbots',
      'Todos os recursos avançados da plataforma + CRM Jurídico',
      'Recursos',
    ],
  },
  {
    title: 'Escritório Avançado',
    monthlyPrice: 1190, // Preço atualizado
    periods: [
      // Opção de 1 ano agora é a primeira (índice 0)
      { months: 12, discount: 0.20, label: 'Anual', installments: 12 },
      { months: 6, discount: 0.10, label: 'Semestral', installments: 6 },
      { months: 1, discount: 0, label: 'Mensal', installments: 1 },
    ],
    list: [
      'Todos os recursos do plano - Escritório Essencial',
	  'Limite maior: até 10 Usuários e 10 mil contatos',
	  'Automação no whatsapp com os Agentes: Secretária, SDR e Agendamento automático', 
	  "Follow-UP's (FUP's) fluido - de acordo com o contexto de cada conversa",
      'Módulos de IA: Pesquisa de satisfação(NPS), Lembretes de reunião e audiência',
	  'Bônus de até 1.000 conversas / mês com seu Agente de IA',
    ],
    buttonText: 'CONTRATAR PLANO',
  },
  {
    title: 'Escritório Personalizado',
    price: 'A definir',
    list: [
      'Personalize o seu plano de acordo com a sua necessidade.',
    ],
  },
];

export const LINK_CTA_WHATSAPP =
	'https://wa.me/5581991656423?text=Gostaria+de+saber+mais+sobre+a+ConverseIA+Direito';

export const LINK_VIDEO =
	'https://res.cloudinary.com/djlmnni49/video/upload/v1744822684/p5v7xcegbarzgevauk54.mp4';

export const LINK_AFFILIATES = '#';

export const LINK_LOGIN = '#';

export const LINK_NAVIGATE = [
	{
		href: '#inicio',
		label: 'Início',
	},
	{
		href: '#sobre',
		label: 'Sobre',
	},
	{
		href: '#recursos',
		label: 'Recursos',
	},
	{
		href: '#planos',
		label: 'Planos',
	},
	{
		href: 'https://converseia.gitbook.io/converseia-docs', 
		label: 'Documentação',
	},
	{
		href: 'https://converseia-parceiros.vercel.app',
		label: 'Seja um Parceiro',
	},
];

export const LINK_FOR_LINKEDIN = 'https://www.linkedin.com/company/converseia-direito';

export const LINK_FOR_INSTAGRAM = 'https://www.instagram.com/converse.ia/';


