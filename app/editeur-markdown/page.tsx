"use client";

import Link from "next/link";
import MarkdownEditor from "@/components/MarkdownEditor";

export default function MarkdownEditorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Éditeur Markdown Gratuit en Ligne avec Prévisualisation
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Écrivez et prévisualisez vos documents Markdown en temps réel. 
          Convertissez instantanément votre texte Markdown en HTML formaté.
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
          <MarkdownEditor />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que Markdown ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Markdown est un langage de balisage léger créé en 2004 par John Gruber et Aaron Swartz. Son objectif 
              principal est de permettre aux gens d&apos;écrire en utilisant un format de texte brut facile à lire et 
              à écrire, qui peut ensuite être converti en HTML structuré. Contrairement au HTML qui peut être 
              verbeux et difficile à lire dans sa forme brute, Markdown utilise une syntaxe simple et intuitive 
              qui reste lisible même sans être convertie.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L&apos;un des grands avantages de Markdown est sa simplicité. Vous n&apos;avez pas besoin d&apos;être un 
              expert en programmation pour l&apos;utiliser efficacement. Les développeurs, rédacteurs techniques, 
              blogueurs et écrivains du monde entier l&apos;adoptent pour sa facilité d&apos;utilisation et sa 
              polyvalence. Des plateformes majeures comme GitHub, Reddit, Stack Overflow, Discord et de nombreux 
              systèmes de gestion de contenu supportent nativement Markdown.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre éditeur Markdown en ligne offre une expérience d&apos;édition fluide avec une prévisualisation 
              en temps réel. Vous voyez instantanément comment votre texte sera rendu, ce qui facilite la 
              rédaction et la mise en forme. L&apos;outil fonctionne entièrement dans votre navigateur, garantissant 
              que vos documents restent privés et ne sont jamais envoyés à nos serveurs.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Que vous rédigiez de la documentation technique, des articles de blog, des fichiers README pour 
              vos projets GitHub, ou simplement des notes personnelles, Markdown offre le parfait équilibre 
              entre simplicité et puissance. La syntaxe est suffisamment simple pour être mémorisée rapidement, 
              mais suffisamment riche pour créer des documents bien structurés avec titres, listes, liens, 
              images, tableaux et blocs de code.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser l&apos;éditeur Markdown ?</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li className="pl-2">
                <strong>Écrivez dans le panneau de gauche</strong> - Tapez votre texte en utilisant la syntaxe 
                Markdown dans la zone d&apos;édition
              </li>
              <li className="pl-2">
                <strong>Visualisez en temps réel</strong> - Le panneau de droite affiche automatiquement la 
                prévisualisation formatée de votre texte
              </li>
              <li className="pl-2">
                <strong>Utilisez la barre d&apos;outils</strong> - Cliquez sur les boutons pour insérer rapidement 
                des éléments Markdown (titres, gras, italique, listes, etc.)
              </li>
              <li className="pl-2">
                <strong>Copiez le résultat</strong> - Une fois satisfait, copiez le Markdown ou exportez-le 
                selon vos besoins
              </li>
              <li className="pl-2">
                <strong>Sauvegardez localement</strong> - Téléchargez votre document au format .md pour le 
                réutiliser plus tard
              </li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              L&apos;éditeur supporte toute la syntaxe Markdown standard ainsi que certaines extensions populaires 
              comme les tableaux, les blocs de code avec coloration syntaxique et les listes de tâches. Vous 
              pouvez également basculer entre le mode édition et le mode prévisualisation plein écran selon 
              vos préférences.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Guide de la syntaxe Markdown</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📝 Titres et sous-titres</h3>
                <p className="mb-2">
                  Utilisez le symbole # pour créer des titres. Plus vous ajoutez de #, plus le titre est petit :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`# Titre niveau 1
