import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convertisseur Fuseau Horaire Gratuit - Time Zone Converter",
  description: "Convertissez l'heure entre tous les fuseaux horaires instantanément. Outil gratuit de conversion timezone avec heure mondiale. Parfait pour réunions internationales et voyages.",
  keywords: [
    "convertisseur fuseau horaire",
    "time zone converter",
    "conversion timezone",
    "heure mondiale",
    "world clock",
    "fuseau horaire gratuit",
    "convertir heure",
    "timezone calculator",
  ],
  alternates: {
    canonical: "/convertisseur-fuseau-horaire",
  },
  openGraph: {
    title: "Convertisseur Fuseau Horaire - Time Zone",
    description: "Convertissez l'heure entre tous les fuseaux horaires. Outil gratuit.",
    url: "/convertisseur-fuseau-horaire",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Convertisseur Fuseau Horaire",
    description: "Conversion timezone instantanée.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
