import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur IBAN Gratuit en Ligne - Créer IBAN Test Valide pour Développement",
  description: "Générez des numéros IBAN de test valides gratuitement en ligne pour tous les pays européens. Outil pour développeurs et testeurs nécessitant des IBAN factices pour tests d'applications bancaires et de paiement.",
  keywords: [
    "générateur iban",
    "iban test",
    "numéro compte bancaire",
    "iban gratuit",
    "créer iban",
    "iban factice",
    "iban validation",
    "générateur iban france",
    "iban generator",
    "test iban",
    "iban développement",
    "iban fictif",
    "code iban",
    "numéro iban",
  ],
  alternates: {
    canonical: "/generateur-iban",
  },
  openGraph: {
    title: "Générateur IBAN Gratuit - IBAN de Test pour Développement",
    description: "Créez des numéros IBAN de test valides pour vos développements. Générateur gratuit pour tous les pays avec validation intégrée.",
    url: "/generateur-iban",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
