import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tekpoint — Smart Technology Distribution",
    template: "%s",
  },
  description:
    "Tekpoint is a leading B2B technology distributor covering Western, Central & Eastern Europe (WEU/CEE). Partners include retailers, e-tailers, and system integrators across 28+ countries.",
  keywords: [
    "B2B technology distribution",
    "IT distribution Europe",
    "tech wholesale",
    "Tekpoint",
    "WEU",
    "CEE",
    "smart technology",
    "consumer electronics distribution",
  ],
  authors: [{ name: "Tekpoint GmbH" }],
  creator: "Tekpoint GmbH",
  publisher: "Tekpoint GmbH",
  metadataBase: new URL("https://tekpoint.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tekpoint.com",
    siteName: "Tekpoint",
    title: "Tekpoint — Smart Technology Distribution",
    description:
      "Leading B2B technology distributor covering Western, Central & Eastern Europe.",
    images: [
      {
        url: "/images/tekpoint-logo.svg",
        width: 1200,
        height: 630,
        alt: "Tekpoint - Smart Technology Distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekpoint — Smart Technology Distribution",
    description:
      "Leading B2B technology distributor covering Western, Central & Eastern Europe.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1628" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
