import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation | CGU - Outils Gratuits Pro",
  description: "Consultez nos conditions générales d'utilisation pour comprendre les règles d'usage de nos outils gratuits en ligne. Utilisation responsable et légale de tous nos services.",
  keywords: [
    "conditions utilisation",
    "cgu",
    "termes service",
    "conditions générales",
    "mentions légales",
  ],
  alternates: {
    canonical: "/conditions-utilisation",
  },
  openGraph: {
    title: "Conditions d'Utilisation - CGU",
    description: "Conditions générales d'utilisation de nos outils gratuits en ligne.",
    url: "/conditions-utilisation",
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
