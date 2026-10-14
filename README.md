# Portfólio profissional

**Um site de apresentação de serviços, processo de trabalho e projetos de desenvolvimento full stack.**

Aplicação Next.js com conteúdo separado dos componentes visuais. A página reúne apresentação, áreas de atuação, processo, cases, prova social e caminhos de contato em uma navegação por seções.

> Este repositório contém o site de portfólio. Ele é independente do repositório especial que exibe o README do perfil no GitHub.

## O que está implementado

| Área | Conteúdo |
| --- | --- |
| Apresentação | Hero com posicionamento profissional e links sociais. |
| Atuação | Serviços e agrupamentos de capacidades técnicas. |
| Processo | Explicação das etapas de trabalho. |
| Projetos | Cases e seleção de projetos GitHub. |
| Contato | Chamadas para orçamento e cartões de contato. |
| Dados estruturados | Representações `Person` e `CreativeWork` em JSON-LD; esta última considera cases marcados como públicos. |

## Executar

Prepare Node.js e npm compatíveis com as dependências do projeto. O manifesto declara Next.js **16.1.6**, React **19.2.3** e Motion.

```bash
git clone https://github.com/dlr-1337/portifolio.git
cd portifolio
npm ci
npm run dev
```

Abra **http://localhost:3000**. Para preparar uma execução de produção local:

```bash
npm run build
npm start
```

## Onde editar

| Caminho | Responsabilidade |
| --- | --- |
| [src/app/page.tsx](src/app/page.tsx) | Entrada da página e JSON-LD. |
| [src/content/site.ts](src/content/site.ts) | Conteúdo central utilizado pela página. |
| [src/components/portfolio/](src/components/portfolio/) | Componentes de cada seção. |
| [portfolio-page.tsx](src/components/portfolio/portfolio-page.tsx) | Composição, navegação e rodapé. |
| [package.json](package.json) | Scripts e dependências. |

Os textos e cases são passados aos componentes por `SiteContent`. Atualizar o conteúdo central reduz duplicação entre seções e dados estruturados, mas não substitui a revisão da página final. Antes de incluir um case, confira autorização de divulgação, links, imagens e afirmações de resultado.

## Verificação

```bash
npm run lint
npm test
npm run build
```

A estrutura de testes usa Vitest, Testing Library e jsdom. Os scripts permitem validar alterações; sua presença não comprova uma execução aprovada ou a disponibilidade de um site publicado.

## Escopo

O projeto apresenta trabalho e canais de contato. Links de orçamento não devem ser descritos como um fluxo de contratação ou pagamento sem uma integração correspondente. A disponibilização do código também não concede automaticamente direitos sobre imagens, marcas e conteúdos dos cases.
