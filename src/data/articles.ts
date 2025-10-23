export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  category: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "agentes-ia-nova-economia",
    title: "O Futuro é Autônomo: O Papel dos Agentes de IA na Nova Economia Digital",
    excerpt: "Explore como os agentes autônomos de IA estão redefinindo a automação empresarial e criando novas possibilidades.",
    content: `O futuro é autônomo. Explore o papel dos agentes de IA na nova economia digital...`,
    readTime: "8 min",
    date: "15 Jan 2025",
    category: "Inteligência Artificial",
    featured: true
  },
  {
    id: "automacao-vendas",
    title: "Processo Comercial 5.0: Como a Automação Inteligente está Redefinindo as Vendas",
    excerpt: "Descubra as estratégias que estão transformando o funil de vendas através da inteligência artificial.",
    content: `A evolução do processo comercial chegou à versão 5.0...`,
    readTime: "6 min",
    date: "22 Jan 2025",
    category: "Vendas & Marketing"
  },
  {
    id: "case-40-aumento-conversao",
    title: "Estudo de Caso: Aumento de 40% na Conversão com Agentes de IA",
    excerpt: "Como um escritório de advocacia triplicou sua capacidade de atendimento mantendo a mesma equipe.",
    content: `Um escritório de advocacia alcançou 40% de aumento na conversão com agentes de IA...`,
    readTime: "12 min",
    date: "10 Jan 2025",
    category: "Casos de Sucesso"
  },
  {
    id: "roi-automacao-ia",
    title: "ROI em Automação: Como Calcular o Retorno Real de Investimentos em IA",
    excerpt: "Metodologia completa para medir e provar o valor de projetos de inteligência artificial.",
    content: `ROI em Automação: aprenda a calcular o retorno real de investimentos em IA...`,
    readTime: "10 min",
    date: "28 Dez 2024",
    category: "ROI & Métricas"
  },
  {
    id: "etica-ia-empresarial",
    title: "Ética em IA: Navegando Transparência, Privacidade e Responsabilidade",
    excerpt: "Como implementar inteligência artificial de forma ética, transparente e em compliance com LGPD.",
    content: `Ética em IA: navegue transparência, privacidade e responsabilidade no mundo empresarial...`,
    readTime: "7 min",
    date: "15 Dez 2024",
    category: "Ética & Compliance"
  },
  {
    id: "evolucao-atendimento-cliente",
    title: "A Evolução do Atendimento ao Cliente: De Call Centers a Agentes Cognitivos",
    excerpt: "Uma jornada histórica de como chegamos aos agentes de IA autônomos e o que vem a seguir.",
    content: `Acompanhe a evolução do atendimento ao cliente desde call centers até agentes cognitivos...`,
    readTime: "9 min",
    date: "02 Dez 2024",
    category: "Customer Experience"
  }
];
