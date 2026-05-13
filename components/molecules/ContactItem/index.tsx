import { cn } from "@/lib/utils/cn";

interface ContactItemProps {
  label: string;
  value: string;
  href?: string;
  className?: string;
}

const ContactItem = ({ label, value, href, className }: ContactItemProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{label}</p>
      {href ? (
        <a className="text-sm text-white hover:text-white/80" href={href}>
          {value}
        </a>
      ) : (
        <p className="text-sm text-white">{value}</p>
      )}
    </div>
  );
};

export default ContactItem;
