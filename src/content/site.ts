import type { SiteContent } from "@/types/content";

export const siteContent: SiteContent = {
  person: {
    name: "Otavio Queiroz",
    role: "Desenvolvedor Full Stack Senior / Software Engineer",
    location: "GO - Brasil (Remoto)",
    availability: "Aberto a novos desafios / Full-time",
    tagline:
      "Arquitetando solucoes escalaveis e transformando problemas complexos em produtos de alto impacto.",
  },
  hero: {
    eyebrow: "Portfolio 2026",
    headline: "Desenvolvedor Full Stack Senior para produtos digitais de alto impacto",
    subheadline:
      "Projeto, construo e evoluo aplicacoes web do discovery ao deploy com foco em performance, experiencia de usuario e resultado de negocio.",
    primaryCtaLabel: "Falar no WhatsApp",
    secondaryCtaLabel: "Enviar email",
  },
  manifesto: {
    title: "Manifesto de Engenharia",
    paragraphs: [
      "Acredito em engenharia orientada a impacto: arquitetura clara, codigo sustentavel e decisoes tecnicas alinhadas ao objetivo do produto.",
      "Minha abordagem full stack conecta backend, frontend e dados para acelerar entregas com qualidade, sem abrir mao de escalabilidade e experiencia do usuario.",
    ],
  },
  projects: {
    title: "Projetos em destaque",
    subtitle:
      "Produtos desenvolvidos do zero com foco em usabilidade, performance e evolucao continua.",
    labels: {
      context: "Contexto",
      solution: "Solucao",
      impact: "Impacto",
    },
    items: [
      {
        slug: "taskflow-kanban",
        title: "TaskFlow - Gerenciador de Tarefas Kanban",
        context:
          "Equipes pequenas e freelancers precisavam de uma ferramenta agil para organizar fluxos de trabalho diarios sem a complexidade de plataformas maiores.",
        solution:
          "Desenvolvimento de uma aplicacao web completa com autenticacao, criacao de quadros personalizaveis e drag-and-drop para movimentar tarefas entre colunas com fluidez.",
        impact:
          "Entrega de uma interface intuitiva e responsiva com API RESTful eficiente, garantindo persistencia imediata e evitando perda de informacoes durante o uso.",
        stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
        links: [
          { label: "Live Demo", href: "https://taskflow.otavioqueiroz.dev" },
          { label: "Repositorio", href: "https://github.com/dlr-1337/taskflow-kanban" },
        ],
      },
      {
        slug: "imobifinder-catalogo",
        title: "ImobiFinder - Catalogo de Imoveis Inteligente",
        context:
          "Usuarios enfrentavam plataformas lentas e filtros limitados para encontrar imoveis, enquanto corretores precisavam de um painel simples para cadastro de propriedades.",
        solution:
          "Criacao de uma plataforma com busca avancada por preco, localizacao e quartos, integrada a mapas, alem de painel administrativo seguro para gestao do catalogo e upload otimizado de imagens.",
        impact:
          "Melhora no tempo de carregamento com lazy loading de imagens, ganho de SEO tecnico e experiencia de busca mais rapida para o usuario final.",
        stack: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Mapbox API"],
        links: [
          { label: "Ver Projeto", href: "https://imobifinder.otavioqueiroz.dev" },
          { label: "Repositorio", href: "https://github.com/dlr-1337/imobi-finder" },
        ],
      },
      {
        slug: "wallettrack-dashboard",
        title: "WalletTrack - Dashboard de Financas Pessoais",
        context:
          "Pessoas fisicas tinham dificuldade para visualizar para onde o dinheiro estava indo ao longo dos meses com planilhas estaticas e controles manuais.",
        solution:
          "Construcao de um painel financeiro interativo para gerenciar receitas e despesas, com relatorios visuais automaticos por categoria e calculo do balanco mensal.",
        impact:
          "Implementacao de ciclo de vida completo de usuario com cadastro, login e recuperacao de senha, gerando visualizacao clara dos dados e apoio a educacao financeira.",
        stack: ["React", "Firebase Auth", "Firebase Firestore", "Chart.js"],
        links: [
          { label: "Ver Projeto", href: "https://wallettrack.otavioqueiroz.dev" },
          { label: "Repositorio", href: "https://github.com/dlr-1337/wallet-track" },
        ],
      },
    ],
  },
  process: {
    title: "Processo de Entrega",
    timeline: [
      {
        stage: "01. Descoberta e Planejamento",
        description:
          "Mapeamento de objetivos, regras de negocio e requisitos tecnicos para definir um escopo viavel e orientado a resultado.",
      },
      {
        stage: "02. Arquitetura e Implementacao",
        description:
          "Estruturacao de backend, banco de dados e frontend com foco em manutenibilidade, performance e escalabilidade.",
      },
      {
        stage: "03. Qualidade e Integracoes",
        description:
          "Aplicacao de boas praticas de teste, observabilidade e integracoes com servicos externos para garantir confiabilidade.",
      },
      {
        stage: "04. Deploy e Evolucao Continua",
        description:
          "Publicacao em producao com monitoramento ativo e ciclos iterativos de melhoria baseados em dados reais de uso.",
      },
    ],
  },
  contact: {
    title: "Vamos construir o proximo produto?",
    description:
      "Se voce busca um engenheiro full stack para transformar uma ideia em produto escalavel ou evoluir uma solucao existente, posso assumir do planejamento a entrega.",
    highlight:
      "Escopo claro, execucao consistente e foco em impacto real para negocio e usuario.",
    socialCtaLabel: "Tambem me encontre em:",
  },
  footer: {
    signature: "Otavio Queiroz",
    rights: "Todos os direitos reservados.",
  },
  socialLinks: {
    whatsapp: "https://wa.me/556493012485",
    email: "mailto:contato@otavioqueiroz.com",
    github: "https://github.com/dlr-1337",
    linkedin: "https://linkedin.com/in/otavioqueiroz",
  },
  socialLabels: {
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  seo: {
    title: "Otavio Queiroz | Desenvolvedor Full Stack Senior",
    description:
      "Portfolio de Otavio Queiroz com projetos full stack em React, Next.js, Node.js e arquitetura de software orientada a impacto.",
    siteUrl: "https://otavioqueiroz.com",
    ogImage: "/og/portfolio-cover.svg",
    locale: "pt_BR",
    keywords: [
      "desenvolvedor full stack senior",
      "software engineer brasil",
      "react node.js",
      "next.js typescript",
      "portfolio desenvolvedor",
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
