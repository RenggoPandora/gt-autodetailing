import Image from "next/image";

import { Button, Container, MStripe } from "@/components/atoms";
import { BUSINESS } from "@/lib/constants/business";

const HeroSection = () => {
  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    "Halo GT Autodetailing, saya ingin konsultasi detailing kendaraan."
  )}`;

  return (
    <section id="home" className="relative overflow-hidden bg-background pb-24 pt-16 md:pt-24">
      <Image
        src="/images/hero/HERO.webp"
        alt="Mobil setelah detailing premium"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
      <Container className="relative">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            Detailing kendaraan profesional
          </p>
          <h1 className="mt-4 text-4xl font-semibold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
            {BUSINESS.name}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 md:text-base">
            {BUSINESS.tagline}. Fokus pada hasil detail tanpa kompromi untuk mobil, motor, hingga show
            car.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={whatsappLink} label="Konsultasi Gratis" target="_blank" />
            <Button href="#services" label="Lihat Layanan" variant="outline" />
          </div>
          <div className="mt-10 max-w-md">
            <MStripe />
            <div className="mt-4 grid gap-4 text-xs uppercase tracking-[0.25em] text-white/60">
              <p>Pengalaman {BUSINESS.experience} tahun di {BUSINESS.city}</p>
              <p>Standar detailing premium & kontrol kualitas ketat</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
