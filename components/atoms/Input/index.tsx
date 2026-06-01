import { cn } from "@/lib/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "h-12 w-full border border-white/20 bg-black/40 px-4 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none",
        className
      )}
      {...props}
    />
  );
};

export default Input;
