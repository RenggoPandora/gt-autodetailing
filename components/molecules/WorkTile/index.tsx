import Image from "next/image";

interface WorkTileProps {
  src: string;
  alt: string;
}

const WorkTile = ({ src, alt }: WorkTileProps) => {
  return (
    <div className="relative h-52 w-80 overflow-hidden border border-white/10 bg-(--color-surface-card) sm:h-60 sm:w-96">
      <Image
        className="object-cover"
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 384px, 320px"
        quality={78}
      />
    </div>
  );
};

export default WorkTile;
