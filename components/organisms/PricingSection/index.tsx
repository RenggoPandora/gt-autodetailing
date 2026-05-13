import { Container, MStripe } from "@/components/atoms";
import { PricingCard, SectionHeading } from "@/components/molecules";
import { BUSINESS } from "@/lib/constants/business";

const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}`;

const packages = [
  {
    title: "Reguler Detail + Sealant",
    description: "Perawatan eksterior menyeluruh dengan sealant pelindung kilap.",
    inclusions: [
      "Pembersihan jamur bodi dan aspal pada keseluruhan bodi bagian luar kendaraan.",
      "Pembersihan jamur pada kaca secara keseluruhan (tidak termasuk baret kaca).",
      "Pemolesan bodi 1 step untuk memaksimalkan kebeningan warna asli kendaraan.",
      "Pengaplikasian sealant protection untuk perlindungan kilap dan warna cat.",
    ],
    note:
      "Catatan: Reguler Detail fokus pada kebersihan dan perlindungan; tahap pemolesan 1 step sesuai orientasi perawatan harian.",
    lines: [
      { label: "City Car", price: "Rp 800.000" },
      { label: "Medium Car", price: "Rp 1.000.000" },
      { label: "SUV", price: "Rp 1.500.000" },
    ],
    ctaLabel: "Pesan Sekarang",
    ctaHref: whatsappLink,
  },
  {
    title: "Eksterior + Nano Ceramic",
    description: "Perlindungan coating premium dengan garansi 2 tahun.",
    badge: "Terpopuler",
    inclusions: [
      "Pembersihan jamur bodi dan aspal pada keseluruhan bodi bagian luar kendaraan.",
      "Pembersihan jamur pada kaca secara keseluruhan (tidak termasuk baret kaca).",
      "Pemolesan bodi multi-step dengan kompon waterbase yang tidak mengikis cat secara ekstrem.",
      "Pengaplikasian nano ceramic coating untuk perlindungan maksimal, efek glossy, dan efek daun talas.",
      "Perlindungan garansi 2 tahun agar fungsi nano ceramic tetap maksimal.",
    ],
    lines: [
      { label: "City Car", price: "Rp 2.000.000 - Rp 2.300.000" },
      { label: "Medium Car", price: "Rp 2.500.000 - Rp 2.800.000" },
      { label: "SUV", price: "Rp 3.000.000 - Rp 3.500.000" },
      { label: "Show Car", price: "Harga Negosiasi" },
    ],
    ctaLabel: "Pesan Sekarang",
    ctaHref: whatsappLink,
    highlight: true,
  },
];

const addOns = [
  { label: "Interior Cleaning", price: "Rp 500.000" },
  { label: "Engine Cleaning", price: "Rp 400.000" },
  { label: "Maintenance Coating", price: "Rp 600.000" },
  { label: "Extra Nano Ceramic", price: "Rp 300.000" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-background py-24">
      <Container>
        <SectionHeading
          eyebrow="Harga Paket"
          title="Transparan, jelas, tanpa kompromi"
          description="Pilih paket sesuai kebutuhan kendaraan Anda. Konsultasikan kebutuhan khusus untuk
          hasil maksimal."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {packages.map((pkg) => (
            <PricingCard key={pkg.title} {...pkg} />
          ))}
        </div>
        <div className="mt-12 border border-white/10 bg-(--color-surface-card) p-6">
          <div className="flex items-center justify-between gap-6">
            <h3 className="text-lg font-semibold uppercase text-white">Layanan Tambahan</h3>
            <MStripe className="hidden max-w-50 sm:block" />
          </div>
          <div className="mt-6 space-y-3">
            {addOns.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-[0.2em] text-white/60">{item.label}</span>
                <span className="font-semibold text-white">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
