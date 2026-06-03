import { ReactNode } from "react";

type SupportItemProps = {
  label: string;
  bullets: (string | ReactNode)[];
  bgClassName?: string;
  labelClassName?: string;
};

const SupportItem = ({
  label,
  bullets,
  bgClassName = "bg-light",
  labelClassName = "text-gray",
}: SupportItemProps) => {
  return (
    <div className={`rounded-[20px] p-5 md:px-4 md:pt-4 md:pb-8 ${bgClassName}`}>
      <div className="flex gap-5 xl:gap-8 2xl:gap-10 flex-col lg:flex-row">
        <div className="w-full lg:w-[150px] xl:w-[200px] shrink-0 ">
          <span
            className={`font-manrope text-base leading-[1.4] font-semibold ${labelClassName}`}
          >
            {label}
          </span>
        </div>

        <ul className="flex flex-col gap-2 list-disc marker:text-xs pl-6.5 lg:pl-5 marker:text-black">
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
    </div>
  );
};

export default SupportItem;
