import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Newspaper, Database, Mail, Code, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: MessageSquare,
    title: "AI Chatbot & Voicebot",
    description: "Tự động hóa chăm sóc khách hàng 24/7 với AI thông minh",
    gradient: "from-blue-500 to-cyan-500",
    link: "/solutions#chatbot",
  },
  {
    icon: Newspaper,
    title: "AI Content Generator",
    description: "Tạo nội dung chất lượng cao tự động cho mọi kênh truyền thông",
    gradient: "from-purple-500 to-pink-500",
    link: "/solutions#content",
  },
  {
    icon: Database,
    title: "AI Data Assistant",
    description: "Phân tích và xử lý dữ liệu thông minh, insights tức thì",
    gradient: "from-green-500 to-emerald-500",
    link: "/solutions#data",
  },
  {
    icon: Mail,
    title: "AI Email & CRM Assistant",
    description: "Tự động hóa email marketing và quản lý quan hệ khách hàng",
    gradient: "from-orange-500 to-red-500",
    link: "/solutions#crm",
  },
  {
    icon: Code,
    title: "API AI Đa tác vụ",
    description: "Tích hợp AI vào hệ thống của bạn với API mạnh mẽ",
    gradient: "from-indigo-500 to-purple-500",
    link: "/solutions#api",
  },
  {
    icon: Workflow,
    title: "AI Automation Tools",
    description: "Facebook, Zalo, TikTok - tự động hóa toàn bộ quy trình",
    gradient: "from-pink-500 to-rose-500",
    link: "/solutions#automation",
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-slate-950/50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sản phẩm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Nổi bật
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Giải pháp AI toàn diện cho mọi nhu cầu của doanh nghiệp hiện đại
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border rounded-xl p-6 md:p-8 hover:border-transparent transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <Link to={product.link}>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-background/90 group-hover:bg-background/5 transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} mb-4 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${product.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity duration-300`} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/solutions">Khám phá tất cả sản phẩm</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
