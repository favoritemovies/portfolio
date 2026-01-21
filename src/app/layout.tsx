import "./globals.css";

export const metadata = {
  title: "Natalia Azarevich — Web Developer",
  description: "Bilingual portfolio (EN/RU).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
