import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, EASE } from "../../lib/animations";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const Reveal = ({ children, delay = 0, className }: RevealProps) => (
  <motion.div
    className={className}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

export default Reveal;