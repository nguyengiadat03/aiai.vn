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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className={`fixed top-0 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 transform transition-all duration-300 border border-transparent ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-primary/20"
          : "bg-background/80 backdrop-blur-sm"
      } rounded-b-2xl`}
    >
      <div className="px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 5 }}
              src="/logo.png"
              alt="AI&AI Logo"
              className="h-10 w-10 object-contain"
            />
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              AI&AI
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
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

            {navLinks
              .filter((link) => link.to !== "/")
              .map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-sm"
              >
                <Link to="/contact">Đăng ký Demo</Link>
              </Button>
            </div>

            <button
              className="inline-flex items-center justify-center rounded-md p-1 lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
            <div className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Trang chủ
              </Link>

              {/* Mobile: Sản phẩm */}
              <Link
                to="/solutions"
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Sản phẩm
              </Link>

              {navLinks
                .filter((link) => link.to !== "/")
                .map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}

              <Button
                asChild
                className="mt-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
