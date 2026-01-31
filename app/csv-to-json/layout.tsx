import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSV vers JSON Gratuit - Convertir CSV en JSON en Ligne",
  description: "Convertissez vos fichiers CSV en JSON instantanément. Outil gratuit de conversion CSV to JSON avec prévisualisation. Parfait pour développeurs, data analysts et APIs.",
  keywords: [
    "csv to json",
    "csv vers json",
    "convertir csv json",
    "csv json converter",
    "conversion csv",
    "csv parser",
    "json converter",
    "csv to json gratuit",
    "converter en ligne",
  ],
  alternates: {
    canonical: "/csv-to-json",
  },
  openGraph: {
    title: "CSV vers JSON - Convertisseur Gratuit en Ligne",
    description: "Convertissez CSV en JSON instantanément avec prévisualisation. Outil gratuit pour développeurs.",
    url: "/csv-to-json",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CSV vers JSON Gratuit",
    description: "Convertissez CSV en JSON instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
