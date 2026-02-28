"use client";

import dynamic from "next/dynamic";

const SCIBalanceSheetGenerator = dynamic(
  () => import("@/components/SCIBalanceSheetGenerator"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        Chargement du générateur…
      </div>
    ),
  }
);

export default SCIBalanceSheetGenerator;
