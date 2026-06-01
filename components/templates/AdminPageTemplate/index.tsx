import { Container } from "@/components/atoms";
import { AdminHeader } from "@/components/organisms";

interface AdminPageTemplateProps {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

const AdminPageTemplate = ({ title, action, children }: AdminPageTemplateProps) => {
  return (
    <div className="min-h-screen bg-black">
      <AdminHeader title={title} action={action} />
      <Container className="py-10 text-white/70">
        <div className="max-w-3xl text-sm leading-6">
          Kelola artikel blog, atur status publikasi, dan pastikan konten selalu up to date.
        </div>
      </Container>
      {children}
    </div>
  );
};

export default AdminPageTemplate;
