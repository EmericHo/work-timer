import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encodeur URL Gratuit - Encoder/Décoder URL en Ligne",
  description: "Encodez et décodez des URLs instantanément. Outil gratuit d'URL encoding pour transformer caractères spéciaux en format web. Parfait pour développeurs et APIs.",
  keywords: [
    "encodeur url",
    "décodeur url",
    "url encoder",
    "url decoder",
    "encode url",
    "decode url",
    "url encoding",
    "percent encoding",
    "uri encoder",
    "url gratuit",
  ],
  alternates: {
    canonical: "/encodeur-url",
  },
  openGraph: {
    title: "Encodeur/Décodeur URL Gratuit en Ligne",
    description: "Encodez et décodez des URLs instantanément. Outil gratuit pour développeurs.",
    url: "/encodeur-url",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Encodeur URL Gratuit",
    description: "Encodez/décodez URLs instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
