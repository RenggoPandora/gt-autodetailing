"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/utils/slugify";
import type { BlogPostInsert, BlogPostUpdate } from "@/types/blog";

export interface BlogFormState {
  message: string | null;
}

const parseString = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value.trim() : "";

export async function createBlogPost(
  _prevState: BlogFormState,
  formData: FormData
): Promise<BlogFormState> {
  const title = parseString(formData.get("title"));
  const slugInput = parseString(formData.get("slug"));
  const excerpt = parseString(formData.get("excerpt"));
  const content = parseString(formData.get("content"));
  const thumbnail = parseString(formData.get("thumbnail")) || null;
  const category = parseString(formData.get("category")) || null;
  const status = parseString(formData.get("status")) || "draft";
  const metaTitle = parseString(formData.get("meta_title")) || null;
  const metaDescription = parseString(formData.get("meta_description")) || null;

  if (!title || !excerpt || !content) {
    return { message: "Judul, ringkasan, dan konten wajib diisi." };
  }

  const slug = slugInput ? slugify(slugInput) : slugify(title);

  const payload: BlogPostInsert = {
    title,
    slug,
    excerpt,
    content,
    thumbnail,
    category,
    status,
    meta_title: metaTitle,
    meta_description: metaDescription,
  };

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("blog_posts").insert([payload] as never[]);

    if (error) {
      console.error("Gagal membuat artikel:", error);
      return { message: "Gagal menyimpan artikel. Silakan cek slug atau coba lagi." };
    }
  } catch (error) {
    console.error("Error create blog:", error);
    return { message: "Terjadi kesalahan. Silakan coba lagi." };
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function updateBlogPost(
  _prevState: BlogFormState,
  formData: FormData
): Promise<BlogFormState> {
  const id = parseString(formData.get("id"));
  const title = parseString(formData.get("title"));
  const slugInput = parseString(formData.get("slug"));
  const excerpt = parseString(formData.get("excerpt"));
  const content = parseString(formData.get("content"));
  const thumbnail = parseString(formData.get("thumbnail")) || null;
  const category = parseString(formData.get("category")) || null;
  const status = parseString(formData.get("status")) || "draft";
  const metaTitle = parseString(formData.get("meta_title")) || null;
  const metaDescription = parseString(formData.get("meta_description")) || null;

  if (!id || !title || !excerpt || !content) {
    return { message: "Judul, ringkasan, dan konten wajib diisi." };
  }

  const slug = slugInput ? slugify(slugInput) : slugify(title);

  const payload: BlogPostUpdate = {
    title,
    slug,
    excerpt,
    content,
    thumbnail,
    category,
    status,
    meta_title: metaTitle,
    meta_description: metaDescription,
  };

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("blog_posts").update(payload as never).eq("id", id);

    if (error) {
      console.error("Gagal update artikel:", error);
      return { message: "Gagal memperbarui artikel. Silakan coba lagi." };
    }
  } catch (error) {
    console.error("Error update blog:", error);
    return { message: "Terjadi kesalahan. Silakan coba lagi." };
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function deleteBlogPost(formData: FormData) {
  const id = parseString(formData.get("id"));

  if (!id) {
    return;
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);

    if (error) {
      console.error("Gagal hapus artikel:", error);
    }
  } catch (error) {
    console.error("Error delete blog:", error);
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}
