import { Metadata } from "next";
import Link from "next/link";
import SCIBalanceSheetGenerator from "@/components/SCIBalanceSheetGenerator";

export const metadata: Metadata = {
  title: "Générateur de Bilan SCI - Outil Gratuit pour Société Civile Immobilière 2025",
  description:
    "Générez automatiquement le bilan comptable de votre SCI (Société Civile Immobilière) en important vos dépenses et recettes au format CSV. Outil 100% gratuit conforme à la réglementation française pour SCI soumise à l'IR. Téléchargez le modèle Excel, importez vos données et générez votre bilan PDF en quelques clics.",
  keywords: [
    "générateur bilan SCI",
    "bilan comptable SCI",
    "société civile immobilière",
    "comptabilité SCI",
    "SCI impôt sur le revenu",
    "SCI IR",
    "bilan SCI gratuit",
    "formulaire 2072",
    "déclaration fiscale SCI",
    "comptabilité immobilière",
    "gestion SCI",
    "bilan locatif",
    "revenus fonciers",
    "charges déductibles SCI",
    "recettes SCI",
    "dépenses SCI",
    "loyers SCI",
    "taxe foncière SCI",
    "travaux déductibles",
    "charges copropriété",
    "frais de gestion locative",
    "comptabilité propriétaire bailleur",
    "outil comptable SCI",
    "Excel bilan SCI",
    "PDF bilan SCI",
    "réglementation SCI France",
    "fiscalité SCI",
    "SCI familiale",
    "SCI location",
    "investissement locatif",
  ],
  alternates: {
    canonical: "/generateur-bilan-sci",
  },
  openGraph: {
    title: "Générateur de Bilan SCI - Outil Gratuit Conforme Réglementation Française 2025",
    description:
      "Générez le bilan comptable de votre SCI en quelques clics. Importez vos dépenses/recettes CSV, obtenez un bilan PDF professionnel conforme à la réglementation française.",
    type: "website",
    url: "/generateur-bilan-sci",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Générateur de Bilan SCI - Outil Gratuit pour Société Civile Immobilière",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur de Bilan SCI - Outil Gratuit 2025",
    description:
      "Générez le bilan de votre SCI en important vos données CSV. Outil gratuit conforme à la réglementation française.",
    images: ["/og-image.png"],
  },
};

