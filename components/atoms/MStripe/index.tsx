import { cn } from "@/lib/utils/cn";

interface MStripeProps {
  className?: string;
}

const MStripe = ({ className }: MStripeProps) => {
  return (
    <div
      className={cn(
        "h-1.5 w-full bg-[linear-gradient(90deg,var(--color-m-blue-light),var(--color-m-blue-dark),var(--color-m-red))]",
        className
      )}
    />
  );
};

export default MStripe;
