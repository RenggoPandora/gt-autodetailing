import { Button } from "@/components/atoms";
import { AdminBlogTable } from "@/components/organisms";
import AdminPageTemplate from "@/components/templates/AdminPageTemplate";
import type { BlogPost } from "@/types/blog";

interface AdminBlogListTemplateProps {
  posts: BlogPost[];
}

const AdminBlogListTemplate = ({ posts }: AdminBlogListTemplateProps) => {
  return (
    <AdminPageTemplate
      title="Blog Admin"
      action={<Button href="/admin/blog/new" label="Tulis Artikel" />}
    >
      <AdminBlogTable posts={posts} />
    </AdminPageTemplate>
  );
};

export default AdminBlogListTemplate;
