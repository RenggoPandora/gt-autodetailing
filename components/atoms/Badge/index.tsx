import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  label: string;
  className?: string;
}

const Badge = ({ label, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-white/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white",
        className
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
