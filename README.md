# Work Timer - Timer Focus Gratuit pour Travail

A productivity timer application built with Next.js 15, React, TypeScript, and Tailwind CSS, featuring Pomodoro technique support.

## Features

- **Timer Standard**: Full HH:MM:SS timer with Start/Stop/Reset controls
- **Mode Pomodoro Focus**: 25 minutes work / 5 minutes break cycles with automatic switching
- **Browser Notifications**: Desktop notifications when Pomodoro sessions complete
- **LocalStorage Persistence**: Timer state is saved and restored on page reload
- **AdSense Ready**: Placeholder components for 300x250 sidebar and 728x90 footer ads
- **SEO Optimized**: Complete metadata, Open Graph tags, and WebApplication schema
- **Accessibility**: 
  - `aria-live` regions for timer updates
  - `aria-label` on all interactive elements
  - WCAG 4.5:1 contrast ratios
  - Visible focus indicators
- **Responsive Design**: Mobile-first Tailwind CSS with minimum 16px font size
- **French Localization**: Complete French interface

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

- `/app` - Next.js App Router pages
  - `/timer` - Timer page with Pomodoro mode
- `/components` - Reusable React components
  - `PomodoroFocus.tsx` - Pomodoro component with notifications
  - `AdSenseAd.tsx` - AdSense placeholder component

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- LocalStorage API - State persistence
- Notifications API - Browser alerts

## License

MIT License - see [LICENSE](LICENSE) file for details.
