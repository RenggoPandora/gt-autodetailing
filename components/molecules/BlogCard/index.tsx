import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/atoms";
import { formatDate } from "@/lib/utils/formatDate";
import { cn } from "@/lib/utils/cn";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard = ({ post, className }: BlogCardProps) => {
  return (
    <article
      className={cn(
        "flex h-full flex-col border border-white/10 bg-(--color-surface-card)",
        className
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/10">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt={`Thumbnail artikel ${post.title}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-black/40 text-xs uppercase tracking-[0.3em] text-white/40">
            Tanpa Gambar
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between text-xs text-white/60">
          {post.category ? <Badge label={post.category} /> : <span />}
          <span className="uppercase tracking-[0.2em]">
            {formatDate(post.published_at ?? post.created_at)}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold uppercase text-white">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/70">{post.excerpt}</p>
        <Link
          className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white"
          href={`/blog/${post.slug}`}
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
