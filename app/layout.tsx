import type { Metadata } from "next";
import { Platypi, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";
import localFont from "next/font/local";
import NavigatingLoading from "@/components/layout/loading";


const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-raleway",
});

const platypi = Platypi({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-platypi",
});

const recoleta = localFont({
  src: "../public/fonts/Recoleta/recoleta-regular.otf",
  display: "swap",
  variable: "--font-recoleta",
});

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
      <body
        className={`${recoleta.variable} ${platypi.variable} ${raleway.variable}`}
      >
        <NavigatingLoading />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
