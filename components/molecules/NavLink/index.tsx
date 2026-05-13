import Link from "next/link";

import { cn } from "@/lib/utils/cn";

interface NavLinkProps {
  label: string;
  href: string;
  className?: string;
}

const NavLink = ({ label, href, className }: NavLinkProps) => {
  return (
    <Link
      className={cn(
        "text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white",
        className
      )}
      href={href}
    >
      {label}
    </Link>
  );
};

export default NavLink;
