CREATE TABLE blog_posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  author TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);

CREATE TABLE contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  service TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, category, image_url, author) VALUES
('AI và Marketing: Xu hướng 2024', 'ai-va-marketing-xu-huong-2024', 'Khám phá cách AI đang thay đổi ngành Marketing và những xu hướng nổi bật trong năm 2024', 'Trí tuệ nhân tạo đang cách mạng hóa cách các doanh nghiệp tiếp cận khách hàng...', 'Cập nhật công nghệ AI', '/blog/ai-marketing.jpg', 'Nguyễn Văn A'),
('Chatbot AI: Tối ưu chăm sóc khách hàng', 'chatbot-ai-toi-uu-cham-soc-khach-hang', 'Cách triển khai Chatbot AI hiệu quả để nâng cao trải nghiệm khách hàng và tăng doanh số', 'Chatbot AI không chỉ giúp doanh nghiệp tiết kiệm chi phí mà còn cải thiện đáng kể chất lượng dịch vụ...', 'Ứng dụng AI trong Marketing', '/blog/chatbot.jpg', 'Trần Thị B'),
('Case Study: Tăng 300% hiệu quả với AI Automation', 'case-study-tang-300-hieu-qua-voi-ai-automation', 'Câu chuyện thành công của doanh nghiệp BĐS khi áp dụng AI Automation vào quy trình bán hàng', 'Một công ty bất động sản đã tăng trưởng 300% doanh số chỉ sau 3 tháng triển khai AI Automation...', 'Câu chuyện thành công', '/blog/case-study.jpg', 'Lê Văn C');
