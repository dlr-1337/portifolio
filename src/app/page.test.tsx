import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Homepage", () => {
  it("renderiza as seções principais do portfólio", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /desenvolvedor fullstack end-to-end/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /manifesto de produto/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /projetos em destaque/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /processo fullstack/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /vamos construir algo memoravel/i }),
    ).toBeInTheDocument();
  });

  it("exibe ctas de contato para WhatsApp e email", () => {
    render(<Home />);

    const whatsappLinks = screen.getAllByRole("link", { name: /falar no whatsapp/i });
    const emailLinks = screen.getAllByRole("link", { name: /enviar email/i });

    expect(whatsappLinks.some((link) => link.getAttribute("href")?.includes("wa.me"))).toBe(
      true,
    );
    expect(emailLinks.some((link) => link.getAttribute("href")?.includes("mailto:"))).toBe(
      true,
    );
  });
});
