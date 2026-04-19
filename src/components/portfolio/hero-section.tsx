import { motion } from "motion/react";
import type { SiteContent } from "@/types/content";
import { sectionReveal, sectionTransition } from "./section-motion";

interface HeroSectionProps {
  hero: SiteContent["hero"];
  socialLinks: SiteContent["socialLinks"];
  socialLabels: SiteContent["socialLabels"];
}

export function HeroSection({ hero, socialLinks, socialLabels }: HeroSectionProps) {
  return (
    <motion.header
      id="inicio"
      className="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={sectionTransition}
      variants={sectionReveal}
    >
      <div>
        <div className="hero-badge">
          <span className="dot" />
          <span>{hero.badge}</span>
        </div>

        <p className="hero-label mono">{hero.eyebrow}</p>

        <h1>
          {hero.headline}
          <br />
          <span className="underline">{hero.highlight}</span>{" "}
          <span className="accent italic">{hero.accentWord}</span>
          <br />
          {hero.closingLine}
        </h1>

        <p className="lede">{hero.subheadline}</p>

        <div className="hero-cta-row">
          <a href={socialLinks.whatsapp} className="btn-primary">
            {hero.primaryCtaLabel} <span className="arrow">-&gt;</span>
          </a>
          <a href={socialLinks.email} className="btn-ghost">
            {hero.secondaryCtaLabel}
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className={`sticker sticker--${hero.stickers[0]?.tone ?? "accent"}`}>
          {hero.stickers[0]?.text}
        </div>

        <div className="code-card" aria-label="Preview tecnico">
          <div className="code-card-top">
            <span className="dot r" />
            <span className="dot y" />
            <span className="dot g" />
            <span className="code-file">{hero.previewFile}</span>
          </div>

          <div className="code-card-body">
            {hero.terminalPreview.map((line, index) => (
              <div
                key={`${line.prompt ?? "line"}-${index}`}
                className={`ln ${line.outputTone === "ok" ? "ok" : ""}`}
                style={{
                  paddingLeft: line.indentLevel ? `${line.indentLevel * 1.4}rem` : undefined,
                }}
              >
                {line.prompt ? <span className="prompt">{line.prompt}</span> : null}{" "}
                {line.command ? <span className="cmd">{line.command}</span> : null}
                {line.output ? <span className="out">{line.output}</span> : null}
                {line.cursor ? <span className="cursor">_</span> : null}
              </div>
            ))}
          </div>
        </div>

        <div className={`sticker-2 sticker-2--${hero.stickers[1]?.tone ?? "moss"}`}>
          {hero.stickers[1]?.text}
        </div>

        <div className="hero-social-links">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            {socialLabels.github}
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            {socialLabels.linkedin}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
