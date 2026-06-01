"use client";

import { useFormState, useFormStatus } from "react-dom";

import { Button, Container, Input, Label } from "@/components/atoms";
import { SelectField, TextareaField } from "@/components/molecules";
import { createBlogPost, updateBlogPost, type BlogFormState } from "@/app/admin/blog/actions";
import type { BlogPost } from "@/types/blog";

interface AdminBlogFormProps {
  mode: "create" | "edit";
  initialData?: BlogPost | null;
}

const initialState: BlogFormState = { message: null };

const SubmitButton = ({ mode }: { mode: "create" | "edit" }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full"
      label={pending ? "Menyimpan..." : mode === "create" ? "Simpan Artikel" : "Perbarui Artikel"}
      type="submit"
      disabled={pending}
    />
  );
};

const AdminBlogForm = ({ mode, initialData }: AdminBlogFormProps) => {
  const action = mode === "create" ? createBlogPost : updateBlogPost;
  const [state, formAction] = useFormState(action, initialState);

  return (
    <Container className="py-10">
      <form className="space-y-8" action={formAction}>
        {mode === "edit" ? <input type="hidden" name="id" value={initialData?.id} /> : null}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="title">Judul Artikel</Label>
            <Input
              id="title"
              name="title"
              placeholder="Masukkan judul artikel"
              defaultValue={initialData?.title ?? ""}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input
              id="slug"
              name="slug"
              placeholder="contoh-judul-artikel"
              defaultValue={initialData?.slug ?? ""}
            />
          </div>
        </div>

        <TextareaField
          id="excerpt"
          label="Ringkasan"
          placeholder="Ringkasan singkat untuk preview artikel"
          defaultValue={initialData?.excerpt ?? ""}
          rows={3}
        />

        <TextareaField
          id="content"
          label="Konten Artikel"
          placeholder="Tulis konten artikel di sini"
          defaultValue={initialData?.content ?? ""}
          rows={10}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="thumbnail">Thumbnail URL</Label>
            <Input
              id="thumbnail"
              name="thumbnail"
              placeholder="https://..."
              defaultValue={initialData?.thumbnail ?? ""}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Kategori</Label>
            <Input
              id="category"
              name="category"
              placeholder="Perawatan, Tips, Promo"
              defaultValue={initialData?.category ?? ""}
            />
          </div>
        </div>

        <SelectField
          id="status"
          label="Status"
          defaultValue={initialData?.status ?? "draft"}
          options={[
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ]}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="meta_title">Meta Title (SEO)</Label>
            <Input
              id="meta_title"
              name="meta_title"
              placeholder="Judul SEO"
              defaultValue={initialData?.meta_title ?? ""}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="meta_description">Meta Description (SEO)</Label>
            <Input
              id="meta_description"
              name="meta_description"
              placeholder="Deskripsi singkat untuk SEO"
              defaultValue={initialData?.meta_description ?? ""}
            />
          </div>
        </div>

        {state.message ? <p className="text-xs text-red-200">{state.message}</p> : null}
        <SubmitButton mode={mode} />
      </form>
    </Container>
  );
};

export default AdminBlogForm;
