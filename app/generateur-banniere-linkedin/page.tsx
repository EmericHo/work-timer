"use client";

import Link from "next/link";
import LinkedInBannerGenerator from "@/components/LinkedInBannerGenerator";

export default function LinkedInBannerGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Bannière LinkedIn Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Créez une bannière LinkedIn professionnelle aux dimensions parfaites (1584×396 px). 
          Modèles personnalisables, aperçu en direct et téléchargement gratuit.
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

      <div className="flex-1 max-w-6xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <LinkedInBannerGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi une bannière LinkedIn est-elle importante ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La bannière LinkedIn, également appelée image de couverture ou photo d&apos;arrière-plan, est le 
              premier élément visuel que les visiteurs voient sur votre profil. C&apos;est un espace de 
              1584 × 396 pixels situé en haut de votre page qui offre une opportunité unique de communiquer 
              visuellement votre identité professionnelle, vos compétences ou votre domaine d&apos;expertise.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Une bannière LinkedIn bien conçue peut augmenter significativement l&apos;engagement sur votre profil. 
              Selon des études, les profils avec une bannière personnalisée reçoivent jusqu&apos;à 14 fois plus de 
              vues que ceux utilisant l&apos;arrière-plan par défaut. C&apos;est un élément crucial de votre personal 
              branding qui vous distingue des millions d&apos;utilisateurs LinkedIn.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur gratuit vous permet de créer facilement une bannière professionnelle aux 
              dimensions exactes requises par LinkedIn, sans besoin de compétences en design graphique ou 
              de logiciel coûteux comme Photoshop ou Canva Premium.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Dimensions et spécifications techniques de la bannière LinkedIn</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <h3 className="font-semibold text-lg mb-2">📐 Dimensions officielles</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Taille recommandée:</strong> 1584 × 396 pixels (rapport 4:1)</li>
                  <li><strong>Taille minimale:</strong> 1584 × 396 pixels (même dimension)</li>
                  <li><strong>Taille maximale du fichier:</strong> 8 Mo</li>
                  <li><strong>Formats acceptés:</strong> PNG, JPG/JPEG</li>
                  <li><strong>Résolution recommandée:</strong> 72 DPI minimum pour le web</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">🎯 Zone de sécurité</h3>
                <p className="text-sm mb-2">
                  Sur mobile, votre photo de profil et certaines informations peuvent masquer une partie de 
                  la bannière. Pour garantir que les éléments importants restent visibles sur tous les appareils:
                </p>
                <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                  <li>Évitez de placer du texte ou logos importants dans le coin inférieur gauche (environ 400 × 200 px)</li>
                  <li>Gardez les éléments essentiels dans la moitié supérieure droite</li>
                  <li>Testez votre bannière sur mobile avant de la finaliser</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">⚡ Optimisation des performances</h3>
                <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                  <li>Privilégiez le format PNG pour les designs avec texte net</li>
                  <li>Utilisez JPG pour les photos ou images avec dégradés complexes</li>
                  <li>Compressez votre image pour réduire le temps de chargement (sans perdre en qualité)</li>
                  <li>Évitez les images de moins de 1584 × 396 px qui apparaîtraient floues</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment créer une bannière LinkedIn efficace ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Définissez votre message clé</h3>
                  <p className="text-sm">
                    Avant de commencer, déterminez ce que vous voulez communiquer: votre métier, votre expertise, 
                    votre proposition de valeur ou votre secteur d&apos;activité. Gardez le message simple et percutant.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez un modèle adapté</h3>
                  <p className="text-sm">
                    Notre générateur propose 5 templates professionnels. Sélectionnez celui qui correspond le mieux 
                    à votre secteur: bleu corporate pour la tech/business, couleurs vives pour les créatifs, 
                    minimaliste pour le luxe/conseil.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Personnalisez le texte</h3>
                  <p className="text-sm">
                    Ajoutez votre titre professionnel, slogan ou expertise. Soyez concis (maximum 5-7 mots pour 
                    le titre). Exemples: &quot;Expert en Marketing Digital&quot;, &quot;Coach en Développement Personnel&quot;, 
                    &quot;Développeur Full Stack JavaScript&quot;.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Ajustez les couleurs</h3>
                  <p className="text-sm">
                    Utilisez les couleurs de votre entreprise ou choisissez des teintes qui reflètent votre 
                    personnalité professionnelle. Assurez un contraste élevé entre le fond et le texte pour 
                    garantir la lisibilité (texte blanc sur fond sombre ou inversement).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                <div>
                  <h3 className="font-semibold mb-1">Prévisualisez et téléchargez</h3>
                  <p className="text-sm">
                    Vérifiez l&apos;aperçu en direct, ajustez si nécessaire, puis téléchargez votre bannière au 
                    format PNG. Le fichier sera automatiquement aux dimensions parfaites pour LinkedIn (1584 × 396 px).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment télécharger votre bannière sur LinkedIn ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold text-lg mb-2">📱 Sur ordinateur (Desktop)</h3>
                <ol className="space-y-2 text-sm list-decimal list-inside ml-4">
                  <li>Connectez-vous à votre compte LinkedIn</li>
                  <li>Cliquez sur &quot;Moi&quot; dans la barre de navigation supérieure</li>
                  <li>Sélectionnez &quot;Voir le profil&quot;</li>
                  <li>Cliquez sur l&apos;icône crayon (✏️) en haut à droite de l&apos;image d&apos;arrière-plan actuelle</li>
                  <li>Sélectionnez &quot;Modifier l&apos;image d&apos;arrière-plan&quot; ou &quot;Ajouter une photo de couverture&quot;</li>
                  <li>Cliquez sur &quot;Télécharger une photo&quot; et sélectionnez votre nouvelle bannière</li>
                  <li>Ajustez la position si nécessaire (glisser-déposer)</li>
                  <li>Cliquez sur &quot;Appliquer&quot; pour sauvegarder</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">📱 Sur mobile (iOS/Android)</h3>
                <ol className="space-y-2 text-sm list-decimal list-inside ml-4">
                  <li>Ouvrez l&apos;application LinkedIn</li>
                  <li>Appuyez sur votre photo de profil en haut à gauche</li>
                  <li>Appuyez sur &quot;Voir le profil&quot;</li>
                  <li>Appuyez sur l&apos;icône appareil photo sur l&apos;image d&apos;arrière-plan</li>
                  <li>Sélectionnez &quot;Modifier l&apos;arrière-plan&quot;</li>
                  <li>Choisissez votre bannière depuis votre galerie photos</li>
                  <li>Ajustez et confirmez avec &quot;Enregistrer&quot;</li>
                </ol>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mt-4">
                <h3 className="font-semibold mb-2">💡 Astuce professionnelle</h3>
                <p className="text-sm">
                  Après avoir téléchargé votre nouvelle bannière, attendez quelques minutes puis vérifiez votre 
                  profil en mode navigation privée pour voir exactement comment il apparaît aux autres utilisateurs. 
                  Testez également l&apos;affichage sur mobile pour vous assurer que les éléments importants 
                  restent visibles.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils de design pour une bannière LinkedIn professionnelle</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Restez simple et épuré
                </h3>
                <p className="text-sm ml-6">
                  Évitez la surcharge visuelle. Une bannière efficace communique un message clair en quelques 
                  secondes. Maximum 1-2 phrases courtes ou 3-5 mots-clés. L&apos;espace blanc (ou zones vides) 
                  est votre ami pour une composition équilibrée.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Utilisez des polices lisibles
                </h3>
                <p className="text-sm ml-6">
                  Choisissez des polices sans-serif (Arial, Helvetica) pour une meilleure lisibilité sur écran. 
                  Évitez les polices script ou trop décoratives qui peuvent être difficiles à lire, 
                  particulièrement sur mobile.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Assurez un contraste élevé
                </h3>
                <p className="text-sm ml-6">
                  Le texte doit être facilement lisible. Utilisez du texte blanc sur fond sombre ou du texte 
                  foncé sur fond clair. Testez le contraste en convertissant votre design en niveaux de gris 
                  pour vérifier la lisibilité.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Alignez avec votre marque personnelle
                </h3>
                <p className="text-sm ml-6">
                  Si vous avez une entreprise ou travaillez en freelance, utilisez vos couleurs de marque pour 
                  créer une cohérence visuelle entre votre profil LinkedIn, votre site web et vos cartes de visite.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Adaptez au contexte professionnel
                </h3>
                <p className="text-sm ml-6">
                  LinkedIn est un réseau professionnel. Évitez les images trop personnelles, les slogans 
                  controversés ou l&apos;humour qui pourrait être mal interprété. Restez professionnel tout 
                  en montrant votre personnalité.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Mettez à jour régulièrement
                </h3>
                <p className="text-sm ml-6">
                  Changez votre bannière lors d&apos;événements importants: nouveau poste, lancement de projet, 
                  conférence à venir, publication d&apos;article. Une bannière actualisée montre un profil actif 
                  et peut relancer l&apos;engagement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Testez sur différents appareils
                </h3>
                <p className="text-sm ml-6">
                  Vérifiez l&apos;apparence de votre bannière sur desktop, mobile et tablette. Ce qui fonctionne 
                  sur grand écran peut avoir un rendu différent sur smartphone où votre photo de profil masque 
                  une partie de la bannière.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Incluez un call-to-action subtil
                </h3>
                <p className="text-sm ml-6">
                  Vous pouvez ajouter un CTA discret comme &quot;Contactez-moi pour vos projets&quot;, &quot;Disponible 
                  pour collaboration&quot; ou &quot;Conseils gratuits&quot;. Ne soyez pas trop commercial, mais guidez 
                  les visiteurs vers une action.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Exemples de bannières LinkedIn efficaces par secteur</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">💼 Consulting & Stratégie</h3>
                <p className="text-sm mb-2">
                  <strong>Style:</strong> Minimaliste, couleurs sobres (bleu marine, gris anthracite, blanc)
                </p>
                <p className="text-sm mb-2">
                  <strong>Texte suggéré:</strong> &quot;Consultant en Transformation Digitale&quot;, &quot;Stratégie 
                  d&apos;Entreprise | Croissance & Innovation&quot;
                </p>
                <p className="text-sm">
                  <strong>Conseil:</strong> Privilégiez la simplicité et l&apos;élégance. Les consultants doivent 
                  inspirer confiance et professionnalisme. Un fond uni avec un titre clair suffit.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 Créatifs & Design</h3>
                <p className="text-sm mb-2">
                  <strong>Style:</strong> Coloré, audacieux, typographie créative
                </p>
                <p className="text-sm mb-2">
                  <strong>Texte suggéré:</strong> &quot;Graphic Designer | Branding & Identité Visuelle&quot;, 
                  &quot;UX/UI Designer Passionné&quot;
                </p>
                <p className="text-sm">
                  <strong>Conseil:</strong> C&apos;est l&apos;occasion de montrer votre créativité. Utilisez des 
                  couleurs vives, des dégradés ou des formes géométriques. Votre bannière est une mini-portfolio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">💻 Tech & Développement</h3>
                <p className="text-sm mb-2">
                  <strong>Style:</strong> Moderne, tech, parfois avec éléments de code ou icônes techniques
                </p>
                <p className="text-sm mb-2">
                  <strong>Texte suggéré:</strong> &quot;Full Stack Developer | React • Node.js • AWS&quot;, 
                  &quot;Expert DevOps & Cloud Architecture&quot;
                </p>
                <p className="text-sm">
                  <strong>Conseil:</strong> Mentionnez vos technologies principales. Fond sombre avec texte 
                  clair rappelle l&apos;interface d&apos;un éditeur de code. Incluez les logos tech si pertinent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Marketing & Communication</h3>
                <p className="text-sm mb-2">
                  <strong>Style:</strong> Dynamique, tendance, utilisation stratégique des couleurs
                </p>
                <p className="text-sm mb-2">
                  <strong>Texte suggéré:</strong> &quot;Social Media Manager | Storytelling & Growth&quot;, 
                  &quot;Content Marketing Specialist&quot;
                </p>
                <p className="text-sm">
                  <strong>Conseil:</strong> Votre bannière elle-même est un exemple de votre travail. Montrez 
                  que vous maîtrisez le visual branding et la communication percutante.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">🏢 Corporate & Finance</h3>
                <p className="text-sm mb-2">
                  <strong>Style:</strong> Professionnel, classique, couleurs corporate (bleu, vert, gris)
                </p>
                <p className="text-sm mb-2">
                  <strong>Texte suggéré:</strong> &quot;CFO | Stratégie Financière & Croissance&quot;, 
                  &quot;Expert-Comptable Certifié&quot;
                </p>
                <p className="text-sm">
                  <strong>Conseil:</strong> Dans le secteur financier, la sobriété et le professionnalisme 
                  priment. Évitez l&apos;originalité excessive. Bleu LinkedIn ou couleurs de votre entreprise.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">🎓 Formation & Coaching</h3>
                <p className="text-sm mb-2">
                  <strong>Style:</strong> Inspirant, accessible, couleurs chaleureuses
                </p>
                <p className="text-sm mb-2">
                  <strong>Texte suggéré:</strong> &quot;Coach Professionnel Certifié | Leadership & Performance&quot;, 
                  &quot;Formateur en Soft Skills&quot;
                </p>
                <p className="text-sm">
                  <strong>Conseil:</strong> Votre bannière doit refléter votre approche: bienveillante, 
                  professionnelle et inspirante. Utilisez des couleurs qui évoquent la confiance et l&apos;énergie.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">🏥 Santé & Bien-être</h3>
                <p className="text-sm mb-2">
                  <strong>Style:</strong> Apaisant, rassurant, couleurs douces (vert, bleu pastel)
                </p>
                <p className="text-sm mb-2">
                  <strong>Texte suggéré:</strong> &quot;Psychologue Clinicienne | Thérapie & Accompagnement&quot;, 
                  &quot;Nutritionniste Diplômée&quot;
                </p>
                <p className="text-sm">
                  <strong>Conseil:</strong> Privilégiez des tons apaisants. Votre bannière doit inspirer 
                  confiance, sécurité et professionnalisme médical.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Personal Branding: construire votre marque sur LinkedIn</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Le personal branding est l&apos;art de promouvoir votre expertise, vos valeurs et votre 
                personnalité professionnelle de manière cohérente. Sur LinkedIn, votre bannière joue un 
                rôle central dans cette stratégie de marque personnelle.
              </p>

              <div>
                <h3 className="font-semibold text-lg mb-2">🎯 Définir votre proposition de valeur unique</h3>
                <p className="text-sm mb-2">
                  Avant de créer votre bannière, posez-vous ces questions:
                </p>
                <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                  <li>Quelle est mon expertise principale qui me distingue?</li>
                  <li>Quel problème je résous pour mes clients/employeurs?</li>
                  <li>Quelles valeurs je souhaite véhiculer (innovation, fiabilité, créativité)?</li>
                  <li>Quel est mon public cible sur LinkedIn (recruteurs, clients, partenaires)?</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🔄 Cohérence visuelle multiplateforme</h3>
                <p className="text-sm">
                  Pour un personal branding efficace, maintenez une cohérence visuelle entre:
                </p>
                <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                  <li>Votre bannière LinkedIn</li>
                  <li>Votre photo de profil (tenue, arrière-plan)</li>
                  <li>Vos posts et articles LinkedIn (style, ton)</li>
                  <li>Votre site web personnel ou portfolio</li>
                  <li>Vos autres réseaux sociaux professionnels (Twitter, Medium)</li>
                  <li>Vos cartes de visite et signatures email</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">📈 Mesurer l&apos;impact de votre bannière</h3>
                <p className="text-sm mb-2">
                  Après avoir changé votre bannière, surveillez ces indicateurs sur 30 jours:
                </p>
                <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                  <li>Nombre de visites sur votre profil (LinkedIn Analytics)</li>
                  <li>Nouvelles demandes de connexion</li>
                  <li>Messages InMail reçus</li>
                  <li>Engagement sur vos posts (likes, commentaires, partages)</li>
                  <li>Taux de transformation visite → connexion</li>
                </ul>
                <p className="text-sm mt-2">
                  Si vous ne voyez pas d&apos;amélioration, testez un nouveau design. Le A/B testing fonctionne 
                  aussi pour les profils LinkedIn!
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">💬 Raconter une histoire visuelle</h3>
                <p className="text-sm">
                  Votre bannière + photo de profil + titre + résumé forment ensemble une histoire cohérente. 
                  Par exemple: Bannière &quot;Expert Marketing Digital&quot; + Photo professionnelle + Titre 
                  &quot;Responsable Growth Marketing chez [Entreprise]&quot; + Résumé détaillant vos réalisations.
                  Chaque élément renforce le message des autres.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 mt-4">
                <h3 className="font-semibold mb-2">💡 Astuce d&apos;expert en Personal Branding</h3>
                <p className="text-sm">
                  Les profils LinkedIn les plus performants mettent à jour leur bannière 3-4 fois par an, 
                  en fonction des événements professionnels: promotion, lancement de projet, prise de parole 
                  en conférence, nouvelle certification. Cette actualisation régulière signale un profil 
                  actif et engagé.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Erreurs courantes à éviter</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  Utiliser une image de mauvaise qualité
                </h3>
                <p className="text-sm ml-6">
                  Une bannière pixelisée ou floue donne une impression de manque de professionnalisme. 
                  Respectez toujours les dimensions 1584 × 396 px et utilisez des images haute résolution.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  Surcharger avec trop de texte
                </h3>
                <p className="text-sm ml-6">
                  Évitez les paragraphes entiers ou listes à puces. Votre bannière doit être lisible en 
                  2-3 secondes maximum. Privilégiez un message court et impactant.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  Négliger le contraste texte/fond
                </h3>
                <p className="text-sm ml-6">
                  Texte gris clair sur fond blanc ou texte foncé sur fond sombre sont illisibles. 
                  Testez toujours le contraste. Utilisez des outils comme WebAIM Contrast Checker.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  Oublier l&apos;adaptation mobile
                </h3>
                <p className="text-sm ml-6">
                  Plus de 60% des utilisateurs LinkedIn accèdent à la plateforme via mobile. Votre photo 
                  de profil masque le coin inférieur gauche: ne placez pas d&apos;éléments importants là.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  Être trop générique
                </h3>
                <p className="text-sm ml-6">
                  &quot;Professionnel motivé&quot; ou &quot;Expert passionné&quot; ne communiquent rien de 
                  spécifique. Soyez précis: mentionnez votre métier exact, votre spécialité ou votre secteur.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  Utiliser des photos personnelles inappropriées
                </h3>
                <p className="text-sm ml-6">
                  LinkedIn n&apos;est pas Instagram. Évitez les photos de vacances, selfies décontractés ou 
                  images avec alcool. Restez dans un contexte professionnel.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  Ignorer les droits d&apos;auteur
                </h3>
                <p className="text-sm ml-6">
                  N&apos;utilisez jamais d&apos;images Google sans vérifier les licences. Privilégiez les 
                  banques d&apos;images gratuites (Unsplash, Pexels) ou créez votre propre design avec 
                  notre générateur.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  Ne jamais mettre à jour
                </h3>
                <p className="text-sm ml-6">
                  Une bannière datant de 2018 avec un ancien poste suggère un profil inactif. Actualisez 
                  au moins une fois par an, ou lors de changements professionnels importants.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes (FAQ)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la taille exacte d&apos;une bannière LinkedIn ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La taille officielle est de 1584 × 396 pixels avec un rapport hauteur/largeur de 4:1. 
                  Notre générateur crée automatiquement des bannières à ces dimensions exactes. Le fichier 
                  ne doit pas dépasser 8 Mo et peut être au format PNG ou JPG.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser une photo comme bannière LinkedIn ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, vous pouvez utiliser une photo (paysage professionnel, bureau, vue de ville, etc.). 
                  Cependant, assurez-vous qu&apos;elle soit de haute qualité, aux bonnes dimensions, et qu&apos;elle 
                  n&apos;entre pas en conflit avec votre message professionnel. Beaucoup de professionnels 
                  préfèrent un design graphique avec du texte pour communiquer clairement leur expertise.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Est-ce que la bannière LinkedIn est obligatoire ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, elle n&apos;est pas obligatoire, mais elle est fortement recommandée. Les profils avec 
                  bannière personnalisée reçoivent significativement plus de vues et de demandes de connexion. 
                  Ne pas avoir de bannière fait apparaître le fond bleu générique de LinkedIn, ce qui donne 
                  une impression de profil incomplet ou peu soigné.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment rendre ma bannière visible sur mobile ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Sur mobile, votre photo de profil masque partiellement le coin inférieur gauche de la 
                  bannière (environ 400 × 200 px). Placez vos éléments importants (texte, logo) dans la 
                  moitié supérieure droite de la bannière. Testez toujours votre bannière sur l&apos;app mobile 
                  LinkedIn avant de la finaliser.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je ajouter mon logo d&apos;entreprise sur ma bannière ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, c&apos;est même recommandé si vous êtes entrepreneur, freelance ou si vous représentez 
                  votre entreprise. Placez le logo dans un coin (généralement en haut à droite ou en bas à 
                  droite) sans qu&apos;il domine toute la bannière. Le logo doit compléter, pas remplacer, 
                  votre message principal.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  À quelle fréquence dois-je changer ma bannière LinkedIn ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Il n&apos;y a pas de règle stricte, mais les experts en personal branding recommandent de 
                  mettre à jour votre bannière 2-4 fois par an, ou lors d&apos;événements importants: changement 
                  de poste, lancement de projet majeur, prise de parole en conférence, nouvelle certification, 
                  évolution de votre marque personnelle. Une bannière régulièrement actualisée montre un 
                  profil actif.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelles couleurs fonctionnent le mieux pour une bannière LinkedIn ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cela dépend de votre secteur et de votre marque personnelle. Le bleu (notamment le bleu 
                  LinkedIn #0077B5) inspire confiance et professionnalisme. Le gris/noir évoque 
                  sophistication et élégance. Les couleurs vives (orange, violet, vert) conviennent aux 
                  secteurs créatifs ou tech. L&apos;essentiel est d&apos;assurer un bon contraste avec le texte 
                  et de rester cohérent avec votre identité visuelle.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mon employeur peut-il m&apos;obliger à utiliser une bannière spécifique ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  LinkedIn est votre profil professionnel personnel, pas celui de votre entreprise. Cependant, 
                  certaines entreprises ont des guidelines de personal branding pour leurs employés, surtout 
                  dans des rôles commerciaux ou de direction. Vérifiez la politique de votre entreprise. 
                  Vous pouvez généralement trouver un compromis: utiliser les couleurs de l&apos;entreprise tout 
                  en gardant un message qui vous représente.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser Canva au lieu de ce générateur ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, Canva est un excellent outil avec plus d&apos;options de personnalisation. Notre générateur 
                  gratuit est idéal pour créer rapidement une bannière simple et professionnelle sans compte 
                  ni compétences en design. Canva convient mieux si vous voulez un design plus complexe avec 
                  photos, illustrations, ou multiples éléments graphiques. Les deux approches sont valides 
                  selon vos besoins.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Ma bannière apparaît floue sur LinkedIn, que faire ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Trois causes possibles: (1) Votre image est plus petite que 1584 × 396 px et LinkedIn l&apos;agrandit, 
                  créant du flou. (2) Vous avez trop compressé le fichier JPG. (3) LinkedIn compresse automatiquement 
                  les images lourdes. Solution: utilisez exactement 1584 × 396 px, privilégiez le PNG pour le 
                  texte, optimisez la taille du fichier (entre 500 Ko et 2 Mo est idéal).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur de bannière LinkedIn</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit et sans inscription</strong> - Créez autant de bannières que nécessaire sans frais ni création de compte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Dimensions LinkedIn officielles garanties</strong> - 1584 × 396 px, le format exact requis par LinkedIn
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>5 modèles professionnels prédéfinis</strong> - Templates adaptés à différents secteurs et styles
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Personnalisation complète</strong> - Texte, couleurs, tailles de police, alignement entièrement configurables
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aperçu en temps réel</strong> - Visualisez instantanément chaque modification
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Aucune compétence en design requise, outil simple d&apos;utilisation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Téléchargement instantané PNG</strong> - Format haute qualité optimisé pour LinkedIn
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité totale</strong> - Génération côté client, aucune donnée collectée ou stockée
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible tous navigateurs</strong> - Fonctionne sur Chrome, Firefox, Safari, Edge
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Responsive et mobile-friendly</strong> - Créez votre bannière depuis n&apos;importe quel appareil
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-4">Prêt à améliorer votre profil LinkedIn ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Une bannière LinkedIn professionnelle est un investissement minimal (quelques minutes) pour un 
              impact maximal sur votre visibilité et votre crédibilité. Ne laissez plus le fond bleu générique 
              de LinkedIn définir votre première impression.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Commencez par choisir un modèle ci-dessus, personnalisez-le avec votre texte et vos couleurs, 
              puis téléchargez votre nouvelle bannière. En moins de 5 minutes, vous aurez transformé votre 
              profil LinkedIn en une vitrine professionnelle qui vous démarque réellement.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
