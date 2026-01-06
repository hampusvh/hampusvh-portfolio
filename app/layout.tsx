import type { Metadata } from "next";
import "@/styles/tokens.css";
import "@/styles/theme.css";
import "@/styles/global.css";

import Header from "@/components/shell/Header/Header";
import Footer from "@/components/shell/Footer/Footer";

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
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
