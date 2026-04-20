import { motion } from "motion/react";
import type { SiteContent } from "@/types/content";
import { sectionReveal, sectionTransition } from "./section-motion";

interface ProcessSectionProps {
  content: SiteContent["process"];
}

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <motion.section
      id="processo"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={sectionTransition}
      variants={sectionReveal}
    >
      <div className="section-head">
        <div>
          <div className="num">- 02 / processo</div>
          <h2>{content.title}</h2>
        </div>
        <p className="intro">{content.intro}</p>
      </div>

      <div className="process-steps">
        {content.stages.map((stage, index) => (
          <article key={stage.title} className="step">
            <div className="step-num">{`0${index + 1}`}</div>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <p className="step-outcome">{stage.outcome}</p>
            <div className="time">{stage.paceLabel}</div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
