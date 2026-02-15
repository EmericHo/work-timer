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
- **Multilingual Support**: 18 language support with translated blog content (4 languages fully translated: fr, en, es, de)

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

This application is ready for Google AdSense with **4 ad placements already integrated**:
- **Homepage**: 3 horizontal ad units (top, middle, bottom)
- **Timer page**: 1 horizontal ad unit
- **Blog pages**: Header banner, sidebar (300x600), in-article (336x280)

### 🚀 Quick Start - AdSense Setup

1. **Get approved by Google AdSense**
   - Go to [https://adsense.google.com](https://adsense.google.com)
   - Create an account and submit your site for review
   - Wait for approval (usually 1-2 weeks)

2. **Configure environment variables**
   ```bash
   # In your .env.local file
   NEXT_PUBLIC_ADSENSE_ID=ca-pub-YOUR-PUBLISHER-ID
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-YOUR-PUBLISHER-ID
   ```

3. **Create ad units in AdSense dashboard**
   - Create 4 display ad units:
     - Header Banner (728x90 or responsive)
     - Sidebar (300x600)
     - In-Article (336x280)
     - Footer Sticky (320x50 mobile)
   - Copy each ad unit ID

4. **Update ad slot IDs**
   Edit `lib/adsense.ts` and replace placeholder slot IDs with your real ones:
   ```typescript
   export const AD_SLOTS = {
     HEADER_BANNER: { slot: 'YOUR-SLOT-ID-1', ... },
     SIDEBAR: { slot: 'YOUR-SLOT-ID-2', ... },
     IN_ARTICLE: { slot: 'YOUR-SLOT-ID-3', ... },
     FOOTER_STICKY: { slot: 'YOUR-SLOT-ID-4', ... },
   };
   ```

5. **Deploy and verify**
   - Deploy your site with the environment variables
   - Check that ads appear correctly (may take 24-48h for first display)
   - Monitor performance in AdSense dashboard

### Development Mode
In development, placeholder ads (gray boxes) are shown. Set `NEXT_PUBLIC_ADSENSE_ID` in production to display real ads.

### 📚 Complete Documentation
See **[ADSENSE_SETUP.md](ADSENSE_SETUP.md)** for step-by-step instructions to activate ads (30 minutes).

See **[PUBLICITE.md](.github/docs/PUBLICITE.md)** for comprehensive information:
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

## Blog Integration

This application now includes a complete blog system powered by MDX and Contentlayer:

### Features
- **SEO Optimized**: Full E-E-A-T compliance with Schema.org markup
- **MDX Support**: Write articles in Markdown with React components
- **Categories & Tags**: Organize content by finance, immo, tech categories
- **Reading Time**: Automatic calculation of article reading time
- **Related Tools**: Link blog articles to relevant tools on the platform
- **AdSense Ready**: Ad placements in blog pages (header, sidebar, in-article)
- **Responsive Design**: Mobile-first design for all blog pages

### Adding New Blog Articles

1. Create a new `.mdx` file in `content/blog/`:
   ```bash
   touch content/blog/your-article-slug.mdx
   ```

2. Add frontmatter metadata:
   ```yaml
   ---
   title: "Your Article Title"
   date: "2026-02-15"
   author: "Alex Veldra"
   image: "/blog/your-image.jpg"
   tags: ["tag1", "tag2", "tag3"]
   category: "finance" # or "immo", "tech"
   description: "Short description for SEO"
   keywords: "SEO keywords, separated by commas"
   relatedTools: ["tool-slug-1", "tool-slug-2"]
   ---
   ```

3. Write your article content in Markdown
4. Build the project - Contentlayer will automatically process the MDX

### Blog Structure
- `/blog` - Main blog page with all articles
- `/blog/[slug]` - Individual article pages
- `/blog/categorie/[slug]` - Category-filtered article lists

## Multilingual System

This application supports 18 languages with a dynamic language switching system. Blog content is available in 4 languages (French, English, Spanish, German).

### Supported Languages

The following 18 languages are supported in the UI:
- **Français** (fr) 🇫🇷 - Default language
- **English** (en) 🇬🇧
- **Español** (es) 🇪🇸
- **Deutsch** (de) 🇩🇪
- **Italiano** (it) 🇮🇹
- **Português** (pt) 🇵🇹
- **Nederlands** (nl) 🇳🇱
- **Polski** (pl) 🇵🇱
- **Русский** (ru) 🇷🇺
- **日本語** (ja) 🇯🇵
- **中文** (zh) 🇨🇳
- **한국어** (ko) 🇰🇷
- **العربية** (ar) 🇸🇦 - RTL support
- **हिन्दी** (hi) 🇮🇳
- **Türkçe** (tr) 🇹🇷
- **Svenska** (sv) 🇸🇪
- **Dansk** (da) 🇩🇰
- **Norsk** (no) 🇳🇴

### Blog Content Translation

Blog articles are organized by language in the `content/blog/` directory:

```
content/blog/
├── fr/          # French articles (original)
├── en/          # English translations
├── es/          # Spanish translations
└── de/          # German translations
```

### Language Switcher

The language switcher appears in two different positions depending on screen size:

- **Desktop**: Sticky button on the left sidebar at `top-24 left-4`
- **Mobile**: Floating button at the bottom-right corner

The switcher shows:
- Top 9 most common languages
- Separator
- Additional 9 languages under "More Languages"
- Current language highlighted with a checkmark
- Dark mode support

### Adding New Translations

#### Translating Blog Articles

1. Create the language directory if it doesn't exist:
   ```bash
   mkdir -p content/blog/[lang-code]
   ```

2. Copy an existing article from `fr/` to the new language directory

3. Translate the frontmatter and content:
   ```yaml
   ---
   title: "Translated Title"
   description: "Translated description"
   keywords: "translated, keywords"
   # Keep these unchanged:
   date: "2026-02-15"
   author: "Alex Veldra"
   image: "/blog/same-image.jpg"
   category: "finance"
   tags: ["tag1", "tag2"]
   relatedTools: ["tool-slug-1", "tool-slug-2"]
   ---
   ```

4. Important translation rules:
   - Keep ALL markdown formatting (headers, lists, links, images)
   - Translate naturally, not word-by-word
   - Keep proper nouns unchanged (Veldra, PEA, ETF, etc.)
   - Adapt idiomatic expressions for the target language
   - Preserve the exact structure (H2, H3, lists, etc.)
   - Do NOT translate: code blocks, URLs, tool names in `relatedTools`

#### Translating UI Elements

UI translations are stored in `translations/`:

```
translations/
├── fr.ts        # French UI translations
├── en.ts        # English UI translations
├── es.ts        # Spanish UI translations
├── de.ts        # German UI translations
└── index.ts     # Translation exports
```

To add a new UI language:

1. Create a new file `translations/[lang].ts`
2. Copy the structure from `translations/en.ts`
3. Translate all strings
4. Export the translations in `translations/index.ts`

### Language Detection

The application automatically detects the user's browser language on first visit and sets it as the default. The language preference is stored in localStorage and persists across sessions.

### API Endpoints

The multilingual system includes API routes for dynamic content loading:

- `/api/blog?lang=[lang-code]` - Get all blog posts and categories for a language
- Articles are loaded dynamically when the user switches languages

### Technical Implementation

- **Context-based**: Uses React Context API for global language state
- **Client-side switching**: Language changes are instant, no page reload needed
- **Server-side rendering**: Blog pages use SSG (Static Site Generation) for SEO
- **Dynamic loading**: Blog content is fetched via API when language changes
- **Type-safe**: Full TypeScript support with language types

### SEO Considerations

- Default language (French) is used for static generation
- Each translated article maintains the same slug across languages
- Consider adding hreflang tags for better multilingual SEO
- Blog metadata (title, description) is translated for each language

### Project Structure

- `/app` - Next.js App Router pages
  - `/timer` - Timer page with Pomodoro mode
  - `/blog` - Blog system (list, articles, categories)
  - `/[tool-name]` - 60+ tool pages
- `/components` - Reusable React components
  - `PomodoroFocus.tsx` - Pomodoro component with notifications
  - `AdSenseAd.tsx` - AdSense placeholder component
  - `/ads` - AdSense components (Banner, Sidebar, InArticle, ConsentBanner)
  - `/blog` - Blog components (ArticleCard, BlogPreview, BlogList, CategoryFilter)
  - `/seo` - SEO components (SchemaArticle, AuthorBox)
- `/content/blog` - MDX blog articles
- `/lib` - Utility functions and configurations
  - `adsense.ts` - AdSense configuration and helpers
- `/public/blog` - Blog images and assets

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- LocalStorage API - State persistence
- Notifications API - Browser alerts

## License

MIT License - see [LICENSE](LICENSE) file for details.
