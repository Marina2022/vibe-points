"use client";

import { useEffect, useState } from "react";
import BadgeNumber from "@/components/ui/BadgeNumber";

type ClientFlowStepProps = {
  number: number;
  text: string;
};

const ClientFlowStep = ({ number, text }: ClientFlowStepProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 479px)");

    const handleChange = () => {
      setIsMobile(media.matches);
    };

    handleChange();

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="flex flex-col justify-between rounded-[30px] gap-6 bg-white px-5 py-8 xs:p-8 lg:min-h-[270px]">
      <BadgeNumber number={number} variant={isMobile ? "lime" : "floral"} />

      <p className="max-w-[200px] font-manrope text-sm xs:text-base leading-[1.4] text-graphite">
        {text}
      </p>
    </div>
  );
};

export default ClientFlowStep;
