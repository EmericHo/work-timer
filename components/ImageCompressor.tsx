"use client";

import { useState, useCallback } from "react";

export default function ImageCompressor() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [compressedUrl, setCompressedUrl] = useState<string>("");
  const [quality, setQuality] = useState<number>(80);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [isCompressing, setIsCompressing] = useState(false);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setOriginalSize(file.size);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      setCompressedUrl("");
      setCompressedSize(0);
    }
  }, []);

  const compressImage = useCallback(async () => {
    if (!selectedFile || !previewUrl) return;

    setIsCompressing(true);
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              setCompressedSize(blob.size);
              const url = URL.createObjectURL(blob);
              setCompressedUrl(url);
            }
            setIsCompressing(false);
          },
          "image/jpeg",
          quality / 100
        );
      };

      img.src = previewUrl;
    } catch (error) {
      console.error("Compression error:", error);
      setIsCompressing(false);
    }
  }, [selectedFile, previewUrl, quality]);

  const downloadCompressed = useCallback(() => {
    if (!compressedUrl) return;
    const link = document.createElement("a");
    link.href = compressedUrl;
    link.download = `compressed-${selectedFile?.name || "image.jpg"}`;
    link.click();
  }, [compressedUrl, selectedFile]);

  const formatSize = (bytes: number): string => {
    return (bytes / 1024).toFixed(2) + " KB";
  };

  const compressionRatio = originalSize > 0 && compressedSize > 0
    ? Math.round(((originalSize - compressedSize) / originalSize) * 100)
    : 0;

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="imageInput"
        />
        <label
          htmlFor="imageInput"
          className="cursor-pointer inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          📁 Sélectionner une image
        </label>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Formats supportés: JPG, PNG, WebP
        </p>
      </div>

      {previewUrl && (
        <>
          <div className="space-y-3">
            <label className="block text-sm font-medium">
              Qualité de compression: {quality}%
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <button
            onClick={compressImage}
            disabled={isCompressing}
            className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold"
          >
            {isCompressing ? "Compression en cours..." : "🗜️ Compresser l'image"}
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Image originale</h3>
              <img src={previewUrl} alt="Original" className="w-full rounded mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Taille: {formatSize(originalSize)}
              </p>
            </div>

            {compressedUrl && (
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Image compressée</h3>
                <img src={compressedUrl} alt="Compressed" className="w-full rounded mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Taille: {formatSize(compressedSize)}
                </p>
                <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                  Réduction: {compressionRatio}%
                </p>
                <button
                  onClick={downloadCompressed}
                  className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  💾 Télécharger
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
