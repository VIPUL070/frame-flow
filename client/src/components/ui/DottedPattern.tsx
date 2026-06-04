import { useId } from "react";

interface DottedPatternProps {
  className?: string;
  color?: string;
}

const DottedPattern = ({
  className = "",
  color = "var(--color-accent)",
}: DottedPatternProps) => {
  const id = useId();
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id={id}
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.4" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

export default DottedPattern;
