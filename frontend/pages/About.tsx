import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Sứ mệnh",
    description: "Dân chủ hóa AI, giúp mọi doanh nghiệp Việt Nam tiếp cận và ứng dụng công nghệ AI một cách dễ dàng và hiệu quả nhất."
  },
  {
    icon: Eye,
    title: "Tầm nhìn",
    description: "Trở thành nền tảng AI hàng đầu Việt Nam, góp phần chuyển đổi số toàn diện cho doanh nghiệp trong kỷ nguyên 4.0."
  },
  {
    icon: Award,
    title: "Giá trị cốt lõi",
    description: "Đổi mới sáng tạo - Tận tâm với khách hàng - Minh bạch và trung thực - Hiệu quả bền vững."
  },
  {
    icon: Users,
    title: "Đội ngũ",
    description: "Hơn 50+ chuyên gia AI, Data Science và Software Engineers với kinh nghiệm quốc tế."
  }
];

export default function About() {
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
              Về{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI&AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi là đội ngũ đam mê công nghệ AI, tận tâm mang đến giải pháp số hóa toàn diện cho doanh nghiệp Việt
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Câu chuyện thương hiệu</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AI&AI được thành lập với sứ mệnh dân chủ hóa công nghệ AI tại Việt Nam. Chúng tôi tin rằng mọi doanh nghiệp, 
                  dù lớn hay nhỏ, đều xứng đáng được tiếp cận và ứng dụng những công nghệ tiên tiến nhất để phát triển bền vững.
                </p>
                <p>
                  Là một phần của hệ sinh thái Rocket Global, AI&AI kế thừa kinh nghiệm và chuyên môn từ các thành viên như 
                  NinjAI.vn, Codefast.vn, và RocketAI.vn, mang đến giải pháp toàn diện từ tư vấn, triển khai đến vận hành.
                </p>
                <p>
                  Với đội ngũ hơn 50+ chuyên gia AI và Software Engineers có kinh nghiệm quốc tế, chúng tôi tự hào đã đồng hành 
                  cùng hàng trăm doanh nghiệp Việt Nam trong hành trình chuyển đổi số thành công.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
