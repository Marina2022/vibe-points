import React from "react";

const BenefitFirstCard = () => {
  return (
    <div className="rounded-[30px] p-8 lg:p-[10px] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 lg:min-h-[480px]">
        <div className="lg:p-15 flex flex-col justify-between gap-6 lg:gap-0">
          <div className="font-uncage text-xl lg:text-[32px] leading-[1.1]">
            Вы закрываете ключевые возражения будущих партнёров:
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="flex flex-col gap-6 lg:max-w-[200px]">
              <div className="h-[46px] bg-lime rounded-full text-black font-manrope text-sm max-w-[125px] flex justify-center text-center items-center">
                Долго ждать
              </div>
              <span className="font-manrope text-base lg:text-lg leading-[1.4] text-graphite">
                получение заказа здесь и сейчас
              </span>
            </div>
            <div className="flex flex-col gap-6 md:max-w-[270px]">
              <div className="h-[46px] bg-lavendula rounded-full text-black font-manrope text-sm flex justify-center text-center items-center max-w-[160px]">
                Платная доставка
              </div>
              <span className="font-manrope text-base lg:text-lg leading-[1.4] text-graphite">
                ничего оплачивать не нужно, покупка как в магазине
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[20px]">
          <img
            src="/benefits/b-1.png"
            alt="Клиент получает заказ на FORVIBE ПОИНТ без ожидания и платной доставки"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitFirstCard;
