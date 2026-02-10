import React from "react"
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";

import "./globals.css";

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });

export const metadata: Metadata = {
  title: "HomeHub Malawi - Premium Custom Furniture & Home Décor",
  description:
    "Blantyre's finest custom-built furniture and modern home décor. Premium quality, fast turnaround, and free delivery within Blantyre.",
  keywords: [
    "furniture",
    "custom furniture",
    "home décor",
    "Blantyre",
    "Malawi",
    "sofas",
    "beds",
    "dining sets",
  ],
  authors: [{ name: "HomeHub Malawi" }],
  generator: "v0.app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2c1810",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${workSans.variable}`}>
      <body className="font-work-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
