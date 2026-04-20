import type { SiteContent } from "@/types/content";

export const siteContent: SiteContent = {
  person: {
    name: "Otávio Queiroz",
    role: "Desenvolvedor Full Stack Sênior",
    location: "GO - Brasil | Remoto",
    availability: "Projetos selecionados e consultoria técnica",
    tagline:
      "Full stack sênior para sistemas, integrações, automações, IA aplicada e operação digital ponta a ponta.",
  },
  hero: {
    eyebrow: "Sistema operacional de entrega",
    badge: "Disponível para projetos selecionados | resposta em até 24h",
    headline: "Assumo a engenharia",
    highlight: "sem caos",
    accentWord: "&",
    closingLine: "com entrega no prazo.",
    subheadline:
      "Eu entro em cenários complexos, organizo a parte técnica e entrego sistemas, integrações, automações, IA, deploy e evolução com visão prática de negócio.",
    primaryCtaLabel: "Pedir orçamento no WhatsApp",
    secondaryCtaLabel: "Enviar e-mail",
    stickers: [
      {
        text: "deploy validado",
        tone: "accent",
      },
      {
        text: "produto + integrações + IA",
        tone: "moss",
      },
    ],
    previewFile: "otavio.delivery - terminal",
    terminalPreview: [
      {
        prompt: "~",
        command: "whoami",
      },
      {
        output: "otavio | full stack sênior para negócio",
      },
      {
        prompt: "~",
        command: "cat scope.json",
      },
      {
        output: "{",
      },
      {
        output: '"sistemas": ["web", "dashboards", "saas"],',
        indentLevel: 1,
      },
      {
        output: '"integracoes": ["apis", "webhooks", "whatsapp"],',
        indentLevel: 1,
      },
      {
        output: '"ia": ["agentes", "Gemini", "DeepSeek"],',
        indentLevel: 1,
      },
      {
        output: '"deploy": ["vps", "docker", "vercel"]',
        indentLevel: 1,
      },
      {
        output: "}",
      },
      {
        prompt: "~",
        command: "status",
      },
      {
        output: "• engenharia clara | execução ponta a ponta",
        outputTone: "ok",
      },
      {
        prompt: "~",
        cursor: true,
      },
    ],
  },
  marqueeItems: [
    "Sistemas web",
    "SaaS sob medida",
    "Integrações & APIs",
    "WhatsApp",
    "IA aplicada",
    "Dashboards operacionais",
    "Deploy",
    "VPS & Docker",
    "Automações",
    "Back-end forte",
  ],
  proof: {
    title: "O que os clientes dizem depois da entrega",
    intro:
      "A confiança aqui vem de entrega resolvida. Menos exibição de números, mais contexto real sobre clareza, velocidade e capacidade de organizar cenários complexos.",
    testimonials: [
      {
        title: "Rapidez com segurança técnica",
        quote:
          "A entrega andou rápido sem virar gambiarra. O ambiente ficou funcional, estável e com uma base que fazia sentido para operar depois.",
        author: "Cliente de integração",
        role: "Entrega com VPS, IA e mensageria",
        avatarLabel: "IA",
        rating: 5,
      },
      {
        title: "Comunicação clara durante a execução",
        quote:
          "As respostas foram objetivas, o escopo ficou claro e sempre existia um próximo passo concreto. Isso reduz muito atrito para quem está contratando.",
        author: "Cliente de produto",
        role: "Projeto sob demanda com entrega ponta a ponta",
        avatarLabel: "PD",
        rating: 5,
      },
      {
        title: "Capacidade de assumir cenários complexos",
        quote:
          "Os projetos mais fortes envolvem stack mista, deploy, integrações sensíveis, IA aplicada e operação real. O diferencial está em organizar tudo isso com critério.",
        author: "Curadoria técnica",
        role: "Leitura consolidada de projetos selecionados",
        avatarLabel: "OP",
        rating: 5,
      },
    ],
  },
  serviceLines: {
    title: "Estrutura completa para produto e operação",
    intro:
      "O problema do cliente vem primeiro. A stack entra como ferramenta para estruturar, integrar, estabilizar e fazer a operação rodar sem gargalo técnico.",
    items: [
      {
        label: "sistemas",
        title: "Sistemas Web & SaaS",
        description:
          "Planejo e construo produtos web, painéis administrativos, áreas operacionais e MVPs que precisam nascer com estrutura para evoluir.",
        signals: [
          "Arquitetura de aplicação",
          "Fluxos internos e área administrativa",
          "Back-office e operação diária",
        ],
      },
      {
        label: "integracoes",
        title: "Integrações & APIs",
        description:
          "Conecto plataformas, estruturo regras de negócio entre sistemas e transformo APIs, webhooks e serviços externos em fluxo confiável.",
        signals: [
          "APIs REST e webhooks",
          "Conectores entre serviços",
          "Sincronização e consistência",
        ],
      },
      {
        label: "automacoes",
        title: "Automações & IA Aplicada",
        description:
          "Desenho fluxos que reduzem operação manual, integram IA de forma útil e colocam tarefas repetitivas para rodar com controle.",
        signals: [
          "Bots e fluxos assistidos",
          "WhatsApp, LLMs e agentes",
          "Automação com supervisão real",
        ],
      },
      {
        label: "infra",
        title: "Estabilização, Deploy & Evolução",
        description:
          "Entro em ambientes travados para corrigir gargalos, estabilizar infraestrutura, reorganizar a execução e preparar a próxima fase do produto.",
        signals: [
          "VPS, Docker e cloud",
          "Melhoria de confiabilidade",
          "Hardening técnico e deploy",
        ],
      },
    ],
  },
  capabilityClusters: {
    items: [
      {
        label: "backend",
        title: "Back-end, arquitetura e dados",
        description:
          "Baseio cada entrega em modelagem de dados, APIs consistentes, isolamento de responsabilidades e evolução sem improviso.",
        items: [
          "Node.js, TypeScript e Python",
          "PostgreSQL, SQLite e modelagem operacional",
          "Camadas de domínio, workers e serviços",
        ],
      },
      {
        label: "ia",
        title: "Integrações, automação e IA",
        description:
          "Conecto provedores, mensageria e ferramentas externas com foco em processo real, não em demo bonita.",
        items: [
          "WhatsApp, webhooks e APIs de terceiros",
          "LLMs, Gemini, DeepSeek e fluxos assistidos",
          "Automações com auditoria e controle",
        ],
      },
      {
        label: "frontend",
        title: "Interfaces, dashboards e operação",
        description:
          "Entrego interfaces que ajudam a operar, decidir e acompanhar o produto com clareza para usuário e negócio.",
        items: [
          "Next.js, React e painéis administrativos",
          "Landing pages com função comercial clara",
          "Experiências responsivas e orientadas à conversão",
        ],
      },
    ],
  },
  featuredCases: {
    title: "Alguns trabalhos recentes",
    intro:
      "A curadoria abaixo prioriza projetos que mostram capacidade de assumir problemas reais, organizar a solução técnica e entregar com impacto operacional.",
    items: [
      {
        slug: "cobrazap",
        title: "CobraZap",
        source: "produto / GitHub público",
        visibility: "public",
        problem:
          "Pequenos negócios precisavam cobrar recorrências por WhatsApp e Pix sem depender de planilhas, follow-up manual ou de um ERP pesado demais.",
        solution:
          "Estruturei um micro-SaaS B2B multi-tenant com cobranças recorrentes, fluxo operacional em apps e pacotes separados, regras de negócio, billing e trilha de evolução técnica.",
        outcome:
          "A base ficou preparada para onboarding, configuração operacional, cobrança recorrente, integrações, filas e crescimento por módulos.",
        businessValue:
          "Reforça a capacidade de pensar produto, arquitetura, operação financeira e execução ponta a ponta em um contexto de negócio real.",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Pix", "WhatsApp"],
        evidence: [
          "Monorepo com apps web, API e worker, além de camadas de domínio e integrações.",
          "Escopo orientado a multi-tenant, auditoria, automação e operação diária.",
        ],
        links: [
          {
            label: "Repositório",
            href: "https://github.com/dlr-1337/cobranca-whatsapp-pix",
          },
        ],
        visualVariant: "studio",
      },
      {
        slug: "tempmail",
        title: "tempmail",
        source: "engenharia / GitHub público",
        visibility: "public",
        problem:
          "Criar um serviço self-hosted de e-mail descartável com operação pública, recepção SMTP, controle de abuso e leitura em tempo real.",
        solution:
          "Implementei um back-end completo com Fastify, servidor SMTP, persistência em SQLite, sweeper de expiração, streaming SSE e interface web dedicada.",
        outcome:
          "O projeto ficou com composição de produção, proteções operacionais, armazenamento de anexos e fronteira clara entre transporte, core e UI.",
        businessValue:
          "Mostra profundidade em back-end, protocolos, segurança básica de operação e desenho de sistema com várias responsabilidades integradas.",
        stack: ["Fastify", "TypeScript", "SMTP", "SQLite", "SSE", "Svelte"],
        evidence: [
          "Composition root de produção com shutdown gracioso, validação de ambiente e monitoramento de estado.",
          "Separação entre HTTP, SMTP, core, armazenamento e camada web.",
        ],
        links: [
          {
            label: "Repositório",
            href: "https://github.com/dlr-1337/tempmail",
          },
        ],
        visualVariant: "code",
      },
      {
        slug: "deploy-ia-whatsapp-vps",
        title: "Deploy de IA + WhatsApp em VPS",
        source: "operação remota",
        visibility: "public",
        problem:
          "O cliente precisava colocar um agente de IA rodando em VPS com ponte para WhatsApp, modelos externos e ambiente estável, tudo sob prazo curto.",
        solution:
          "Assumi a configuração do ambiente, a integração com provedores de IA, a ponte com WhatsApp e a validação do fluxo real em produção.",
        outcome:
          "O ambiente ficou funcional, com fluxo operacional pronto, deploy consistente e base confiável para continuar operando sem improviso.",
        businessValue:
          "Evidencia capacidade de atuar em IA aplicada, deploy, Linux, integrações sensíveis e estabilização de stack complexa em contexto real.",
        stack: ["Linux", "Docker", "VPS", "OpenClaw", "DeepSeek", "WhatsApp"],
        evidence: [
          "Entrega orientada à arquitetura de agentes, ambiente remoto real e validação ponta a ponta do fluxo.",
          "Projeto com exigência técnica alta em infraestrutura, integração e operação sob pressão de prazo.",
        ],
        links: [],
        visualVariant: "terminal",
      },
      {
        slug: "portal-arca-viva",
        title: "PortalArcaViva",
        source: "projeto privado",
        visibility: "private",
        problem:
          "Era preciso unir uma landing page comercial, dois fluxos de chatbot com IA, contato real por e-mail e um painel administrativo privado de galeria para atualização sem equipe técnica.",
        solution:
          "Estruturei uma base com landing page, endpoints de chat em streaming, integração com Gemini e Resend, galeria dinâmica, autenticação administrativa e operação na Vercel.",
        outcome:
          "O projeto reuniu experiência comercial, IA aplicada, administração privada e fluxo de contato funcional em uma única base pronta para evoluir.",
        businessValue:
          "Mostra capacidade de integrar front-end, back-end leve, mensageria, administração interna e manutenção de conteúdo em um produto orientado à experiência.",
        stack: ["TypeScript", "Gemini API", "Resend", "Vercel Blob", "Admin Panel"],
        evidence: [
          "Landing com PT/EN, múltiplos chat flows, contato funcional e painel de galeria protegido.",
          "Projeto privado nomeado pelo valor de repertório, sem exposição estrutural em schema ou links inline.",
        ],
        links: [],
        visualVariant: "window",
      },
    ],
  },
  githubShowcase: {
    title: "GitHub selecionado",
    intro:
      "Alguns repositórios reforçam repertório de arquitetura, automação, produto operacional e stack real além dos projetos principais.",
    items: [
      {
        name: "quotex-trading-platform",
        label: "private / fastapi + next",
        visibility: "private",
        summary:
          "Plataforma modular de trading com FastAPI, bot Telegram, painel admin, Postgres, Redis, migrations e deploy em VPS.",
      },
      {
        name: "fullauto99",
        label: "private / monorepo operacional",
        visibility: "private",
        summary:
          "Monorepo com Next.js, Prisma, worker e configuração operacional para automação de prospecção e monitoramento de conectores.",
      },
      {
        name: "flashradar.trade",
        label: "public / painel local",
        visibility: "public",
        summary:
          "Painel local multiusuário em PHP para odds e operação manual, com runtime embutido para Windows e uso sem instalação.",
      },
    ],
  },
  process: {
    title: "Sem surpresa, sem enrolação",
    intro:
      "Meu processo foi moldado para entrar em contexto rápido, reduzir ambiguidade e transformar problema técnico em execução previsível do primeiro contato ao deploy.",
    stages: [
      {
        title: "Diagnóstico",
        description:
          "Entendo a operação, identifico gargalos, dependências e risco técnico antes de sair construindo qualquer coisa.",
        outcome: "Clareza sobre o que precisa ser resolvido e em que ordem.",
        paceLabel: "30-60 min | alinhamento inicial",
      },
      {
        title: "Arquitetura",
        description:
          "Defino a estrutura mais adequada para o caso: componentes, serviços, integrações, dados e caminhos de evolução.",
        outcome: "Decisões técnicas coerentes com negócio, prazo e manutenção.",
        paceLabel: "escopo claro | proposta objetiva",
      },
      {
        title: "Execução",
        description:
          "Implemento com foco em entrega real: back-end, front-end, integrações, automações, testes e fechamento de pontas.",
        outcome: "Sistema funcional, escopo controlado e comunicação objetiva.",
        paceLabel: "sprints semanais | visibilidade constante",
      },
      {
        title: "Estabilização",
        description:
          "Valido o ambiente, ajusto detalhes operacionais, documento o necessário e preparo o produto para rodar e evoluir.",
        outcome: "Mais confiança para operar hoje e evoluir amanhã.",
        paceLabel: "deploy, suporte inicial e próximo passo",
      },
    ],
  },
  closingCta: {
    title: "Vamos construir alguma coisa?",
    description:
      "Me conte o contexto, o prazo e onde a parte técnica está travando. Posso estruturar do zero, destravar uma entrega travada ou assumir a operação que precisa de mais critério.",
    highlight:
      "Escopo claro, prioridade certa e execução ponta a ponta com visão prática de negócio.",
    primaryCtaLabel: "Pedir orçamento agora",
    secondaryCtaLabel: "Enviar e-mail",
  },
  contactCards: [
    {
      label: "whatsapp | preferido",
      value: "+55 64 9331-5577",
      href: "https://wa.me/556493315577",
    },
    {
      label: "email",
      value: "contato@otavioqueiroz.com",
      href: "mailto:contato@otavioqueiroz.com",
    },
    {
      label: "github",
      value: "@dlr-1337",
      href: "https://github.com/dlr-1337",
    },
    {
      label: "linkedin",
      value: "/in/otavioqueiroz",
      href: "https://linkedin.com/in/otavioqueiroz",
    },
  ],
  footer: {
    signature: "Otávio Queiroz | Desenvolvedor Full Stack Sênior",
    rights: "Todos os direitos reservados.",
    note: "GitHub e LinkedIn disponíveis como referência pública de repertório e entrega.",
  },
  socialLinks: {
    whatsapp: "https://wa.me/556493315577",
    email: "mailto:contato@otavioqueiroz.com",
    github: "https://github.com/dlr-1337",
    linkedin: "https://linkedin.com/in/otavioqueiroz",
  },
  socialLabels: {
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  seo: {
    title: "Otávio Queiroz | Full Stack Sênior para sistemas, integrações, automações e IA",
    description:
      "Otávio Queiroz atua como full stack sênior em sistemas web, integrações, automações, IA aplicada, WhatsApp, deploy e operação técnica ponta a ponta.",
    siteUrl: "https://otavioqueiroz.com",
    ogImage: "/og/portfolio-cover.svg",
    locale: "pt_BR",
    keywords: [
      "desenvolvedor full stack sênior",
      "integrações e automações",
      "APIs e sistemas web",
      "WhatsApp e IA aplicada",
      "consultoria técnica full stack",
      "desenvolvimento ponta a ponta",
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
