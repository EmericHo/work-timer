import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Questions Fréquentes | Outils Gratuits Pro",
  description: "Trouvez des réponses à toutes vos questions sur nos outils gratuits : utilisation, fonctionnalités, confidentialité, sécurité. Support et aide pour tous nos services en ligne.",
  keywords: [
    "faq",
    "questions fréquentes",
    "aide outils gratuits",
    "support en ligne",
    "questions réponses",
    "aide utilisation",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - Questions Fréquentes sur nos Outils",
    description: "Réponses à toutes vos questions sur nos outils gratuits. Aide et support.",
    url: "/faq",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
