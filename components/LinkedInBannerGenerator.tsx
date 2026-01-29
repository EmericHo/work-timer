"use client";

import { useState, useCallback, useEffect, useRef } from "react";

type TextPosition = "left" | "center" | "right";

interface Template {
  id: string;
  name: string;
  backgroundColor: string;
  textColor: string;
  mainFontSize: number;
  subtitleFontSize: number;
  textPosition: TextPosition;
  description: string;
}

const TEMPLATES: Template[] = [
  {
    id: "professional-blue",
    name: "Bleu Professionnel",
    backgroundColor: "#0077B5",
    textColor: "#FFFFFF",
    mainFontSize: 80,
    subtitleFontSize: 40,
    textPosition: "left",
    description: "Design classique LinkedIn avec fond bleu signature",
  },
  {
    id: "modern-gradient",
    name: "Gradient Moderne",
    backgroundColor: "#1A1A2E",
    textColor: "#FFFFFF",
    mainFontSize: 72,
    subtitleFontSize: 36,
    textPosition: "center",
    description: "Style moderne et élégant avec fond sombre",
  },
  {
    id: "clean-minimal",
    name: "Minimaliste Clair",
    backgroundColor: "#F8F9FA",
    textColor: "#2C3E50",
    mainFontSize: 68,
    subtitleFontSize: 34,
    textPosition: "left",
    description: "Design épuré avec fond clair et texte sombre",
  },
  {
    id: "bold-orange",
    name: "Orange Dynamique",
    backgroundColor: "#FF6B35",
    textColor: "#FFFFFF",
    mainFontSize: 76,
    subtitleFontSize: 38,
    textPosition: "center",
    description: "Couleurs vives pour se démarquer",
  },
  {
    id: "elegant-purple",
    name: "Violet Élégant",
    backgroundColor: "#6C5CE7",
    textColor: "#FFFFFF",
    mainFontSize: 74,
    subtitleFontSize: 36,
    textPosition: "right",
    description: "Teintes élégantes pour un look sophistiqué",
  },
];

const LINKEDIN_BANNER_WIDTH = 1584;
const LINKEDIN_BANNER_HEIGHT = 396;

