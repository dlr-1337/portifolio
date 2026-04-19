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

export interface ProofTestimonial {
  title: string;
  quote: string;
  author: string;
  role: string;
  avatarLabel: string;
  rating?: number;
}

export interface ServiceLine {
  label: string;
  title: string;
  description: string;
  signals: string[];
}

export interface CapabilityCluster {
  label: string;
  title: string;
  description: string;
  items: string[];
}

export interface FeaturedCase {
  slug: string;
  title: string;
  source: string;
  visibility: "public" | "private" | "anonymous";
  problem: string;
  solution: string;
  outcome: string;
  businessValue: string;
  stack: string[];
  evidence: string[];
  links: ProjectLink[];
  visualVariant: "studio" | "code" | "window" | "terminal";
}

export interface ProcessStage {
  title: string;
  description: string;
  outcome: string;
  paceLabel: string;
}

export interface HeroTerminalLine {
  prompt?: string;
  command?: string;
  output?: string;
  outputTone?: "default" | "ok";
  indentLevel?: number;
  cursor?: boolean;
}

export interface HeroSticker {
  text: string;
  tone: "accent" | "moss";
}

export interface ContactCard {
  label: string;
  value: string;
  href: string;
}

export interface GithubShowcaseItem {
  name: string;
  label: string;
  visibility: "public" | "private";
  summary: string;
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
    badge: string;
    headline: string;
    highlight: string;
    accentWord: string;
    closingLine: string;
    subheadline: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    stickers: HeroSticker[];
    previewFile: string;
    terminalPreview: HeroTerminalLine[];
  };
  marqueeItems: string[];
  proof: {
    title: string;
    intro: string;
    testimonials: ProofTestimonial[];
  };
  serviceLines: {
    title: string;
    intro: string;
    items: ServiceLine[];
  };
  capabilityClusters: {
    items: CapabilityCluster[];
  };
  featuredCases: {
    title: string;
    intro: string;
    items: FeaturedCase[];
  };
  githubShowcase: {
    title: string;
    intro: string;
    items: GithubShowcaseItem[];
  };
  process: {
    title: string;
    intro: string;
    stages: ProcessStage[];
  };
  closingCta: {
    title: string;
    description: string;
    highlight: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  contactCards: ContactCard[];
  footer: {
    signature: string;
    rights: string;
    note: string;
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
