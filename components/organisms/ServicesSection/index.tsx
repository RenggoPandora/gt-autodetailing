import { Container, MStripe } from "@/components/atoms";
import { SectionHeading, ServiceCard } from "@/components/molecules";

const services = [
  {
    title: "Detail Eksterior",
    description:
      "Pembersihan menyeluruh, koreksi cat ringan, dan kilap maksimal untuk body kendaraan.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M3 15.5l2.2-6.6c.3-.9 1.1-1.5 2-1.5h9.6c.9 0 1.7.6 2 1.5l2.2 6.6a2 2 0 0 1-1.9 2.6H4.9A2 2 0 0 1 3 15.5Zm4.7-6.1L6.5 13h11l-1.2-3.6H7.7Z"
        />
      </svg>
    ),
  },
  {
    title: "Pembersihan Interior",
    description:
      "Deep cleaning kabin, jok, dan panel interior agar kembali bersih, wangi, dan higienis.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M7 5.5A2.5 2.5 0 0 1 9.5 3h5A2.5 2.5 0 0 1 17 5.5V6h1.5A2.5 2.5 0 0 1 21 8.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5A2.5 2.5 0 0 1 5.5 6H7v-.5ZM9 6h6v-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V6Z"
        />
      </svg>
    ),
  },
  {
    title: "Pembersihan Mesin",
    description:
      "Pembersihan ruang mesin secara aman untuk tampilan rapi dan performa terjaga.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M4 9h2V7h2v2h6V7h2v2h2a2 2 0 0 1 2 2v6h-3v2h-2v-2H9v2H7v-2H4V9Zm4 2v4h8v-4H8Z"
        />
      </svg>
    ),
  },
  {
    title: "Nano Ceramic Coating",
    description:
      "Coating premium untuk perlindungan ekstra, kilap tahan lama, dan garansi 2 tahun.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M12 3l7 3v5c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6l7-3Zm0 4.2L8.2 8.8V11c0 2.9 1.8 5.6 3.8 6.5 2-1 3.8-3.6 3.8-6.5V8.8L12 7.2Z"
        />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-24">
      <Container>
        <SectionHeading
          eyebrow="Layanan Utama"
          title="Paket detailing lengkap untuk setiap kebutuhan"
          description="Mulai dari perawatan harian hingga perlindungan coating premium, semua dikerjakan
          dengan standar finishing profesional."
        />
        <MStripe className="mt-8" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
