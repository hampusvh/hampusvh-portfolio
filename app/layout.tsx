import type { Metadata } from "next";
import "../styles/global.css";
import "../styles/atmosphere.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
        <div className="atmosphere-root">
          {/* Atmosfär-lagret */}
          <div className="atmosphere-layer" />

          {/* Allt innehåll */}
          <div className="content-layer">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
