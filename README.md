# Work Timer - Timer Focus Gratuit pour Travail

A productivity timer application built with Next.js 15, React, TypeScript, and Tailwind CSS, featuring Pomodoro technique support.

## Features

- **Timer Standard**: Full HH:MM:SS timer with Start/Stop/Reset controls
- **Mode Pomodoro Focus**: 25 minutes work / 5 minutes break cycles with automatic switching
- **Browser Notifications**: Desktop notifications when Pomodoro sessions complete
- **LocalStorage Persistence**: Timer state is saved and restored on page reload
- **AdSense Ready**: Placeholder components for 300x250 sidebar and 728x90 footer ads (see [PUBLICITE.md](PUBLICITE.md))
- **SEO Optimized**: 
  - Complete metadata with rich keywords for search engines
  - Dynamic robots.txt and sitemap.xml
  - Enhanced Open Graph and Twitter Cards
  - Structured data (Schema.org): WebApplication, FAQPage, Organization
  - Google Search Console verification support
  - Security headers for better SEO trust signals
  - Optimized content with semantic HTML
- **Accessibility**: 
  - `aria-live` regions for timer updates
  - `aria-label` on all interactive elements
  - WCAG 4.5:1 contrast ratios
  - Visible focus indicators
- **Responsive Design**: Mobile-first Tailwind CSS with minimum 16px font size
- **French Localization**: Complete French interface with geo-targeting

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

## Advertising Integration

This application is ready for Google AdSense or other advertising networks. See [PUBLICITE.md](PUBLICITE.md) for:
- Complete Google AdSense setup guide
- Complete Google Analytics setup guide (for tracking traffic)
- Domain name requirements
- Policy specifications and requirements
- Technical implementation instructions
- Alternative advertising solutions

## SEO Configuration

This application is fully optimized for search engines. To maximize your SEO performance:

### 1. Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Required for proper SEO
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# Optional: Verify your site in Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

### 2. Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website URL)
3. Verify ownership using the meta tag method:
   - Copy the verification code provided
   - Add it to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in your `.env.local`
4. Submit your sitemap: `https://your-domain.com/sitemap.xml`

### 3. SEO Features Included

- **robots.txt**: Automatically generated at `/robots.txt` - allows all crawlers and points to sitemap
- **sitemap.xml**: Dynamic sitemap at `/sitemap.xml` - lists all pages with priorities and update frequencies
- **Rich Metadata**: Keywords, descriptions, and meta tags optimized for "timer", "pomodoro", "productivité"
- **Structured Data**: 
  - WebApplication schema for app information
  - FAQPage schema for common questions
  - Organization schema for brand identity
- **Open Graph**: Complete Facebook/LinkedIn preview optimization
- **Twitter Cards**: Optimized for Twitter sharing
- **Security Headers**: HSTS, X-Frame-Options, CSP for better trust signals
- **Performance**: Compression enabled, image optimization, DNS prefetch

### 4. Content Optimization

The application includes SEO-optimized content with:
- French keywords: "timer gratuit", "pomodoro", "productivité", "chronomètre"
- Semantic HTML structure (proper heading hierarchy)
- Internal linking between pages
- Descriptive alt texts and ARIA labels
- Mobile-first responsive design

### 5. Monitoring SEO Performance

After deployment:
- Use Google Search Console to monitor indexing and search performance
- Check for crawl errors and fix any issues
- Monitor which keywords bring traffic
- Update content based on search analytics

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
