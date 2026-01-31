import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Code-Barres Gratuit - Barcode Generator en Ligne",
  description: "Générez des codes-barres (EAN-13, UPC, Code128, QR Code) instantanément. Générateur gratuit avec téléchargement PNG/SVG. Parfait pour e-commerce, inventaire et produits.",
  keywords: [
    "générateur code barres",
    "barcode generator",
    "code barre gratuit",
    "ean 13 generator",
    "upc generator",
    "code128",
    "barcode en ligne",
    "créer code barre",
    "barcode maker",
  ],
  alternates: {
    canonical: "/generateur-code-barres",
  },
  openGraph: {
    title: "Générateur Code-Barres - Barcode Generator",
    description: "Créez des codes-barres EAN-13, UPC, Code128 instantanément. Téléchargement PNG/SVG gratuit.",
    url: "/generateur-code-barres",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Code-Barres",
    description: "Générez des barcodes instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
