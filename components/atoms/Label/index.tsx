import { cn } from "@/lib/utils/cn";

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

const Label = ({ htmlFor, children, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-xs font-semibold uppercase tracking-[0.3em] text-white/60", className)}
    >
      {children}
    </label>
  );
};

export default Label;
