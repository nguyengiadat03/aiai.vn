import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "5.000.000",
    period: "tháng",
    description: "Hoàn hảo cho SMEs và startup",
    features: [
      "1 AI Chatbot",
      "1.000 tin nhắn/tháng",
      "Tích hợp 2 kênh (Facebook, Zalo hoặc Website)",
      "Dashboard báo cáo cơ bản",
      "Email support trong giờ hành chính",
      "Tài liệu hướng dẫn đầy đủ"
    ]
  },
  {
    name: "Pro",
    price: "15.000.000",
    period: "tháng",
    description: "Dành cho doanh nghiệp đang phát triển",
    features: [
      "3 AI Chatbot",
      "10.000 tin nhắn/tháng",
      "Tích hợp không giới hạn kênh",
      "Dashboard báo cáo nâng cao & Real-time",
      "Priority support 24/7",
      "Custom AI model theo ngành",
      "Đào tạo team sử dụng",
      "API access cơ bản"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    period: "",
    description: "Giải pháp tùy chỉnh hoàn toàn",
    features: [
      "Không giới hạn AI Chatbot",
      "Không giới hạn tin nhắn",
      "API riêng biệt & unlimited calls",
      "Tích hợp sâu với CRM nội bộ",
      "Dedicated account manager",
      "On-premise deployment option",
      "Custom development theo yêu cầu",
      "SLA 99.9% uptime guarantee",
      "White-label solution"
    ]
  }
];

export default function Pricing() {
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
              Bảng giá &{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Gói dịch vụ
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chọn gói phù hợp với quy mô và nhu cầu của doanh nghiệp. Linh hoạt nâng cấp bất cứ lúc nào.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-card border rounded-2xl p-8 ${
                  plan.popular ? 'border-primary shadow-2xl scale-105 z-10' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Phổ biến nhất
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-2">
                    {plan.price !== "Liên hệ" ? (
                      <>
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">đ/{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold">{plan.price}</span>
                    )}
                  </div>
                  {plan.price !== "Liên hệ" && (
                    <p className="text-xs text-muted-foreground">Chưa bao gồm VAT</p>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
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
                  size="lg"
                >
                  <Link to="/contact">
                    {plan.price === "Liên hệ" ? "Tư vấn ngay" : "Bắt đầu ngay"}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Tất cả các gói đều bao gồm bảo mật SSL, backup tự động và cập nhật tính năng miễn phí
            </p>
            <p className="text-sm text-muted-foreground">
              Cần tư vấn thêm?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Liên hệ với chúng tôi
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
