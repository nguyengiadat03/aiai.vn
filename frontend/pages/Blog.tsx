import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backend from "~backend/client";
import { Calendar, User, ArrowRight } from "lucide-react";
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

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await backend.blog.list();
        setPosts(response.posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-slate-950/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kiến thức, xu hướng và câu chuyện thành công về AI trong kinh doanh
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                      <div className="text-6xl opacity-20">📝</div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </span>
                      </div>
                      
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-3">
                        {post.category}
                      </span>
                      
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform">
                        Đọc tiếp <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
