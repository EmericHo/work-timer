"use client";

import { useState, useCallback } from "react";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState<string>("# Bienvenue dans l'éditeur Markdown\n\nCommencez à écrire votre contenu ici...\n\n## Fonctionnalités supportées\n\n- **Gras** et *italique*\n- [Liens](https://example.com)\n- `Code inline`\n\n```\nBloc de code\n```\n\n> Citations\n\n1. Listes numérotées\n2. Deuxième élément");
  const [previewMode, setPreviewMode] = useState<"split" | "preview" | "edit">("split");

  const renderMarkdown = useCallback((text: string): string => {
    // Escape HTML to prevent XSS
    const escapeHtml = (unsafe: string): string => {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    let html = escapeHtml(text);
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold my-3">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold my-4">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold my-4">$1</h1>');
    
    // Bold and Italic (after HTML escaping, these are safe)
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // Links - sanitize URLs
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      // Only allow http, https, and relative URLs
      if (url.match(/^(https?:\/\/|\/)/)) {
        return `<a href="${url}" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }
      return text; // Invalid URL, just return the text
    });
    
    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-900 text-gray-100 p-4 rounded my-3 overflow-x-auto"><code>$1</code></pre>');
    
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">$1</code>');
    
    // Blockquotes
    html = html.replace(/^&gt; (.+)$/gim, '<blockquote class="border-l-4 border-gray-300 pl-4 italic my-3">$1</blockquote>');
    
    // Lists
    html = html.replace(/^\d+\.\s(.+)$/gim, '<li class="ml-6 list-decimal">$1</li>');
    html = html.replace(/^[-*]\s(.+)$/gim, '<li class="ml-6 list-disc">$1</li>');
    
    // Line breaks
    html = html.replace(/\n\n/g, '</p><p class="my-3">');
    html = html.replace(/\n/g, '<br/>');
    
    return '<div class="markdown-content">' + html + '</div>';
  }, []);

  const copyMarkdown = useCallback(() => {
    navigator.clipboard.writeText(markdown);
    alert("Markdown copié dans le presse-papiers!");
  }, [markdown]);

  const downloadMarkdown = useCallback(() => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "document.md";
    link.click();
    URL.revokeObjectURL(url);
  }, [markdown]);

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <div className="flex gap-2">
        <button
          onClick={() => setPreviewMode("edit")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            previewMode === "edit"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          ✏️ Édition
        </button>
        <button
          onClick={() => setPreviewMode("split")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            previewMode === "split"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          ↔️ Divisé
        </button>
        <button
          onClick={() => setPreviewMode("preview")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            previewMode === "preview"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          👁️ Aperçu
        </button>
        
        <div className="ml-auto flex gap-2">
          <button
            onClick={copyMarkdown}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            📋 Copier
          </button>
          <button
            onClick={downloadMarkdown}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            💾 Télécharger
          </button>
        </div>
      </div>

      {/* Editor and Preview */}
      <div className={`grid gap-4 ${previewMode === "split" ? "grid-cols-2" : "grid-cols-1"}`}>
        {/* Editor */}
        {(previewMode === "edit" || previewMode === "split") && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Markdown</label>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full h-[500px] px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none"
            />
          </div>
        )}

        {/* Preview */}
        {(previewMode === "preview" || previewMode === "split") && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Aperçu</label>
            <div
              className="w-full h-[500px] px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-auto prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
            />
          </div>
        )}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          📖 Syntaxe Markdown supportée
        </h4>
        <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <p><code># Titre</code> - Titres (h1, h2, h3)</p>
          <p><code>**gras**</code> et <code>*italique*</code></p>
          <p><code>[lien](url)</code> - Liens hypertexte</p>
          <p><code>`code`</code> - Code inline</p>
          <p><code>```code```</code> - Blocs de code</p>
          <p><code>&gt; citation</code> - Citations</p>
          <p><code>- item</code> ou <code>1. item</code> - Listes</p>
        </div>
      </div>
    </div>
  );
}
