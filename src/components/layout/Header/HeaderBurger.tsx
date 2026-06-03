"use client";

import { motion } from "framer-motion";

interface HeaderBurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const HeaderBurger = ({ isOpen, onClick }: HeaderBurgerProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      aria-expanded={isOpen}
      className="lg:hidden relative z-[60] flex h-[11px] w-[19px] flex-col justify-between"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block h-px w-full bg-[#333333]"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="block h-px w-full bg-[#333333]"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block h-px w-full bg-[#333333]"
      />
    </button>
  );
};

export default HeaderBurger;
