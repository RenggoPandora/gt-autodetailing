import { Container, MStripe } from "@/components/atoms";
import { NavLink } from "@/components/molecules";
import { BUSINESS } from "@/lib/constants/business";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background py-16">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white">
            {BUSINESS.name}
          </p>
          <p className="mt-4 text-sm text-white/70">{BUSINESS.tagline}</p>
          <MStripe className="mt-6 max-w-xs" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Navigasi</p>
            <div className="flex flex-col gap-2">
              <NavLink href="#services" label="Layanan" />
              <NavLink href="#pricing" label="Harga" />
              <NavLink href="#works" label="Portofolio" />
              <NavLink href="/blog" label="Blog" />
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Kontak</p>
            <div className="text-sm text-white/70">
              <p>{BUSINESS.whatsappDisplay}</p>
              <p>@{BUSINESS.instagram}</p>
              <p>{BUSINESS.city}</p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 GT Autodetailing. All rights reserved.</p>
        <p>Dirancang untuk standar detailing motorsport.</p>
      </Container>
    </footer>
  );
};

export default Footer;
