import Button from "@/components/ui/Button";
import SupportItem from "./SupportItem";

const SUPPORT_ITEMS = [
  {
    label: "До открытия:",
    bullets: [
      "подбор локации",
      "гайд по оформлению пространства",
      "обучение логистике и CRM",
    ],
  },
  {
    label: "Обучение:",
    bullets: ["работа с заказами (выдача и упаковка)"],
  },
  {
    label: "Маркетинг:",
    bullets: ["графические макеты", "анимационный контент", "презентации"],
  },
  {
    label: "Операционная поддержка:",
    bullets: [
      "личный куратор",
      "чат франчайзи",
      "регулярное обновление ассортимента",
    ],
  },
];

const SupportSection = () => {
  return (
    <section id="tools" className="bg-light py-17 xs:py-25 lg:py-20 md:py-15 rounded-t-[30px] -mt-6">
      <div className="max-w-[1380px] mx-auto px-5">
        <h2 className="text-center font-uncage uppercase leading-[1.1] text-[26px] xs:text-[40px] text-graphite lg:text-[34px] md:text-[28px]">
          ИНСТРУМЕНТЫ И ПОДДЕРЖКА ОТ КОМПАНИИ
        </h2>

        <div className="mt-10 xs:mt-15 rounded-[30px] bg-white lg:mt-10 md:rounded-[24px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr] justify-between gap-5 p-5 mds:p-7 lg:p-10">
            <div className="flex flex-col gap-4 w-full">
              {SUPPORT_ITEMS.map((item) => (
                <SupportItem
                  key={item.label}
                  label={item.label}
                  bullets={item.bullets}
                />
              ))}

              <SupportItem
                label="Условия:"
                bullets={[
                  "квалификация от Амбассадора ПРО",
                  "помещение от 30 до 100 м²",
                  <>
                    Стабильный товарооборот (не менее <b>2000–2500 PV</b> за последние 3 месяца или <b>500 000–650 000 ₽ ТО</b> в месяц)
                  </>
                ]}
                bgClassName="bg-lavendula "
                labelClassName="text-graphite"
              />
            </div>

            <div className="overflow-hidden rounded-[20px] max-w-full lg:max-w-[650px] w-full">
              <img
                src="/support/s-1.png"
                alt="Инструменты и поддержка от компании FORVIBE — куратор, маркетинг, обучение"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-15 flex justify-center lg:mt-10">
          <Button className="xs:max-w-[260px] w-full" variant="primary">
            Получить презентацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
