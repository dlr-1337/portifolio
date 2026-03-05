import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Home from "./page";

afterEach(() => {
  cleanup();
});

describe("Homepage", () => {
  it("renderiza as secoes principais do portfolio", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /desenvolvedor full stack para produtos digitais de alto impacto/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /projetos em destaque/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /vamos construir o proximo produto/i }),
    ).toBeInTheDocument();
  });

  it("exibe ctas de contato com os links reais", () => {
    render(<Home />);

    const whatsappLinks = screen.getAllByRole("link", { name: /falar no whatsapp/i });
    const emailLinks = screen.getAllByRole("link", { name: /enviar email/i });

    expect(
      whatsappLinks.some((link) => link.getAttribute("href") === "https://wa.me/556493012485"),
    ).toBe(true);
    expect(
      emailLinks.some(
        (link) => link.getAttribute("href") === "mailto:contato@otavioqueiroz.com",
      ),
    ).toBe(true);
  });

  it("exibe os tres projetos novos com links corretos", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: "TaskFlow - Gerenciador de Tarefas Kanban" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "ImobiFinder - Catalogo de Imoveis Inteligente" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "WalletTrack - Dashboard de Financas Pessoais" }),
    ).toBeInTheDocument();

    const hrefs = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href"))
      .filter((href): href is string => Boolean(href));

    expect(hrefs).toEqual(
      expect.arrayContaining([
        "https://taskflow.otavioqueiroz.dev",
        "https://github.com/dlr-1337/taskflow-kanban",
        "https://imobifinder.otavioqueiroz.dev",
        "https://github.com/dlr-1337/imobi-finder",
        "https://wallettrack.otavioqueiroz.dev",
        "https://github.com/dlr-1337/wallet-track",
      ]),
    );
  });
});
