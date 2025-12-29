import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antoine Billotte | AI Adoption Architect & Delivery Lead",
  description: "Expert en adoption IA et Microsoft Copilot. Je transforme vos pilotes IA bloqués en valeur mesurable avec +240% ROI moyen. Diagnostic gratuit en 72h.",
  keywords: ["AI Adoption", "Microsoft Copilot", "IA", "Transformation digitale", "Consultant IA", "ROI IA"],
  authors: [{ name: "Antoine Billotte" }],
  creator: "Antoine Billotte",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "https://antoinebillotte.com",
    title: "Antoine Billotte | AI Adoption Architect",
    description: "Transformez vos pilotes IA en valeur mesurable. +240% ROI moyen en 3 mois.",
    siteName: "Antoine Billotte - AI Adoption Architect",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine Billotte | AI Adoption Architect",
    description: "Expert en adoption IA et Microsoft Copilot. ROI garanti.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
