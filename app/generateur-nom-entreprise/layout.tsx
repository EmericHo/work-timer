import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Nom Entreprise Gratuit - Business Name Generator IA",
  description: "Générez des noms d'entreprise créatifs et disponibles instantanément. Générateur gratuit avec suggestions intelligentes pour startup, marque, société. Trouvez le nom parfait pour votre business.",
  keywords: [
    "générateur nom entreprise",
    "business name generator",
    "nom entreprise",
    "nom société",
    "nom startup",
    "générateur marque",
    "brand name generator",
    "nom commercial",
  ],
  alternates: {
    canonical: "/generateur-nom-entreprise",
  },
  openGraph: {
    title: "Générateur Nom Entreprise - Business Name",
    description: "Créez des noms d'entreprise créatifs instantanément. Outil gratuit avec IA.",
    url: "/generateur-nom-entreprise",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Nom Entreprise",
    description: "Générez des noms de business créatifs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
