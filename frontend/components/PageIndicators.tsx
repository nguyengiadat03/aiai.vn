import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Trang chủ" },
  { id: "ecosystem", label: "Hệ sinh thái" },
  { id: "why-choose", label: "Vì sao chọn chúng tôi" },
  { id: "products", label: "Sản phẩm" },
  { id: "testimonials", label: "Khách hàng" },
  { id: "roles", label: "Đối tượng" },
];

export default function PageIndicators() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="relative"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <motion.button
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Scroll to ${section.label}`}
            />
            {hoveredSection === section.id && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-sm border border-border rounded-md px-3 py-1.5 whitespace-nowrap shadow-lg"
              >
                <span className="text-sm font-medium">{section.label}</span>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
