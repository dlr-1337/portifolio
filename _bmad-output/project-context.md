---
project_name: 'portifolio'
user_name: 'Otavio'
date: '2026-04-19'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing_rules', 'quality_rules', 'workflow_rules', 'anti_patterns']
existing_patterns_found: 10
status: 'complete'
rule_count: 56
optimized_for_llm: true
---

# Contexto do Projeto para Agentes de IA

_Este arquivo concentra regras e padroes criticos que agentes de IA devem seguir ao implementar codigo neste projeto. O foco esta nos detalhes nao obvios que tendem a ser esquecidos._

---

## Stack de Tecnologia e Versoes

- Framework principal: Next.js `16.1.6` com App Router em `src/app`
- UI: React `19.2.3` e React DOM `19.2.3`
- Linguagem: TypeScript `5` com `strict: true`
- Estilo: Tailwind CSS `4` com `@tailwindcss/postcss`
- Animacoes: `motion` `12.35.0` via `motion/react`
- Tipografia: `next/font/google`
- Lint: ESLint `9` com `eslint-config-next` (`core-web-vitals` + `typescript`)
- Testes: Vitest `4.0.18`, `jsdom`, Testing Library e `@testing-library/jest-dom`
- Resolucao de imports: alias `@/*` apontando para `src/*`

## Regras Criticas de Implementacao

### Regras de Linguagem

- Escreva novos arquivos de aplicacao em TypeScript (`.ts`/`.tsx`) e mantenha compatibilidade com `strict: true`; nao introduza `any` sem necessidade real.
- Use `import type` para imports exclusivamente de tipos, seguindo o padrao atual.
- Para imports internos, prefira o alias `@/` em vez de caminhos relativos longos.
- Centralize textos, URLs e dados estruturados em modulos de conteudo tipados, em vez de espalhar strings literais pelos componentes.
- Reaproveite interfaces e tipos compartilhados de `src/types` antes de criar tipos locais duplicados.
- Prefira funcoes e constantes nomeadas para logica reutilizavel; mantenha `export default` apenas onde o App Router do Next exige isso, como paginas e arquivos de rota.
- Mantenha utilitarios pequenos e deterministas, como `absoluteUrl`, sem acoplar regra de negocio ao componente visual.
- Ao iterar listas renderizadas, use chaves estaveis derivadas dos dados reais, nunca indices quando houver identificador disponivel.

### Regras de Framework

- Mantenha a separacao entre componentes server e client: use `"use client"` apenas em componentes que realmente precisem de interatividade, browser APIs ou `motion`.
- Preserve `src/app` como camada de entrada do App Router; paginas devem orquestrar metadata, JSON-LD e composicao de alto nivel, delegando a UI detalhada para componentes dedicados.
- Centralize `metadata`, `robots` e `sitemap` usando os artefatos nativos do Next, reutilizando `siteContent` como fonte unica de verdade para SEO.
- Para fontes, siga o padrao de `next/font/google` no layout e exponha as variaveis CSS no `body`; nao reimporte fontes dentro de componentes.
- Componentes visuais devem receber dados por props tipadas, como `PortfolioPage`, em vez de fazer fetch local ou duplicar acesso ao conteudo.
- Animacoes com `motion/react` devem ficar encapsuladas em componentes client e respeitar `prefers-reduced-motion` ja coberto no CSS global.
- Ao criar links externos no App Router, use `<a>` com `target="_blank"` e `rel="noopener noreferrer"`; reserve `Link` do Next para navegacao interna.
- Mantenha a pagina inicial enxuta: estruturacao sem logica de negocio pesada, sem estado global desnecessario e sem data fetching quando o conteudo for estatico.

### Regras de Teste

- Escreva testes de UI com Vitest + Testing Library, seguindo o padrao co-localizado `*.test.ts` ou `*.test.tsx` dentro de `src`.
- Prefira validar comportamento visivel e acessivel com `screen.getByRole`, texto e estrutura sem acoplar testes a detalhes internos de implementacao.
- Ao testar paginas e componentes desta aplicacao, priorize headings, links e CTAs reais em vez de snapshots extensos.
- Reutilize o setup global de `src/test/setup.ts`; nao redefina mocks globais como `IntersectionObserver` dentro de cada teste sem necessidade.
- Quando componentes dependerem de browser APIs ou animacoes, adapte o ambiente de teste com mocks pequenos e deterministas, mantendo o teste focado no resultado.
- Para listas de links e conteudo estruturado, verifique os `href`s e rotulos relevantes, como o teste atual da homepage faz.
- Mantenha limpeza explicita entre testes quando o arquivo seguir o padrao atual com `cleanup` em `afterEach`.
- Testes novos devem cobrir comportamento de negocio ou renderizacao relevante; evite criar testes apenas para aumentar volume de cobertura.

