import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    position: "CEO",
    company: "Tech Corp",
    avatar: "👨‍💼",
    content: "AI&AI đã giúp công ty chúng tôi tăng hiệu suất làm việc lên 300%. Đội ngũ hỗ trợ rất chuyên nghiệp và tận tâm.",
    rating: 5,
    logo: "🏢"
  },
  {
    id: 2,
    name: "Trần Thị B",
    position: "Marketing Director",
    company: "Digital Solutions",
    avatar: "👩‍💼",
    content: "Giải pháp AI Marketing của AI&AI thực sự tuyệt vời. ROI tăng 250% chỉ sau 3 tháng sử dụng.",
    rating: 5,
    logo: "💼"
  },
  {
    id: 3,
    name: "Lê Văn C",
    position: "CTO",
    company: "Innovation Hub",
    avatar: "👨‍💻",
    content: "Công nghệ tiên tiến, dễ tích hợp và hỗ trợ kỹ thuật xuất sắc. Đây là đối tác công nghệ lý tưởng.",
    rating: 5,
    logo: "🚀"
  },
  {
    id: 4,
    name: "Phạm Thị D",
    position: "Founder",
    company: "StartUp X",
    avatar: "👩‍🚀",
    content: "Với AI&AI, startup của chúng tôi đã tự động hóa 80% quy trình, tiết kiệm được rất nhiều thời gian và chi phí.",
    rating: 5,
    logo: "⭐"
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    position: "Sales Manager",
    company: "Commerce Plus",
    avatar: "👨‍💼",
    content: "Chatbot AI của AI&AI đã giúp team sales chúng tôi tăng conversion rate lên 180%. Đầu tư xứng đáng!",
    rating: 5,
    logo: "📈"
  },
  {
    id: 6,
    name: "Võ Thị F",
    position: "HR Director",
    company: "People First",
    avatar: "👩‍💼",
    content: "AI Assistant trong tuyển dụng giúp chúng tôi sàng lọc ứng viên nhanh hơn 5 lần. Công cụ không thể thiếu!",
    rating: 5,
    logo: "👥"
  },
];

function AnimatedHeading({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <h2
      ref={ref}
      className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-slate-950/50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatedHeading text="Khách hàng & Đối tác" />
          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Khách hàng nói gì về chúng tôi
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 p-4">
          <div
            ref={scrollRef}
            className="flex space-x-6 md:space-x-8 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.1 }}
                className="flex-shrink-0 w-[400px] bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl md:text-5xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {testimonial.position} - {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl">{testimonial.logo}</div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-sm md:text-base text-muted-foreground pl-6 leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
