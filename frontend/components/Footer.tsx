import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              AI&AI
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Kiến tạo kỷ nguyên số: Đồng hành Doanh nghiệp, Chắp cánh Tài năng
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sản phẩm</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/solutions#chatbot" className="hover:text-primary transition-colors">AI Chatbot & Voicebot</Link></li>
              <li><Link to="/solutions#content" className="hover:text-primary transition-colors">AI Content Generator</Link></li>
              <li><Link to="/solutions#automation" className="hover:text-primary transition-colors">AI Automation Tools</Link></li>
              <li><Link to="/solutions#api" className="hover:text-primary transition-colors">API AI Đa tác vụ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Công ty</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">Giới thiệu</Link></li>
              <li><Link to="/for-business" className="hover:text-primary transition-colors">Dành cho Doanh nghiệp</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Tầng 5, Tòa BMC, 379 Minh Khai, HBT, Hà Nội</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:contact@aiai.vn" className="hover:text-primary transition-colors">
                  contact@aiai.vn
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>Hotline: 1900 xxxx</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2024 AI&AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Chính sách bảo mật
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Điều khoản dịch vụ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
