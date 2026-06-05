'use client'

import Button from "@/components/ui/Button";
import ClientFlowStep from "./ClientFlowStep";
import ButtonWrapper from "@/components/ui/ButtonWrapper/ButtonWrapper";

const STEPS = [
  {
    number: 1,
    text: "Клиент оформляет заказ на сайте компании",
  },
  {
    number: 2,
    text: "Заказ автоматически поступает в систему",
  },
  {
    number: 3,
    text: "Сотрудник FORVIBE ПОИНТ собирает заказ",
  },
  {
    number: 4,
    text: "Клиент забирает товар / курьер забирает посылку",
  },
];

const ClientFlowSection = () => {
  return (
    <section className="bg-light py-15 xs:py-25 rounded-t-[30px]">
      <div className="max-w-[1380px] mx-auto px-5">
        <h2 className="font-uncage text-left uppercase leading-[1.1] text-[26px] xs:text-[40px] text-graphite">
          ВЫ ФОКУСИРУЕТЕСЬ НА СЕТИ, А ТОЧКА <br className="hidden lg:inline"/>
          <span className="text-orange">
            ГЕНЕРИРУЕТ НЕПРЕРЫВНЫЙ ПОТОК КЛИЕНТОВ
          </span>
        </h2>

        <p className="mt-6 font-manrope text-lg lg:text-2xl text-gray lg:text-left">
          Вам необходимо выполнить <br className="inline sm:hidden"/> 4 простых шага:
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">
          <div className="grid grid-cols-2 gap-5">
            {STEPS.map((step) => (
              <ClientFlowStep
                key={step.number}
                number={step.number}
                text={step.text}
              />
            ))}
          </div>

          <div className="overflow-hidden rounded-[30px] lg:min-h-[560px]">
            <img
              src="/flow/f-1.png"
              alt="Процесс выдачи заказа клиенту через FORVIBE ПОИНТ — 4 простых шага"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 xs:mt-15 flex justify-center">
          <ButtonWrapper>
            {({setPopupOpen}) => (
              <Button
                className="xs:max-w-[260px]"
                variant="primary"
                onClick={() => setPopupOpen(true)}
              >
                Получить презентацию
              </Button>
            )}
          </ButtonWrapper>
        </div>
      </div>
    </section>
  );
};

export default ClientFlowSection;
