import type { Metadata } from "next";

import { BlogListTemplate } from "@/components/templates";
import { createClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/types/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artikel, tips, dan insight detailing kendaraan dari GT Autodetailing.",
};

export const revalidate = 3600;

const BlogPage = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Gagal memuat blog publik:", error);
  }

  const posts = (data ?? []) as BlogPost[];

  return <BlogListTemplate posts={posts} />;
};

export default BlogPage;
