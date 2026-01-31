import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur Intérêts Composés Gratuit - Compound Interest Calculator",
  description: "Calculez vos intérêts composés et croissance d'investissement sur le long terme. Calculateur gratuit avec graphique et projection. Parfait pour épargne et investissements.",
  keywords: [
    "calculateur intérêts composés",
    "compound interest calculator",
    "intérêt composé",
    "calcul investissement",
    "intérêts capitalisés",
    "croissance capital",
    "calculateur épargne",
  ],
  alternates: {
    canonical: "/calculateur-interets-composes",
  },
  openGraph: {
    title: "Calculateur Intérêts Composés - Investment",
    description: "Calculez la croissance de vos investissements avec intérêts composés.",
    url: "/calculateur-interets-composes",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Calculateur Intérêts Composés",
    description: "Calculez vos intérêts composés.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
