import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "AI&AI là gì?",
    answer: "AI&AI là nền tảng cung cấp giải pháp AI toàn diện cho doanh nghiệp, giúp tự động hóa quy trình, tối ưu chi phí và nâng cao hiệu quả kinh doanh."
  },
  {
    question: "Tôi có cần kiến thức kỹ thuật để sử dụng không?",
    answer: "Không, các giải pháp của chúng tôi được thiết kế thân thiện với người dùng. Chúng tôi cũng cung cấp đào tạo và hỗ trợ đầy đủ để đảm bảo bạn sử dụng hiệu quả."
  },
  {
    question: "Mất bao lâu để triển khai?",
    answer: "Thời gian triển khai phụ thuộc vào quy mô dự án, thường từ 1-4 tuần. Chúng tôi có quy trình triển khai nhanh chóng và hiệu quả."
  },
  {
    question: "Dữ liệu của tôi có an toàn không?",
    answer: "Chúng tôi cam kết bảo mật tuyệt đối dữ liệu khách hàng với mã hóa tiên tiến, tuân thủ GDPR và các tiêu chuẩn bảo mật quốc tế."
  },
  {
    question: "Có thể tùy chỉnh theo nhu cầu riêng không?",
    answer: "Có, gói Enterprise cho phép tùy chỉnh hoàn toàn theo nhu cầu đặc thù của doanh nghiệp bạn."
  },
  {
    question: "Chính sách hỗ trợ như thế nào?",
    answer: "Chúng tôi cung cấp hỗ trợ 24/7 qua email, chat và hotline. Gói Pro và Enterprise có priority support với đội ngũ dedicated."
  },
  {
    question: "Có thể thử nghiệm miễn phí không?",
    answer: "Có, chúng tôi cung cấp demo miễn phí để bạn trải nghiệm trước khi quyết định sử dụng."
  },
  {
    question: "Làm thế nào để nâng cấp gói dịch vụ?",
    answer: "Bạn có thể nâng cấp bất cứ lúc nào bằng cách liên hệ với đội ngũ sales hoặc qua tài khoản của bạn."
  }
];

export default function FAQ() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Câu hỏi{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Thường gặp
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tìm câu trả lời cho những thắc mắc phổ biến về dịch vụ của chúng tôi
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
