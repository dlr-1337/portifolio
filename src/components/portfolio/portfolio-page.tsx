"use client";

import type { SiteContent } from "@/types/content";
import { CasesSection } from "./cases-section";
import { CtaSection } from "./cta-section";
import { HeroSection } from "./hero-section";
import { MarqueeSection } from "./marquee-section";
import { ProcessSection } from "./process-section";
import { ProofSection } from "./proof-section";
import { ServicesSection } from "./services-section";

interface PortfolioPageProps {
  content: SiteContent;
}

export function PortfolioPage({ content }: PortfolioPageProps) {
  return (
    <div className="portfolio-shell">
      <nav aria-label="Navegacao primaria" className="portfolio-nav">
        <a className="brand" href="#inicio">
          {content.person.name.split(" ")[0]}
          <span className="brand-subtle">— fullstack</span>
        </a>

        <ul>
          <li>
            <a href="#stack">Atuacao</a>
          </li>
          <li>
            <a href="#processo">Processo</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#clientes">Prova social</a>
          </li>
          <li>
            <a href="#contato" className="cta-nav">
              Orcamento →
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <HeroSection
          hero={content.hero}
          socialLinks={content.socialLinks}
          socialLabels={content.socialLabels}
        />
        <MarqueeSection items={content.marqueeItems} />
        <ServicesSection
          serviceLines={content.serviceLines}
          capabilityClusters={content.capabilityClusters}
        />
        <ProcessSection content={content.process} />
        <CasesSection content={content.featuredCases} showcase={content.githubShowcase} />
        <ProofSection content={content.proof} />
        <CtaSection
          content={content.closingCta}
          contactCards={content.contactCards}
          socialLinks={content.socialLinks}
        />
      </main>

      <footer className="portfolio-footer">
        <div>{content.footer.signature}</div>
        <div>{content.footer.note}</div>
        <div>{content.footer.rights}</div>
      </footer>
    </div>
  );
}
