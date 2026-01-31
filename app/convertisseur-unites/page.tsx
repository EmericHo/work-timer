"use client";

import Link from "next/link";
import UnitConverter from "@/components/UnitConverter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faGlobe, faHardHat, faPlane, faRuler, faRulerHorizontal, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

export default function UnitConverterPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Convertisseur d&apos;Unités en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Convertissez instantanément longueurs, poids, températures, volumes et plus encore. 
          Outil gratuit pour toutes vos conversions d&apos;unités du quotidien et professionnelles.
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
          <UnitConverter />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi convertir les unités de mesure ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La conversion d&apos;unités est essentielle dans de nombreux contextes quotidiens et professionnels. 
              Que vous voyagiez à l&apos;étranger, suiviez une recette de cuisine, travailliez sur un projet de 
              construction, ou étudiez les sciences, vous devrez régulièrement convertir entre différents systèmes 
              de mesure.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les deux principaux systèmes de mesure sont le système métrique (international) et le système 
              impérial (principalement utilisé aux États-Unis). Le système métrique est basé sur des multiples 
              de 10, ce qui rend les conversions plus intuitives. Le système impérial utilise des unités comme 
              les pouces, pieds, miles, livres et gallons, avec des facteurs de conversion moins évidents.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre convertisseur d&apos;unités simplifie ces calculs en effectuant instantanément les conversions 
              pour vous, éliminant les erreurs de calcul manuel et vous faisant gagner un temps précieux.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Types de conversions disponibles</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faRulerHorizontal} className="inline" /> Longueur et distance</h3>
                <p className="mb-2">
                  Convertissez entre mètres, kilomètres, centimètres, millimètres, miles, yards, pieds, pouces. 
                  Essentiel pour les projets de construction, l&apos;immobilier, les voyages et la navigation.
                </p>
                <p className="text-sm">
                  <strong>Exemple :</strong> 1 mètre = 3.28 pieds | 1 kilomètre = 0.621 miles
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBalanceScale} className="inline" /> Poids et masse</h3>
                <p className="mb-2">
                  Convertissez entre kilogrammes, grammes, tonnes, livres, onces. Utile pour la cuisine, 
                  l&apos;expédition, le fitness et les sciences.
                </p>
                <p className="text-sm">
                  <strong>Exemple :</strong> 1 kilogramme = 2.205 livres | 1 once = 28.35 grammes
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faTemperatureHigh} className="inline" /> Température</h3>
                <p className="mb-2">
                  Convertissez entre Celsius, Fahrenheit et Kelvin. Indispensable pour la météo, la cuisine, 
                  les sciences et les voyages internationaux.
                </p>
                <p className="text-sm">
                  <strong>Formules :</strong> °F = (°C × 9/5) + 32 | K = °C + 273.15
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🥤 Volume</h3>
                <p className="mb-2">
                  Convertissez entre litres, millilitres, gallons, pintes, tasses, cuillères. Parfait pour 
                  la cuisine, la chimie et la mécanique automobile.
                </p>
                <p className="text-sm">
                  <strong>Exemple :</strong> 1 litre = 0.264 gallons US | 1 gallon = 3.785 litres
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faRuler} className="inline" /> Surface</h3>
                <p className="mb-2">
                  Convertissez entre mètres carrés, pieds carrés, acres, hectares. Essentiel pour 
                  l&apos;immobilier, l&apos;agriculture et l&apos;aménagement du territoire.
                </p>
                <p className="text-sm">
                  <strong>Exemple :</strong> 1 mètre carré = 10.764 pieds carrés | 1 hectare = 2.471 acres
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Applications pratiques des conversions</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">👨‍🍳 Cuisine et recettes</h3>
                <p>
                  Les recettes internationales utilisent différentes unités. Une recette américaine peut demander 
                  des cups et ounces, tandis qu&apos;une recette européenne utilise des grammes et millilitres. 
                  Les conversions précises garantissent le succès de vos plats.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPlane} className="inline" /> Voyages internationaux</h3>
                <p>
                  Comprendre les limitations de bagages (kg vs lbs), les distances routières (km vs miles), les 
                  températures météo (°C vs °F) et les vitesses (km/h vs mph) facilite grandement vos déplacements 
                  à l&apos;étranger.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faHardHat} className="inline" /> Construction et bricolage</h3>
                <p>
                  Les plans et matériaux peuvent utiliser différentes unités. Convertir précisément les mesures 
                  évite les erreurs coûteuses lors de l&apos;achat de matériaux ou de la réalisation de travaux.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔬 Sciences et éducation</h3>
                <p>
                  Les étudiants et chercheurs doivent régulièrement convertir les unités pour résoudre des 
                  problèmes, analyser des données ou comparer des résultats d&apos;études utilisant différents 
                  systèmes de mesure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💪 Fitness et santé</h3>
                <p>
                  Suivre votre poids (kg vs lbs), vos distances de course (km vs miles), votre taille (cm vs pieds/pouces) 
                  nécessite souvent des conversions, surtout avec des applications ou équipements internationaux.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Système métrique vs système impérial</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Système métrique (SI)</h3>
                <p className="mb-2">
                  Utilisé par presque tous les pays du monde. Basé sur des multiples de 10, ce qui rend les 
                  conversions simples : 1 km = 1000 m, 1 kg = 1000 g. Les préfixes standards (kilo-, centi-, 
                  milli-) s&apos;appliquent de manière cohérente à toutes les unités.
                </p>
                <p className="text-sm">
                  <strong>Avantages :</strong> Logique décimale, universellement accepté, facile à apprendre
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🇺🇸 Système impérial</h3>
                <p className="mb-2">
                  Principalement utilisé aux États-Unis, avec quelques usages au Royaume-Uni et au Canada. 
                  Utilise des unités comme pouces, pieds, yards, miles, onces, livres. Les facteurs de conversion 
                  sont moins intuitifs : 1 mile = 5280 pieds, 1 livre = 16 onces.
                </p>
                <p className="text-sm">
                  <strong>Particularité :</strong> Profondément ancré dans la culture américaine, encore utilisé 
                  dans de nombreux contextes quotidiens
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre convertisseur d&apos;unités</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Multi-catégories</strong> - Longueur, poids, température, volume, surface et plus
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Conversion instantanée</strong> - Résultats en temps réel pendant que vous tapez
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Précision maximale</strong> - Calculs exacts avec plusieurs décimales
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Conversions illimitées sans inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Simple à utiliser sur desktop et mobile
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
