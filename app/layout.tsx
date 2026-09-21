import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aicceler8.ai"),
  title: "AICceler8 — The Enterprise Growth Partner for the AI Era",
  description:
    "AICceler8 partners with ambitious enterprise leadership teams to redesign how they grow, operate, and compete. Building AI-powered enterprises with measurable revenue advantage, intelligent systems, and workforce enablement.",
  keywords: [
    "Enterprise AI",
    "AI Transformation",
    "Enterprise Growth Partner",
    "Intelligent Business Systems",
    "AI Operating System",
    "Workforce Enablement",
    "Global Expansion AI",
    "AICceler8",
  ],
  authors: [{ name: "AICceler8 Enterprise Strategy" }],
  openGraph: {
    title: "AICceler8 — Building AI-Powered Enterprises",
    description:
      "We help ambitious businesses redesign how they grow, operate, and compete in an AI-first world.",
    url: "https://aicceler8.ai",
    siteName: "AICceler8",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AICceler8 Enterprise Growth Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AICceler8 — The Enterprise Growth Partner for the AI Era",
    description:
      "Enterprise growth, intelligent systems, and business transformation powered by Artificial Intelligence.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${sansFont.variable} ${serifFont.variable} font-sans bg-white text-neutral-900 min-h-screen selection:bg-neutral-900 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
