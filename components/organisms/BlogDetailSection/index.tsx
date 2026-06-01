import Image from "next/image";

import { Container, MStripe } from "@/components/atoms";
import { formatDate } from "@/lib/utils/formatDate";
import type { BlogPost } from "@/types/blog";

interface BlogDetailSectionProps {
  post: BlogPost;
}

const BlogDetailSection = ({ post }: BlogDetailSectionProps) => {
  return (
    <section className="bg-black py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            {post.category ?? "Blog"}
          </p>
          <h1 className="mt-4 text-3xl font-semibold uppercase text-white md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">
            {formatDate(post.published_at ?? post.created_at)}
          </p>
          <MStripe className="mt-6" />
        </div>
        {post.thumbnail ? (
          <div className="relative mt-10 aspect-video overflow-hidden border border-white/10">
            <Image
              src={post.thumbnail}
              alt={`Thumbnail artikel ${post.title}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        ) : null}
        <div className="mt-10 max-w-3xl space-y-5 text-sm leading-7 text-white/75">
          <p className="text-white/80">{post.excerpt}</p>
          <div className="whitespace-pre-line">{post.content}</div>
        </div>
      </Container>
    </section>
  );
};

export default BlogDetailSection;
