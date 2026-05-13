import Image from "next/image";

import { Container, MStripe } from "@/components/atoms";
import { SectionHeading, StatItem } from "@/components/molecules";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Tentang Kami"
            title="Detailing dengan presisi motorsport"
            description="GT Autodetailing berdiri untuk menghadirkan hasil detailing kelas premium dengan
            kontrol kualitas yang konsisten. Kami menggabungkan teknik modern, bahan terbaik, dan tim
            berpengalaman untuk melayani kebutuhan detailing kendaraan pribadi hingga kendaraan
            kontes."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <StatItem value="10+" label="Tahun" />
            <StatItem value="1000+" label="Kendaraan" />
            <StatItem value="100+" label="Klien" />
          </div>
          <MStripe className="mt-10" />
        </div>
        <div className="relative aspect-4/5 overflow-hidden border border-white/10 bg-(--color-surface-card)">
          <Image
            src="/images/about/about-placeholder.svg"
            alt="Tim GT Autodetailing sedang memoles kendaraan"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
