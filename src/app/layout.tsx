import type { Metadata } from "next";
import { Caudex, } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  openGraph: {
    title: "Nihar Kapadiya | Designer",
    description: "Nihar Kapadiya is a designer based in India, specializing in creating visually stunning and user-friendly digital experiences.",
    images: [
      {
        url: "/hero-image.jpg",
        alt: "Nihar Kapadiya Portfolio",
      },
    ],
    type: "website",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
    siteName: "Nihar Kapadiya Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihar Kapadiya | Designer",
    description: "Nihar Kapadiya is a designer based in India, specializing in creating visually stunning and user-friendly digital experiences.",
    images: ["/hero-image.jpg"],
  },
  keywords: "Nihar Kapadiya, UX Designer, Portfolio, Ahmedabad, India, UI Design, Visual Design, Interaction Design, User Experience, Web Design, Mobile App Design, Case Study, Design Process, Prototyping, Wireframing, Responsive Design, Design Thinking, User Research, Usability Testing, Creative Design, Digital Design, Frontend Development, Figma, Adobe XD, Sketch",
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || "https://nihar-portfolio.vercel.app"),
  authors: [{ name: "Nihar Kapadiya", url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}` }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  themeColor: "#ffffff",
  applicationName: "Nihar Kapadiya Portfolio",
  // viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  formatDetection: {
    telephone: false, // Disable automatic detection of phone numbers
  },
  manifest: "/manifest.json", 
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
            <div className=" max-w-screen-2xl mx-auto bg-[#fbfbfb]  ">
      <div className="flex flex-col ">
        <Header />
        {children}

        <Footer/>

      </div>
    </div>
      </body>
    </html>
  );
}
