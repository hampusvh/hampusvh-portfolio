import "../styles/theme.css";
import "../styles/global.css";

export const metadata = {
  title: "Hampus von Horn",
  description: "Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
