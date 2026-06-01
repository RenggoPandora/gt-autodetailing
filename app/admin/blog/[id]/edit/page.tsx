import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AdminBlogFormTemplate } from "@/components/templates";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Edit Artikel",
  description: "Edit artikel blog GT Autodetailing.",
};

interface AdminBlogEditPageProps {
  params: Promise<{ id: string }>;
}

const AdminBlogEditPage = async ({ params }: AdminBlogEditPageProps) => {
  const { id } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).single();

  if (error || !data) {
    return notFound();
  }

  return <AdminBlogFormTemplate mode="edit" initialData={data} />;
};

export default AdminBlogEditPage;
