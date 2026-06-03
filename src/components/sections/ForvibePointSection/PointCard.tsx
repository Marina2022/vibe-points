import { ReactNode } from "react";

type PointCardProps = {
  title?: ReactNode;
  description?: string | ReactNode;
  image?: string;
  imageAlt?: string;
  bgClassName?: string;
  className?: string;
  titleClassName?: string;
  centered?: boolean;
};

const PointCard = ({
  title,
  description,
  image,
  imageAlt = "",
  bgClassName,
  className,
  titleClassName,
  centered,
}: PointCardProps) => {
  if (image) {
    return (
      <div
        className={`overflow-hidden rounded-[30px] aspect-[3/2] lg:aspect-auto ${
          className || ""
        }`}
      >
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`rounded-[30px] px-5 py-8 xs:p-6 flex flex-col gap-3 ${
        centered ? "items-center justify-center" : "justify-between"
      } ${bgClassName || ""} ${className || ""}`}
    >
      <h3
        className={`font-uncage text-left uppercase leading-[1.1] text-lg s:text-xl xs:text-2xl text-black ${
          titleClassName || ""
        }`}
      >
        {title}
      </h3>

      {description && (
        <p className="xs:max-w-[250px] text-sm xs:text-lg leading-[1.4] text-graphite">
          {description}
        </p>
      )}
    </div>
  );
};

export default PointCard;
