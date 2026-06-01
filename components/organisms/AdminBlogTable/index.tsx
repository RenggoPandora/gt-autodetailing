import Link from "next/link";

import { Button, Container, MStripe } from "@/components/atoms";
import { deleteBlogPost } from "@/app/admin/blog/actions";
import { formatDate } from "@/lib/utils/formatDate";
import type { BlogPost } from "@/types/blog";

interface AdminBlogTableProps {
  posts: BlogPost[];
}

const AdminBlogTable = ({ posts }: AdminBlogTableProps) => {
  if (posts.length === 0) {
    return (
      <Container className="py-16">
        <div className="border border-white/10 bg-(--color-surface-card) p-8 text-center">
          <p className="text-sm text-white/70">Belum ada artikel. Buat artikel pertama Anda.</p>
          <MStripe className="mt-6" />
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <div className="overflow-x-auto border border-white/10 bg-(--color-surface-card)">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-white/60">
            <tr>
              <th className="px-6 py-4">Judul</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Tanggal</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-white/10 last:border-b-0">
                <td className="px-6 py-4">
                  <div>
                    <p className="text-white">{post.title}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
                      {post.slug}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-white/70">
                  {formatDate(post.published_at ?? post.created_at)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-3">
                    <Link
                      className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white"
                      href={`/admin/blog/${post.id}/edit`}
                    >
                      Edit
                    </Link>
                    <form action={deleteBlogPost}>
                      <input type="hidden" name="id" value={post.id} />
                      <Button label="Hapus" type="submit" variant="outline" />
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AdminBlogTable;
