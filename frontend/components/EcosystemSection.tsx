import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const ecosystemMembers = [
  {
    name: "NinjAI.vn",
    description: "Nền tảng AI Marketing tự động",
    url: "https://ninjai.vn",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Codefast.vn",
    description: "Giải pháp phát triển phần mềm nhanh",
    url: "https://codefast.vn",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "VNS.vn",
    description: "Hệ thống quản lý doanh nghiệp",
    url: "https://vns.vn",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "RocketAI.vn",
    description: "AI Solutions cho doanh nghiệp",
    url: "https://rocketai.vn",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "CoreAI.vn",
    description: "Nền tảng AI cốt lõi",
    url: "https://coreai.vn",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "RocketAI.dev",
    description: "AI Development Platform",
    url: "https://rocketai.dev",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function EcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-slate-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hệ Sinh Thái{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Rocket Global
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI&AI là một phần của hệ sinh thái công nghệ toàn diện, mang đến giải pháp số hóa tối ưu cho mọi doanh nghiệp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemMembers.map((member, index) => (
            <motion.a
              key={member.name}
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
