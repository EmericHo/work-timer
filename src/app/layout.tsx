import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Work Timer",
  description: "A productivity timer to help you manage your work sessions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