export default function SCIBalanceSheetPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-4 text-sm sm:text-base"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            🏢 Générateur de Bilan SCI
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Générez automatiquement le bilan comptable de votre Société Civile
            Immobilière en important vos dépenses et recettes. Outil 100%
            gratuit et conforme à la réglementation française.
          </p>
        </header>

        <main className="space-y-8">
          {/* Generator Component */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <SCIBalanceSheetGenerator />
          </section>

          {/* Educational Content */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                📚 Tout savoir sur le bilan comptable d&apos;une SCI
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                La Société Civile Immobilière (SCI) est une structure juridique
                très prisée pour la gestion de patrimoine immobilier en France.
                Si votre SCI est soumise à l&apos;impôt sur le revenu (IR),
                vous devez tenir une comptabilité et établir un bilan annuel
                pour votre déclaration fiscale.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                🎯 Qu&apos;est-ce qu&apos;une SCI soumise à l&apos;IR ?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Une SCI soumise à l&apos;impôt sur le revenu est une société
                civile où les bénéfices (ou déficits) sont directement imposés
                au niveau de chaque associé, proportionnellement à leurs parts
                sociales. Ce régime est le plus courant pour les SCI
                familiales.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                  ✅ Avantages de l&apos;IR pour une SCI :
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-blue-800 dark:text-blue-200">
                  <li>
                    • <strong>Transparence fiscale</strong> : Pas d&apos;impôt
                    au niveau de la société
                  </li>
                  <li>
                    • <strong>Déduction des déficits</strong> : Les pertes sont
                    déductibles du revenu global
                  </li>
                  <li>
                    • <strong>Simplicité</strong> : Comptabilité simplifiée par
                    rapport à l&apos;IS
                  </li>
                  <li>
                    • <strong>Plus-values immobilières</strong> : Régime fiscal
                    favorable avec abattements
                  </li>
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                📊 Les obligations comptables d&apos;une SCI à l&apos;IR
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bien que les obligations comptables d&apos;une SCI à l&apos;IR
                soient allégées comparées à une société à l&apos;IS, il reste
                indispensable de tenir une comptabilité rigoureuse :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
                  <h4 className="font-bold mb-3">📝 Documents obligatoires</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Livre-journal des recettes et dépenses</li>
                    <li>• Grand livre des comptes</li>
                    <li>• Bilan comptable annuel</li>
                    <li>• Compte de résultat</li>
                    <li>• Assemblée générale annuelle</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
                  <h4 className="font-bold mb-3">
                    📅 Déclarations fiscales
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Formulaire 2072 (déclaration SCI)</li>
                    <li>• Annexes 2072-S pour chaque associé</li>
                    <li>• Déclaration de revenus fonciers</li>
                    <li>• Conservation 10 ans minimum</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                💰 Que comptabiliser dans une SCI ?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">
                    📈 PRODUITS (Recettes)
                  </h4>
                  <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                    <li>
                      • <strong>Loyers</strong> : Loyers mensuels encaissés
                    </li>
                    <li>
                      • <strong>Charges locatives</strong> : Charges récupérées
                      auprès des locataires
                    </li>
                    <li>
                      • <strong>Provisions pour charges</strong> : Provisions
                      récupérables
                    </li>
                    <li>
                      • <strong>Indemnités</strong> : Indemnités
                      d&apos;assurance, compensations
                    </li>
                    <li>
                      • <strong>Subventions</strong> : Aides publiques reçues
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-300 dark:border-red-700">
                  <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">
                    📉 CHARGES (Dépenses déductibles)
                  </h4>
                  <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                    <li>
                      • <strong>Impôts locaux</strong> : Taxe foncière, CFE
                    </li>
                    <li>
                      • <strong>Charges de copropriété</strong> : Charges non
                      récupérables
                    </li>
                    <li>
                      • <strong>Travaux</strong> : Réparations, entretien,
                      amélioration
                    </li>
                    <li>
                      • <strong>Assurances</strong> : PNO, multirisque habitation
                    </li>
                    <li>
                      • <strong>Frais de gestion</strong> : Gestion locative,
                      honoraires
                    </li>
                    <li>
                      • <strong>Intérêts d&apos;emprunt</strong> : Intérêts du
                      prêt immobilier
                    </li>
                    <li>
                      • <strong>Frais bancaires</strong> : Frais de compte,
                      commissions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-600 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">
                  ⚠️ Attention aux dépenses non déductibles
                </h4>
                <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                  Certaines dépenses ne sont pas déductibles fiscalement :
                </p>
                <ul className="space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
                  <li>• Capital remboursé de l&apos;emprunt (seuls les intérêts sont déductibles)</li>
                  <li>• Travaux d&apos;agrandissement ou de construction neuve</li>
                  <li>• Amendes et pénalités</li>
                  <li>• Dépenses personnelles des associés</li>
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                🚀 Comment utiliser notre outil ?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre générateur de bilan SCI simplifie considérablement la
                création de votre bilan comptable annuel :
              </p>

              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li>
                  <strong>Téléchargez le modèle CSV</strong> : Un fichier Excel
                  pré-formaté avec toutes les colonnes nécessaires
                </li>
                <li>
                  <strong>Remplissez vos données</strong> : Entrez toutes vos
                  recettes (loyers) et dépenses (charges, travaux, impôts) avec
                  leurs dates et catégories
                </li>
                <li>
                  <strong>Importez le fichier</strong> : Chargez votre CSV dans
                  l&apos;outil qui analyse automatiquement les données
                </li>
                <li>
                  <strong>Vérifiez l&apos;aperçu</strong> : Consultez le bilan
                  calculé avec le total des produits, charges et résultat net
                </li>
                <li>
                  <strong>Générez le PDF</strong> : Téléchargez votre bilan
                  professionnel au format PDF, prêt à archiver ou présenter
                </li>
              </ol>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                📋 Déclaration fiscale : Le formulaire 2072
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Le bilan généré par notre outil vous servira de base pour
                remplir votre <strong>déclaration 2072</strong>, qui doit être
                déposée chaque année avant le 2ème jour ouvré suivant le 1er
                mai.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                  📅 Calendrier fiscal SCI à l&apos;IR :
                </h4>
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <li>
                    • <strong>Avril-Mai</strong> : Dépôt formulaire 2072 et
                    annexes 2072-S
                  </li>
                  <li>
                    • <strong>Mai-Juin</strong> : Déclaration revenus fonciers
                    des associés
                  </li>
                  <li>
                    • <strong>Toute l&apos;année</strong> : Tenir la
                    comptabilité à jour
                  </li>
                  <li>
                    • <strong>Chaque année</strong> : Assemblée générale annuelle
                    (approbation comptes)
                  </li>
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                ❓ Questions fréquentes (FAQ)
              </h3>

              <div className="space-y-4">
                <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">
                    Est-ce obligatoire de tenir une comptabilité pour une SCI à
                    l&apos;IR ?
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Oui, même si les obligations sont allégées comparées à une
                    société à l&apos;IS. Vous devez tenir un livre-journal, un
                    grand livre, et établir un bilan annuel pour votre
                    déclaration 2072.
                  </p>
                </div>

                <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">
                    Puis-je utiliser ce bilan pour ma déclaration fiscale ?
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Ce bilan est un document de synthèse qui vous aidera à
                    remplir votre formulaire 2072. Il présente vos recettes et
                    dépenses de manière claire et conforme à la réglementation.
                    Nous vous recommandons de le conserver avec vos documents
                    comptables.
                  </p>
                </div>

                <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">
                    Combien de temps dois-je conserver mes bilans SCI ?
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Les documents comptables d&apos;une SCI doivent être
                    conservés pendant 10 ans minimum. En cas de contrôle fiscal,
                    l&apos;administration peut demander les 3 dernières années,
                    voire 10 ans en cas de fraude présumée.
                  </p>
                </div>

                <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">
                    Que faire si ma SCI est déficitaire ?
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Un déficit foncier (charges supérieures aux recettes) est
                    déductible des revenus fonciers des associés, dans la limite
                    de 10 700 € par an. L&apos;excédent est reportable sur 10
                    ans. Les intérêts d&apos;emprunt sont déductibles
                    séparément.
                  </p>
                </div>

                <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">
                    Dois-je faire appel à un expert-comptable ?
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Ce n&apos;est pas obligatoire pour une SCI à l&apos;IR,
                    contrairement à une SCI à l&apos;IS. Cependant, un
                    expert-comptable peut vous aider à optimiser votre fiscalité
                    et sécuriser vos déclarations, surtout si votre situation
                    est complexe.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 p-4 rounded-lg mt-6">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">
                  ✅ Pourquoi utiliser notre générateur de bilan SCI ?
                </h4>
                <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                  <li>
                    • <strong>100% gratuit</strong> : Aucun frais, aucune
                    inscription requise
                  </li>
                  <li>
                    • <strong>Conforme à la réglementation</strong> : Respecte
                    les normes comptables françaises
                  </li>
                  <li>
                    • <strong>Gain de temps</strong> : Génération automatique en
                    quelques clics
                  </li>
                  <li>
                    • <strong>Professionnel</strong> : Document PDF propre et
                    structuré
                  </li>
                  <li>
                    • <strong>Sécurisé</strong> : Traitement local, vos données
                    restent confidentielles
                  </li>
                  <li>
                    • <strong>Simple</strong> : Interface intuitive, pas besoin
                    de compétences comptables
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-4 rounded-lg mt-6">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <strong>Avertissement légal :</strong> Cet outil est fourni à
                  titre informatif et ne remplace pas les conseils d&apos;un
                  expert-comptable ou d&apos;un conseiller fiscal. Les
                  informations générées doivent être vérifiées et adaptées à
                  votre situation personnelle. Nous ne pouvons être tenus
                  responsables des erreurs ou omissions dans vos déclarations
                  fiscales.
                </p>
              </div>
            </article>
          </section>

          {/* Additional Resources */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              🔗 Ressources utiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">📚 Documentation officielle</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://www.impots.gouv.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      • Service des Impôts (formulaire 2072)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.service-public.fr/particuliers/vosdroits/F32744"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      • Service-Public.fr : SCI et fiscalité
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">🧮 Autres calculateurs</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/calculatrice-fiscale"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      • Calculatrice fiscale France-Luxembourg
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/calculatrice-avancee"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      • Calculatrice avancée
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
