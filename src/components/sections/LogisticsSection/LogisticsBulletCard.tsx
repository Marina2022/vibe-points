type Variant = "lime" | "pink";

type LogisticsBulletCardProps = {
  title: string;
  bullets: string[];
  variant: Variant;
  className?: string;
};

const VARIANT_BG: Record<Variant, string> = {
  lime: "bg-lime",
  pink: "bg-[#EC85D1]",
};

const LogisticsBulletCard = ({
  title,
  bullets,
  variant,
  className,
}: LogisticsBulletCardProps) => {
  return (
    <div
      className={`rounded-[30px] w-full px-6 py-8 flex flex-col justify-between gap-6 xs:min-h-[320px] ${
        VARIANT_BG[variant]
      } ${className || ""}`}
    >
      <h3 className="font-uncage uppercase leading-[1.1] text-xl lg:text-[clamp(18px,1.8vw,24px)] text-black">
        {title}
      </h3>

      <ul className="flex flex-col gap-3 list-disc pl-5 marker:text-black marker:text-xs">
        {bullets.map((item, i) => (
          <li
            key={i}
            className="font-manrope text-base leading-[1.4] text-graphite"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogisticsBulletCard;
