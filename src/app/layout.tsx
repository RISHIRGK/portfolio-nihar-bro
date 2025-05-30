import type { Metadata } from "next";
import { Caudex, } from "next/font/google";
import "./globals.css";

const CaudexFont = Caudex({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  adjustFontFallback: true,
  // fallbackWeight: "400",
  // fallbackStyle: "normal",
  // fallbackDisplay: "swap",
  // fallbackSubsets: ["latin"],
  // fallbackVariable: "--font-geist-sans-fallback",
  // fallbackFontFamily: "system-ui, sans-serif",
  // fallbackFontStyle: "normal",
  // fallbackFontWeight: "400",
  // fallbackFontSize: "16px",
});

 
//  @import url("https://use.typekit.net/ixm2mim.css");
//  @import url('https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&display=swap');
export const metadata: Metadata = {
  title: "Nihar Kapadiya | Designer ",
  description: "Nihar Kapadiya is a designer based in India, specializing in creating visually stunning and user-friendly digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <head>
 <link rel="stylesheet" href="https://use.typekit.net/ixm2mim.css"/>
    </head>
      <body
        className={`${CaudexFont.variable}   antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
