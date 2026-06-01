import type { Metadata } from "next";

import { AdminBlogListTemplate } from "@/components/templates";
import { createClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/types/blog";

export const metadata: Metadata = {
  title: "Admin Blog",
  description: "Kelola artikel blog GT Autodetailing.",
};

const AdminBlogPage = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Gagal memuat artikel:", error);
  }

  const posts = (data ?? []) as BlogPost[];

  return <AdminBlogListTemplate posts={posts} />;
};

export default AdminBlogPage;
