export interface ContactLinks {
  whatsapp: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectCase {
  slug: string;
  title: string;
  context: string;
  solution: string;
  impact: string;
  stack: string[];
  links: ProjectLink[];
  image?: string;
}

export interface SiteContent {
  person: {
    name: string;
    role: string;
    location: string;
    availability: string;
    tagline: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  manifesto: {
    title: string;
    paragraphs: string[];
  };
  projects: {
    title: string;
    subtitle: string;
    labels: {
      context: string;
      solution: string;
      impact: string;
    };
    items: ProjectCase[];
  };
  process: {
    title: string;
    timeline: Array<{
      stage: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    description: string;
    highlight: string;
    socialCtaLabel: string;
  };
  footer: {
    signature: string;
    rights: string;
  };
  socialLinks: ContactLinks;
  socialLabels: {
    github: string;
    linkedin: string;
  };
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    ogImage: string;
    locale: string;
    keywords: string[];
  };
}
