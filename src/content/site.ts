import type { SiteContent } from "@/types/content";

export const siteContent: SiteContent = {
  person: {
    name: "Otavio Queiroz",
    role: "Desenvolvedor Full Stack Senior",
    location: "GO - Brasil | Remoto",
    availability: "Projetos selecionados e consultoria tecnica",
    tagline:
      "Full stack senior para sistemas, integracoes, automacoes, IA aplicada e operacao digital ponta a ponta.",
  },
  hero: {
    eyebrow: "Operating System de Entrega",
    badge: "Disponivel para projetos selecionados · resposta em ate 24h",
    headline: "Assumo a engenharia",
    highlight: "sem caos",
    accentWord: "&",
    closingLine: "com entrega no prazo.",
    subheadline:
      "Eu entro em cenarios complexos, organizo a parte tecnica e entrego sistemas, integracoes, automacoes, IA, deploy e evolucao com visao pratica de negocio.",
    primaryCtaLabel: "Pedir orcamento no WhatsApp",
    secondaryCtaLabel: "Enviar e-mail",
    stickers: [
      {
        text: "deploy validado",
        tone: "accent",
      },
      {
        text: "produto + integracoes + ia",
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
        output: "otavio | full stack senior para negocio",
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
        output: '"ia": ["agentes", "gemini", "deepseek"],',
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
        output: "• engenharia clara | execucao ponta a ponta",
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
    "Integracoes & APIs",
    "WhatsApp",
    "IA aplicada",
    "Dashboards operacionais",
    "Deploy",
    "VPS & Docker",
    "Automacoes",
    "Back-end forte",
  ],
  proof: {
    title: "O que clientes dizem depois da entrega",
    intro:
      "A confianca aqui vem de entrega resolvida. Menos exibicao de numero, mais contexto real sobre clareza, velocidade e capacidade de organizar cenarios complexos.",
    testimonials: [
      {
        title: "Rapidez com seguranca tecnica",
        quote:
          "A entrega andou rapido sem virar gambiarra. O ambiente ficou funcional, estavel e com uma base que fazia sentido para operar depois.",
        author: "Cliente de integracao",
        role: "Entrega com VPS, IA e mensageria",
        avatarLabel: "IA",
        rating: 5,
      },
      {
        title: "Comunicacao clara durante a execucao",
        quote:
          "As respostas foram objetivas, o escopo ficou claro e sempre existia um proximo passo concreto. Isso reduz muito atrito para quem esta contratando.",
        author: "Cliente de produto",
        role: "Projeto sob demanda com entrega ponta a ponta",
        avatarLabel: "PD",
        rating: 5,
      },
      {
        title: "Capacidade de assumir cenarios complexos",
        quote:
          "Os projetos mais fortes envolvem stack misturada, deploy, integrações sensiveis, IA aplicada e operacao real. O diferencial esta em organizar tudo isso com criterio.",
        author: "Curadoria tecnica",
        role: "Leitura consolidada dos projetos selecionados",
        avatarLabel: "OP",
        rating: 5,
      },
    ],
  },
  serviceLines: {
    title: "Toolbox completa para produto e operacao",
    intro:
      "O problema do cliente vem primeiro. A stack entra como ferramenta para estruturar, integrar, estabilizar e fazer a operacao rodar sem gargalo tecnico.",
    items: [
      {
        label: "sistemas",
        title: "Sistemas Web & SaaS",
        description:
          "Planejo e construo produtos web, paineis administrativos, areas operacionais e MVPs que precisam nascer com estrutura para evoluir.",
        signals: [
          "Arquitetura de aplicacao",
          "Fluxos internos e area admin",
          "Back-office e operacao diaria",
        ],
      },
      {
        label: "integracoes",
        title: "Integracoes & APIs",
        description:
          "Conecto plataformas, estruturo regras de negocio entre sistemas e transformo APIs, webhooks e servicos externos em fluxo confiavel.",
        signals: [
          "APIs REST e webhooks",
          "Conectores entre servicos",
          "Sincronizacao e consistencia",
        ],
      },
      {
        label: "automacoes",
        title: "Automacoes & IA Aplicada",
        description:
          "Desenho fluxos que reduzem operacao manual, integram IA de forma util e colocam tarefas repetitivas para rodar com controle.",
        signals: [
          "Bots e fluxos assistidos",
          "WhatsApp, LLMs e agentes",
          "Automacao com supervisao real",
        ],
      },
      {
        label: "infra",
        title: "Estabilizacao, Deploy & Evolucao",
        description:
          "Entro em ambientes travados para corrigir gargalos, estabilizar infraestrutura, reorganizar a execucao e preparar a proxima fase do produto.",
        signals: [
          "VPS, Docker e cloud",
          "Melhoria de confiabilidade",
          "Hardening tecnico e deploy",
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
          "Baseio a entrega em modelagem de dados, API consistente, isolamento de responsabilidades e evolucao sem improviso.",
        items: [
          "Node.js, TypeScript e Python",
          "PostgreSQL, SQLite e modelagem operacional",
          "Camadas de dominio, workers e servicos",
        ],
      },
      {
        label: "ia",
        title: "Integracoes, automacao e IA",
        description:
          "Conecto provedores, mensageria e ferramentas externas com foco em processo real, nao em demo bonita.",
        items: [
          "WhatsApp, webhooks e APIs de terceiros",
          "LLMs, Gemini, DeepSeek e fluxos assistidos",
          "Automacoes com auditoria e controle",
        ],
      },
      {
        label: "frontend",
        title: "Interfaces, dashboards e operacao",
        description:
          "Entrego interfaces que ajudam a operar, decidir e acompanhar o produto com clareza para usuario e negocio.",
        items: [
          "Next.js, React e paineis administrativos",
          "Landing pages com funcao comercial clara",
          "Experiencias responsivas e orientadas a conversao",
        ],
      },
    ],
  },
  featuredCases: {
    title: "Alguns trabalhos recentes",
    intro:
      "A curadoria abaixo prioriza projetos que mostram capacidade de assumir problema real, organizar a solucao tecnica e entregar com impacto operacional.",
    items: [
      {
        slug: "cobrazap",
        title: "CobraZap",
        source: "produto / github publico",
        visibility: "public",
        problem:
          "Pequenos negocios precisavam cobrar recorrencia por WhatsApp e Pix sem depender de planilha, follow-up manual ou um ERP pesado demais.",
        solution:
          "Estruturei um micro-SaaS B2B multi-tenant com cobrancas recorrentes, fluxo operacional por apps e packages separados, regras de negocio, billing e trilha de evolucao tecnica.",
        outcome:
          "A base ficou preparada para onboarding, configuracao operacional, cobranca recorrente, integracoes, filas e crescimento por modulos.",
        businessValue:
          "Reforca capacidade de pensar produto, arquitetura, operacao financeira e execucao ponta a ponta em um contexto de negocio real.",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Pix", "WhatsApp"],
        evidence: [
          "Monorepo com apps de web, api e worker, mais camadas de dominio e integracoes.",
          "Escopo orientado a multi-tenant, auditoria, automacao e operacao diaria.",
        ],
        links: [
          {
            label: "Repositorio",
            href: "https://github.com/dlr-1337/cobranca-whatsapp-pix",
          },
        ],
        visualVariant: "studio",
      },
      {
        slug: "tempmail",
        title: "tempmail",
        source: "engenharia / github publico",
        visibility: "public",
        problem:
          "Criar um servico self-hosted de e-mail descartavel com operacao publica, recepcao SMTP, controle de abuso e leitura em tempo real.",
        solution:
          "Implementei um back-end completo com Fastify, SMTP server, persistencia em SQLite, sweeper de expiracao, streaming SSE e interface web dedicada.",
        outcome:
          "O projeto ficou com composicao de producao, protecoes operacionais, armazenamento de anexos e fronteira clara entre transporte, core e UI.",
        businessValue:
          "Mostra profundidade em back-end, protocolos, seguranca basica de operacao e desenho de sistema com varias responsabilidades integradas.",
        stack: ["Fastify", "TypeScript", "SMTP", "SQLite", "SSE", "Svelte"],
        evidence: [
          "Composition root de producao com shutdown gracioso, validacao de ambiente e monitoramento de estado.",
          "Separacao entre HTTP, SMTP, core, armazenamento e camada web.",
        ],
        links: [
          {
            label: "Repositorio",
            href: "https://github.com/dlr-1337/tempmail",
          },
        ],
        visualVariant: "code",
      },
      {
        slug: "deploy-ia-whatsapp-vps",
        title: "Deploy de IA + WhatsApp em VPS",
        source: "operacao remota",
        visibility: "public",
        problem:
          "O cliente precisava colocar um agente de IA rodando em VPS com ponte para WhatsApp, modelos externos e ambiente estavel, tudo sob prazo curto.",
        solution:
          "Assumi a configuracao do ambiente, a integracao com provedores de IA, a ponte com WhatsApp e a validacao do fluxo real em producao.",
        outcome:
          "O ambiente ficou funcional, com fluxo operacional pronto, deploy consistente e base confiavel para continuar operando sem improviso.",
        businessValue:
          "Evidencia capacidade de atuar em IA aplicada, deploy, Linux, integracoes sensiveis e estabilizacao de stack complexa sob contexto real.",
        stack: ["Linux", "Docker", "VPS", "OpenClaw", "DeepSeek", "WhatsApp"],
        evidence: [
          "Entrega orientada a arquitetura de agentes, ambiente remoto real e validacao ponta a ponta do fluxo.",
          "Projeto com exigencia tecnica alta em infraestrutura, integracao e operacao sob pressao de prazo.",
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
          "Era preciso unir landing comercial, dois fluxos de chatbot com IA, contato real por e-mail e um admin privado de galeria para atualizacao sem equipe tecnica.",
        solution:
          "Estruturei uma base com landing, endpoints de chat em streaming, integracao com Gemini e Resend, galeria dinamica, autenticacao administrativa e operacao em Vercel.",
        outcome:
          "O projeto reuniu experiencia comercial, IA aplicada, administracao privada e fluxo de contato funcional em uma unica base pronta para evoluir.",
        businessValue:
          "Mostra capacidade de integrar front-end, back-end leve, mensageria, administracao interna e manutencao de conteudo em um produto orientado a experiencia.",
        stack: ["TypeScript", "Gemini API", "Resend", "Vercel Blob", "Admin Panel"],
        evidence: [
          "Landing com PT/EN, multiplos chat flows, contato funcional e admin de galeria protegido.",
          "Projeto privado nomeado por valor de repertorio, sem exposicao estrutural em schema ou links inline.",
        ],
        links: [],
        visualVariant: "window",
      },
    ],
  },
  githubShowcase: {
    title: "GitHub selecionado",
    intro:
      "Alguns repositorios reforcam repertorio de arquitetura, automacao, produto operacional e stack real alem dos cases principais.",
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
          "Monorepo com Next.js, Prisma, worker e configuracao operacional para automacao de prospeccao e health de conectores.",
      },
      {
        name: "flashradar.trade",
        label: "public / painel local",
        visibility: "public",
        summary:
          "Painel local multiusuario em PHP para odds e operacao manual, com runtime embutido para Windows e uso install-free.",
      },
    ],
  },
  process: {
    title: "Sem surpresa, sem enrolacao",
    intro:
      "Meu processo foi moldado para entrar em contexto rapido, reduzir ambiguidade e transformar problema tecnico em execucao previsivel do primeiro contato ao deploy.",
    stages: [
      {
        title: "Diagnostico",
        description:
          "Entendo a operacao, identifico gargalos, dependencias e risco tecnico antes de sair construindo qualquer coisa.",
        outcome: "Clareza sobre o que precisa ser resolvido e em que ordem.",
        paceLabel: "30-60 min · alinhamento inicial",
      },
      {
        title: "Arquitetura",
        description:
          "Defino a estrutura mais adequada para o caso: componentes, servicos, integracoes, dados e caminhos de evolucao.",
        outcome: "Decisoes tecnicas coerentes com negocio, prazo e manutencao.",
        paceLabel: "escopo claro · proposta objetiva",
      },
      {
        title: "Execucao",
        description:
          "Implemento com foco em entrega real: back-end, front-end, integracoes, automacoes, testes e fechamento de pontas.",
        outcome: "Sistema funcional, escopo controlado e comunicacao objetiva.",
        paceLabel: "sprints semanais · visibilidade constante",
      },
      {
        title: "Estabilizacao",
        description:
          "Valido ambiente, ajusto detalhes operacionais, documento o necessario e preparo o produto para rodar e evoluir.",
        outcome: "Mais confianca para operar hoje e evoluir amanha.",
        paceLabel: "deploy, suporte inicial e proximo passo",
      },
    ],
  },
  closingCta: {
    title: "Vamos construir alguma coisa?",
    description:
      "Me conta o contexto, o prazo e onde a parte tecnica esta travando. Posso estruturar do zero, destravar uma entrega travada ou assumir a operacao que precisa de mais criterio.",
    highlight:
      "Escopo claro, prioridade certa e execucao ponta a ponta com visao pratica de negocio.",
    primaryCtaLabel: "Pedir orcamento agora",
    secondaryCtaLabel: "Enviar e-mail",
  },
  contactCards: [
    {
      label: "whatsapp · preferido",
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
    signature: "Otavio Queiroz · Desenvolvedor Full Stack Senior",
    rights: "Todos os direitos reservados.",
    note: "GitHub e LinkedIn disponiveis como referencia publica de repertorio e entrega.",
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
    title: "Otavio Queiroz | Full Stack Senior para sistemas, integracoes, automacoes e IA",
    description:
      "Otavio Queiroz atua como full stack senior em sistemas web, integracoes, automacoes, IA aplicada, WhatsApp, deploy e operacao tecnica ponta a ponta.",
    siteUrl: "https://otavioqueiroz.com",
    ogImage: "/og/portfolio-cover.svg",
    locale: "pt_BR",
    keywords: [
      "desenvolvedor full stack senior",
      "integracoes e automacoes",
      "apis e sistemas web",
      "whatsapp e ia aplicada",
      "consultoria tecnica full stack",
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
