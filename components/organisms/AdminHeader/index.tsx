import { Button, Container, MStripe } from "@/components/atoms";
import { signOut } from "@/app/admin/actions";

interface AdminHeaderProps {
  title: string;
  action?: React.ReactNode;
}

const AdminHeader = ({ title, action }: AdminHeaderProps) => {
  return (
    <header className="border-b border-white/10 bg-black">
      <MStripe />
      <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Admin</p>
          <h1 className="mt-3 text-2xl font-semibold uppercase text-white sm:text-3xl">
            {title}
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {action}
          <form action={signOut}>
            <Button label="Keluar" type="submit" variant="outline" />
          </form>
        </div>
      </Container>
    </header>
  );
};

export default AdminHeader;
