import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hampus von Horn",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page">
        {children}
      </body>
    </html>
  );
}
