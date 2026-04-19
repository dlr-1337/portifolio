import { motion } from "motion/react";
import type { SiteContent } from "@/types/content";
import { sectionReveal, sectionTransition } from "./section-motion";

interface CtaSectionProps {
  content: SiteContent["closingCta"];
  contactCards: SiteContent["contactCards"];
  socialLinks: SiteContent["socialLinks"];
}

export function CtaSection({ content, contactCards, socialLinks }: CtaSectionProps) {
  return (
    <motion.section
      id="contato"
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={sectionTransition}
      variants={sectionReveal}
    >
      <h2>
        Vamos <span className="italic">construir</span>
        <br />
        alguma coisa?
      </h2>
      <p className="lede">{content.description}</p>

      <div className="contact-cards">
        {contactCards.map((card) => (
          <a
            key={`${card.label}-${card.href}`}
            href={card.href}
            className="contact-card"
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <span className="label">{card.label}</span>
            <span className="value">{card.value}</span>
          </a>
        ))}
      </div>

      <p className="contact-highlight">{content.highlight}</p>

      <div className="contact-actions">
        <a href={socialLinks.whatsapp} className="btn-primary">
          {content.primaryCtaLabel} <span className="arrow">→</span>
        </a>
        <a href={socialLinks.email} className="btn-ghost">
          {content.secondaryCtaLabel}
        </a>
      </div>
    </motion.section>
  );
}
