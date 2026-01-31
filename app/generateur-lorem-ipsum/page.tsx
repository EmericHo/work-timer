"use client";

import Link from "next/link";
import LoremIpsumGenerator from "@/components/LoremIpsumGenerator";

export default function LoremIpsumGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur Lorem Ipsum en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Générez du texte Lorem Ipsum pour vos maquettes et prototypes. Outil gratuit pour créer du faux texte 
          en paragraphes, phrases ou mots pour le design et le développement web.
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
          <LoremIpsumGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que le Lorem Ipsum ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lorem Ipsum est un texte de remplissage (placeholder text) utilisé depuis le 16ème siècle dans 
              l&apos;industrie de l&apos;imprimerie et de la typographie. C&apos;est un texte pseudo-latin qui n&apos;a 
              pas de sens réel mais qui ressemble à du texte normal, permettant aux designers de se concentrer sur 
              l&apos;aspect visuel sans être distraits par le contenu.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le texte Lorem Ipsum est dérivé d&apos;un traité de Cicéron écrit en 45 avant J.-C., &quot;De Finibus 
              Bonorum et Malorum&quot; (Des fins des biens et des maux). Le texte a été modifié et mélangé au fil 
              du temps pour créer le Lorem Ipsum moderne qui commence par &quot;Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit...&quot;
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur vous permet de créer instantanément la quantité de Lorem Ipsum dont vous avez besoin 
              pour vos projets de design, maquettes web, prototypes d&apos;applications et présentations. Choisissez 
              entre paragraphes, phrases ou mots selon vos besoins spécifiques.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi utiliser Lorem Ipsum ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 Focus sur le design</h3>
                <p>
                  Lorem Ipsum permet aux designers et clients de se concentrer sur l&apos;apparence visuelle, la 
                  mise en page et la typographie sans être distraits par le contenu réel. Les gens ont tendance 
                  à lire et critiquer le texte réel plutôt que d&apos;évaluer le design.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📏 Distribution réaliste des lettres</h3>
                <p>
                  Contrairement à répéter &quot;Texte texte texte&quot; ou utiliser du texte aléatoire, Lorem Ipsum 
                  a une distribution de lettres et de mots similaire au français ou à l&apos;anglais. Cela donne 
                  une apparence naturelle et réaliste à la mise en page.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔄 Standard de l&apos;industrie</h3>
                <p>
                  Lorem Ipsum est universellement reconnu comme texte de remplissage. Designers, développeurs et 
                  clients savent immédiatement qu&apos;il s&apos;agit d&apos;un placeholder temporaire et non du 
                  contenu final, évitant toute confusion.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚡ Gain de temps</h3>
                <p>
                  Plutôt que d&apos;inventer ou de copier du texte réel, générez instantanément la quantité exacte 
                  de texte nécessaire. C&apos;est particulièrement utile quand vous avez besoin de remplir plusieurs 
                  sections ou créer de multiples prototypes rapidement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du Lorem Ipsum</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🖼️ Maquettes et wireframes</h3>
                <p>
                  Remplissez vos maquettes Figma, Adobe XD, Sketch ou autres outils de design avec du Lorem Ipsum 
                  pour montrer comment le contenu réel s&apos;intégrera. Cela aide les clients à visualiser la 
                  structure et le flux du site ou de l&apos;application.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💻 Développement web</h3>
                <p>
                  Pendant le développement, utilisez Lorem Ipsum pour tester la mise en page, les styles CSS et 
                  le responsive design avant que le contenu réel soit disponible. Cela permet de continuer le 
                  développement sans attendre les rédacteurs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📝 Templates et thèmes</h3>
                <p>
                  Les créateurs de templates WordPress, Bootstrap ou autres frameworks utilisent Lorem Ipsum dans 
                  leurs démos pour montrer comment le design gère différentes longueurs de texte et structures 
                  de contenu.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Présentations clients</h3>
                <p>
                  Présentez des concepts de design aux clients avec Lorem Ipsum pour qu&apos;ils se concentrent 
                  sur l&apos;esthétique, la navigation et l&apos;expérience utilisateur plutôt que sur le contenu 
                  temporaire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🧪 Tests typographiques</h3>
                <p>
                  Testez différentes polices, tailles, espacements et hiérarchies de texte avec Lorem Ipsum. 
                  Comparez comment différents choix typographiques affectent la lisibilité et l&apos;apparence 
                  du contenu.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Histoire du Lorem Ipsum</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                Contrairement à la croyance populaire, Lorem Ipsum n&apos;est pas simplement du texte aléatoire. 
                Ses racines remontent à un texte classique latin de 45 avant J.-C., ce qui lui donne plus de 2000 
                ans d&apos;histoire.
              </p>
              <p>
                Richard McClintock, professeur de latin au Hampden-Sydney College en Virginie, a découvert la 
                source indubitable du Lorem Ipsum en recherchant les occurrences du mot latin &quot;consectetur&quot; 
                dans la littérature classique. Il a trouvé que le texte provenait des sections 1.10.32 et 1.10.33 
                du &quot;De Finibus Bonorum et Malorum&quot; de Cicéron.
              </p>
              <p>
                Le Lorem Ipsum standard utilisé depuis les années 1500 est reproduit ci-dessous pour ceux que cela 
                intéresse. Les sections 1.10.32 et 1.10.33 du &quot;De Finibus Bonorum et Malorum&quot; de Cicéron 
                sont aussi reproduites dans leur forme originale exacte, accompagnées de la traduction anglaise de 
                la version de 1914 par H. Rackham.
              </p>
              <p className="text-sm italic">
                Le texte a été adopté par l&apos;industrie de l&apos;imprimerie au 16ème siècle quand un imprimeur 
                anonyme a assemblé une galée de caractères et les a mélangés pour créer un livre de spécimens de 
                polices. Il a survécu non seulement à cinq siècles, mais aussi au bond dans la composition 
                électronique, restant essentiellement inchangé.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Alternatives au Lorem Ipsum</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">📚 Contenu de marque</h3>
                <p className="text-sm">
                  Certains préfèrent utiliser du contenu réaliste lié à leur domaine plutôt que du Lorem Ipsum. 
                  Par exemple, un site de cuisine pourrait utiliser des recettes, même temporaires, pour mieux 
                  représenter le contexte final.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎭 Lorem Ipsum thématiques</h3>
                <p className="text-sm">
                  Il existe des variantes amusantes comme Bacon Ipsum (thème viande), Hipster Ipsum (termes hipster), 
                  ou encore Cupcake Ipsum (pâtisseries). Ces alternatives peuvent ajouter une touche d&apos;humour 
                  aux prototypes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✍️ Contenu réel provisoire</h3>
                <p className="text-sm">
                  Certaines équipes préfèrent utiliser du contenu réel dès le début, même s&apos;il est incomplet. 
                  Cela aide à mieux évaluer si la longueur et le ton du contenu fonctionnent avec le design.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur Lorem Ipsum</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Quantité personnalisable</strong> - Générez exactement le nombre de paragraphes, phrases ou mots nécessaires
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Génération instantanée</strong> - Obtenez votre texte immédiatement sans attente
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Générations illimitées sans inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Copie facile</strong> - Copiez tout le texte en un clic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Lorem Ipsum classique</strong> - Texte standard reconnu par l&apos;industrie
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
