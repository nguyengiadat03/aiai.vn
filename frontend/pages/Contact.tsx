import { motion } from "framer-motion";
import { useState } from "react";
import backend from "~backend/client";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await backend.contact.submit(formData);
      toast({
        title: "Thành công!",
        description: response.message,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
              Liên hệ{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                với chúng tôi
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi sẵn sàng tư vấn và hỗ trợ bạn bất cứ lúc nào
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Họ và tên *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0123456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Công ty</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Tên công ty"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Dịch vụ quan tâm</label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn dịch vụ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chatbot">AI Chatbot & Voicebot</SelectItem>
                      <SelectItem value="content">AI Content Generator</SelectItem>
                      <SelectItem value="data">AI Data Assistant</SelectItem>
                      <SelectItem value="crm">AI Email & CRM</SelectItem>
                      <SelectItem value="api">API AI</SelectItem>
                      <SelectItem value="automation">AI Automation Tools</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nội dung *</label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mô tả nhu cầu của bạn..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="lg"
                >
                  {loading ? "Đang gửi..." : "Gửi tin nhắn"}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Địa chỉ</h3>
                      <p className="text-muted-foreground">
                        Tầng 5, Tòa BMC, 379 Minh Khai, Hai Bà Trưng, Hà Nội
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@aiai.vn" className="text-primary hover:underline">
                        contact@aiai.vn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Hotline</h3>
                      <p className="text-muted-foreground">1900 xxxx (8:00 - 22:00)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Giờ làm việc</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Thứ 2 - Thứ 6:</span>
                    <span className="text-foreground">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thứ 7:</span>
                    <span className="text-foreground">8:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chủ nhật:</span>
                    <span className="text-foreground">Nghỉ</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
