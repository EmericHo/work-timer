"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import QRCode from "qrcode";

type QRSize = "small" | "medium" | "large";
type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

const SIZE_MAP = {
  small: 200,
  medium: 300,
  large: 500,
};

export default function QRCodeGenerator() {
  const [text, setText] = useState<string>("");
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [size, setSize] = useState<QRSize>("medium");
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<ErrorCorrectionLevel>("M");
  const [foregroundColor, setForegroundColor] = useState<string>("#000000");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQRCode = useCallback(async () => {
    if (!text.trim()) {
      setQrCodeUrl("");
      return;
    }

    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      await QRCode.toCanvas(canvas, text, {
        width: SIZE_MAP[size],
        errorCorrectionLevel,
        color: {
          dark: foregroundColor,
          light: backgroundColor,
        },
      });

      const dataUrl = canvas.toDataURL();
      setQrCodeUrl(dataUrl);
    } catch (error) {
      console.error("Erreur lors de la génération du QR code:", error);
      alert("Erreur lors de la génération du QR code. Veuillez réessayer.");
    }
  }, [text, size, errorCorrectionLevel, foregroundColor, backgroundColor]);

  useEffect(() => {
    if (text.trim()) {
      generateQRCode();
    }
  }, [text, size, errorCorrectionLevel, foregroundColor, backgroundColor, generateQRCode]);

  const downloadPNG = useCallback(() => {
    if (!qrCodeUrl) {
      alert("Veuillez d'abord générer un QR code");
      return;
    }

    const link = document.createElement("a");
    link.download = `qrcode-${Date.now()}.png`;
    link.href = qrCodeUrl;
    link.click();
  }, [qrCodeUrl]);

  const downloadSVG = useCallback(async () => {
    if (!text.trim()) {
      alert("Veuillez d'abord générer un QR code");
      return;
    }

    try {
      const svg = await QRCode.toString(text, {
        type: "svg",
        width: SIZE_MAP[size],
        errorCorrectionLevel,
        color: {
          dark: foregroundColor,
          light: backgroundColor,
        },
      });

      const blob = new Blob([svg], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `qrcode-${Date.now()}.svg`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors du téléchargement SVG:", error);
      alert("Erreur lors du téléchargement. Veuillez réessayer.");
    }
  }, [text, size, errorCorrectionLevel, foregroundColor, backgroundColor]);

  const resetColors = useCallback(() => {
    setForegroundColor("#000000");
    setBackgroundColor("#ffffff");
  }, []);

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Contenu du QR Code
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Entrez une URL, un texte, un email, un numéro de téléphone..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Exemples: https://example.com, mailto:email@example.com, tel:+33612345678, WIFI:T:WPA;S:MonWiFi;P:motdepasse;;
        </p>
      </div>

      {/* Options Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Taille
          </label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as QRSize)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value="small">Petit (200x200)</option>
            <option value="medium">Moyen (300x300)</option>
            <option value="large">Grand (500x500)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Correction d&apos;erreur
          </label>
          <select
            value={errorCorrectionLevel}
            onChange={(e) => setErrorCorrectionLevel(e.target.value as ErrorCorrectionLevel)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value="L">Bas (~7%)</option>
            <option value="M">Moyen (~15%)</option>
            <option value="Q">Élevé (~25%)</option>
            <option value="H">Très élevé (~30%)</option>
          </select>
        </div>
      </div>

      {/* Color Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Couleur principale
          </label>
          <div className="flex gap-2">
            <input
              type="color"
              value={foregroundColor}
              onChange={(e) => setForegroundColor(e.target.value)}
              className="h-10 w-16 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
            />
            <input
              type="text"
              value={foregroundColor}
              onChange={(e) => setForegroundColor(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Couleur de fond
          </label>
          <div className="flex gap-2">
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="h-10 w-16 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
            />
            <input
              type="text"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm"
            />
          </div>
        </div>
      </div>

      <button
        onClick={resetColors}
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        🎨 Réinitialiser les couleurs
      </button>

      {/* Preview Section */}
      {text.trim() && qrCodeUrl && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Aperçu du QR Code</h3>
          <div className="flex justify-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-600">
            <canvas ref={canvasRef} className="max-w-full h-auto" style={{ display: "none" }} />
            <Image 
              src={qrCodeUrl} 
              alt="QR Code généré" 
              width={SIZE_MAP[size]}
              height={SIZE_MAP[size]}
              className="max-w-full h-auto"
              style={{ imageRendering: "pixelated" }}
              unoptimized
            />
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={downloadPNG}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              💾 Télécharger PNG
            </button>
            <button
              onClick={downloadSVG}
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              📥 Télécharger SVG
            </button>
          </div>
        </div>
      )}

      {/* Hidden canvas for generation */}
      {!qrCodeUrl && <canvas ref={canvasRef} style={{ display: "none" }} />}

      {/* Info Section */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Conseils pour un QR code optimal
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>Contraste:</strong> Assurez un bon contraste entre la couleur principale et le fond</li>
          <li><strong>Taille:</strong> Pour l&apos;impression, utilisez au moins 300x300 pixels</li>
          <li><strong>Correction d&apos;erreur:</strong> Niveau élevé recommandé si le QR code peut être partiellement masqué</li>
          <li><strong>Test:</strong> Testez toujours votre QR code avec plusieurs lecteurs avant l&apos;impression</li>
          <li><strong>Format:</strong> SVG recommandé pour l&apos;impression, PNG pour le web</li>
        </ul>
      </div>
    </div>
  );
}
