"use client";

interface AdSenseAdProps {
  slot: string;
  format: "horizontal" | "rectangle" | "vertical";
  style?: React.CSSProperties;
}

export default function AdSenseAd({ slot, format, style }: AdSenseAdProps) {
  // This is a placeholder for AdSense ads
  // In production, you would replace this with actual AdSense code
  
  const formatClass = {
    horizontal: "bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm",
    rectangle: "bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm",
    vertical: "bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm",
  };

  return (
    <div
      className={formatClass[format]}
      style={style}
      aria-label={`Emplacement publicitaire ${slot}`}
    >
      <div className="text-center p-4">
        <p className="font-semibold">AdSense Placeholder</p>
        <p className="text-xs mt-1">{slot} - {format}</p>
      </div>
    </div>
  );
}
