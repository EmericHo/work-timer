import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redimensionneur Image Gratuit - Resize Image en Ligne",
  description: "Redimensionnez vos images (JPG, PNG, WebP) instantanément. Outil gratuit pour changer la taille et résolution de photos. Parfait pour web, réseaux sociaux et print.",
  keywords: [
    "redimensionneur image",
    "resize image",
    "changer taille image",
    "redimensionner photo",
    "image resizer",
    "resize gratuit",
    "dimension image",
  ],
  alternates: {
    canonical: "/redimensionneur-image",
  },
  openGraph: {
    title: "Redimensionneur Image - Resize Photo",
    description: "Redimensionnez vos images instantanément. Outil gratuit et simple.",
    url: "/redimensionneur-image",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Redimensionneur Image",
    description: "Resize images instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
