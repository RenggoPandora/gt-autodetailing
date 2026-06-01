import Link from "next/link";

import { cn } from "@/lib/utils/cn";

export type ButtonVariant = "primary" | "outline";
export type ButtonSize = "md" | "lg";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  label,
  href,
  variant = "primary",
  size = "md",
  className,
  target,
  rel,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 border text-xs font-semibold uppercase tracking-[0.2em] transition-colors";
  const variantClasses = {
    primary:
      "border-white text-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
    outline:
      "border-white/50 text-white hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
  };
  const sizeClasses = {
    md: "h-12 px-6",
    lg: "h-14 px-8",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && "cursor-not-allowed opacity-60",
    className
  );

  if (href) {
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    const relValue = rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

    if (isExternal) {
      return (
        <a className={classes} href={href} target={target} rel={relValue}>
          {label}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {label}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
