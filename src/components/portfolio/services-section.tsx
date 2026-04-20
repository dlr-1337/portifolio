import { motion } from "motion/react";
import type { SiteContent } from "@/types/content";
import { sectionReveal, sectionTransition } from "./section-motion";

interface ServicesSectionProps {
  serviceLines: SiteContent["serviceLines"];
  capabilityClusters: SiteContent["capabilityClusters"];
}

export function ServicesSection({
  serviceLines,
  capabilityClusters,
}: ServicesSectionProps) {
  return (
    <motion.section
      id="stack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={sectionTransition}
      variants={sectionReveal}
    >
      <div className="section-head">
        <div>
          <div className="num">- 01 / atuação</div>
          <h2>{serviceLines.title}</h2>
        </div>
        <p className="intro">{serviceLines.intro}</p>
      </div>

      <div className="stack-grid">
        {serviceLines.items.map((item) => (
          <article key={item.title} className="stack-cat">
            <div className="label">{item.label}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
              {item.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </article>
        ))}

        {capabilityClusters.items.map((cluster) => (
          <article key={cluster.title} className="stack-cat">
            <div className="label">{cluster.label}</div>
            <h3>{cluster.title}</h3>
            <p>{cluster.description}</p>
            <ul>
              {cluster.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