## Titre niveau 2
### Titre niveau 3
#### Titre niveau 4`}
                </pre>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">✍️ Formatage du texte</h3>
                <p className="mb-2">
                  Mettez en forme votre texte avec des astérisques ou des underscores :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`*italique* ou _italique_
**gras** ou __gras__
***gras et italique***
~~texte barré~~`}
                </pre>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📋 Listes</h3>
                <p className="mb-2">
                  Créez des listes ordonnées ou non ordonnées facilement :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`Liste non ordonnée:
- Premier élément
- Deuxième élément
  - Sous-élément
  - Autre sous-élément

Liste ordonnée:
1. Premier
2. Deuxième
3. Troisième`}
                </pre>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔗 Liens et images</h3>
                <p className="mb-2">
                  Insérez des liens hypertextes et des images avec une syntaxe simple :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`[Texte du lien](https://example.com)
![Texte alternatif de l'image](url-de-limage.jpg)
[Lien avec titre](https://example.com "Titre au survol")`}
                </pre>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💻 Code</h3>
                <p className="mb-2">
                  Affichez du code inline ou en blocs avec coloration syntaxique :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`Code inline: \`const x = 10;\`

Bloc de code:
\`\`\`javascript
function hello() {
  console.log("Hello World!");
}
\`\`\``}
                </pre>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Tableaux</h3>
                <p className="mb-2">
                  Créez des tableaux structurés avec des pipes et des tirets :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`| Colonne 1 | Colonne 2 | Colonne 3 |
|-----------|-----------|-----------|
| Donnée 1  | Donnée 2  | Donnée 3  |
| Donnée 4  | Donnée 5  | Donnée 6  |`}
                </pre>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💬 Citations</h3>
                <p className="mb-2">
                  Créez des citations en utilisant le symbole &gt; :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`> Ceci est une citation
> Elle peut s'étendre sur plusieurs lignes
>
> Et contenir plusieurs paragraphes`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de Markdown</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🚀 Simplicité et rapidité</h3>
                <p>
                  Markdown est incroyablement facile à apprendre. La plupart des gens peuvent maîtriser les 
                  bases en moins de 15 minutes. Une fois que vous connaissez la syntaxe, vous pouvez écrire 
                  et formater du contenu beaucoup plus rapidement qu&apos;avec un éditeur WYSIWYG traditionnel. 
                  Pas besoin de toucher la souris pour la mise en forme, tout se fait au clavier.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📱 Portabilité universelle</h3>
                <p>
                  Les fichiers Markdown sont de simples fichiers texte qui peuvent être ouverts avec n&apos;importe 
                  quel éditeur de texte, sur n&apos;importe quelle plateforme. Contrairement aux formats 
                  propriétaires comme .docx, vous n&apos;avez pas besoin de logiciel spécifique. Vos documents 
                  seront lisibles dans 10, 20 ou 50 ans, sans dépendre d&apos;un logiciel particulier.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔄 Conversion flexible</h3>
                <p>
                  Markdown peut être facilement converti vers de nombreux formats : HTML pour le web, PDF pour 
                  l&apos;impression, DOCX pour Microsoft Word, EPUB pour les ebooks, et bien d&apos;autres. Des 
                  outils comme Pandoc permettent de transformer un document Markdown en presque n&apos;importe quel 
                  format de sortie.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">👥 Collaboration efficace</h3>
                <p>
                  Étant du texte brut, Markdown fonctionne parfaitement avec les systèmes de contrôle de version 
                  comme Git. Vous pouvez facilement voir les différences entre les versions, fusionner les 
                  modifications de plusieurs auteurs et maintenir un historique complet. C&apos;est pourquoi GitHub 
                  et GitLab utilisent Markdown pour les README et la documentation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Focus sur le contenu</h3>
                <p>
                  Avec Markdown, vous vous concentrez sur le contenu et la structure plutôt que sur l&apos;apparence 
                  visuelle. La mise en forme est séparée du contenu, ce qui permet de maintenir une cohérence 
                  stylistique et de changer facilement le design sans toucher au texte. C&apos;est la philosophie 
                  du &quot;write once, display anywhere&quot;.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage de Markdown</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📚 Documentation technique</h3>
                <p>
                  Markdown est le format de prédilection pour la documentation de logiciels. Les fichiers README, 
                  guides d&apos;installation, documentations API et wikis techniques utilisent massivement Markdown. 
                  La syntaxe pour les blocs de code avec coloration syntaxique en fait un choix naturel pour 
                  documenter du code. Des outils comme MkDocs, Docusaurus et GitBook transforment vos fichiers 
                  Markdown en sites de documentation professionnels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">✍️ Blogging et publication</h3>
                <p>
                  De nombreux générateurs de sites statiques (Jekyll, Hugo, Gatsby, Next.js) utilisent Markdown 
                  pour le contenu des blogs. Vous écrivez vos articles en Markdown et le système génère 
                  automatiquement le HTML. Des plateformes comme Ghost, Dev.to et Hashnode supportent nativement 
                  Markdown. C&apos;est rapide, efficace et vous gardez le contrôle total de votre contenu.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📝 Prise de notes</h3>
                <p>
                  Applications de notes comme Obsidian, Notion, Bear et Joplin utilisent Markdown comme format 
                  principal. Vous pouvez créer des notes structurées avec des liens internes, des listes de 
                  tâches et des tags. La portabilité de Markdown signifie que vous n&apos;êtes jamais enfermé dans 
                  une plateforme particulière et pouvez migrer vos notes facilement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📧 Emails et communications</h3>
                <p>
                  Certains clients email supportent Markdown, permettant d&apos;écrire des emails formatés 
                  rapidement. Des outils comme Markdown Here permettent de composer en Markdown dans Gmail ou 
                  Outlook. Pour les équipes techniques, écrire des emails en Markdown est souvent plus rapide 
                  que d&apos;utiliser des éditeurs riches.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📖 Écriture de livres</h3>
                <p>
                  Des auteurs utilisent Markdown pour écrire des livres entiers. Des outils comme Leanpub 
                  permettent de publier des ebooks directement à partir de fichiers Markdown. La séparation 
                  entre contenu et présentation permet de se concentrer sur l&apos;écriture et de générer 
                  facilement plusieurs formats (ebook, PDF, web).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Extensions et variantes de Markdown</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📦 GitHub Flavored Markdown (GFM)</h3>
                <p>
                  GFM est une variante populaire qui ajoute des fonctionnalités utiles : tableaux, listes de 
                  tâches avec cases à cocher, rayé automatique des URLs, coloration syntaxique du code par 
                  langage, et mentions @utilisateur. C&apos;est le standard de facto pour les projets open source.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Markdown Extra</h3>
                <p>
                  Markdown Extra ajoute le support pour les définitions, les notes de bas de page, les tableaux, 
                  les attributs d&apos;ID pour les titres et d&apos;autres fonctionnalités avancées. Populaire dans 
                  les générateurs de sites statiques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 CommonMark</h3>
                <p>
                  CommonMark est une spécification stricte de Markdown qui vise à éliminer les ambiguïtés de 
                  la spécification originale. Elle définit exactement comment chaque construction Markdown doit 
                  être interprétée, garantissant la cohérence entre les implémentations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔬 R Markdown et Jupyter</h3>
                <p>
                  R Markdown et Jupyter Notebook étendent Markdown pour intégrer du code exécutable et ses 
                  résultats directement dans les documents. Parfait pour la science des données, la recherche 
                  reproductible et l&apos;analyse de données narrative.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Outils et ressources Markdown</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">💼 Éditeurs de bureau</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>Typora</strong> - Éditeur WYSIWYG élégant avec prévisualisation en direct</li>
                  <li><strong>Obsidian</strong> - Puissant pour la prise de notes avec liens et graphes</li>
                  <li><strong>Mark Text</strong> - Open source, simple et efficace</li>
                  <li><strong>Visual Studio Code</strong> - Avec extensions Markdown, parfait pour les développeurs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌐 Éditeurs en ligne</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>StackEdit</strong> - Éditeur complet avec synchronisation cloud</li>
                  <li><strong>Dillinger</strong> - Interface épurée, export vers plusieurs formats</li>
                  <li><strong>HackMD</strong> - Collaboration en temps réel</li>
                  <li><strong>Notre éditeur</strong> - Simple, rapide, sans inscription</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔧 Convertisseurs</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>Pandoc</strong> - Le couteau suisse de la conversion de documents</li>
                  <li><strong>Marked</strong> - Convertisseur JavaScript rapide</li>
                  <li><strong>kramdown</strong> - Convertisseur Ruby populaire</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour bien utiliser Markdown</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Apprenez les raccourcis</strong> - Mémorisez la syntaxe de base pour écrire rapidement 
                  sans consulter la documentation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Utilisez des éditeurs avec prévisualisation</strong> - Voir le rendu en temps réel 
                  évite les erreurs de syntaxe
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Structurez avec des titres</strong> - Utilisez une hiérarchie de titres cohérente 
                  pour améliorer la lisibilité
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Sauvegardez en .md</strong> - Utilisez l&apos;extension .md ou .markdown pour vos 
                  fichiers Markdown
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Testez la compatibilité</strong> - Si vous ciblez une plateforme spécifique (GitHub, 
                  Reddit), testez que votre Markdown s&apos;affiche correctement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Utilisez le contrôle de version</strong> - Git fonctionne parfaitement avec Markdown 
                  pour suivre les modifications
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur Markdown</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Markdown est-il difficile à apprendre ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, Markdown est l&apos;un des langages de balisage les plus simples. La plupart des gens 
                  peuvent maîtriser les bases (titres, gras, italique, listes, liens) en 15-30 minutes. La 
                  syntaxe est intuitive et facile à mémoriser.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser Markdown pour des documents professionnels ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Absolument. De nombreuses entreprises utilisent Markdown pour leur documentation technique, 
                  leurs wikis internes et leurs processus de publication. Markdown peut être converti en PDF 
                  ou DOCX pour un usage professionnel traditionnel.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre Markdown et HTML ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Markdown est un langage simplifié qui se convertit en HTML. Il est beaucoup plus facile à 
                  écrire et à lire que le HTML, mais offre moins de contrôle précis sur la mise en page. Pour 
                  la plupart des documents, Markdown suffit largement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mes fichiers Markdown seront-ils lisibles dans le futur ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui. Étant du texte brut, les fichiers Markdown seront toujours lisibles, même dans des 
                  décennies. Vous n&apos;avez pas besoin de logiciel propriétaire, n&apos;importe quel éditeur de 
                  texte peut ouvrir un fichier .md.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Peut-on inclure du HTML dans Markdown ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, la plupart des parseurs Markdown permettent d&apos;inclure du HTML brut pour les cas où 
                  vous avez besoin de fonctionnalités non supportées par Markdown. Cela offre une grande 
                  flexibilité tout en gardant la simplicité pour le texte courant.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
