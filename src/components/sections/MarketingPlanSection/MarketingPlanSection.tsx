import MarketingIncomeCard from "./MarketingIncomeCard";
import MarketingBonusCard from "./MarketingBonusCard";

const INCOME_CARDS = [
  {
    number: "01",
    title: "5% от оборота",
    description: "Вашего FORVIBE ПОИНТ",
    bgClassName: "bg-light",
  },
  {
    number: "02",
    title: "Рост структуры",
    bgClassName: "bg-lavendula",
  },
];

const TAGS = ["больше регистраций", "больше активаций", "выше средний чек"];

const BONUS_CARDS = [
  {
    title: "до 45%",
    description: "кэшбэка с личного оборота",
    bgClassName: "bg-floral",
  },
  {
    title: "до 15 уровней выплат",
    description: ["(Prime бонус)"],
    bgClassName: "bg-white",
  },
  {
    title: "+25%",
    description: "к доходу новичков (Start бонус)",
    bgClassName: "bg-white",
  },
  {
    title: "бесконечный",
    description: "доход с глубины (Infinity)",
    bgClassName: "bg-lime",
  },
];

const MarketingPlanSection = () => {
  return (
    <section className="bg-white py-15 xs:py-25 rounded-t-[30px] -mt-4">
      <div className="max-w-[1380px] mx-auto px-5">
        <h2 className="text-center font-uncage uppercase leading-[1.1] text-[26px] xs:text-[40px] text-graphite">
          <span className="text-lime">АКТИВИРУЙТЕ ВОЗМОЖНОСТИ</span>
          <br />
          МАРКЕТИНГ-ПЛАНА НА МАКСИМУМ
        </h2>

        <div className="mt-15 grid grid-cols-12 gap-5 xs:gap-10 relative">
          <div className="col-span-12 lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {INCOME_CARDS.map((item) => (
              <MarketingIncomeCard
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
                bgClassName={item.bgClassName}
              />
            ))}
          </div>

          <img className="rounded-[30px] col-span-12 object-cover block lg:hidden" src="/marketing/Card.png" alt="Маркетинг-план FORVIBE — инструменты для роста дохода партнёра" />
          <div className="hidden lg:flex lg:col-span-3 lg:relative lg:items-center lg:justify-center scale:150 xl:scale-120 mt-5">
            <img
              src="/marketing/chair.png"
              alt="Масштабирование дохода по маркетинг-плану FORVIBE"
              className="absolute top-1/2 -translate-y-1/2 -left-8 w-[130%] max-w-none z-10 pointer-events-none select-none"
            />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="rounded-[30px] bg-[radial-gradient(ellipse_88.69%_235.55%_at_95.07%_116.40%,_black_0%,_#252525_100%)] p-8 lg:p-10">
              <h3 className="max-w-[400px] font-uncage uppercase leading-[1.1] text-[22px] lg:text-[24px] text-white">
                ЗА СЧЁТ FORVIBE <br /> ПОИНТ ВЫ ПОЛУЧАЕТЕ:
              </h3>

              <div className="mt-6 lg:mt-8 flex flex-wrap gap-3">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-lavendula px-5 py-3 font-manrope text-sm text-white w-full xs:w-auto text-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BONUS_CARDS.map((bonus, i) => (
                  <MarketingBonusCard
                    key={i}
                    title={bonus.title}
                    description={bonus.description}
                    bgClassName={bonus.bgClassName}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPlanSection;
