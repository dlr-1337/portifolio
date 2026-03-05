import type { SiteContent } from "@/types/content";

export const siteContent: SiteContent = {
  person: {
    name: "Otavio Ribeiro",
    role: "Desenvolvedor Fullstack End-to-End",
    location: "Sao Paulo, Brasil",
    availability: "Disponivel para SaaS e startups com roadmap agressivo",
    tagline: "Do discovery ao deploy: backend, frontend e dados com foco em resultado.",
  },
  hero: {
    eyebrow: "Portfolio 2026",
    headline: "Desenvolvedor Fullstack End-to-End para SaaS e Startups",
    subheadline:
      "Planejo, construo e escalo produtos digitais cobrindo arquitetura, APIs Node.js, banco SQL, frontend em Next.js e deploy em producao.",
    primaryCtaLabel: "Falar no WhatsApp",
    secondaryCtaLabel: "Enviar email",
  },
  manifesto: {
    title: "Manifesto de Produto",
    paragraphs: [
      "Produto bom nasce quando backend, frontend e dados evoluem juntos. Eu trabalho ponta a ponta para evitar silos, reduzir retrabalho e acelerar entrega de valor.",
      "Minha abordagem fullstack combina arquitetura pragmatica, APIs bem definidas, modelagem SQL consistente e interface orientada a conversao para mover metricas reais de negocio.",
    ],
  },
  projects: {
    title: "Projetos em destaque",
    subtitle:
      "Cases fullstack para SaaS e startups, conectando produto, engenharia e crescimento.",
    labels: {
      context: "Contexto",
      solution: "Solucao",
      impact: "Impacto",
    },
    items: [
      {
        slug: "onboarding-e-cobranca-saas",
        title: "Plataforma SaaS de Onboarding e Cobranca",
        context:
          "Startup B2B com trial alto e ativacao baixa por fluxo fragmentado entre onboarding, billing e notificacoes.",
        solution:
          "Redesenhei a jornada ponta a ponta com backend Node.js, integracao Stripe, modelagem SQL e frontend Next.js com onboarding guiado por eventos.",
        impact:
          "A ativacao de trial para conta pagante subiu 34% e o tempo de implementacao de novas regras comerciais caiu 45%.",
        stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe API"],
        links: [
          { label: "Ver projeto", href: "https://example.com/saas-case" },
          { label: "Repositorio", href: "https://github.com/otavio/saas-case" },
        ],
      },
      {
        slug: "hub-automacao-comercial",
        title: "Hub de Automacao Comercial para Startup B2B",
        context:
          "Time comercial perdia oportunidades por processos manuais e falta de sincronizacao entre CRM, app e canais de contato.",
        solution:
          "Implementei backend de orquestracao com filas e webhooks, persistencia SQL e painel operacional em Next.js para controle de funis em tempo real.",
        impact:
          "Reducao de 52% em tarefas manuais do comercial e ganho de 27% na conversao de lead qualificado para demo.",
        stack: ["Next.js", "NestJS", "SQL", "Webhooks"],
        links: [
          { label: "Ver projeto", href: "https://example.com/edu-case" },
          { label: "Estudo completo", href: "https://example.com/edu-doc" },
        ],
      },
      {
        slug: "painel-operacional-realtime",
        title: "Painel Operacional com Integracoes em Tempo Real",
        context:
          "Operacao sem visibilidade consolidada de incidentes, SLAs e gargalos entre diferentes fontes de dados.",
        solution:
          "Estruturei pipelines de ingestao, consultas SQL otimizadas e API backend para alimentar interface reativa com alertas e acoes priorizadas.",
        impact:
          "Tempo medio de resposta a incidentes criticos caiu 38% e o cumprimento de SLA aumentou 21% no primeiro trimestre.",
        stack: ["React", "Node.js", "PostgreSQL", "Queues"],
        links: [
          { label: "Ver projeto", href: "https://example.com/ops-case" },
          { label: "Repositorio", href: "https://github.com/otavio/ops-case" },
        ],
      },
    ],
  },
  process: {
    title: "Processo Fullstack",
    timeline: [
      {
        stage: "01. Diagnostico de Produto",
        description:
          "Entendimento de metas de negocio, restricoes tecnicas e prioridade de impacto para SaaS em crescimento.",
      },
      {
        stage: "02. Arquitetura e Dados",
        description:
          "Definicao de contratos de API, modelagem SQL e estrategia de escalabilidade para evitar gargalos futuros.",
      },
      {
        stage: "03. Backend e Integracoes",
        description:
          "Implementacao de servicos, autenticao, filas, webhooks e observabilidade com codigo legivel e testavel.",
      },
      {
        stage: "04. Frontend, Deploy e Iteracao",
        description:
          "Entrega da experiencia em Next.js, deploy continuo e ciclos curtos de melhoria guiados por dados de uso.",
      },
    ],
  },
  contact: {
    title: "Vamos construir algo memoravel",
    description:
      "Se voce precisa de um fullstack para tirar produto SaaS do papel ou escalar uma base existente, eu posso assumir ponta a ponta.",
    highlight:
      "Escopo claro, entregas semanais e foco total em resultado de produto e negocio.",
    socialCtaLabel: "Tambem me encontre em:",
  },
  footer: {
    signature: "Otavio Ribeiro",
    rights: "Todos os direitos reservados.",
  },
  socialLinks: {
    whatsapp: "https://wa.me/5511999999999",
    email: "mailto:otavio.dev@exemplo.com",
    github: "https://github.com/otavio",
    linkedin: "https://www.linkedin.com/in/otavio",
  },
  socialLabels: {
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  seo: {
    title: "Otavio Ribeiro | Desenvolvedor Fullstack para SaaS",
    description:
      "Portfolio de desenvolvedor fullstack end-to-end para SaaS e startups com cases em Next.js, Node.js e SQL.",
    siteUrl: "https://otavioribeiro.dev",
    ogImage: "/og/portfolio-cover.svg",
    locale: "pt_BR",
    keywords: [
      "desenvolvedor fullstack",
      "fullstack saas",
      "next.js node.js sql",
      "engenheiro de produto",
      "startup b2b",
    ],
  },
};

export const absoluteUrl = (path: string) => {
  if (path.startsWith("http")) {
    return path;
  }

  const base = siteContent.seo.siteUrl.endsWith("/")
    ? siteContent.seo.siteUrl.slice(0, -1)
    : siteContent.seo.siteUrl;

  return `${base}${path}`;
};
