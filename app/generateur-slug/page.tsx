"use client";

import Link from "next/link";
import SlugGenerator from "@/components/SlugGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartBar, faEye, faFileAlt, faGlobe, faLink, faScissors, faSearch, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function SlugGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Slug URL en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Créez des slugs d&apos;URL optimisés SEO à partir de vos titres. Outil gratuit pour générer des URLs 
          propres, lisibles et adaptées aux moteurs de recherche.
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
          <SlugGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un slug d&apos;URL ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un slug est la partie finale d&apos;une URL qui identifie une page spécifique de manière lisible 
              par l&apos;humain. Par exemple, dans l&apos;URL <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              https://monsite.com/blog/comment-creer-un-slug</code>, le slug est &quot;comment-creer-un-slug&quot;. 
              C&apos;est une version simplifiée et formatée du titre de la page.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les slugs doivent être en minuscules, sans espaces (remplacés par des tirets), sans accents ni 
              caractères spéciaux, et être courts et descriptifs. Un bon slug améliore non seulement le référencement 
              SEO mais aussi l&apos;expérience utilisateur en rendant les URLs faciles à lire, comprendre et partager.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur de slug transforme automatiquement vos titres en slugs optimisés selon les meilleures 
              pratiques du web. Il gère les accents, caractères spéciaux et crée des URLs propres et professionnelles 
              instantanément.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Importance des slugs pour le SEO</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faSearch} className="inline" /> Compréhension par les moteurs de recherche</h3>
                <p>
                  Les moteurs de recherche comme Google utilisent les slugs pour comprendre le contenu de la page. 
                  Un slug descriptif comme &quot;guide-seo-debutants&quot; indique clairement le sujet, aidant Google 
                  à indexer et classer votre page correctement pour les recherches pertinentes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faEye} className="inline" /> Meilleure expérience utilisateur</h3>
                <p>
                  Les URLs lisibles inspirent confiance. Les utilisateurs sont plus susceptibles de cliquer sur 
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mx-1">/recettes-vegetariennes</code> 
                  que sur <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mx-1">?id=12345&cat=8</code>. 
                  Des URLs claires augmentent le taux de clics (CTR) dans les résultats de recherche.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faLink} className="inline" /> Partage et mémorisation</h3>
                <p>
                  Les URLs avec des slugs descriptifs sont plus faciles à partager sur les réseaux sociaux, par email 
                  ou verbalement. Les utilisateurs peuvent même mémoriser et retaper une URL simple comme 
                  &quot;monsite.com/contact&quot; sans avoir à la rechercher.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> Mots-clés dans l&apos;URL</h3>
                <p>
                  Inclure des mots-clés pertinents dans le slug est un signal SEO positif. Si votre page parle de 
                  &quot;marketing digital&quot;, avoir ce terme dans l&apos;URL renforce la pertinence de la page 
                  pour ces mots-clés aux yeux de Google.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Meilleures pratiques pour créer des slugs</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faScissors} className="inline" /> Restez concis</h3>
                <p>
                  Les slugs courts sont préférables. Visez 3-5 mots maximum. Au lieu de 
                  &quot;comment-faire-pour-creer-un-excellent-slug-optimise-seo&quot;, préférez 
                  &quot;creer-slug-optimise-seo&quot;. Gardez les mots-clés importants, supprimez les mots de liaison.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔤 Utilisez des tirets, pas des underscores</h3>
                <p>
                  Les tirets (-) sont le séparateur standard pour les URLs. Google traite les tirets comme des 
                  espaces entre les mots, mais traite les underscores (_) comme faisant partie du mot. Utilisez 
                  toujours des tirets pour la lisibilité SEO optimale.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🚫 Évitez les mots vides (stop words)</h3>
                <p>
                  Les articles (le, la, un), prépositions (de, à, pour) et conjonctions (et, ou) n&apos;apportent 
                  pas de valeur SEO. Supprimez-les pour des slugs plus courts et percutants : &quot;guide-marketing&quot; 
                  au lieu de &quot;le-guide-du-marketing&quot;.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFileAlt} className="inline" /> Tout en minuscules</h3>
                <p>
                  Les URLs sont sensibles à la casse sur certains serveurs. Pour éviter les problèmes de duplication 
                  et garantir la cohérence, utilisez toujours des minuscules. Notre générateur convertit 
                  automatiquement en minuscules.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Gérez les caractères spéciaux</h3>
                <p>
                  Remplacez les accents (é→e, à→a) et supprimez les caractères spéciaux (&amp;, %, @, etc.). 
                  Les caractères non-ASCII peuvent causer des problèmes d&apos;encodage. Notre outil gère 
                  automatiquement ces conversions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage des slugs</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📰 Articles de blog</h3>
                <p>
                  Transformez vos titres d&apos;articles en slugs SEO-friendly. &quot;10 Astuces pour Améliorer 
                  Votre Productivité&quot; devient &quot;10-astuces-ameliorer-productivite&quot;. Cela crée une 
                  URL propre qui décrit clairement le contenu de l&apos;article.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faShoppingCart} className="inline" /> Pages produits e-commerce</h3>
                <p>
                  Créez des URLs descriptives pour vos produits. Au lieu de &quot;/produit/12345&quot;, utilisez 
                  &quot;/chaussures-running-nike-air-max&quot;. Cela améliore le SEO et aide les clients à 
                  comprendre ce qu&apos;ils vont voir.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBook} className="inline" /> Documentation et tutoriels</h3>
                <p>
                  Organisez votre documentation avec des slugs clairs : &quot;/docs/installation-windows&quot;, 
                  &quot;/tutoriel/creer-premier-projet&quot;. Les utilisateurs peuvent naviguer et retrouver 
                  facilement les pages grâce aux URLs explicites.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎓 Cours et formations en ligne</h3>
                <p>
                  Structurez vos modules de cours avec des slugs cohérents : &quot;/cours/javascript/variables&quot;, 
                  &quot;/cours/javascript/fonctions&quot;. Cela facilite la navigation et l&apos;organisation du 
                  contenu pédagogique.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Erreurs courantes à éviter</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faTimes} className="inline" /> Slugs trop longs</h3>
                <p className="text-sm">
                  Un slug de 15 mots n&apos;est pas lisible et dilue la pertinence SEO. Limitez-vous à 3-5 mots 
                  clés qui décrivent précisément le contenu.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faTimes} className="inline" /> Caractères spéciaux non-ASCII</h3>
                <p className="text-sm">
                  Évitez les émojis, symboles ou caractères accentués dans les slugs. Ils peuvent être mal encodés 
                  et créer des URLs cassées ou illisibles (%C3%A9 au lieu de é).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faTimes} className="inline" /> Changer les slugs existants</h3>
                <p className="text-sm">
                  Modifier le slug d&apos;une page publiée casse l&apos;URL et perd le référencement acquis. Si 
                  vous devez changer un slug, mettez en place une redirection 301 depuis l&apos;ancienne URL.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faTimes} className="inline" /> Dates dans les slugs</h3>
                <p className="text-sm">
                  Évitez d&apos;inclure l&apos;année ou la date dans le slug (sauf pour du contenu temporel). 
                  &quot;/guide-seo-2024&quot; semblera obsolète l&apos;année prochaine. Préférez &quot;/guide-seo&quot; 
                  pour du contenu persistant.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur de slug</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Génération instantanée</strong> - Créez des slugs optimisés en temps réel
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Optimisé SEO</strong> - Respecte toutes les meilleures pratiques du référencement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Gestion des accents</strong> - Convertit automatiquement les caractères accentués
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Slugs illimités sans inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Copie en un clic</strong> - Utilisez immédiatement votre slug généré
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
