import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter Gratuit - Beautifier Validateur Minifier JSON en Ligne",
  description: "Formatez, validez et minifiez vos données JSON en ligne gratuitement. Outil JSON formatter pour beautifier, indenter et valider la syntaxe de vos fichiers JSON. Traitement côté client sécurisé.",
  keywords: [
    "json formatter",
    "json beautifier",
    "json validator",
    "json minifier",
    "formatter json en ligne",
    "valider json",
    "json pretty print",
    "json lint",
    "beautifier json gratuit",
    "minifier json",
    "json parser",
    "format json",
    "json viewer",
    "json editor",
  ],
  alternates: {
    canonical: "/json-formatter",
  },
  openGraph: {
    title: "JSON Formatter - Beautifier et Validateur JSON Gratuit",
    description: "Formatez, validez et minifiez vos données JSON instantanément. Outil gratuit et sécurisé pour beautifier vos fichiers JSON.",
    url: "/json-formatter",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
