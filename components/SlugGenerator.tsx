"use client";

import { useState } from "react";

export default function SlugGenerator() {
  const [input, setInput] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [separator, setSeparator] = useState<string>("-");
  const [lowercase, setLowercase] = useState<boolean>(true);

  const generateSlug = (text: string, sep: string, lower: boolean) => {
    let result = text.trim();

    // Remove accents
    result = result.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Convert to lowercase if option is enabled
    if (lower) {
      result = result.toLowerCase();
    }

    // Replace spaces and special characters with separator
    result = result.replace(/[^a-zA-Z0-9]+/g, sep);

    // Remove leading/trailing separators
    result = result.replace(new RegExp(`^${sep}+|${sep}+$`, "g"), "");

    // Replace multiple separators with single one
    result = result.replace(new RegExp(`${sep}{2,}`, "g"), sep);

    setSlug(result);
  };

  const handleInputChange = (text: string) => {
    setInput(text);
    if (text) {
      generateSlug(text, separator, lowercase);
    } else {
      setSlug("");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(slug).then(
      () => alert("Slug copié dans le presse-papiers!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Texte à convertir
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Ex: Mon Super Article de Blog!"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Séparateur</label>
          <select
            value={separator}
            onChange={(e) => {
              setSeparator(e.target.value);
              if (input) generateSlug(input, e.target.value, lowercase);
            }}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value="-">Tiret (-)</option>
            <option value="_">Underscore (_)</option>
            <option value=".">Point (.)</option>
          </select>
        </div>

        <div className="flex items-center">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(e) => {
                setLowercase(e.target.checked);
                if (input) generateSlug(input, separator, e.target.checked);
              }}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-medium">
              Convertir en minuscules
            </span>
          </label>
        </div>
      </div>

      {slug && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                URL Slug généré
              </p>
              <code className="text-lg font-mono font-bold text-green-900 dark:text-green-100 break-all">
                {slug}
              </code>
            </div>
            <button
              onClick={copyToClipboard}
              className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex-shrink-0"
              title="Copier le slug"
            >
              📋
            </button>
          </div>
          <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-800">
            <p className="text-xs text-green-700 dark:text-green-300">
              URL complète exemple:
            </p>
            <code className="text-xs font-mono text-green-800 dark:text-green-200 break-all">
              https://example.com/blog/{slug}
            </code>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Qu&apos;est-ce qu&apos;un slug URL?
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>SEO-friendly:</strong> Les slugs améliorent le référencement de vos pages</li>
          <li><strong>Lisible:</strong> Facile à lire et à comprendre pour les utilisateurs</li>
          <li><strong>Sans accents:</strong> Tous les caractères spéciaux sont supprimés</li>
          <li><strong>Séparateurs:</strong> Les espaces sont remplacés par des tirets ou underscores</li>
          <li><strong>Usage:</strong> Articles de blog, pages produits, catégories, etc.</li>
        </ul>
      </div>
    </div>
  );
}
