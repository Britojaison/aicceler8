import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kobeFont = localFont({
  src: "../public/fonts/kobe-font/kobe.otf",
  variable: "--font-kobe",
  display: "swap",
});

const helveticaFont = localFont({
  src: [
    {
      path: "../public/fonts/neue-helvetica-font-family/HelveticaNeueLTStd-Ex-AF65e98e3e4df99.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-helvetica-font-family/HelveticaNeueLTStd-ExO-AF65e98e3e52394.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-helvetica-font-family/HelveticaNeueLTStd-Bd-AF65e98e3e07da6.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-helvetica-font-family/HelveticaNeueLTStd-BdIt-AF65e98e3e2068f.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-helvetica-font-family/HelveticaNeueLTStd-Hv-AF65e98e3e56917.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-helvetica-font-family/HelveticaNeueLTStd-Blk-AF65e98e3e28de2.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
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
        url: "/images/logos/logo.png",
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
    images: ["/images/logos/logo.png"],
  },
  icons: {
    icon: "/images/logos/logo.png",
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
      <body
        className={`${kobeFont.variable} ${helveticaFont.variable} font-sans bg-white text-neutral-900 min-h-screen selection:bg-neutral-900 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
