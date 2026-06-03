// sections/ForvibePointSection/FeatureCard.tsx

import BadgeNumber from "@/components/ui/BadgeNumber";

type FeatureCardProps = {
  number: number;
  title: string;
  description: string;
};

const FeatureCard = ({ number, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <BadgeNumber number={number} variant="lime" />

      <h3 className="font-uncage text-lg uppercase leading-[1.1] text-graphite">
        {title}
      </h3>

      <p className="font-manrope font-normal max-w-[320px] whitespace-pre-line text-sm xs:text-base leading-[1.4] text-graphite">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
