import { motion } from "motion/react";
import type { SiteContent } from "@/types/content";
import { sectionReveal, sectionTransition } from "./section-motion";

interface ProofSectionProps {
  content: SiteContent["proof"];
}

export function ProofSection({ content }: ProofSectionProps) {
  return (
    <motion.section
      id="clientes"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={sectionTransition}
      variants={sectionReveal}
    >
      <div className="section-head">
        <div>
          <div className="num">- 04 / clientes</div>
          <h2>{content.title}</h2>
        </div>
        <p className="intro">{content.intro}</p>
      </div>

      <div className="testimonials">
        {content.testimonials.map((item) => (
          <article key={item.title} className="testimonial">
            <div className="stars" aria-label={`${item.rating ?? 5} de 5 estrelas`}>
              {"*".repeat(item.rating ?? 5)}
            </div>
            <h3 className="testimonial-title">{item.title}</h3>
            <p className="quote">{item.quote}</p>
            <div className="who">
              <div className="avatar">{item.avatarLabel}</div>
              <div>
                <div className="name">{item.author}</div>
                <div className="role">{item.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
