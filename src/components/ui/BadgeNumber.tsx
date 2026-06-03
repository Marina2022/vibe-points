type BadgeVariant = "lime" | "floral";

type BadgeNumberProps = {
  number: string | number;
  variant?: BadgeVariant;
};

const BadgeNumber = ({ number, variant = "lime" }: BadgeNumberProps) => {
  const variants = {
    lime: "bg-lime",
    floral: "bg-floral",
  };

  return (
    <div
      className={`size-11 rounded-2xl flex items-center justify-center ${variants[variant]}`}
    >
      <span className="font-uncage text-base leading-none font-medium text-black">
        {number}
      </span>
    </div>
  );
};

export default BadgeNumber;
