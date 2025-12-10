import localFont from "next/font/local";
import "../styles/theme.css";
import "../styles/global.css";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const spaceGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/space-grotesk/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/space-grotesk/SpaceGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/space-grotesk/SpaceGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/space-grotesk/SpaceGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Hampus von Horn",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <div className="page">
          <Header />

          <main>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
