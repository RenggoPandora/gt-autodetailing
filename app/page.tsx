import type { Metadata } from "next";

import { HomeTemplate } from "@/components/templates";

export const metadata: Metadata = {
  title: "GT Autodetailing - Detailing Kendaraan Premium di Purwokerto",
  description:
    "GT Autodetailing menghadirkan layanan detailing kendaraan profesional di Purwokerto. Paket lengkap, perlindungan nano ceramic, dan finishing premium.",
  openGraph: {
    title: "GT Autodetailing - Detailing Kendaraan Premium di Purwokerto",
    description:
      "Layanan detailing kendaraan profesional di Purwokerto dengan paket lengkap dan finishing premium.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GT Autodetailing - Detailing Kendaraan Premium di Purwokerto",
    description:
      "Layanan detailing kendaraan profesional di Purwokerto dengan paket lengkap dan finishing premium.",
  },
};

export default function Home() {
  return <HomeTemplate />;
}
