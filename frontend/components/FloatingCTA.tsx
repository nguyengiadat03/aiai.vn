import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3"
          >
            {showChat && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-card border border-border rounded-lg shadow-xl p-4 w-72"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Hỗ trợ trực tuyến</h3>
                  <button onClick={() => setShowChat(false)}>
                    <X size={18} />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Chúng tôi có thể giúp gì cho bạn?
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">Liên hệ ngay</Link>
                </Button>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowChat(!showChat)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <MessageCircle size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-t border-border p-4">
        <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
          <Link to="/contact">Đăng ký Demo Miễn phí</Link>
        </Button>
      </div>
    </>
  );
}
