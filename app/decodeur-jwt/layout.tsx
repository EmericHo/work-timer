import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Décodeur JWT Gratuit - Décoder JSON Web Token en Ligne",
  description: "Décodez et analysez vos JSON Web Tokens (JWT) instantanément. Outil gratuit pour développeurs avec visualisation du header, payload et signature. Validation et debug de tokens JWT.",
  keywords: [
    "décodeur jwt",
    "jwt decoder",
    "json web token",
    "decode jwt",
    "jwt parser",
    "jwt validator",
    "jwt debugger",
    "jwt en ligne",
    "jwt gratuit",
    "token decoder",
  ],
  alternates: {
    canonical: "/decodeur-jwt",
  },
  openGraph: {
    title: "Décodeur JWT - Analysez vos JSON Web Tokens",
    description: "Décodez et validez vos JWT instantanément. Outil gratuit pour développeurs.",
    url: "/decodeur-jwt",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Décodeur JWT Gratuit",
    description: "Décodez et analysez vos JSON Web Tokens.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
