import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tekpoint — Smart Technology Distribution",
  description: "Leading technology distributor for Central & Eastern Europe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
