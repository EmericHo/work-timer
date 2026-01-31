import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Nous Contacter | Outils Gratuits Pro",
  description: "Contactez-nous pour toute question, suggestion ou support concernant nos outils gratuits. Notre équipe est à votre écoute pour améliorer votre expérience.",
  keywords: [
    "contact",
    "nous contacter",
    "support client",
    "aide en ligne",
    "service client",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - Contactez Notre Équipe",
    description: "Contactez-nous pour questions, suggestions ou support. Nous sommes à votre écoute.",
    url: "/contact",
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
