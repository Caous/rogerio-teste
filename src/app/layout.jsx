import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog de ferramentas",
  description: "Blog de ferramentas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased bg-white  text-black`}>
        {children}
      </body>
    </html>
  );
}
