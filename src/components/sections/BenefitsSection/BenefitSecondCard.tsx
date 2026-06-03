import Icon from "@/components/ui/Icon";
import React from "react";

const BenefitSecondCard = () => {
  return (
    <div className="rounded-[30px] p-8 lg:p-[10px] bg-white lg:shadow-[0_-8px_24px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 lg:min-h-[480px]">
        <div className="lg:p-15 flex flex-col justify-between gap-6 lg:gap-0">
          <div className="font-uncage text-[20px] xs:text-[32px] leading-[1.1]">
            Постоянный <br /> поток клиентов <br /> (30–50 человек в день):
          </div>
          <div className="flex justify-between flex-col gap-10">
            <div className="flex gap-[10px] md:gap-1 items-center flex-wrap">
              <div className="h-[46px] px-5 border border-lime rounded-full text-black font-manrope text-sm flex justify-center text-center items-center w-full md:w-auto">
                приходят
              </div>
              <Icon name="arrow" className="shrink-0 w-[14px] h-2 hidden xs:block" />
              <div className="h-[46px] px-5 border border-lavendula rounded-full text-black font-manrope text-sm flex justify-center text-center items-center w-full md:w-auto">
                пробуют продукт
              </div>
              <Icon name="arrow" className="shrink-0 w-[14px] h-2 hidden xs:block" />
              <div className="h-[46px] px-5 border border-orange rounded-full text-black font-manrope text-sm flex justify-center text-center items-center w-full md:w-auto">
                принимают решение сразу
              </div>
            </div>
            <span className="font-manrope text-base xs:text-lg leading-[1.4] text-graphite">
              Конверсия в покупку и партнёрство увеличивается в 2–4 раза
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-[20px]">
          <img
            src="/benefits/b-2.png"
            alt="Ежедневный поток 30–50 клиентов в FORVIBE ПОИНТ — высокая конверсия в покупку"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitSecondCard;
