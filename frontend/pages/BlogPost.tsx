import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import backend from "~backend/client";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  publishedAt: Date;
  author: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        const response = await backend.blog.get({ slug });
        setPost(response);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h1>
        <Button asChild>
          <Link to="/blog">Quay lại Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Blog
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center space-x-6 text-muted-foreground mb-8">
              <span className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
              </span>
              <span className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </span>
            </div>

            <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl mb-8 flex items-center justify-center overflow-hidden">
              <div className="text-8xl opacity-20">📝</div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
              <div className="whitespace-pre-line">{post.content}</div>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
