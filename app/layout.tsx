import type { Metadata } from "next";
import { Manrope, Saira_Condensed } from "next/font/google";

import "./globals.css";

const displayFont = Saira_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "GT Autodetailing",
    template: "%s | GT Autodetailing",
  },
  description: "Jasa detailing kendaraan profesional di Purwokerto.",
  metadataBase: new URL("https://gtautodetailing.com"),
  openGraph: {
    title: "GT Autodetailing",
    description: "Jasa detailing kendaraan profesional di Purwokerto.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-white">
        {children}
      </body>
    </html>
  );
}
