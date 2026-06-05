import Button from "@/components/ui/Button";
import ButtonWrapper from "@/components/ui/ButtonWrapper/ButtonWrapper";

const BenefitThirdCard = () => {
  return (
    <div className="rounded-[30px] p-8 lg:p-[10px] bg-white lg:shadow-[0_-8px_24px_rgba(0,0,0,0.05)]">
      <div className="grid lg:grid-cols-2 gap-10 xs:gap-4 xs:min-h-[480px]">
        <div className="lg:p-15 flex flex-col justify-between gap-6 lg:gap-0">
          <div className="font-uncage text-xl xs:text-[32px] leading-[1.1]">
            <span className="block whitespace-nowrap">Вы&nbsp;не&nbsp;платите</span>
            <span className="block whitespace-nowrap">роялти&nbsp;— компания</span>
            <span className="block whitespace-nowrap">платит вам&nbsp;15%</span>
          </div>
          <div className="flex justify-between flex-col gap-10">
            <div className="flex gap-10 items-center flex-wrap">
              <span className="font-manrope text-base xs:text-lg leading-[1.4] text-graphite">
                Вы создаёте офлайн-центр масштабирования структуры, где основной
                доход формируется автоматически
              </span>

              <ButtonWrapper>
                {({setPopupOpen}) => (
                  <Button
                    className="xs:max-w-[260px]"
                    variant="primary"
                    onClick={() => setPopupOpen(true)}
                  >
                    Узнать подробнее
                  </Button>
                )}
              </ButtonWrapper>

            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[20px]">
          <img
            src="/benefits/b-3.png"
            alt="FORVIBE ПОИНТ — офлайн-центр масштабирования бизнеса без роялти"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitThirdCard;
