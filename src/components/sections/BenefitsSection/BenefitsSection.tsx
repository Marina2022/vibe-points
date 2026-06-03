"use client";

import { useEffect, useState } from "react";

import BenefitFirstCard from "./BenefitFirstCard";
import BenefitSecondCard from "./BenefitSecondCard";
import BenefitThirdCard from "./BenefitThirdCard";

const BenefitsSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth > 1024);
      };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section id="benefits" className="bg-light rounded-tl-[30px] rounded-tr-[30px] py-15 xs:py-25">
      <div className="max-w-[1380px] mx-auto px-5">
        <h2 className="max-w-[620px] mx-auto text-center font-uncage uppercase leading-[1.1] text-[26px] xs:text-[40px] text-graphite">
          ПОЧЕМУ ОТКРЫТЬ <br /> FORVIBE ПОИНТ ВЫГОДНО?
        </h2>

        <div className="flex flex-col gap-5 xs:gap-10 mt-15">
          <div className={isDesktop ? "sticky top-[100px]" : ""}>
            <BenefitFirstCard />
          </div>

          <div className={isDesktop ? "sticky top-[148px]" : ""}>
            <BenefitSecondCard />
          </div>

          <div className={isDesktop ? "sticky top-[196px]" : ""}>
            <BenefitThirdCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
