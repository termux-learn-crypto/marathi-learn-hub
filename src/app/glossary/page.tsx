import type { Metadata } from "next";
import { glossary } from "@/data/glossary";
import GlossaryContent from "./GlossaryContent";

export const metadata: Metadata = {
  title: { absolute: "Tech Glossary — तंत्रज्ञान शब्दावली | Marathi Learn Hub" },
  description:
    "Computer, programming, web, electronics आणि networking च्या English शब्दांचे सोपे मराठी अर्थ. Simple Marathi meanings of English tech terms — मराठीत तंत्रज्ञान शब्दकोश.",
  keywords: [
    "tech glossary marathi", "मराठी शब्दावली",
    "computer terms in marathi", "संगणक शब्द मराठीत",
    "programming terms marathi", "coding शब्दांचे मराठी अर्थ",
    "variable म्हणजे काय", "html म्हणजे काय", "api म्हणजे काय",
    "cpu म्हणजे काय", "मराठी तंत्रज्ञान शब्दकोश",
  ],
  openGraph: {
    title: "Tech Glossary — तंत्रज्ञान शब्दावली",
    description: "English tech terms चे सोपे मराठी अर्थ — Simple Marathi meanings of computer and programming words.",
    url: "/glossary",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Glossary — तंत्रज्ञान शब्दावली",
    description: "English tech terms चे सोपे मराठी अर्थ. मराठीत तंत्रज्ञान शब्दकोश.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/glossary" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Marathi Learn Hub Tech Glossary - तंत्रज्ञान शब्दावली",
  description: "English tech terms with simple Marathi meanings.",
  inLanguage: ["mr", "en"],
  hasDefinedTerm: glossary.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    alternateName: t.marathiMeaning,
    description: t.description,
    inDefinedTermSet: t.category,
  })),
};

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlossaryContent />
    </>
  );
}