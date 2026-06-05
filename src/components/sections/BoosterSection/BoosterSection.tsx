'use client'

import Button from "@/components/ui/Button";
import BoosterStepCard from "./BoosterStepCard";
import ButtonWrapper from "@/components/ui/ButtonWrapper/ButtonWrapper";

const STEPS = [
  {
    id: "1",
    text: "Проводите презентации и показываете ассортимент",
  },
  {
    id: "2",
    text: "Клиент сразу получает свой первый заказ",
  },
  {
    id: "3",
    text: "Делает следующий заказ самостоятельно и приглашает знакомых",
  },
  {
    id: "4",
    text: "Ваш оборот и оборот структуры стабильно растут",
  },
];

const BoosterSection = () => {
  return (
    <section className="overflow-hidden rounded-t-[30px] rounded-b-none bg-[radial-gradient(circle_at_top,_#f8a7d3_0%,_#f54ca7_55%,_#ff3f93_100%)] px-5 py-17 xs:py-25">
      <div className="mx-auto max-w-[1340px]">
        <h2 className="mx-auto max-w-[920px] text-center font-uncage text-[26px] xs:text-[40px] uppercase leading-[1.1] text-white">
          FORVIBE ПОИНТ В ГОРОДЕ = БУСТЕР ТОВАРООБОРОТА ВАШЕЙ СТРУКТУРЫ
        </h2>

        <div className="mt-10 xs:mt-15 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step) => (
            <BoosterStepCard key={step.id} number={step.id} text={step.text} />
          ))}
        </div>

        <div className="mt-10 xs:mt-15 flex justify-center">
          <ButtonWrapper>
            {({setPopupOpen}) => (
              <Button
                className="xs:max-w-[260px]"
                onClick={() => setPopupOpen(true)}
              >
                Оставить заявку
              </Button>
            )}
          </ButtonWrapper>

        </div>
      </div>
    </section>
  );
};

export default BoosterSection;