### Regras de Qualidade e Estilo

- Siga o lint atual do projeto com `eslint-config-next` e evite introduzir padroes que exijam desligar regras sem necessidade.
- Mantenha arquivos e pastas em `kebab-case`, como `portfolio-page.tsx`, e componentes exportados em `PascalCase`.
- Concentre estilos globais e tokens reutilizaveis em `src/app/globals.css`; nao espalhe valores magicos de cor, raio ou sombra sem antes considerar uma custom property existente.
- Use classes utilitarias do Tailwind para layout e espacamento, mas preserve classes semanticas locais quando elas estruturam a identidade visual da pagina.
- Preserve a direcao visual atual: tipografia expressiva via variaveis CSS, gradientes/fundos texturizados e componentes com intencao visual clara, evitando UI generica.
- Mantenha componentes focados: layout e apresentacao no componente visual, dados no modulo de conteudo e tipos no modulo de tipos.
- Nao duplique strings de SEO, contato ou projeto em multiplos arquivos; atualize a fonte unica em `siteContent`.
- Comentarios devem ser raros e objetivos; adicione comentario apenas quando a intencao nao estiver obvia no codigo.

### Regras de Workflow

- Antes de concluir uma mudanca, valide pelo menos o escopo afetado com os scripts oficiais do projeto, principalmente `npm run lint`, `npm run test` e, quando relevante, `npm run build`.
- Considere `src/content/site.ts` como ponto central para ajustes de conteudo; mudancas editoriais relevantes devem partir dali e refletir automaticamente na UI, SEO e testes.
- Ao alterar metadata, links publicos ou URLs canonicas, revise em conjunto `layout.tsx`, `page.tsx`, `robots.ts`, `sitemap.ts` e o conteudo em `siteContent`.
- Mudancas visuais devem ser avaliadas com cuidado porque o projeto combina Tailwind, CSS global e animacoes; evite refactors amplos sem necessidade funcional clara.
- Ao adicionar funcionalidade nova, preserve a organizacao atual por responsabilidade: `src/app` para entradas de rota, `src/components` para UI, `src/content` para dados e `src/types` para contratos.
- Se uma mudanca alterar comportamento visivel ou links principais, atualize ou adicione testes no mesmo ciclo de alteracao.
- Nao assuma a existencia de backend, banco ou estado global neste projeto sem confirmar pelo codigo; hoje a aplicacao e predominantemente estatica.

### Regras Criticas para Nao Perder

- Nao duplique ou contradiga dados entre UI, SEO e links; `siteContent` e a fonte unica de verdade e deve permanecer consistente.
- Nao transforme componentes estaticos em client components sem necessidade; isso aumenta custo de hidratacao e quebra a separacao atual do projeto.
- Nao mova animacoes para fora do componente client nem introduza dependencia de browser API em arquivos server do App Router.
- Nao substitua a identidade visual atual por layout generico de cards, tipografia padrao ou fundo plano; o projeto depende de uma direcao visual intencional.
- Nao remova ou enfraqueca metadata, JSON-LD, `robots` ou `sitemap` ao editar a pagina inicial ou o layout.
- Nao introduza links externos sem `rel="noopener noreferrer"` quando abrirem em nova aba.
- Nao espalhe strings literais de contato, projetos ou SEO em testes e componentes se elas ja existem no modulo de conteudo.
- Nao quebre acessibilidade basica dos testes atuais: headings principais, nomes de links e CTAs precisam continuar detectaveis por role/name.

---

## Diretrizes de Uso

**Para agentes de IA:**

- Leia este arquivo antes de implementar qualquer mudanca.
- Siga todas as regras como defaults do projeto, especialmente separacao server/client, fonte unica de conteudo e convencoes de teste.
- Quando houver duvida, prefira a opcao mais restritiva e mais alinhada ao codigo existente.
- Atualize este arquivo se novos padroes recorrentes surgirem no repositorio.

**Para humanos:**

- Mantenha este arquivo curto e focado no que agentes realmente precisam lembrar.
- Atualize quando stack, padroes de UI, SEO, testes ou organizacao do codigo mudarem.
- Remova regras que se tornarem obvias ou deixarem de refletir o estado real do projeto.

Ultima atualizacao: `2026-04-19`
