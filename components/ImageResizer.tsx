"use client";

import { useState, useRef, ChangeEvent } from "react";

interface ImageDimensions {
  width: number;
  height: number;
  size: number;
}

const PRESETS = [
  { name: "Thumbnail", width: 150, height: 150 },
  { name: "Small", width: 320, height: 240 },
  { name: "Medium", width: 640, height: 480 },
  { name: "Large", width: 1024, height: 768 },
  { name: "HD", width: 1920, height: 1080 },
];

export default function ImageResizer() {
  const [originalImage, setOriginalImage] = useState<string>("");
  const [resizedImage, setResizedImage] = useState<string>("");
  const [originalDimensions, setOriginalDimensions] = useState<ImageDimensions | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState<boolean>(true);
  const [quality, setQuality] = useState<number>(90);
  const [aspectRatio, setAspectRatio] = useState<number>(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setOriginalImage(event.target?.result as string);
        setOriginalDimensions({
          width: img.width,
          height: img.height,
          size: file.size,
        });
        setWidth(img.width);
        setHeight(img.height);
        setAspectRatio(img.width / img.height);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleWidthChange = (value: number) => {
    setWidth(value);
    if (maintainAspectRatio) {
      setHeight(Math.round(value / aspectRatio));
    }
  };

  const handleHeightChange = (value: number) => {
    setHeight(value);
    if (maintainAspectRatio) {
      setWidth(Math.round(value * aspectRatio));
    }
  };

  const applyPreset = (presetWidth: number, presetHeight: number) => {
    setWidth(presetWidth);
    setHeight(presetHeight);
  };

  const resizeImage = () => {
    if (!originalImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      const resized = canvas.toDataURL("image/jpeg", quality / 100);
      setResizedImage(resized);
    };
    img.src = originalImage;
  };

  const downloadImage = () => {
    if (!resizedImage) return;
    const link = document.createElement("a");
    link.href = resizedImage;
    link.download = `resized-image-${width}x${height}.jpg`;
    link.click();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Image Resizer</h2>
      
      <div className="mb-6">
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp,.gif"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 focus:outline-none p-2"
        />
      </div>

      {originalDimensions && (
        <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Original Image</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Dimensions: {originalDimensions.width} x {originalDimensions.height} px
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Size: {formatFileSize(originalDimensions.size)}
          </p>
        </div>
      )}

      {originalImage && (
        <>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Resize Options</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Width (px)
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => handleWidthChange(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Height (px)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => handleHeightChange(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={maintainAspectRatio}
                  onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Maintain aspect ratio</span>
              </label>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preset Sizes</h4>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => applyPreset(preset.width, preset.height)}
                    className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                  >
                    {preset.name} ({preset.width}x{preset.height})
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quality: {quality}%
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <button
              onClick={resizeImage}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Preview Resized Image
            </button>
          </div>

          <canvas ref={canvasRef} className="hidden" />

          {resizedImage && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Preview</h3>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 mb-4">
                <img src={resizedImage} alt="Resized preview" className="max-w-full h-auto" />
              </div>
              <button
                onClick={downloadImage}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Download Resized Image
              </button>
            </div>
          )}
        </>
      )}

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">ℹ️ Info</h3>
        <p className="text-sm text-blue-800 dark:text-blue-300">
          All processing is done in your browser using the Canvas API. Your images are never uploaded to any server.
        </p>
      </div>
    </div>
  );
}
