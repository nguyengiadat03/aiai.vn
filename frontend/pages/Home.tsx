import HeroSection from "../components/HeroSection";
import EcosystemSection from "../components/EcosystemSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductsSection from "../components/ProductsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import RoleBasedSections from "../components/RoleBasedSections";
import ScrollToTop from "../components/ScrollToTop";
import PageIndicators from "../components/PageIndicators";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const partners = [
  "VinGroup", "FPT", "Viettel", "BIDV", "Vinamilk", "Masan"
];

const timeline = [
  { step: "Tư vấn", description: "Phân tích nhu cầu và đề xuất giải pháp phù hợp" },
  { step: "Cài đặt", description: "Triển khai hệ thống nhanh chóng và chuyên nghiệp" },
  { step: "Đào tạo", description: "Hướng dẫn sử dụng và tối ưu hóa hiệu quả" },
  { step: "Hỗ trợ", description: "Bảo trì và nâng cấp liên tục" },
];

export default function Home() {
  const timelineRef = useRef(null);
  const partnersRef = useRef(null);
  const ctaRef = useRef(null);
  
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const partnersInView = useInView(partnersRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div>
      <PageIndicators />
      <ScrollToTop />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="ecosystem">
        <EcosystemSection />
      </div>
      <div id="why-choose">
        <WhyChooseUs />
      </div>
      <div id="products">
        <ProductsSection />
      </div>

      <section ref={timelineRef} className="py-20 bg-gradient-to-b from-background to-slate-950/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mô hình{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Triển khai
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quy trình 4 bước đơn giản, mang lại hiệu quả tối đa
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <h3 className="text-2xl font-bold mb-2">{item.step}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      
      <RoleBasedSections />

      <section ref={ctaRef} className="py-20 bg-gradient-to-b from-slate-950/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-primary/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sẵn sàng bắt đầu hành trình{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI hóa?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Liên hệ ngay để nhận tư vấn miễn phí và trải nghiệm sức mạnh của AI trong doanh nghiệp của bạn
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg group">
                <Link to="/contact">
                  Đăng ký Demo Ngay
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-2">
                <Link to="/pricing">
                  Xem bảng giá
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Miễn phí tư vấn</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Demo thực tế</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
