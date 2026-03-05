"use client";

import { motion } from "motion/react";
import type { SiteContent } from "@/types/content";

interface PortfolioPageProps {
  content: SiteContent;
}

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function PortfolioPage({ content }: PortfolioPageProps) {
  return (
    <div className="portfolio-shell">
      <div aria-hidden className="ambient-shape ambient-shape--one" />
      <div aria-hidden className="ambient-shape ambient-shape--two" />

      <main className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-[var(--section-gap)] py-8 md:py-12 lg:py-16">
        <motion.section
          id="inicio"
          className="section-frame hero-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={sectionTransition}
          variants={reveal}
        >
          <div className="hero-lead">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 className="headline">{content.hero.headline}</h1>
            <p className="lede">{content.hero.subheadline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={content.socialLinks.whatsapp}>
                {content.hero.primaryCtaLabel}
              </a>
              <a className="btn-secondary" href={content.socialLinks.email}>
                {content.hero.secondaryCtaLabel}
              </a>
            </div>
          </div>

          <aside className="identity-card">
            <p className="identity-tag">{content.person.tagline}</p>
            <h2 className="identity-name">{content.person.name}</h2>
            <ul className="identity-meta">
              <li>{content.person.role}</li>
              <li>{content.person.location}</li>
              <li>{content.person.availability}</li>
            </ul>
          </aside>
        </motion.section>

        <motion.section
          id="projetos"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          variants={reveal}
          className="space-y-6"
        >
          <div className="section-frame">
            <p className="eyebrow">{content.projects.subtitle}</p>
            <h2 className="section-title">{content.projects.title}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {content.projects.items.map((project) => (
              <article key={project.slug} className="project-card">
                <p className="project-kicker">{project.slug}</p>
                <h3 className="project-title">{project.title}</h3>

                <div className="space-y-4 text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">
                  <p>
                    <strong>{content.projects.labels.context}:</strong> {project.context}
                  </p>
                  <p>
                    <strong>{content.projects.labels.solution}:</strong> {project.solution}
                  </p>
                  <p>
                    <strong>{content.projects.labels.impact}:</strong> {project.impact}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={`${project.slug}-${link.href}`}
                      className="project-link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contato"
          className="section-frame contact-frame"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={sectionTransition}
          variants={reveal}
        >
          <div className="space-y-4">
            <h2 className="section-title">{content.contact.title}</h2>
            <p className="text-[1.1rem] leading-relaxed text-[var(--ink-soft)]">
              {content.contact.description}
            </p>
            <p className="contact-highlight">{content.contact.highlight}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a className="btn-primary" href={content.socialLinks.whatsapp}>
              {content.hero.primaryCtaLabel}
            </a>
            <a className="btn-secondary" href={content.socialLinks.email}>
              {content.hero.secondaryCtaLabel}
            </a>
          </div>

          <div className="space-y-2 text-sm text-[var(--ink-soft)]">
            <p>{content.contact.socialCtaLabel}</p>
            <div className="flex flex-wrap gap-4 text-[0.95rem]">
              <a href={content.socialLinks.github} target="_blank" rel="noopener noreferrer">
                {content.socialLabels.github}
              </a>
              <a href={content.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                {content.socialLabels.linkedin}
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="mx-auto flex w-[min(1120px,92vw)] flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] py-6 text-sm text-[var(--ink-soft)]">
        <p>{content.footer.signature}</p>
        <p>{content.footer.rights}</p>
      </footer>
    </div>
  );
}
