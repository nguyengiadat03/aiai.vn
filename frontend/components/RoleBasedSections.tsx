import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

const roles = [
  {
    icon: Building2,
    title: "Dành cho Doanh nghiệp",
    description: "Tối ưu hóa quy trình kinh doanh, tăng hiệu suất làm việc và tiết kiệm chi phí vận hành với giải pháp AI toàn diện.",
    features: [
      "Tự động hóa quy trình Marketing & Sales",
      "AI Chatbot chăm sóc khách hàng 24/7",
      "Phân tích dữ liệu và báo cáo thông minh",
      "Tích hợp CRM & hệ thống nội bộ",
    ],
    gradient: "from-blue-600 to-cyan-600",
    buttonText: "Đăng ký tư vấn",
    link: "/for-business",
  },
  {
    icon: GraduationCap,
    title: "Dành cho Sinh viên",
    description: "Học tập và làm việc với công nghệ AI tiên tiến. Nâng cao kỹ năng nghề nghiệp và chuẩn bị sẵn sàng cho thị trường lao động.",
    features: [
      "Khóa học AI thực chiến miễn phí",
      "Công cụ AI hỗ trợ học tập",
      "Cơ hội thực tập tại doanh nghiệp",
      "Chứng chỉ AI được công nhận",
    ],
    gradient: "from-purple-600 to-pink-600",
    buttonText: "Đăng ký học",
    link: "/contact",
  },
  {
    icon: Briefcase,
    title: "Dành cho Thực tập sinh",
    description: "Trải nghiệm thực tế với các dự án AI, phát triển kỹ năng chuyên môn và xây dựng portfolio ấn tượng cùng đội ngũ chuyên gia.",
    features: [
      "Tham gia dự án AI thực tế",
      "Mentorship từ chuyên gia hàng đầu",
      "Môi trường làm việc chuyên nghiệp",
      "Cơ hội việc làm full-time",
    ],
    gradient: "from-orange-600 to-red-600",
    buttonText: "Ứng tuyển ngay",
    link: "/contact",
  },
];

export default function RoleBasedSections() {
  return (
    <section id="roles" className="py-20 bg-gradient-to-b from-background to-slate-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Giải pháp cho mọi đối tượng
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng tôi cung cấp giải pháp phù hợp cho từng nhu cầu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
                  <p className="text-muted-foreground mb-6">{role.description}</p>

                  <ul className="space-y-3 mb-8">
                    {role.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.gradient} mt-2 flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${role.gradient} hover:opacity-90 group/btn`}
                  >
                    <Link to={role.link}>
                      {role.buttonText}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