export default function LinkedInBannerGenerator() {
  const [mainText, setMainText] = useState<string>("Votre Titre Professionnel");
  const [subtitleText, setSubtitleText] = useState<string>("Votre sous-titre ou slogan");
  const [backgroundColor, setBackgroundColor] = useState<string>("#0077B5");
  const [textColor, setTextColor] = useState<string>("#FFFFFF");
  const [mainFontSize, setMainFontSize] = useState<number>(80);
  const [subtitleFontSize, setSubtitleFontSize] = useState<number>(40);
  const [textPosition, setTextPosition] = useState<TextPosition>("left");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateBanner = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, LINKEDIN_BANNER_WIDTH, LINKEDIN_BANNER_HEIGHT);

    // Fill background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, LINKEDIN_BANNER_WIDTH, LINKEDIN_BANNER_HEIGHT);

    // Set text properties
    ctx.fillStyle = textColor;
    ctx.textBaseline = "middle";

    // Calculate text alignment
    let textAlign: CanvasTextAlign = "left";
    let mainTextX = 60;
    let subtitleTextX = 60;

    if (textPosition === "center") {
      textAlign = "center";
      mainTextX = LINKEDIN_BANNER_WIDTH / 2;
      subtitleTextX = LINKEDIN_BANNER_WIDTH / 2;
    } else if (textPosition === "right") {
      textAlign = "right";
      mainTextX = LINKEDIN_BANNER_WIDTH - 60;
      subtitleTextX = LINKEDIN_BANNER_WIDTH - 60;
    }

    ctx.textAlign = textAlign;

    // Draw main text
    ctx.font = `bold ${mainFontSize}px Arial, sans-serif`;
    const mainTextY = subtitleText.trim() ? LINKEDIN_BANNER_HEIGHT / 2 - 30 : LINKEDIN_BANNER_HEIGHT / 2;
    
    // Word wrap for main text
    const mainWords = mainText.split(" ");
    const mainLines: string[] = [];
    let currentLine = "";
    
    mainWords.forEach((word) => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > LINKEDIN_BANNER_WIDTH - 120 && currentLine) {
        mainLines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });
    if (currentLine) {
      mainLines.push(currentLine);
    }

    // Draw main text lines
    const mainLineHeight = mainFontSize * 1.2;
    const mainTotalHeight = mainLines.length * mainLineHeight;
    let mainStartY = mainTextY - (mainTotalHeight / 2) + (mainLineHeight / 2);

    mainLines.forEach((line, index) => {
      ctx.fillText(line, mainTextX, mainStartY + (index * mainLineHeight));
    });

    // Draw subtitle text if provided
    if (subtitleText.trim()) {
      ctx.font = `${subtitleFontSize}px Arial, sans-serif`;
      const subtitleY = mainStartY + (mainLines.length * mainLineHeight) + 20;
      
      // Word wrap for subtitle
      const subtitleWords = subtitleText.split(" ");
      const subtitleLines: string[] = [];
      let currentSubLine = "";
      
      subtitleWords.forEach((word) => {
        const testLine = currentSubLine ? `${currentSubLine} ${word}` : word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > LINKEDIN_BANNER_WIDTH - 120 && currentSubLine) {
          subtitleLines.push(currentSubLine);
          currentSubLine = word;
        } else {
          currentSubLine = testLine;
        }
      });
      if (currentSubLine) {
        subtitleLines.push(currentSubLine);
      }

      // Draw subtitle lines
      subtitleLines.forEach((line, index) => {
        ctx.fillText(line, subtitleTextX, subtitleY + (index * subtitleFontSize * 1.2));
      });
    }
  }, [mainText, subtitleText, backgroundColor, textColor, mainFontSize, subtitleFontSize, textPosition]);

  useEffect(() => {
    generateBanner();
  }, [generateBanner]);

  const applyTemplate = useCallback((template: Template) => {
    setBackgroundColor(template.backgroundColor);
    setTextColor(template.textColor);
    setMainFontSize(template.mainFontSize);
    setSubtitleFontSize(template.subtitleFontSize);
    setTextPosition(template.textPosition);
  }, []);

  const downloadBanner = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      alert("Erreur lors de la génération de la bannière");
      return;
    }

    try {
      const link = document.createElement("a");
      link.download = `linkedin-banner-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error downloading banner:", error);
      alert("Erreur lors du téléchargement. Veuillez réessayer.");
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Preview Section */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-3">Aperçu en direct</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 overflow-auto">
          <canvas
            ref={canvasRef}
            width={LINKEDIN_BANNER_WIDTH}
            height={LINKEDIN_BANNER_HEIGHT}
            className="max-w-full h-auto border border-gray-300 dark:border-gray-600 rounded"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            Dimensions: 1584 × 396 px (format LinkedIn officiel)
          </p>
        </div>
      </div>

      {/* Templates Section */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Modèles prédéfinis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TEMPLATES.map((template) => (
            <button
              key={template.id}
              onClick={() => applyTemplate(template)}
              className="text-left p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <div
                className="w-full h-16 rounded mb-2"
                style={{ backgroundColor: template.backgroundColor }}
              />
              <h3 className="font-semibold text-sm">{template.name}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {template.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Text Inputs */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Texte</h2>
        <div>
          <label htmlFor="mainText" className="block text-sm font-medium mb-1">
            Titre principal
          </label>
          <input
            id="mainText"
            type="text"
            value={mainText}
            onChange={(e) => setMainText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Votre titre professionnel"
            maxLength={50}
          />
          <p className="text-xs text-gray-500 mt-1">{mainText.length}/50 caractères</p>
        </div>

        <div>
          <label htmlFor="subtitleText" className="block text-sm font-medium mb-1">
            Sous-titre (optionnel)
          </label>
          <input
            id="subtitleText"
            type="text"
            value={subtitleText}
            onChange={(e) => setSubtitleText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Votre sous-titre ou slogan"
            maxLength={80}
          />
          <p className="text-xs text-gray-500 mt-1">{subtitleText.length}/80 caractères</p>
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Couleurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="backgroundColor" className="block text-sm font-medium mb-1">
              Couleur de fond
            </label>
            <div className="flex gap-2 items-center">
              <input
                id="backgroundColor"
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-16 h-10 rounded cursor-pointer"
              />
              <input
                type="text"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="textColor" className="block text-sm font-medium mb-1">
              Couleur du texte
            </label>
            <div className="flex gap-2 items-center">
              <input
                id="textColor"
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-16 h-10 rounded cursor-pointer"
              />
              <input
                type="text"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Font Sizes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Tailles de police</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="mainFontSize" className="block text-sm font-medium mb-1">
              Taille titre: {mainFontSize}px
            </label>
            <input
              id="mainFontSize"
              type="range"
              min="40"
              max="120"
              value={mainFontSize}
              onChange={(e) => setMainFontSize(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="subtitleFontSize" className="block text-sm font-medium mb-1">
              Taille sous-titre: {subtitleFontSize}px
            </label>
            <input
              id="subtitleFontSize"
              type="range"
              min="20"
              max="60"
              value={subtitleFontSize}
              onChange={(e) => setSubtitleFontSize(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Text Position */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Position du texte</h2>
        <div className="flex gap-3">
          <button
            onClick={() => setTextPosition("left")}
            className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors ${
              textPosition === "left"
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
            }`}
          >
            Gauche
          </button>
          <button
            onClick={() => setTextPosition("center")}
            className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors ${
              textPosition === "center"
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
            }`}
          >
            Centre
          </button>
          <button
            onClick={() => setTextPosition("right")}
            className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors ${
              textPosition === "right"
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
            }`}
          >
            Droite
          </button>
        </div>
      </div>

      {/* Download Button */}
      <div className="pt-4">
        <button
          onClick={downloadBanner}
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          📥 Télécharger la bannière (PNG)
        </button>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
          Format: 1584 × 396 px, compatible LinkedIn
        </p>
      </div>
    </div>
  );
}
