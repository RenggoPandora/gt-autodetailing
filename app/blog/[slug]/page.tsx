import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogDetailTemplate } from "@/components/templates";
import { createClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/types/blog";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export const generateMetadata = async ({ params }: BlogDetailPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("title, excerpt, thumbnail")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (!data) {
    return {
      title: "Artikel Tidak Ditemukan",
      description: "Artikel yang Anda cari tidak tersedia.",
    };
  }

  return {
    title: data.title,
    description: data.excerpt ?? "Artikel GT Autodetailing.",
    openGraph: {
      title: data.title,
      description: data.excerpt ?? "Artikel GT Autodetailing.",
      images: data.thumbnail ? [{ url: data.thumbnail }] : undefined,
    },
  };
};

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { slug } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !data) {
    return notFound();
  }

  const post = data as BlogPost;

  return <BlogDetailTemplate post={post} />;
};

export default BlogDetailPage;
