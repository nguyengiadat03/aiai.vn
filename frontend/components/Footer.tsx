import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-950/50 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              AI&AI
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Kiến tạo kỷ nguyên số: Đồng hành Doanh nghiệp, Chắp cánh Tài năng
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform" title="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform" title="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors duration-200 hover:scale-110 transform" title="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8A4 4 0 0116 11.37Z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Sản phẩm</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/solutions#chatbot" className="hover:text-primary transition-colors duration-200">AI Chatbot & Voicebot</Link></li>
              <li><Link to="/solutions#content" className="hover:text-primary transition-colors duration-200">AI Content Generator</Link></li>
              <li><Link to="/solutions#automation" className="hover:text-primary transition-colors duration-200">AI Automation Tools</Link></li>
              <li><Link to="/solutions#api" className="hover:text-primary transition-colors duration-200">API AI Đa tác vụ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Công ty</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-primary transition-colors duration-200">Giới thiệu</Link></li>
              <li><Link to="/for-business" className="hover:text-primary transition-colors duration-200">Dành cho Doanh nghiệp</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors duration-200">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors duration-200">Liên hệ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Liên hệ</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-blue-500" />
                <span>Tầng 5, Tòa BMC, 379 Minh Khai, HBT, Hà Nội</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-500" />
                <a href="mailto:contact@aiai.vn" className="hover:text-primary transition-colors duration-200">
                  contact@aiai.vn
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-500" />
                <span>Hotline: 1900 xxxx</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2024 AI&AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors duration-200">
              Chính sách bảo mật
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors duration-200">
              Điều khoản dịch vụ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
