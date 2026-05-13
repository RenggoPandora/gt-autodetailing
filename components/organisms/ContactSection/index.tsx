import { Button, Container, MStripe } from "@/components/atoms";
import { ContactItem, SectionHeading } from "@/components/molecules";
import { BUSINESS } from "@/lib/constants/business";

const ContactSection = () => {
  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}`;
  const mapsEmbed = "https://www.google.com/maps?q=GT%20Autodetailing%20Purwokerto&output=embed";

  return (
    <section id="contact" className="bg-background py-24">
      <Container>
        <SectionHeading
          eyebrow="Kontak"
          title="Akses mudah menuju workshop"
          description="Hubungi kami untuk konsultasi atau kunjungan langsung ke workshop di Purwokerto."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden border border-white/10 bg-(--color-surface-card)">
            <iframe
              title="Lokasi GT Autodetailing"
              src={mapsEmbed}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="border border-white/10 bg-(--color-surface-card) p-6">
            <MStripe />
            <div className="mt-6 space-y-6">
              <ContactItem label="WhatsApp" value={BUSINESS.whatsappDisplay} href={whatsappLink} />
              <ContactItem
                label="Instagram"
                value={`@${BUSINESS.instagram}`}
                href={BUSINESS.instagramUrl}
              />
              <ContactItem label="Lokasi" value={BUSINESS.city} href={BUSINESS.mapsUrl} />
            </div>
            <Button className="mt-8 w-full" href={whatsappLink} label="Hubungi Kami" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
