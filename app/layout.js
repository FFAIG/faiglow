import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  ...siteConfig.defaultMetadata,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.variable}>
        <a href="#main-content" className="visually-hidden">İçeriğe geç</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
