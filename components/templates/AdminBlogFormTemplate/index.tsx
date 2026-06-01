import { Button } from "@/components/atoms";
import { AdminBlogForm } from "@/components/organisms";
import AdminPageTemplate from "@/components/templates/AdminPageTemplate";
import type { BlogPost } from "@/types/blog";

interface AdminBlogFormTemplateProps {
  mode: "create" | "edit";
  initialData?: BlogPost | null;
}

const AdminBlogFormTemplate = ({ mode, initialData }: AdminBlogFormTemplateProps) => {
  return (
    <AdminPageTemplate
      title={mode === "create" ? "Artikel Baru" : "Edit Artikel"}
      action={<Button href="/admin/blog" label="Kembali" variant="outline" />}
    >
      <AdminBlogForm mode={mode} initialData={initialData} />
    </AdminPageTemplate>
  );
};

export default AdminBlogFormTemplate;
