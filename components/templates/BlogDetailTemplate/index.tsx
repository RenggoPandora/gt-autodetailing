import { Footer, Navbar } from "@/components/organisms";
import BlogDetailSection from "@/components/organisms/BlogDetailSection";
import type { BlogPost } from "@/types/blog";

interface BlogDetailTemplateProps {
  post: BlogPost;
}

const BlogDetailTemplate = ({ post }: BlogDetailTemplateProps) => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <BlogDetailSection post={post} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailTemplate;
