"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeaderLogo from "./HeaderLogo";
import HeaderNavigation from "./HeaderNavigation";
import HeaderBurger from "./HeaderBurger";
import HeaderMobileMenu from "./HeaderMobileMenu";
import Button from "@/components/ui/Button";

const NAVIGATION_ITEMS = [
  { title: "О франшизе", href: "#about" },
  { title: "Условия", href: "#conditions" },
  { title: "Выгода", href: "#benefits" },
  { title: "Инструменты", href: "#tools" },
  { title: "Вопрос", href: "#faq" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 z-50 w-full
          transition-all duration-300 ease-in-out
          py-4 bg-white
          ${isScrolled ? "shadow-lg" : "lg:py-6 lg:bg-transparent"}
        `}
      >
        <div className="max-w-[1380px] mx-auto px-5">
          <div className="flex items-center justify-between">
            <HeaderLogo isScrolled={isScrolled} />

            <div className="hidden lg:block">
              <HeaderNavigation
                items={NAVIGATION_ITEMS}
                isScrolled={isScrolled}
              />
            </div>

            <div className="hidden lg:block">
              <Button variant="secondary" isScrolled={isScrolled}>
                Получить презентацию
              </Button>
            </div>

            <HeaderBurger
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>

        <HeaderMobileMenu
          items={NAVIGATION_ITEMS}
          isOpen={isMenuOpen}
          onClose={closeMenu}
        />
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={closeMenu}
            className="lg:hidden fixed inset-0 z-40 bg-black/40 cursor-pointer"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
