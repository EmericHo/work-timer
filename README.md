# Work Timer - Timer Focus Gratuit pour Travail

Application Next.js 15 de suivi de temps et technique Pomodoro pour améliorer la productivité.

## Fonctionnalités

- **Timer Standard**: Timer HH:MM:SS avec boutons Démarrer/Arrêter/Reset
- **Mode Pomodoro Focus**: Cycles de 25 minutes de travail / 5 minutes de pause
- **Notifications Browser**: Alertes automatiques pour les transitions Pomodoro
- **Persistance LocalStorage**: Sauvegarde automatique de l'état du timer
- **AdSense Ready**: Placeholders pour publicités (300x250 sidebar, 728x90 footer)
- **SEO Optimisé**: Metadata complète, og:image, schema WebApplication
- **Accessibilité**: aria-live pour timer, labels, contraste 4.5:1, focus visible
- **Design Responsive**: Tailwind CSS mobile-first avec minimum 16px de police

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build Production

```bash
npm run build
npm start
```

## Structure

- `/app` - Pages Next.js (App Router)
  - `/timer` - Page du timer avec mode Pomodoro
- `/components` - Composants React réutilisables
  - `PomodoroFocus.tsx` - Composant Pomodoro avec notifications
  - `AdSenseAd.tsx` - Placeholder pour AdSense

## Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- LocalStorage API
- Notifications API
