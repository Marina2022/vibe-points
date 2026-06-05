"use client";

import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ButtonWrapper from "@/components/ui/ButtonWrapper/ButtonWrapper";

interface NavigationItem {
  title: string;
  href: string;
}

interface HeaderMobileMenuProps {
  items: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
}

const HeaderMobileMenu = ({ items, isOpen, onClose }: HeaderMobileMenuProps) => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    onClose();

    setTimeout(() => {
      const id = href.replace(/^#/, "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    }, 350);
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden"
        >
          <nav className="px-5 py-8">
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-manrope text-base text-black hover:opacity-70 transition-opacity"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <ButtonWrapper>
              {({setPopupOpen}) => (
                <Button
                  variant="secondary" className="mt-8 max-w-full xs:max-w-[250px]"
                  onClick={() => {
                    setPopupOpen(true)
                  }}
                >
                  Получить презентацию
                </Button>
              )}
            </ButtonWrapper>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMobileMenu;