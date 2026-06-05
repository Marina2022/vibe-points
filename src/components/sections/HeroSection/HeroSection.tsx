'use client'

import Button from "@/components/ui/Button";
import ButtonWrapper from "@/components/ui/ButtonWrapper/ButtonWrapper";

const HeroSection = () => {
  return (
    <section
      className="relative bg-white lg:bg-transparent lg:min-h-screen lg:bg-[url('/hero/bg.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat">
      <img
        src="/hero/bg-mobile.png"
        alt="Пространство FORVIBE ПОИНТ — стильная точка выдачи заказов и офис"
        className="w-full h-auto lg:hidden"
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-5 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full py-15 lg:py-0 lg:pt-10 2xl:pt-[120px]">
          <h1
            className="flex flex-col font-uncage font-normal uppercase text-graphite lg:text-white leading-[1] tracking-[-0.04em] text-[clamp(34px,10vw,48px)] xs:text-[clamp(48px,8vw,120px)]">
            <span className="self-center lg:self-start">ФРАНШИЗА</span>

            <span className="self-center lg:self-end flex items-center gap-[0.02em]">
              <span>F</span>

              <img
                className="w-[0.8em] h-[0.8em] object-contain translate-y-[-0.09em] hidden lg:block"
                src="/hero/text-logo.svg"
                alt=""
              />
              <img
                className="w-[0.8em] h-[0.8em] object-contain translate-y-[-0.09em] block lg:hidden"
                src="/hero/text-logo-black.svg"
                alt=""
              />

              <span>RVIBE ПОИНТ</span>
            </span>
          </h1>

          <div
            className="mt-6 xs:mt-8 lg:mt-30 2xl:mt-40 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-10">
            <p
              className="font-manrope text-center lg:text-left max-w-[455px] mx-auto lg:mx-0 text-base lg:text-xl leading-[140%] text-graphite lg:text-white font-medium">
              Откройте стильное пространство FORVIBE в своём городе и запустите новую скорость масштабирования бизнеса
            </p>
            <ButtonWrapper>
              {({setPopupOpen}) => (
                <Button
                  onClick={() => setPopupOpen(true)}
                  variant="primary"
                  className="w-full xs:max-w-[260px]"
                >
                  Оставить заявку
                </Button>
              )}
            </ButtonWrapper>


          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
