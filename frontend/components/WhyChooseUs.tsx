import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, DollarSign, Shield, Users, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Dễ triển khai",
    description: "Setup nhanh chóng, tích hợp liền mạch với hệ thống hiện tại",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Hiệu quả nhanh",
    description: "Tăng năng suất ngay lập tức, ROI rõ ràng trong 3 tháng",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: DollarSign,
    title: "Tiết kiệm chi phí",
    description: "Giảm 70% chi phí vận hành, tự động hóa quy trình",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Bảo mật tuyệt đối",
    description: "Mã hóa dữ liệu, tuân thủ GDPR và các tiêu chuẩn quốc tế",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ chuyên gia sẵn sàng hỗ trợ mọi lúc, mọi nơi",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Rocket,
    title: "Mở rộng linh hoạt",
    description: "Scale dễ dàng theo nhu cầu, không giới hạn người dùng",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vì sao chọn{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI&AI?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi mang đến giải pháp AI toàn diện, tối ưu hóa mọi khía cạnh vận hành doanh nghiệp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>

              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
