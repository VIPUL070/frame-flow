import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "form";
type Size = "sm" | "md" | "lg";
type MotionEffect = "slide" | "none";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  motionEffect?: MotionEffect;
  children: ReactNode;
}

const baseClasses =
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-border-strong disabled:pointer-events-none disabled:opacity-60";

const sizeClasses: Record<Size, string> = {
  sm: "min-h-7 px-3 py-1.5 text-[9px]",
  md: "min-h-9 px-4 py-2.5 text-[11px]",
  lg: "min-h-10 px-4 py-3 text-[11px]",
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-foreground text-surface hover:bg-foreground/85 active:bg-foreground/75",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-muted active:bg-soft",
  outline:
    "border border-border-strong bg-transparent text-foreground hover:bg-muted active:bg-soft",
  ghost: "bg-transparent text-foreground hover:bg-muted active:bg-soft",
  danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
  form: "w-full bg-black text-offwhite hover:bg-black/85 active:bg-black/75",
};

const textAnimation = {
  initial: { y: 0 },
  hover: { y: "-130%" },
};

const secondaryTextAnimation = {
  initial: { y: "130%" },
  hover: { y: 0 },
};

const ButtonContent = ({
  children,
  leftIcon,
  rightIcon,
}: Pick<ButtonProps, "children" | "leftIcon" | "rightIcon">) => (
  <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
    {leftIcon}
    {children}
    {rightIcon}
  </span>
);

const Button = ({
  type = "button",
  variant = "primary",
  size = "sm",
  fullWidth = false,
  motionEffect = "slide",
  className,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        variant !== "form" && fullWidth && "w-full",
        className
      )}
      whileHover={motionEffect === "slide" ? "hover" : undefined}
      whileTap={{ scale: 0.97 }}
      initial="initial"
      {...props}
    >
      {motionEffect === "none" ? (
        <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
          {children}
        </ButtonContent>
      ) : (
        <span className="relative inline-flex h-[1.35em] items-center justify-center overflow-hidden">
          <motion.span
            variants={textAnimation}
            transition={{ duration: 0.32, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
              {children}
            </ButtonContent>
          </motion.span>
          <motion.span
            variants={secondaryTextAnimation}
            transition={{ duration: 0.32, ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute inset-0 inline-flex items-center justify-center"
          >
            <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
              {children}
            </ButtonContent>
          </motion.span>
        </span>
      )}
    </motion.button>
  );
};

export default Button;