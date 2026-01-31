import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Excuses Gratuit - Excuse Generator Amusant",
  description: "Générez des excuses créatives et amusantes instantanément. Générateur gratuit d'excuses drôles pour toutes situations. Humour et créativité garantis !",
  keywords: [
    "générateur excuses",
    "excuse generator",
    "excuses drôles",
    "excuses amusantes",
    "générateur humour",
    "excuse gratuit",
  ],
  alternates: {
    canonical: "/generateur-excuses",
  },
  openGraph: {
    title: "Générateur d'Excuses - Excuse Generator Fun",
    description: "Créez des excuses créatives et amusantes instantanément. Humour garanti !",
    url: "/generateur-excuses",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur d'Excuses",
    description: "Excuses créatives et drôles.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
