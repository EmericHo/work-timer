"use client";

import Link from "next/link";
import ImageCompressor from "@/components/ImageCompressor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMobileAlt, faRocket } from '@fortawesome/free-solid-svg-icons';

export default function ImageCompressorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Compresseur d&apos;Image Gratuit en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Réduisez la taille de vos images JPG, PNG et WebP sans perte de qualité visible. 
          Optimisez vos photos pour le web et gagnez de l&apos;espace de stockage.
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
          <ImageCompressor />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi compresser vos images ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La compression d&apos;images est essentielle pour optimiser les performances de votre site web et 
              économiser de l&apos;espace de stockage. Les images non compressées peuvent considérablement ralentir 
              le temps de chargement de vos pages, ce qui nuit à l&apos;expérience utilisateur et au référencement SEO.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre compresseur d&apos;image en ligne gratuit utilise des algorithmes avancés pour réduire la taille 
              de vos fichiers tout en maintenant une qualité visuelle optimale. Vous pouvez ajuster le niveau de 
              compression selon vos besoins et visualiser le résultat en temps réel avant de télécharger l&apos;image 
              compressée.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Que vous soyez développeur web, photographe, blogueur ou gestionnaire de site e-commerce, notre outil 
              vous permet d&apos;optimiser facilement vos images pour le web sans nécessiter de logiciel complexe ou 
              coûteux. Le traitement se fait entièrement dans votre navigateur, garantissant la confidentialité de 
              vos images.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser notre compresseur d&apos;image ?</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li className="pl-2">
                <strong>Sélectionnez votre image</strong> - Cliquez sur le bouton pour choisir un fichier JPG, PNG 
                ou WebP depuis votre ordinateur
              </li>
              <li className="pl-2">
                <strong>Ajustez la qualité</strong> - Utilisez le curseur pour définir le niveau de compression 
                souhaité (10% à 100%)
              </li>
              <li className="pl-2">
                <strong>Compressez</strong> - Cliquez sur le bouton de compression pour traiter votre image
              </li>
              <li className="pl-2">
                <strong>Comparez les résultats</strong> - Visualisez côte à côte l&apos;image originale et 
                l&apos;image compressée avec les tailles de fichier
              </li>
              <li className="pl-2">
                <strong>Téléchargez</strong> - Si le résultat vous convient, téléchargez votre image optimisée
              </li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de la compression d&apos;images pour le web</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faRocket} className="inline" /> Amélioration des performances</h3>
                <p>
                  Les images compressées se chargent plus rapidement, ce qui améliore significativement la vitesse 
                  de votre site web. Google privilégie les sites rapides dans ses résultats de recherche, ce qui 
                  peut améliorer votre référencement naturel.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💾 Économie de bande passante</h3>
                <p>
                  En réduisant la taille de vos images, vous diminuez la consommation de bande passante de votre 
                  site. Cela se traduit par des coûts d&apos;hébergement réduits et une meilleure expérience pour 
                  vos visiteurs qui utilisent des connexions mobiles limitées.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Optimisation mobile</h3>
                <p>
                  Les utilisateurs mobiles représentent plus de 50% du trafic web. Des images légères garantissent 
                  une navigation fluide même sur des connexions 3G ou 4G, améliorant l&apos;expérience utilisateur 
                  et réduisant le taux de rebond.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faLock} className="inline" /> Confidentialité garantie</h3>
                <p>
                  Contrairement à certains outils en ligne, notre compresseur traite vos images directement dans 
                  votre navigateur. Vos photos ne sont jamais envoyées sur nos serveurs, garantissant une 
                  confidentialité totale de vos données.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour optimiser vos images</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Choisissez le bon format</strong> - JPG pour les photos, PNG pour les graphiques avec 
                  transparence, WebP pour le meilleur compromis qualité/taille
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Adaptez la résolution</strong> - Redimensionnez vos images aux dimensions d&apos;affichage 
                  réelles avant de les compresser
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Testez différents niveaux</strong> - Commencez avec 80% de qualité, c&apos;est souvent 
                  un bon compromis entre taille et qualité
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Automatisez pour plusieurs images</strong> - Pour des besoins récurrents, considérez 
                  l&apos;utilisation d&apos;outils de compression en batch
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur la compression d&apos;images</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  La compression dégrade-t-elle la qualité de mes images ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, la compression avec perte (comme JPEG) réduit légèrement la qualité, mais avec un réglage 
                  approprié (70-90%), la différence est imperceptible à l&apos;œil nu. Vous pouvez ajuster le 
                  curseur de qualité pour trouver le meilleur équilibre.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mes images sont-elles envoyées sur un serveur ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, tout le traitement se fait localement dans votre navigateur. Vos images ne quittent jamais 
                  votre appareil, garantissant une confidentialité totale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre JPG et PNG ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  JPG utilise une compression avec perte, idéal pour les photos. PNG utilise une compression sans 
                  perte, parfait pour les graphiques, logos et images nécessitant de la transparence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je compresser plusieurs images à la fois ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Actuellement, l&apos;outil traite une image à la fois. Pour des besoins de compression en masse, 
                  vous devrez traiter chaque image individuellement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
