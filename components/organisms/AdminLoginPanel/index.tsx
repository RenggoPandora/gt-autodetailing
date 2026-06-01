import Image from "next/image";

import { Container, MStripe } from "@/components/atoms";
import AdminLoginForm from "@/components/organisms/AdminLoginForm";

const AdminLoginPanel = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <Image
        src="/images/work/WORK-1.webp"
        alt="Detail bodi kendaraan GT Autodetailing"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/95" />
      <Container className="relative flex min-h-screen items-center">
        <div className="w-full max-w-md border border-white/15 bg-black/70 p-8 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Admin Access
          </p>
          <h1 className="mt-4 text-3xl font-semibold uppercase text-white">Login Admin</h1>
          <p className="mt-3 text-sm leading-6 text-white/65">
            Masuk untuk mengelola konten blog dan update informasi layanan.
          </p>
          <MStripe className="mt-6" />
          <div className="mt-6">
            <AdminLoginForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdminLoginPanel;
