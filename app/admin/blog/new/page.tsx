import type { Metadata } from "next";

import { AdminBlogFormTemplate } from "@/components/templates";

export const metadata: Metadata = {
  title: "Artikel Baru",
  description: "Buat artikel blog baru.",
};

const AdminBlogNewPage = () => {
  return <AdminBlogFormTemplate mode="create" />;
};

export default AdminBlogNewPage;
