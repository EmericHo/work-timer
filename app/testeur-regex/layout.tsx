import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testeur Regex Gratuit - Tester Expressions Régulières en Ligne",
  description: "Testez et validez vos expressions régulières (regex) en temps réel. Outil gratuit avec highlighting des matches, capture groups et explications. Parfait pour développeurs JavaScript, Python, PHP.",
  keywords: [
    "testeur regex",
    "regex tester",
    "test expression régulière",
    "regex validator",
    "regular expression tester",
    "regex en ligne",
    "test regex gratuit",
    "regex debugger",
    "expression régulière",
    "regex checker",
  ],
  alternates: {
    canonical: "/testeur-regex",
  },
  openGraph: {
    title: "Testeur Regex - Validez vos Expressions Régulières",
    description: "Testez vos regex en temps réel avec highlighting. Outil gratuit pour développeurs.",
    url: "/testeur-regex",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Testeur Regex Gratuit",
    description: "Testez vos expressions régulières en temps réel.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
