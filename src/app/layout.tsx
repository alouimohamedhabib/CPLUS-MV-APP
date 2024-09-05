import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/layout/Header";
import Footer from "@/components/organisms/layout/Footer";
const inter = Roboto({ weight: ['300', '400', '700', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cimena | Watch movies online",
  description: `Watch movies, movies online, watch TV, TV online, TV series online,
   watch series, movie streaming, series streaming, instant streaming, watch online, movies,
   watch movies in France, watch TV online, no downloads, full movies`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="mb-4 z-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
