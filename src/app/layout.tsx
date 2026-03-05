import type { Metadata } from "next";
import { Newsreader, Space_Mono, Syne } from "next/font/google";
import { absoluteUrl, siteContent } from "@/content/site";
import "./globals.css";

const displayFont = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const bodyFont = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.siteUrl),
  title: {
    default: siteContent.seo.title,
    template: `%s | ${siteContent.person.name}`,
  },
  description: siteContent.seo.description,
  keywords: siteContent.seo.keywords,
  category: "portfolio",
  alternates: {
    canonical: siteContent.seo.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: siteContent.seo.locale,
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: siteContent.seo.siteUrl,
    siteName: siteContent.person.name,
    images: [
      {
        url: absoluteUrl(siteContent.seo.ogImage),
        width: 1200,
        height: 630,
        alt: siteContent.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [absoluteUrl(siteContent.seo.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
