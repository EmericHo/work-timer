import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Hash Gratuit - MD5 SHA1 SHA256 SHA512 en Ligne",
  description: "Générez des hash MD5, SHA-1, SHA-256, SHA-512 instantanément. Outil gratuit de hashage cryptographique pour sécurité et vérification d'intégrité. Parfait pour développeurs et cybersécurité.",
  keywords: [
    "générateur hash",
    "hash generator",
    "md5 generator",
    "sha256 generator",
    "sha512",
    "hash cryptographique",
    "checksum generator",
    "hash en ligne",
    "hash gratuit",
    "crypto hash",
  ],
  alternates: {
    canonical: "/generateur-hash",
  },
  openGraph: {
    title: "Générateur Hash - MD5 SHA256 SHA512 Gratuit",
    description: "Générez des hash cryptographiques instantanément. Outil gratuit pour développeurs.",
    url: "/generateur-hash",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Hash Gratuit",
    description: "Créez MD5, SHA-256, SHA-512 instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
