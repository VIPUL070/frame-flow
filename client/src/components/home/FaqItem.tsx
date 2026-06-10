import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FaqItemData } from "../../types";

interface FaqItemProps {
  faq: FaqItemData;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ faq, isOpen, onToggle }: FaqItemProps) => {
  const Icon = faq.icon;

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-2 py-3 text-left"
      >
        <span className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
          <Icon className="h-2.5 w-2.5" />
        </span>
        <span className="flex-1 text-[10px] font-medium text-foreground hover:text-blue cursor-pointer">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-muted-foreground"
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-4 pl-10 pr-6 text-[9px] leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;