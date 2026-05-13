"use client";

import { motion } from "framer-motion";

import { Container, MStripe } from "@/components/atoms";
import { SectionHeading, WorkTile } from "@/components/molecules";

const works = [
  { id: "work-1", src: "/images/work/WORK-1.webp", alt: "Hasil detailing kendaraan" },
  { id: "work-2", src: "/images/work/WORK-2.webp", alt: "Hasil detailing kendaraan" },
  { id: "work-3", src: "/images/work/WORK-3.webp", alt: "Hasil detailing kendaraan" },
  { id: "work-4", src: "/images/work/WORK-4.webp", alt: "Hasil detailing kendaraan" },
  { id: "work-5", src: "/images/work/WORK-5.webp", alt: "Hasil detailing kendaraan" },
  { id: "work-6", src: "/images/work/WORK-6.webp", alt: "Hasil detailing kendaraan" },
  { id: "work-7", src: "/images/work/WORK-7.webp", alt: "Hasil detailing kendaraan" },
];

const WorksSection = () => {
  return (
    <section id="works" className="bg-background py-24">
      <Container>
        <SectionHeading
          eyebrow="Portofolio"
          title="Portofolio detailing terbaru"
          description="Deretan hasil detailing terbaru dari berbagai tipe kendaraan, ditangani dengan
          standar finishing premium."
        />
        <MStripe className="mt-8" />
      </Container>
      <div className="mt-10 overflow-hidden">
        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {works.map((work) => (
            <WorkTile key={`${work.id}-group-a`} src={work.src} alt={work.alt} />
          ))}
          {works.map((work) => (
            <WorkTile key={`${work.id}-group-b`} src={work.src} alt={work.alt} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;
