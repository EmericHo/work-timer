import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur UUID Gratuit - Créer UUID v1 v4 en Ligne Instantané",
  description: "Générez des UUID (identifiants uniques universels) v1 et v4 gratuitement en ligne. Outil rapide pour créer des GUID aléatoires ou basés sur timestamp pour vos bases de données, APIs et applications.",
  keywords: [
    "générateur uuid",
    "uuid generator",
    "guid generator",
    "générer uuid en ligne",
    "uuid v4",
    "uuid v1",
    "identifiant unique",
    "uuid gratuit",
    "créer uuid",
    "générateur guid",
    "uuid random",
    "uuid aléatoire",
    "identifiant universel",
    "uuid base de données",
  ],
  alternates: {
    canonical: "/generateur-uuid",
  },
  openGraph: {
    title: "Générateur UUID Gratuit - UUID v1 et v4 en Ligne",
    description: "Créez instantanément des identifiants uniques universels (UUID) v1 et v4 pour vos projets de développement. Outil gratuit et sécurisé.",
    url: "/generateur-uuid",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
