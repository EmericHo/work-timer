import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Générateur UUID Gratuit - Créer UUID v1 v4 en Ligne Instantané",
  description: "Générez des UUID (identifiants uniques universels) v1 et v4 gratuitement en ligne. Outil rapide pour créer des GUID aléatoires ou basés sur timestamp pour vos bases de données, APIs et applications.",
  keywords: [
    "générateur uuid",
    "uuid generator",
    "guid generator",
    "générer uuid en ligne",
    "uuid v4",
    "uuid v1",
    "identifiant unique",
    "uuid gratuit",
    "créer uuid",
    "générateur guid",
    "uuid random",
    "uuid aléatoire",
    "identifiant universel",
    "uuid base de données",
  ],
  alternates: {
    canonical: "/generateur-uuid",
  },
  openGraph: {
    title: "Générateur UUID Gratuit - UUID v1 et v4 en Ligne",
    description: "Créez instantanément des identifiants uniques universels (UUID) v1 et v4 pour vos projets de développement. Outil gratuit et sécurisé.",
    url: "/generateur-uuid",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Générateur UUID Gratuit en Ligne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur UUID Gratuit - v1 et v4",
    description: "Créez instantanément des UUID v1 et v4 pour vos projets. 100% gratuit.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "/" },
          { name: "Générateur UUID", url: "/generateur-uuid" },
        ]}
      />
      <SoftwareApplicationSchema
        name="Générateur UUID Gratuit - v1 et v4"
        description="Générez des identifiants uniques universels (UUID) v1 et v4 instantanément. Outil gratuit pour créer des UUID aléatoires ou basés sur timestamp pour vos bases de données et applications."
        url="/generateur-uuid"
        category="DeveloperApplication"
        keywords={[
          "générateur uuid",
          "uuid v4",
          "uuid v1",
          "guid generator",
          "identifiant unique"
        ]}
        features={[
          "Génération UUID v1 (basée sur timestamp)",
          "Génération UUID v4 (aléatoire)",
          "Génération instantanée",
          "Génération en masse",
          "Copie en un clic",
          "Format RFC 4122",
          "Validation UUID",
          "Aucune limitation d'utilisation",
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "Qu'est-ce qu'un UUID ?",
            answer: "Un UUID (Universally Unique Identifier) ou GUID (Globally Unique Identifier) est un identifiant de 128 bits utilisé en informatique pour identifier des informations de manière unique. Les UUIDs sont standardisés par l'RFC 4122 et sont largement utilisés dans les bases de données, les systèmes distribués et les applications web."
          },
          {
            question: "Quelle est la différence entre UUID v1 et v4 ?",
            answer: "UUID v1 est basé sur l'horodatage (timestamp) et l'adresse MAC de la machine, créant un identifiant unique lié au temps et à l'appareil. UUID v4 est généré de manière totalement aléatoire. Pour la plupart des applications, UUID v4 est recommandé car il offre une meilleure confidentialité."
          },
          {
            question: "Les UUID sont-ils vraiment uniques ?",
            answer: "La probabilité de générer deux UUID v4 identiques est astronomiquement faible (environ 1 sur 5,3 × 10^36). Dans la pratique, les UUIDs sont considérés comme uniques. C'est pourquoi ils sont utilisés comme identifiants primaires dans de nombreuses bases de données."
          },
          {
            question: "Puis-je utiliser les UUID générés dans mes projets ?",
            answer: "Oui, tous les UUIDs générés peuvent être utilisés librement dans vos projets personnels ou commerciaux. Ils sont générés selon le standard RFC 4122 et sont compatibles avec tous les systèmes et langages de programmation."
          },
          {
            question: "Comment copier un UUID généré ?",
            answer: "Cliquez simplement sur le bouton 'Copier' à côté de l'UUID généré pour le copier dans votre presse-papiers. Vous pouvez également sélectionner le texte et utiliser Ctrl+C (ou Cmd+C sur Mac) pour le copier."
          }
        ]}
      />
      {children}
    </>
  );
}
