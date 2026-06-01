import { Container, MStripe } from "@/components/atoms";
import { BlogCard, SectionHeading } from "@/components/molecules";
import type { BlogPost } from "@/types/blog";

interface BlogListSectionProps {
  posts: BlogPost[];
}

const BlogListSection = ({ posts }: BlogListSectionProps) => {
  return (
    <section className="bg-black py-20">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Insight detailing terbaru"
          description="Kumpulan artikel tips, perawatan, dan update layanan GT Autodetailing."
        />
        <MStripe className="mt-8" />
        {posts.length === 0 ? (
          <div className="mt-12 border border-white/10 bg-(--color-surface-card) p-8 text-center">
            <p className="text-sm text-white/70">Belum ada artikel yang dipublikasikan.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default BlogListSection;
