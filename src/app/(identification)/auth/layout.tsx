import { Roboto } from "next/font/google";
import "../../globals.css";
const inter = Roboto({ weight: ['300', '400', '700', '900'], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
