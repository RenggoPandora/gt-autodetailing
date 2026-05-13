import { Badge, Button } from "@/components/atoms";
import { cn } from "@/lib/utils/cn";

interface PricingLine {
  label: string;
  price: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  badge?: string;
  lines: PricingLine[];
  inclusions?: string[];
  note?: string;
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
}

const PricingCard = ({
  title,
  description,
  badge,
  lines,
  inclusions,
  note,
  ctaLabel,
  ctaHref,
  highlight = false,
}: PricingCardProps) => {
  return (
    <article
      className={cn(
        "flex h-full flex-col border border-white/15 bg-(--color-surface-card) p-6",
        highlight && "border-white"
      )}
    >
      {badge ? <Badge className="w-fit" label={badge} /> : null}
      <h3 className="mt-4 text-xl font-semibold uppercase text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/65">{description}</p>
      <div className="mt-6 space-y-3">
        {lines.map((line) => (
          <div key={line.label} className="flex items-center justify-between text-sm">
            <span className="uppercase tracking-[0.2em] text-white/60">{line.label}</span>
            <span className="font-semibold text-white">{line.price}</span>
          </div>
        ))}
      </div>
      {inclusions && inclusions.length > 0 ? (
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Pengerjaan meliputi
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
            {inclusions.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-white/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {note ? <p className="mt-4 text-xs leading-5 text-white/55">{note}</p> : null}
      <div className="mt-auto pt-6">
        <Button
          className="w-full"
          href={ctaHref}
          label={ctaLabel}
          variant={highlight ? "primary" : "outline"}
        />
      </div>
    </article>
  );
};

export default PricingCard;
