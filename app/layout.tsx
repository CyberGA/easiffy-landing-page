import type { Metadata } from "next";
import { Poppins, Lilita_One } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";
import localFont from "next/font/local";
import NavigatingLoading from "@/components/layout/loading";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lilita",
});

const recoleta = localFont({
  src: "../public/fonts/Recoleta/recoleta-regular.otf",
  display: "swap",
  variable: "--font-recoleta",
})

export const metadata: Metadata = {
  title: "Easiffy",
  description: "Easiffy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lilita.variable} ${recoleta.variable}`}>
        <NavigatingLoading />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
