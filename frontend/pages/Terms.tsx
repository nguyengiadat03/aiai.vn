import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Điều khoản Dịch vụ</h1>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground">
                Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
              </p>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Chấp nhận điều khoản</h2>
                <p className="text-muted-foreground">
                  Bằng việc sử dụng dịch vụ của AI&AI, bạn đồng ý tuân theo các điều khoản và điều kiện được 
                  quy định trong tài liệu này.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Sử dụng dịch vụ</h2>
                <p className="text-muted-foreground">
                  Bạn cam kết sử dụng dịch vụ của chúng tôi một cách hợp pháp, không vi phạm quyền lợi của 
                  bên thứ ba, và tuân thủ mọi quy định pháp luật hiện hành.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Trách nhiệm của người dùng</h2>
                <p className="text-muted-foreground">
                  Người dùng chịu trách nhiệm về nội dung mà họ tạo ra hoặc chia sẻ thông qua dịch vụ của 
                  chúng tôi. Bạn không được sử dụng dịch vụ để phát tán thông tin sai lệch, spam, hoặc 
                  nội dung bất hợp pháp.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Thanh toán và hoàn tiền</h2>
                <p className="text-muted-foreground">
                  Mọi khoản thanh toán được thực hiện theo gói dịch vụ đã đăng ký. Chính sách hoàn tiền 
                  sẽ được áp dụng theo thỏa thuận cụ thể trong hợp đồng dịch vụ.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Giới hạn trách nhiệm</h2>
                <p className="text-muted-foreground">
                  AI&AI không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng hoặc 
                  không thể sử dụng dịch vụ, trừ khi được quy định rõ trong hợp đồng.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Thay đổi điều khoản</h2>
                <p className="text-muted-foreground">
                  Chúng tôi có quyền thay đổi các điều khoản này bất cứ lúc nào. Các thay đổi sẽ có hiệu 
                  lực ngay khi được đăng tải trên website.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
