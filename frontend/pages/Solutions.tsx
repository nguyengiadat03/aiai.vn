import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Newspaper, Database, Mail, Code, Workflow, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const solutions = [
  {
    id: "chatbot",
    icon: MessageSquare,
    title: "AI Chatbot & Voicebot",
    description: "Tự động hóa chăm sóc khách hàng 24/7 với trí tuệ nhân tạo tiên tiến",
    features: [
      "Trả lời tự động tin nhắn Facebook, Zalo, Website",
      "Voicebot cho tổng đài thông minh",
      "Học máy liên tục từ hội thoại thực tế",
      "Hỗ trợ đa ngôn ngữ",
      "Tích hợp CRM và hệ thống nội bộ"
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "content",
    icon: Newspaper,
    title: "AI Content Generator",
    description: "Tạo nội dung chất lượng cao tự động cho mọi kênh truyền thông",
    features: [
      "Viết bài blog, bài PR tự động",
      "Tạo caption, hashtag cho social media",
      "Sinh ảnh, video từ mô tả văn bản",
      "Tối ưu SEO tự động",
      "Đa dạng phong cách và tone giọng"
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "data",
    icon: Database,
    title: "AI Data Assistant",
    description: "Phân tích và xử lý dữ liệu thông minh, insights tức thì",
    features: [
      "Phân tích dữ liệu tự động",
      "Dự đoán xu hướng và hành vi",
      "Báo cáo trực quan real-time",
      "Phát hiện bất thường và rủi ro",
      "Tối ưu quyết định kinh doanh"
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "crm",
    icon: Mail,
    title: "AI Email & CRM Assistant",
    description: "Tự động hóa email marketing và quản lý quan hệ khách hàng",
    features: [
      "Gửi email tự động theo hành vi",
      "Phân loại và chấm điểm lead",
      "Dự đoán khả năng chuyển đổi",
      "Cá nhân hóa nội dung cho từng khách hàng",
      "Tích hợp với các CRM phổ biến"
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "api",
    icon: Code,
    title: "API AI Đa tác vụ",
    description: "Tích hợp AI vào hệ thống của bạn với API mạnh mẽ và linh hoạt",
    features: [
      "RESTful API đầy đủ tài liệu",
      "Xử lý ngôn ngữ tự nhiên (NLP)",
      "Computer Vision và OCR",
      "Speech-to-Text và Text-to-Speech",
      "Tùy biến model theo nhu cầu"
    ],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "AI Automation Tools",
    description: "Tự động hóa toàn bộ quy trình marketing trên Facebook, Zalo, TikTok",
    features: [
      "Đăng bài tự động đa kênh",
      "Quản lý inbox thông minh",
      "Tương tác tự động với khách hàng",
      "Phân tích hiệu quả chiến dịch",
      "A/B testing và tối ưu liên tục"
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const plans = [
  {
    name: "Basic",
    price: "5.000.000",
    period: "tháng",
    description: "Dành cho SMEs và startup",
    features: [
      "1 AI Chatbot",
      "1.000 tin nhắn/tháng",
      "Tích hợp 2 kênh",
      "Báo cáo cơ bản",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "15.000.000",
    period: "tháng",
    description: "Dành cho doanh nghiệp phát triển",
    features: [
      "3 AI Chatbot",
      "10.000 tin nhắn/tháng",
      "Tích hợp không giới hạn",
      "Báo cáo nâng cao",
      "Priority support",
      "Custom AI model"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    period: "",
    description: "Giải pháp tùy chỉnh hoàn toàn",
    features: [
      "Không giới hạn chatbot",
      "Không giới hạn tin nhắn",
      "API riêng biệt",
      "Tích hợp CRM nội bộ",
      "24/7 dedicated support",
      "On-premise deployment"
    ]
  }
];

function SolutionCard({ solution, index }: { solution: typeof solutions[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={solution.id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} mb-6`}>
        <solution.icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
      <p className="text-muted-foreground mb-6">{solution.description}</p>
      
      <div className="space-y-3">
        {solution.features.map((feature, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-br ${solution.gradient} text-white rounded-full p-0.5`} />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button asChild className="w-full mt-6" variant="outline">
        <Link to="/contact">Tư vấn ngay</Link>
      </Button>
    </motion.div>
  );
}

export default function Solutions() {
  const plansRef = useRef(null);
  const plansInView = useInView(plansRef, { once: true, margin: "-100px" });

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
              Sản phẩm &{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Giải pháp
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá bộ giải pháp AI toàn diện, được thiết kế đặc biệt cho doanh nghiệp Việt Nam
            </p>
          </motion.div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.id} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section ref={plansRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              So sánh{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Gói dịch vụ
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chọn gói phù hợp với quy mô và nhu cầu của doanh nghiệp bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-card border rounded-2xl p-8 ${
                  plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Phổ biến nhất
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.price !== "Liên hệ" ? (
                    <>
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">đ/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold">{plan.price}</span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <Link to="/contact">Bắt đầu ngay</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
