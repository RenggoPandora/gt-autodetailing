interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="border-l border-white/15 pl-4">
      <p className="text-2xl font-semibold uppercase text-white md:text-3xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/60">
        {label}
      </p>
    </div>
  );
};

export default StatItem;
