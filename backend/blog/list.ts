import { api } from "encore.dev/api";
import db from "../db";

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

interface ListBlogPostsResponse {
  posts: BlogPost[];
}

// Retrieves all blog posts, ordered by publication date (latest first).
export const list = api<void, ListBlogPostsResponse>(
  { expose: true, method: "GET", path: "/blog/posts" },
  async () => {
    const posts: BlogPost[] = [];
    const rows = db.query<BlogPost>`
      SELECT id, title, slug, excerpt, content, category, image_url as "imageUrl", published_at as "publishedAt", author
      FROM blog_posts
      ORDER BY published_at DESC
    `;
    for await (const row of rows) {
      posts.push(row);
    }
    return { posts };
  }
);
