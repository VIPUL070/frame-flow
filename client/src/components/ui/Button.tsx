import { motion } from "framer-motion";

interface ButtonProps {
  type?: "button" | "submit" | "reset"; 
  variant?: "primary" | "danger";
  children: React.ReactNode; 
}

const baseClasses = "w-full text-center align-middle py-2 my-4 cursor-pointer rounded-lg text-[9px] transition-colors duration-200 overflow-hidden";
const variantClasses = {
  primary: "bg-black text-white active:bg-stone-900",
  danger: "bg-red-600 text-white active:bg-red-700",
};

const Button = ({ type = "button", variant = "primary", children }: ButtonProps) => {
  const textAnimation = {
    initial: { y: 0 },
    hover: { y: "-100%" },
  };

  const secondaryTextAnimation = {
    initial: { y: "100%" },
    hover: { y: 0 },
  };

  return (
    <motion.button 
      type={type} 
      className={`${baseClasses} ${variantClasses[variant]}`}
      whileHover="hover"
      initial="initial"
    >
      <div className="relative relative-inline-block h-3 w-full flex items-center justify-center overflow-hidden">
        <motion.span 
          variants={textAnimation}
          transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {children}
        </motion.span>

        <motion.span 
          variants={secondaryTextAnimation}
          transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="absolute inline-block whitespace-nowrap"
        >
          {children}
        </motion.span>

      </div>
    </motion.button>
  );
};

export default Button;