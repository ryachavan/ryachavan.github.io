import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/ui/navbar";
import { Cursor } from "@/components/ui/cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Grainient } from "@/components/ui/grainient";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arya Chavan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased text-white">
        <LenisProvider>
          <Grainient />
          <Cursor />
          <ScrollProgress />
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}