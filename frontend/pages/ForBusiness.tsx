import { motion } from "framer-motion";
import { Building2, GraduationCap, ShoppingCart, Landmark, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Building2,
    name: "Bất động sản",
    description: "Tự động hóa chăm sóc khách hàng, quản lý lead và tư vấn 24/7",
    benefits: [
      "Tăng 300% số lượng lead chất lượng",
      "Giảm 70% thời gian phản hồi khách hàng",
      "Tự động phân loại và chấm điểm lead"
    ]
  },
  {
    icon: GraduationCap,
    name: "Giáo dục",
    description: "Hỗ trợ tuyển sinh, tư vấn khóa học và chăm sóc học viên",
    benefits: [
      "Tăng 200% tỷ lệ chuyển đổi tuyển sinh",
      "Giảm 50% chi phí marketing",
      "Cá nhân hóa trải nghiệm học viên"
    ]
  },
  {
    icon: ShoppingCart,
    name: "Thương mại điện tử",
    description: "Tự động hóa bán hàng, chăm sóc khách hàng và marketing",
    benefits: [
      "Tăng 150% giá trị đơn hàng trung bình",
      "Giảm 60% tỷ lệ bỏ giỏ hàng",
      "Tự động upsell và cross-sell"
    ]
  },
  {
    icon: Landmark,
    name: "Tài chính - Ngân hàng",
    description: "Tư vấn sản phẩm, hỗ trợ giao dịch và phát hiện gian lận",
    benefits: [
      "Xử lý 10.000+ truy vấn mỗi ngày",
      "Giảm 80% thời gian chờ của khách hàng",
      "Phát hiện bất thường real-time"
    ]
  }
];

export default function ForBusiness() {
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
              Giải pháp cho{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Doanh nghiệp
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tối ưu hóa quy trình kinh doanh với AI được thiết kế riêng cho từng ngành
            </p>
          </motion.div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                    
                    <div className="space-y-3">
                      {industry.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Tải Profile AI&AI Tools
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Tìm hiểu chi tiết về năng lực, case study và roadmap triển khai của chúng tôi
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Tải Profile (PDF)
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Đặt lịch tư vấn</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
