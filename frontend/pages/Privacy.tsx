import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Chính sách Bảo mật</h1>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground">
                Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
              </p>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Thu thập thông tin</h2>
                <p className="text-muted-foreground">
                  Chúng tôi thu thập thông tin cá nhân khi bạn đăng ký sử dụng dịch vụ, liên hệ với chúng tôi, 
                  hoặc tương tác với website của chúng tôi. Thông tin có thể bao gồm: họ tên, email, số điện thoại, 
                  tên công ty và các thông tin liên quan khác.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Sử dụng thông tin</h2>
                <p className="text-muted-foreground">
                  Thông tin thu thập được sử dụng để: cung cấp và cải thiện dịch vụ, liên lạc với khách hàng, 
                  gửi thông tin marketing (nếu được đồng ý), và đảm bảo an ninh hệ thống.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Bảo mật thông tin</h2>
                <p className="text-muted-foreground">
                  Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn bằng các biện pháp bảo mật tiên tiến, 
                  bao gồm mã hóa dữ liệu, kiểm soát truy cập và tuân thủ các tiêu chuẩn quốc tế về bảo mật.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Chia sẻ thông tin</h2>
                <p className="text-muted-foreground">
                  Chúng tôi không bán, trao đổi hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba, 
                  trừ khi có sự đồng ý của bạn hoặc theo yêu cầu của pháp luật.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Quyền của người dùng</h2>
                <p className="text-muted-foreground">
                  Bạn có quyền truy cập, chỉnh sửa hoặc xóa thông tin cá nhân của mình bất cứ lúc nào. 
                  Vui lòng liên hệ với chúng tôi qua email contact@aiai.vn để thực hiện các quyền này.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
