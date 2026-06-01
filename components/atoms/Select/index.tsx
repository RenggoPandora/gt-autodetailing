import { cn } from "@/lib/utils/cn";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

const Select = ({ className, ...props }: SelectProps) => {
  return (
    <select
      className={cn(
        "h-12 w-full border border-white/20 bg-black/40 px-4 text-sm text-white focus:border-white focus:outline-none",
        className
      )}
      {...props}
    />
  );
};

export default Select;
