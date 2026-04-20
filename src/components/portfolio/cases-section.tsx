import { motion } from "motion/react";
import type { SiteContent } from "@/types/content";
import { sectionReveal, sectionTransition } from "./section-motion";

interface CasesSectionProps {
  content: SiteContent["featuredCases"];
  showcase: SiteContent["githubShowcase"];
}

const visibilityLabel = {
  public: "público",
  private: "privado",
  anonymous: "anonimizado",
} as const;

export function CasesSection({ content, showcase }: CasesSectionProps) {
  const githubCases = content.items.filter((item) => item.source.toLowerCase().includes("github"));
  const deliveryCases = content.items.filter((item) => !item.source.toLowerCase().includes("github"));

  return (
    <motion.section
      id="projetos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={sectionTransition}
      variants={sectionReveal}
    >
      <div className="section-head">
        <div>
          <div className="num">- 03 / projetos</div>
          <h2>{content.title}</h2>
        </div>
        <p className="intro">{content.intro}</p>
      </div>

      <div className="project-clusters">
        <div className="project-cluster">
          <div className="project-cluster-head">
            <div className="num">- 03a / github</div>
            <h3>{showcase.title}</h3>
            <p>{showcase.intro}</p>
          </div>

          <div className="project-list">
            {githubCases.map((item) => (
              <article key={item.slug} className="project-card project-card--plain project-card--list">
                <div className="project-info">
                  <div className="meta">
                    <span>{item.source}</span>
                    <span>{visibilityLabel[item.visibility]}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.businessValue}</p>

                  <div className="project-body">
                    <div>
                      <strong>Problema</strong>
                      <p>{item.problem}</p>
                    </div>
                    <div>
                      <strong>Solução</strong>
                      <p>{item.solution}</p>
                    </div>
                    <div>
                      <strong>Resultado</strong>
                      <p>{item.outcome}</p>
                    </div>
                  </div>

                  <ul className="project-evidence">
                    {item.evidence.map((evidence) => (
                      <li key={evidence}>{evidence}</li>
                    ))}
                  </ul>

                  <div className="tags">
                    {item.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            {showcase.items.map((item) => (
              <article key={item.name} className="project-card project-card--plain project-card--compact">
                <div className="project-info">
                  <div className="meta">
                    <span>{item.label}</span>
                    <span>{visibilityLabel[item.visibility]}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="project-cluster">
          <div className="project-cluster-head">
            <div className="num">- 03b / entregas</div>
            <h3>Entregas selecionadas</h3>
            <p>Projetos fora do GitHub que reforçam operação remota, integração e execução ponta a ponta.</p>
          </div>

          <div className="project-list">
            {deliveryCases.map((item) => (
              <article key={item.slug} className="project-card project-card--plain project-card--list">
                <div className="project-info">
                  <div className="meta">
                    <span>{item.source}</span>
                    <span>{visibilityLabel[item.visibility]}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.businessValue}</p>

                  <div className="project-body">
                    <div>
                      <strong>Problema</strong>
                      <p>{item.problem}</p>
                    </div>
                    <div>
                      <strong>Solução</strong>
                      <p>{item.solution}</p>
                    </div>
                    <div>
                      <strong>Resultado</strong>
                      <p>{item.outcome}</p>
                    </div>
                  </div>

                  <ul className="project-evidence">
                    {item.evidence.map((evidence) => (
                      <li key={evidence}>{evidence}</li>
                    ))}
                  </ul>

                  <div className="tags">
                    {item.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
