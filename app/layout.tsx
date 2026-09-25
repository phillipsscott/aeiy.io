import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Scott Phillips",
    template: "%s · Scott Phillips",
  },
  description: "where ideas can hang out and do whatever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${sourceSans.variable} h-full`}
    >
      <body className="site-shell antialiased">
        <SiteHeader />
        <main className="site-frame flex-1 py-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
