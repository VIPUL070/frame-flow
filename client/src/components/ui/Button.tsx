import { motion } from "framer-motion";

interface ButtonProps {
  type?: "button" | "submit" | "reset"; 
  variant?: "primary" | "danger" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  children: React.ReactNode; 
}

const baseClasses = "w-full text-center align-middle cursor-pointer text-[9px] transition-colors duration-200 overflow-hidden";

const sizeVariant = {
  sm: "px-2.5 rounded-full py-1.25",
  md: "my-2",
  lg: "my-4 rounded-lg py-2 "
}
const variantClasses = {
  primary: "bg-black text-offwhite active:bg-stone-900",
  secondary: "bg-offwhite text-black border border-stone-400",
  danger: "bg-red-600 text-offwhite active:bg-red-700",
};

const Button = ({ type = "button", variant = "primary", children , size= "sm" , onClick}: ButtonProps) => {
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
      className={`${baseClasses} ${variantClasses[variant]} ${sizeVariant[size]}`}
      onClick={onClick}
      whileHover="hover"
      initial="initial"
    >
      <div className="relative relative-inline-block h-full w-full flex items-center justify-center overflow-hidden">
        <motion.span 
          variants={textAnimation}
          transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="inline-block whitespace-nowrap w-12"
        >
          {children}
        </motion.span>

        <motion.span 
          variants={secondaryTextAnimation}
          transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="absolute inline-block whitespace-nowrap w-12"
        >
          {children}
        </motion.span>

      </div>
    </motion.button>
  );
};

export default Button;