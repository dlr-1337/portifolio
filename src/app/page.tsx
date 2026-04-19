import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { absoluteUrl, siteContent } from "@/content/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.person.name,
  jobTitle: siteContent.person.role,
  description: siteContent.hero.subheadline,
  url: siteContent.seo.siteUrl,
  sameAs: [siteContent.socialLinks.github, siteContent.socialLinks.linkedin],
};

const creativeWorkSchema = siteContent.featuredCases.items
  .filter((project) => project.visibility === "public")
  .map((project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: `${project.solution} ${project.businessValue}`,
  url: absoluteUrl(project.links[0]?.href ?? siteContent.seo.siteUrl),
  keywords: project.stack.join(", "),
  creator: {
    "@type": "Person",
    name: siteContent.person.name,
  },
}));

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <PortfolioPage content={siteContent} />
    </>
  );
}
