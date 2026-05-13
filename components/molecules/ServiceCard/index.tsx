import { cn } from "@/lib/utils/cn";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-6 border border-white/15 bg-(--color-surface-card) p-6",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold uppercase text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/65">{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
