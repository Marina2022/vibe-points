type Props = {
  number: string;
  title: string;
  description?: string;
  bgClassName: string;
};

const MarketingIncomeCard = ({
  number,
  title,
  description,
  bgClassName,
}: Props) => {
  return (
    <div
      className={`rounded-[30px] px-5 py-8 xs:p-8 flex flex-col justify-between gap-3 xs:gap-8 lg:min-h-[200px] ${bgClassName}`}
    >
      <span className="font-uncage font-medium text-lg text-graphite">{number}</span>

      <div className="flex flex-col gap-1 flex-1">
        <p className="font-manrope text-base lg:text-lg font-semibold text-graphite max-w-[130px]">
          {title}
        </p>
        {description && (
          <p className="font-manrope text-base xs:text-lg leading-[1.4] text-graphite">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default MarketingIncomeCard;
