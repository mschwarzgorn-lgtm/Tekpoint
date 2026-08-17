import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tekpoint — Smart Technology Distribution",
    template: "%s",
  },
  description:
    "Tekpoint GmbH is a B2B technology distributor headquartered in Vienna, Austria, supplying consumer electronics, smart home, mobility and wearable brands to retailers, e-tailers, marketplaces and telecom operators across Western, Central and Eastern Europe.",
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
  // No site-wide canonical: every page sets its own in generatePageMetadata().
  // A global canonical made error pages point at the homepage.
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
        url: "/images/tekpoint-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tekpoint — Smart Technology Distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekpoint — Smart Technology Distribution",
    description:
      "Leading B2B technology distributor covering Western, Central & Eastern Europe.",
    images: ["/images/tekpoint-og.jpg"],
  },
  // No global robots directive: pages set their own in generatePageMetadata(),
  // so error pages are left with Next's automatic noindex.
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
