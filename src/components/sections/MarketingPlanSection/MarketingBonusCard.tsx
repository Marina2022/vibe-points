import Icon from "@/components/ui/Icon";

type Props = {
  title: string;
  description: string | string[];
  bgClassName: string;
};

const MarketingBonusCard = ({ title, description, bgClassName }: Props) => {
  return (
    <div
      className={`rounded-[20px] px-5 py-6 flex flex-col gap-5 min-h-[120px] xs:min-h-[140px] ${bgClassName}`}
    >
      <Icon name="logo-mini" className="size-[18px]"/>

      <p className="font-manrope text-sm lg:text-sm leading-[1.4] text-black">
        <strong className="font-semibold">{title}</strong>
        {' '}
        {Array.isArray(description)
            ? description.map((line, i) => <span key={i}><br />{line}</span>)
            : description
        }
      </p>
    </div>
  );
};

export default MarketingBonusCard;
