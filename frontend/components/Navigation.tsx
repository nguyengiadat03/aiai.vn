import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const solutions = [
  { name: "AI Chatbot & Voicebot", path: "/solutions#chatbot" },
  { name: "AI Content Generator", path: "/solutions#content" },
  { name: "AI Data Assistant", path: "/solutions#data" },
  { name: "AI Email & CRM", path: "/solutions#crm" },
  { name: "API AI Đa tác vụ", path: "/solutions#api" },
  { name: "AI Automation Tools", path: "/solutions#automation" },
];

const navLinks = [
  { label: "Trang chủ", to: "/" },
  { label: "Giới thiệu", to: "/about" },
  { label: "Bảng giá", to: "/pricing" },
  { label: "Doanh nghiệp", to: "/for-business" },
  { label: "Blog", to: "/blog" },
  { label: "Liên hệ", to: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 5 }}
              src="/logo.png"
              alt="AI&AI Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              AI&AI
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Trang chủ
            </Link>

            {/* Sản phẩm dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-sm font-medium bg-transparent hover:bg-accent/60 ${
                      location.pathname.startsWith("/solutions")
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    Sản phẩm
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {solutions.map((solution) => (
                        <li key={solution.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={solution.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {solution.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Giới thiệu
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Bảng giá
            </Link>
            <Link
              to="/for-business"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Doanh nghiệp
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Liên hệ
            </Link>

            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link to="/contact">Đăng ký Demo</Link>
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background/98 backdrop-blur-lg lg:hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                to="/"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Trang chủ
              </Link>
              <Link
                to="/solutions"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Sản phẩm
              </Link>
              <Link
                to="/about"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Giới thiệu
              </Link>
              <Link
                to="/pricing"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Bảng giá
              </Link>
              <Link
                to="/for-business"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Doanh nghiệp
              </Link>
              <Link
                to="/blog"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Liên hệ
              </Link>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
              >
                <Link to="/contact">Đăng ký Demo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
