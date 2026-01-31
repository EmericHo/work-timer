"use client";

import { useState } from "react";

interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  author: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
}

export default function SEOMetaTagGenerator() {
  const [metaTags, setMetaTags] = useState<MetaTags>({
    title: "",
    description: "",
    keywords: "",
    author: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    twitterCard: "summary_large_image",
  });
  const [generatedHTML, setGeneratedHTML] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const handleInputChange = (field: keyof MetaTags, value: string) => {
    setMetaTags({ ...metaTags, [field]: value });
  };

  const generateMetaTags = () => {
    const tags: string[] = [];

    if (metaTags.title) {
      tags.push(`<title>${metaTags.title}</title>`);
      tags.push(`<meta name="title" content="${metaTags.title}">`);
    }

    if (metaTags.description) {
      tags.push(`<meta name="description" content="${metaTags.description}">`);
    }

    if (metaTags.keywords) {
      tags.push(`<meta name="keywords" content="${metaTags.keywords}">`);
    }

    if (metaTags.author) {
      tags.push(`<meta name="author" content="${metaTags.author}">`);
    }

    tags.push(`<meta name="viewport" content="width=device-width, initial-scale=1.0">`);
    tags.push(`<meta charset="UTF-8">`);

    if (metaTags.ogTitle) {
      tags.push(`<meta property="og:title" content="${metaTags.ogTitle}">`);
    }

    if (metaTags.ogDescription) {
      tags.push(`<meta property="og:description" content="${metaTags.ogDescription}">`);
    }

    if (metaTags.ogImage) {
      tags.push(`<meta property="og:image" content="${metaTags.ogImage}">`);
    }

    tags.push(`<meta property="og:type" content="website">`);

    if (metaTags.twitterCard) {
      tags.push(`<meta name="twitter:card" content="${metaTags.twitterCard}">`);
    }

    if (metaTags.ogTitle) {
      tags.push(`<meta name="twitter:title" content="${metaTags.ogTitle}">`);
    }

    if (metaTags.ogDescription) {
      tags.push(`<meta name="twitter:description" content="${metaTags.ogDescription}">`);
    }

    if (metaTags.ogImage) {
      tags.push(`<meta name="twitter:image" content="${metaTags.ogImage}">`);
    }

    const html = `<head>\n  ${tags.join("\n  ")}\n</head>`;
    setGeneratedHTML(html);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedHTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">SEO Meta Tags Generator</h2>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Page Title <span className="text-xs text-gray-500">(50-60 characters)</span>
          </label>
          <input
            type="text"
            value={metaTags.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Your awesome page title"
            maxLength={60}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <p className="text-xs text-gray-500 mt-1">{metaTags.title.length}/60</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description <span className="text-xs text-gray-500">(150-160 characters)</span>
          </label>
          <textarea
            value={metaTags.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="A compelling description of your page"
            rows={3}
            maxLength={160}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <p className="text-xs text-gray-500 mt-1">{metaTags.description.length}/160</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Keywords <span className="text-xs text-gray-500">(comma-separated)</span>
          </label>
          <input
            type="text"
            value={metaTags.keywords}
            onChange={(e) => handleInputChange("keywords", e.target.value)}
            placeholder="keyword1, keyword2, keyword3"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Author
          </label>
          <input
            type="text"
            value={metaTags.author}
            onChange={(e) => handleInputChange("author", e.target.value)}
            placeholder="Your name or company"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Open Graph / Social Media</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                OG Title
              </label>
              <input
                type="text"
                value={metaTags.ogTitle}
                onChange={(e) => handleInputChange("ogTitle", e.target.value)}
                placeholder="Social media title"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                OG Description
              </label>
              <textarea
                value={metaTags.ogDescription}
                onChange={(e) => handleInputChange("ogDescription", e.target.value)}
                placeholder="Social media description"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                OG Image URL
              </label>
              <input
                type="url"
                value={metaTags.ogImage}
                onChange={(e) => handleInputChange("ogImage", e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Twitter Card Type
              </label>
              <select
                value={metaTags.twitterCard}
                onChange={(e) => handleInputChange("twitterCard", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="summary">Summary</option>
                <option value="summary_large_image">Summary Large Image</option>
                <option value="app">App</option>
                <option value="player">Player</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={generateMetaTags}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors mb-6"
      >
        Generate Meta Tags
      </button>

      {generatedHTML && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">Generated HTML</h3>
            <button
              onClick={copyToClipboard}
              className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition-colors"
            >
              {copied ? "Copied!" : "Copy All"}
            </button>
          </div>
          <pre className="p-4 bg-gray-900 text-green-400 rounded-lg overflow-auto text-sm">
            <code>{generatedHTML}</code>
          </pre>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 SEO Tips</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-300 list-disc list-inside space-y-1">
          <li>Title: Keep it under 60 characters for best display in search results</li>
          <li>Description: Aim for 150-160 characters to avoid truncation</li>
          <li>Use relevant keywords naturally in title and description</li>
          <li>OG Image: Use 1200x630px for best social media display</li>
          <li>Make each page&apos;s meta tags unique and descriptive</li>
        </ul>
      </div>
    </div>
  );
}
