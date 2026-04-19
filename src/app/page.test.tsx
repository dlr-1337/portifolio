import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Home from "./page";

afterEach(() => {
  cleanup();
});

describe("Homepage", () => {
  it("renderiza a estrutura editorial atualizada sem prova social de plataforma", () => {
    render(<Home />);

    expect(screen.getByRole("navigation", { name: /navegacao primaria/i })).toBeInTheDocument();
    expect(screen.getByText(/disponivel para projetos selecionados/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /assumo a engenharia/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/preview tecnico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/marquee de repertorio/i)).toBeInTheDocument();

    expect(screen.queryByText(/fazer o quiz/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/tweaks/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/99freelas/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/4,77\/5/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/10 projetos concluidos/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/11 recomendacoes/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ranking 427/i)).not.toBeInTheDocument();
  });

  it("exibe atuacao, processo, cases, demos extras, testimonials e contato com links atualizados", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /toolbox completa para produto e operacao/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Sistemas Web & SaaS")).toBeInTheDocument();
    expect(screen.getAllByText("Integracoes & APIs").length).toBeGreaterThan(0);
    expect(screen.getByText("Automacoes & IA Aplicada")).toBeInTheDocument();
    expect(screen.getByText("Estabilizacao, Deploy & Evolucao")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /sem surpresa, sem enrolacao/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Diagnostico")).toBeInTheDocument();
    expect(screen.getByText("Arquitetura")).toBeInTheDocument();
    expect(screen.getByText("Execucao")).toBeInTheDocument();
    expect(screen.getByText("Estabilizacao")).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: "CobraZap" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "tempmail" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Deploy de IA + WhatsApp em VPS" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "PortalArcaViva" })).toBeInTheDocument();
    expect(screen.getByText("quotex-trading-platform")).toBeInTheDocument();
    expect(screen.getByText("fullauto99")).toBeInTheDocument();
    expect(screen.getByText("flashradar.trade")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /o que clientes dizem depois da entrega/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/rapidez com seguranca tecnica/i)).toBeInTheDocument();
    expect(screen.getByText(/comunicacao clara durante a execucao/i)).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /vamos construir/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /repositorio/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /case no 99freelas/i })).not.toBeInTheDocument();
    expect(document.querySelector(".project-thumb")).toBeNull();

    const hrefs = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href"))
      .filter((href): href is string => Boolean(href));

    expect(hrefs).toEqual(
      expect.arrayContaining([
        "https://wa.me/556493315577",
        "mailto:contato@otavioqueiroz.com",
        "https://github.com/dlr-1337",
      ]),
    );
    expect(hrefs.join(" ")).not.toMatch(/99freelas/i);
  });

  it("mantem a prova social apenas em depoimentos e remove metricas publicas", () => {
    render(<Home />);

    expect(screen.queryByText(/4,77\/5/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/10 projetos concluidos/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/11 recomendacoes/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ranking 427/i)).not.toBeInTheDocument();
    expect(screen.getByText(/rapidez com seguranca tecnica/i)).toBeInTheDocument();
    expect(screen.getByText(/comunicacao clara durante a execucao/i)).toBeInTheDocument();
    expect(screen.getByText(/capacidade de assumir cenarios complexos/i)).toBeInTheDocument();
  });

  it("nao expoe projetos privados nomeados no json-ld", () => {
    const { container } = render(<Home />);

    expect(screen.getByText("PortalArcaViva")).toBeInTheDocument();

    const schemaScripts = Array.from(
      container.querySelectorAll('script[type="application/ld+json"]'),
    )
      .map((script) => script.textContent ?? "")
      .join("\n");

    expect(schemaScripts).not.toMatch(/PortalArcaViva/i);
    expect(schemaScripts).not.toMatch(/quotex-trading-platform/i);
    expect(schemaScripts).not.toMatch(/fullauto99/i);
    expect(schemaScripts).not.toMatch(/99freelas/i);
  });

  it("mantem a estrutura do hero e dos blocos finais ao centralizar a landing", () => {
    const { container } = render(<Home />);
    const navigation = screen.getByRole("navigation", { name: /navegacao primaria/i });

    expect(navigation).toBeInTheDocument();
    expect(container.querySelector(".hero-copy")).toBeInTheDocument();
    expect(container.querySelector(".hero-visual")).toBeInTheDocument();
    expect(within(navigation).getByRole("link", { name: /orcamento/i })).toBeInTheDocument();
    expect(container.querySelectorAll(".contact-card")).toHaveLength(4);
    expect(
      screen.getByText(/github e linkedin disponiveis como referencia publica/i),
    ).toBeInTheDocument();
  });
});
