"use client";

import Link from "next/link";
import WordCounter from "@/components/WordCounter";

export default function WordCounterPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Compteur de Mots et Caractères en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Comptez instantanément les mots, caractères, phrases et paragraphes de votre texte. 
          Outil gratuit pour rédacteurs, étudiants et professionnels avec calcul du temps de lecture.
        </p>
        <div className="text-center mt-3">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <div className="flex-1 max-w-4xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <WordCounter />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment fonctionne le compteur de mots ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre compteur de mots analyse votre texte en temps réel et fournit des statistiques détaillées sur 
              sa composition. Il compte les mots (séquences de caractères séparées par des espaces), les caractères 
              (avec et sans espaces), les phrases (segments terminés par un point, point d&apos;exclamation ou 
              d&apos;interrogation) et les paragraphes (blocs de texte séparés par des sauts de ligne).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L&apos;outil calcule également le temps de lecture estimé en se basant sur une vitesse moyenne de 
              lecture de 200 à 250 mots par minute pour un lecteur adulte. Cette estimation vous aide à évaluer 
              la longueur de votre contenu du point de vue du lecteur.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Toutes les analyses sont effectuées localement dans votre navigateur, ce qui signifie que votre 
              texte reste privé et n&apos;est jamais envoyé à nos serveurs. Vous pouvez utiliser l&apos;outil en 
              toute confiance pour des documents sensibles ou confidentiels.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du compteur de mots</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">✍️ Rédaction et écriture</h3>
                <p>
                  Parfait pour les écrivains, blogueurs et rédacteurs web qui doivent respecter des limites de 
                  mots spécifiques. Suivez votre progression en temps réel et assurez-vous que vos articles, 
                  essais ou romans respectent les objectifs de longueur fixés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎓 Travaux académiques</h3>
                <p>
                  Les étudiants peuvent vérifier que leurs dissertations, rapports et mémoires respectent les 
                  exigences de longueur imposées par les enseignants. Essentiel pour les travaux universitaires 
                  qui imposent souvent des minimums ou maximums de mots stricts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📱 Réseaux sociaux et marketing</h3>
                <p>
                  Optimisez vos publications pour Twitter (280 caractères), LinkedIn, Facebook et autres 
                  plateformes qui limitent la longueur des posts. Les professionnels du marketing peuvent 
                  affiner leurs messages pour maximiser l&apos;impact dans les limites imposées.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔍 SEO et rédaction web</h3>
                <p>
                  Les spécialistes du SEO utilisent le comptage de mots pour optimiser la longueur des articles 
                  de blog, méta-descriptions et contenus web. Le temps de lecture aide à prévoir l&apos;engagement 
                  des utilisateurs et à structurer le contenu de manière appropriée.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📄 Documents professionnels</h3>
                <p>
                  Contrôlez la longueur de vos CV, lettres de motivation, rapports d&apos;activité et 
                  présentations. Beaucoup d&apos;employeurs et d&apos;institutions fixent des limites strictes 
                  pour ces documents.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour une rédaction efficace</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Respectez les longueurs optimales par type de contenu</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Article de blog : 1 500 - 2 500 mots pour un bon SEO</li>
                  <li>Post LinkedIn : 150 - 300 mots pour un engagement optimal</li>
                  <li>Tweet : jusqu&apos;à 280 caractères (mais les tweets courts performent mieux)</li>
                  <li>Méta-description SEO : 150 - 160 caractères</li>
                  <li>Email professionnel : 50 - 125 mots</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">✂️ Soyez concis</h3>
                <p>
                  Plus n&apos;est pas toujours mieux. Visez la clarté et la concision. Supprimez les mots inutiles, 
                  les répétitions et les phrases trop complexes. Un texte dense et précis est souvent plus efficace 
                  qu&apos;un texte long et dilué.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Structurez vos paragraphes</h3>
                <p>
                  Les paragraphes courts (3-5 phrases) sont plus faciles à lire, surtout sur écran. Utilisez notre 
                  compteur de paragraphes pour vous assurer que votre texte est bien aéré et agréable à lire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⏱️ Pensez au temps de lecture</h3>
                <p>
                  La capacité d&apos;attention en ligne est limitée. Un article de 2 000 mots prend environ 8-10 
                  minutes à lire. Si votre contenu est plus long, assurez-vous qu&apos;il justifie ce temps 
                  d&apos;investissement pour le lecteur.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment sont comptés les mots ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Un mot est défini comme une séquence de caractères séparée par des espaces. Les traits d&apos;union 
                  sont traités comme des séparateurs dans la plupart des cas. Par exemple, &quot;bien-être&quot; compte 
                  pour deux mots.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre caractères avec et sans espaces ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les caractères sans espaces comptent uniquement les lettres, chiffres et symboles. Les caractères 
                  avec espaces incluent également tous les espaces, tabulations et sauts de ligne. Cette distinction 
                  est importante car certaines limites de caractères (comme Twitter) incluent les espaces.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment est calculé le temps de lecture ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Le temps de lecture est estimé en se basant sur une vitesse de lecture moyenne de 200-250 mots 
                  par minute. Cette vitesse varie selon le niveau de difficulté du texte et l&apos;expertise du 
                  lecteur, mais c&apos;est une bonne approximation générale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mon texte est-il stocké ou envoyé quelque part ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, absolument pas. Tout le traitement se fait localement dans votre navigateur. Votre texte 
                  n&apos;est jamais transmis à nos serveurs ni stocké nulle part. Vous pouvez utiliser l&apos;outil 
                  en toute confidentialité.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre compteur de mots</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Analyse en temps réel</strong> - Les statistiques se mettent à jour instantanément à chaque frappe
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Statistiques complètes</strong> - Mots, caractères, phrases, paragraphes et temps de lecture
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Aucune limite, aucune inscription requise
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité totale</strong> - Traitement local, aucune donnée envoyée en ligne
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible mobile</strong> - Fonctionne parfaitement sur smartphone et tablette
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
