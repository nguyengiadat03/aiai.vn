import { api, APIError } from "encore.dev/api";
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

// Retrieves a blog post by its slug.
export const get = api<{ slug: string }, BlogPost>(
  { expose: true, method: "GET", path: "/blog/posts/:slug" },
  async ({ slug }) => {
    const post = await db.queryRow<BlogPost>`
      SELECT id, title, slug, excerpt, content, category, image_url as "imageUrl", published_at as "publishedAt", author
      FROM blog_posts
      WHERE slug = ${slug}
    `;
    if (!post) {
      throw APIError.notFound("blog post not found");
    }
    return post;
  }
);
