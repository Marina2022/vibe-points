"use client";

import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/Icon";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  return (
    <div className="rounded-[20px] bg-light overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 xs:px-8 pb-4 pt-4 xs:py-6 text-left cursor-pointer"
      >
        <span className="font-manrope text-base xs:text-2xl leading-[1.4] text-graphite font-semibold">
          {question}
        </span>

        <motion.span
          animate={{
            rotate: isOpen
              ? 180
              : typeof window !== "undefined" && window.innerWidth <= 480
                ? -90
                : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0 mt-1"
        >
          <Icon name="chevron" className="w-[15px] h-[9px]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 xs:px-8 pb-4 xs:pb-6 font-manrope font-normal text-sm xs:text-lg leading-[1.4] text-graphite">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
