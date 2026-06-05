import Button from "@/components/ui/Button";
import LogisticsInfoCard from "./LogisticsInfoCard";
import LogisticsBulletCard from "./LogisticsBulletCard";

const LogisticsSection = () => {
  return (
    <section className="bg-white py-15 xs:py-25 rounded-t-[30px] -mt-4">
      <div className="max-w-[1380px] mx-auto px-5">
        <h2 className="text-center font-uncage uppercase leading-[1.1] text-[26px] xs:text-[40px] text-graphite">
          ЛОГИСТИКА И ОРГАНИЗАЦИЯ ПРОДАЖ
        </h2>

        <div className="mt-15 grid grid-cols-12 gap-4">
          <LogisticsInfoCard
            className="
              order-1
              col-span-6

              md:max-lg:order-2
              md:max-lg:col-span-6

              max-md:order-2
              max-md:col-span-12
            "
            title="оформление и реализация заказов"
            intro="Покупки оформляются на платформе:"
            linkHref="https://for-vibe.ru"
            linkLabel="https://for-vibe.ru"
            description="Через FORVIBE ПОИНТ осуществляется только выдача и отправка заказов (по городу или в другие населённые пункты региона)"
          />

          <div
            className="
              order-2
              col-span-6
              min-h-[320px]
              overflow-hidden
              rounded-[30px]

              md:max-lg:order-1
              md:max-lg:col-span-12

              max-md:order-1
              max-md:col-span-12
            "
          >
            <img
              src="/logistics/l-2.png"
              alt="Оформление заказов на платформе FORVIBE — удобная система для партнёра"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="
              order-3
              col-span-6
              min-h-[320px]
              overflow-hidden
              rounded-[30px]

              md:max-lg:order-3
              md:max-lg:col-span-6

              max-md:order-4
              max-md:col-span-12
            "
          >
            <img
              src="/logistics/l-1.png"
              alt="Логистика FORVIBE — компания берёт на себя доставку продукции и бухучёт"
              className="w-full h-full object-cover"
            />
          </div>

          <LogisticsBulletCard
            className="
              order-4
              col-span-3

              md:max-lg:order-4
              md:max-lg:col-span-6

              max-md:order-3
              max-md:col-span-12
            "
            variant="lime"
            title="КОМПАНИЯ БЕРЁТ НА СЕБЯ:"
            bullets={[
              "доставку продукции до вашей точки",
              "бухгалтерский учёт",
            ]}
          />

          <LogisticsBulletCard
            className="
              order-5
              col-span-3

              md:max-lg:order-5
              md:max-lg:col-span-6

              max-md:order-5
              max-md:col-span-12
            "
            variant="pink"
            title="масштабируйтесь и развивайтесь"
            bullets={[
              "Вы не тратите время на операционные процессы",
              "Вы занимаетесь масштабированием бизнеса",
            ]}
          />
        </div>

        <div className="mt-15 flex justify-center">
          <Button className="xs:max-w-[260px]" variant="primary">
            Узнать подробнее
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
