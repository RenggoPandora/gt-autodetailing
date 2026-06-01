import { Footer, Navbar } from "@/components/organisms";
import BlogListSection from "@/components/organisms/BlogListSection";
import type { BlogPost } from "@/types/blog";

interface BlogListTemplateProps {
  posts: BlogPost[];
}

const BlogListTemplate = ({ posts }: BlogListTemplateProps) => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <BlogListSection posts={posts} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogListTemplate;
