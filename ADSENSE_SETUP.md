# Guide Rapide : Activer les Publicités AdSense

Ce guide explique comment activer les publicités AdSense qui ont déjà été intégrées dans votre application.

## 📋 État Actuel

✅ **Déjà Fait** :
- Le code AdSense est intégré dans `app/layout.tsx`
- Le composant `AdSenseAd` est créé et prêt à utiliser
- 4 emplacements publicitaires sont déjà placés :
  - **Page d'accueil** : 3 publicités horizontales
  - **Page timer** : 1 publicité horizontale

❌ **À Faire** :
- Créer un compte Google AdSense
- Obtenir votre ID client AdSense
- Créer des blocs publicitaires
- Configurer les variables d'environnement

## 🚀 Étapes pour Activer les Publicités

### Étape 1 : Créer un Compte AdSense (⏱️ 5 minutes)

1. Allez sur [https://www.google.com/adsense](https://www.google.com/adsense)
2. Cliquez sur **"Commencer"**
3. Remplissez le formulaire :
   - URL de votre site : `https://votre-domaine.com`
   - Adresse email
   - Pays
4. Acceptez les conditions d'utilisation
5. ⏳ **Attendez l'approbation** (peut prendre 1-4 semaines)

> **Note** : Votre site doit avoir un nom de domaine propre (pas localhost ou IP)

### Étape 2 : Obtenir votre ID Client (⏱️ 2 minutes)

Une fois votre compte approuvé :

1. Connectez-vous à [AdSense](https://adsense.google.com)
2. Allez dans **"Sites"** → Votre site
3. Copiez votre **ID client** (format : `ca-pub-XXXXXXXXXXXXXXXX`)

**Exemple** : `ca-pub-7974922980225669`

### Étape 3 : Créer les Blocs Publicitaires (⏱️ 10 minutes)

Vous devez créer **4 blocs publicitaires** dans AdSense :

1. Dans AdSense, allez dans **"Annonces"** → **"Par unité"**
2. Cliquez sur **"Annonces display"**
3. Créez 4 blocs avec ces noms :

| Nom du bloc | Format | Emplacement |
|-------------|--------|-------------|
| `Homepage Top` | Horizontal / Responsive | Après la section hero de la page d'accueil |
| `Homepage Middle` | Horizontal / Responsive | Au milieu de la page d'accueil |
| `Homepage Bottom` | Horizontal / Responsive | Avant le CTA de la page d'accueil |
| `Timer Page Ad` | Horizontal / Responsive | Dans la page timer |

4. Pour chaque bloc :
   - Choisissez **"Display responsive"**
   - Cliquez sur **"Créer"**
   - **Copiez le slot ID** (10 chiffres, ex: `1234567890`)

### Étape 4 : Configurer les Variables d'Environnement (⏱️ 5 minutes)

#### En Développement Local

1. Créez un fichier `.env.local` à la racine du projet :

```bash
# Google AdSense - ID Client
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

2. Remplacez `ca-pub-XXXXXXXXXXXXXXXX` par votre véritable ID client

#### En Production (Vercel, Netlify, etc.)

**Sur Vercel** :
1. Allez dans votre projet → **Settings** → **Environment Variables**
2. Ajoutez : 
   - Name: `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
   - Value: `ca-pub-XXXXXXXXXXXXXXXX`
3. Cliquez sur **"Save"**
4. **Redéployez** votre application

**Sur Netlify** :
1. Allez dans **Site settings** → **Environment variables**
2. Cliquez sur **"Add a variable"**
3. Ajoutez :
   - Key: `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
   - Value: `ca-pub-XXXXXXXXXXXXXXXX`
4. Cliquez sur **"Save"**
5. **Redéployez** votre application

### Étape 5 : Mettre à Jour les Slot IDs dans le Code (⏱️ 5 minutes)

Vous devez remplacer les IDs de slot factices par vos vrais IDs AdSense.

#### 1. Page d'accueil (`app/page.tsx`)

Ouvrez le fichier `app/page.tsx` et cherchez les 3 emplacements `<AdSenseAd>`. Remplacez les slots :

```tsx
// Ad 1 - Après hero section (ligne ~51)
<AdSenseAd 
  slot="VOTRE_SLOT_ID_1"  // ← Remplacez ici
  format="horizontal"
  style={{ minWidth: "320px", maxWidth: "970px", width: "100%", minHeight: "90px" }}
/>

// Ad 2 - Milieu de page (ligne ~278)
<AdSenseAd 
  slot="VOTRE_SLOT_ID_2"  // ← Remplacez ici
  format="horizontal"
  style={{ minWidth: "320px", maxWidth: "970px", width: "100%", minHeight: "90px" }}
/>

// Ad 3 - Avant CTA (ligne ~650)
<AdSenseAd 
  slot="VOTRE_SLOT_ID_3"  // ← Remplacez ici
  format="horizontal"
  style={{ minWidth: "320px", maxWidth: "970px", width: "100%", minHeight: "90px" }}
/>
```

#### 2. Page Timer (`app/timer/page.tsx`)

Ouvrez le fichier `app/timer/page.tsx` et cherchez l'emplacement `<AdSenseAd>`. Remplacez le slot :

```tsx
// Ad - Dans la page timer (ligne ~211)
<AdSenseAd 
  slot="VOTRE_SLOT_ID_4"  // ← Remplacez ici
  format="horizontal"
  style={{ minWidth: "320px", maxWidth: "970px", width: "100%", minHeight: "90px" }}
/>
```

### Étape 6 : Tester (⏱️ 2 minutes)

#### En Développement

1. Lancez votre serveur de développement :
```bash
npm run dev
```

2. Ouvrez [http://localhost:3000](http://localhost:3000)
3. Vous devriez voir :
   - **Sans `NEXT_PUBLIC_ADSENSE_CLIENT_ID`** : Des placeholders gris avec "AdSense Placeholder"
   - **Avec `NEXT_PUBLIC_ADSENSE_CLIENT_ID`** : Des placeholders gris (normal en développement)

#### En Production

1. Déployez votre application
2. Ouvrez votre site en production
3. Les publicités devraient apparaître (peut prendre 1-2 heures)

> **Note** : Les publicités ne s'affichent PAS en développement local, seulement en production avec HTTPS.

### Étape 7 : Vérifier dans AdSense (⏱️ 1 minute)

1. Retournez dans [AdSense](https://adsense.google.com)
2. Allez dans **"Sites"**
3. Vérifiez que votre site est **"Prêt"** (peut prendre 24-48h)
4. Allez dans **"Annonces"** → **"Vue d'ensemble"**
5. Vous devriez voir des statistiques commencer à apparaître

## 📍 Emplacements des Publicités

### Page d'Accueil (3 publicités)

```
┌─────────────────────────────────────┐
│         Section Hero               │
│  Titre + Description                │
└─────────────────────────────────────┘
         ↓
┌═════════════════════════════════════┐
║      📢 PUBLICITÉ 1 (Top)          ║
║      Format: Horizontal             ║
║      Taille: 320px - 970px          ║
└═════════════════════════════════════┘
         ↓
┌─────────────────────────────────────┐
│    Section Outils de Productivité   │
│         (Grille d'outils)           │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│    Section Outils Développeurs      │
│         (Grille d'outils)           │
└─────────────────────────────────────┘
         ↓
┌═════════════════════════════════════┐
║    📢 PUBLICITÉ 2 (Middle)         ║
║      Format: Horizontal             ║
║      Taille: 320px - 970px          ║
└═════════════════════════════════════┘
         ↓
┌─────────────────────────────────────┐
│    Section Générateurs & Aléatoires │
│         (Grille d'outils)           │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│    Section Outils Financiers        │
│         (Grille d'outils)           │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│       Section À propos              │
└─────────────────────────────────────┘
         ↓
┌═════════════════════════════════════┐
║    📢 PUBLICITÉ 3 (Bottom)         ║
║      Format: Horizontal             ║
║      Taille: 320px - 970px          ║
└═════════════════════════════════════┘
         ↓
┌─────────────────────────────────────┐
│       Call to Action (CTA)          │
└─────────────────────────────────────┘
```

### Page Timer (1 publicité)

```
┌─────────────────────────────────────┐
│          Timer Tools                │
│  (Calculateur, Timer, Countdown)    │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│    Pourquoi utiliser le Timer ?     │
│         (Liste de features)         │
└─────────────────────────────────────┘
         ↓
┌═════════════════════════════════════┐
║      📢 PUBLICITÉ (Timer)          ║
║      Format: Horizontal             ║
║      Taille: 320px - 970px          ║
└═════════════════════════════════════┘
         ↓
┌─────────────────────────────────────┐
│   Comment utiliser la technique     │
│          Pomodoro ?                 │
└─────────────────────────────────────┘
```

## 🎯 Emplacements Recommandés

Les publicités sont déjà placées aux meilleurs emplacements :

✅ **Page d'accueil** :
- **Top** : Juste après le hero, haute visibilité
- **Middle** : Entre les sections d'outils, bonne intégration
- **Bottom** : Avant le CTA, pour les utilisateurs qui scrollent

✅ **Page Timer** :
- **Middle** : Entre les features et les instructions, naturel

## 🔧 Personnalisation Avancée

### Ajouter des Publicités sur d'Autres Pages

Si vous voulez ajouter des publicités sur d'autres pages :

1. **Importez le composant** en haut de votre page :
```tsx
import AdSenseAd from "@/components/AdSenseAd";
```

2. **Ajoutez l'emplacement** où vous voulez :
```tsx
<div className="flex justify-center my-8">
  <AdSenseAd 
    slot="VOTRE_NOUVEAU_SLOT_ID"
    format="horizontal"
    style={{ minWidth: "320px", maxWidth: "970px", width: "100%", minHeight: "90px" }}
  />
</div>
```

3. **Créez un nouveau bloc** dans AdSense et utilisez le slot ID

### Formats Disponibles

Le composant `AdSenseAd` supporte 3 formats :

#### 1. Horizontal (Recommandé)
```tsx
<AdSenseAd 
  slot="YOUR_SLOT"
  format="horizontal"
  style={{ minWidth: "320px", maxWidth: "970px", width: "100%", minHeight: "90px" }}
/>
```
- **Utilisation** : Bannières horizontales, entre sections
- **Responsive** : S'adapte de 320px (mobile) à 970px (desktop)

#### 2. Rectangle
```tsx
<AdSenseAd 
  slot="YOUR_SLOT"
  format="rectangle"
  style={{ width: "300px", height: "250px" }}
/>
```
- **Utilisation** : Sidebar, blocs carrés
- **Taille standard** : 300x250px

#### 3. Vertical
```tsx
<AdSenseAd 
  slot="YOUR_SLOT"
  format="vertical"
  style={{ width: "160px", height: "600px" }}
/>
```
- **Utilisation** : Colonnes latérales étroites
- **Taille standard** : 160x600px ou 120x600px

### Personnaliser les Styles

Vous pouvez modifier les styles inline :

```tsx
<AdSenseAd 
  slot="YOUR_SLOT"
  format="horizontal"
  style={{ 
    minWidth: "300px",     // Largeur minimale
    maxWidth: "728px",     // Largeur maximale
    width: "100%",         // Largeur fluide
    minHeight: "90px",     // Hauteur minimale
    margin: "20px auto",   // Centrer et espacer
    padding: "10px"        // Espace interne
  }}
/>
```

## ❓ Problèmes Courants

### Les publicités ne s'affichent pas

**Vérifiez** :
1. ✅ `NEXT_PUBLIC_ADSENSE_CLIENT_ID` est bien configuré
2. ✅ Les slot IDs sont corrects dans le code
3. ✅ Vous êtes en **production** avec **HTTPS** (pas en développement)
4. ✅ Votre compte AdSense est **approuvé**
5. ✅ Attendez 1-2 heures après le déploiement

### Je vois "AdSense Placeholder"

**C'est normal si** :
- ❌ Vous êtes en mode développement (`npm run dev`)
- ❌ `NEXT_PUBLIC_ADSENSE_CLIENT_ID` n'est pas configuré

**Solution** : Les publicités s'affichent seulement en production.

### Les publicités s'affichent mais sont vides

**Raisons possibles** :
- 🕐 **Délai de propagation** : Attendez 24-48h
- 🚫 **Bloqueur de pub** : Désactivez AdBlock pour tester
- 📊 **Pas assez de trafic** : Google peut ne pas avoir d'annonces à afficher
- 🌍 **Géolocalisation** : Moins d'annonces dans certains pays

### Erreur dans la console

Si vous voyez des erreurs :
```
Error loading AdSense: ...
```

**Solutions** :
1. Vérifiez que l'ID client est correct (format `ca-pub-XXXXXXXXXXXXXXXX`)
2. Vérifiez que le script AdSense n'est pas bloqué par un bloqueur de pub
3. Vérifiez dans la console AdSense que votre site est vérifié

## 📊 Suivi des Performances

### Dans AdSense

1. Allez dans **"Rapports"** → **"Vue d'ensemble"**
2. Métriques à suivre :
   - **Revenus** : Combien vous gagnez
   - **Impressions** : Nombre de fois qu'une pub est affichée
   - **Clics** : Nombre de clics sur les pubs
   - **CTR** (Click-Through Rate) : % de clics (bon = 1-2%)
   - **CPC** (Cost Per Click) : Prix par clic
   - **RPM** (Revenue Per Mille) : Revenu pour 1000 impressions

### Par Emplacement

AdSense vous permet de voir quels emplacements performent le mieux :
1. **"Annonces"** → **"Par unité"**
2. Regardez les stats de chaque bloc
3. Optimisez en conséquence

## 📚 Ressources

### Documentation
- [Guide complet AdSense](./.github/docs/PUBLICITE.md) - Guide détaillé avec toutes les infos
- [Composant AdSenseAd](./components/AdSenseAd.tsx) - Code source du composant
- [Layout principal](./app/layout.tsx) - Où le script AdSense est chargé

### Liens Externes
- [AdSense](https://adsense.google.com) - Tableau de bord
- [Support AdSense](https://support.google.com/adsense) - Documentation officielle
- [Politiques AdSense](https://support.google.com/adsense/answer/48182) - Règles à respecter

## 💡 Conseils pour Maximiser les Revenus

### 1. Contenu de Qualité
- Créez du contenu utile et original
- Mettez à jour régulièrement
- Ciblez des mots-clés pertinents

### 2. Trafic Organique
- Optimisez votre SEO
- Partagez sur les réseaux sociaux
- Créez des backlinks de qualité

### 3. Expérience Utilisateur
- Site rapide (< 3 secondes de chargement)
- Mobile-friendly
- Navigation claire
- Pas trop de publicités (max 3 par page)

### 4. Optimisation des Publicités
- Testez différents emplacements
- Utilisez des formats responsive
- Surveillez les métriques dans AdSense
- Évitez les emplacements qui gênent l'UX

## ✅ Checklist Finale

Avant de considérer que tout est prêt :

- [ ] Compte AdSense créé et approuvé
- [ ] ID client AdSense récupéré
- [ ] 4 blocs publicitaires créés dans AdSense
- [ ] Slot IDs copiés
- [ ] `NEXT_PUBLIC_ADSENSE_CLIENT_ID` configuré en production
- [ ] Slot IDs mis à jour dans `app/page.tsx` (3 emplacements)
- [ ] Slot ID mis à jour dans `app/timer/page.tsx` (1 emplacement)
- [ ] Application déployée en production
- [ ] HTTPS activé
- [ ] Publicités visibles sur le site (après 1-2h)
- [ ] Vérification dans AdSense que le site est "Prêt"
- [ ] Politique de confidentialité mise à jour

## 🎉 C'est Tout !

Une fois ces étapes complétées, vos publicités AdSense seront actives et vous commencerez à générer des revenus !

**Temps total estimé** : 30-45 minutes (hors délai d'approbation AdSense)

---

**Besoin d'aide ?**
- Consultez le [guide complet](./.github/docs/PUBLICITE.md)
- Ouvrez une issue sur GitHub
- Contactez le support AdSense
