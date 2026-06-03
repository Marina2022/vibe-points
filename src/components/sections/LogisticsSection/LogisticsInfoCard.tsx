type LogisticsInfoCardProps = {
  title: string;
  intro: string;
  linkHref: string;
  linkLabel: string;
  description: string;
  className?: string;
};

const LogisticsInfoCard = ({
  title,
  intro,
  linkHref,
  linkLabel,
  description,
  className,
}: LogisticsInfoCardProps) => {
  return (
    <div
      className={`bg-light rounded-[30px] py-8 px-6 flex flex-col justify-between gap-6 xs:min-h-[320px] ${
        className || ""
      }`}
    >
      <h3 className="max-w-[90%] xs:max-w-[420px] font-uncage uppercase leading-[1.1] text-xl xs:text-[28px] text-graphite">
        {title}
      </h3>

      <div className="flex flex-col gap-6">
        <p className="font-manrope text-base xs:text-lg leading-[1.4] text-graphite">
          {intro}
          <br />
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange underline underline-offset-2 font-bold"
          >
            {linkLabel}
          </a>
        </p>

        <p className="max-w-[550px] font-manrope text-base leading-[1.4] text-graphite">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LogisticsInfoCard;
