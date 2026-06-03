import BadgeNumber from "@/components/ui/BadgeNumber";

type BoosterStepCardProps = {
  number: string;
  text: string;
};

const BoosterStepCard = ({ number, text }: BoosterStepCardProps) => {
  return (
    <div className="flex min-h-[220px] s:min-h-[240px] gap-5 xs:min-h-[260px] flex-col justify-between rounded-[30px] bg-gray-light px-5 py-8 xs:p-8">
      <BadgeNumber number={number} />

      <p className="max-w-[240px] font-manrope text-sm xs:text-base leading-[1.4] text-graphite">
        {text}
      </p>
    </div>
  );
};

export default BoosterStepCard;
