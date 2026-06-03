"use client";

import { useState } from "react";
import FaqItem from "./FaqItem";

const FAQ_ITEMS = [
  {
    question: "Сколько стоит открыть FORVIBE ПОИНТ?",
    answer:
      "Открытие франшизы – бесплатно. Вы не платите ни за вход, ни за использование бренда: стоимость франшизы – 0 ₽, роялти – 0 ₽.",
  },
  {
    question: "На чём я зарабатываю?",
    answer:
      "Вы получаете 5% от оборота своей точки, а также доход по маркетинг-плану: до 45% с личного оборота и дополнительные бонусы с команды.",
  },
  {
    question: "Кто занимается доставкой и логистикой?",
    answer:
      "Компания полностью берёт на себя доставку продукции до точки и бухгалтерский учёт. Вы не вовлечены в операционные процессы.",
  },
  {
    question: "Нужен ли персонал?",
    answer:
      "Да, для работы точки потребуется сотрудник, который будет заниматься выдачей и упаковкой заказов.",
  },
  {
    question: "Сколько клиентов приходит в точку?",
    answer:
      "В среднем от 30 до 50 человек в день. Это живой поток, который формирует стабильный товарооборот.",
  },
  {
    question: "Точку можно открыть в любом городе?",
    answer:
      "Да, если в городе есть потенциал для развития структуры и соблюдены условия по помещению и квалификации.",
  },
  {
    question: "Помогает ли компания на этапе запуска?",
    answer:
      "Да. Вы получаете полную поддержку: от подбора локации и оформления до обучения, маркетинговых материалов и сопровождения куратора.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white py-15 xs:py-25 rounded-t-[30px] -mt-4">
      <div className="max-w-[1380px] mx-auto px-5">
        <h2 className="text-center font-uncage uppercase leading-[1.1] text-[26px] xs:text-[40px] text-graphite">
          ОТВЕТЫ НА ВОПРОСЫ
        </h2>

        <div className="mt-10 xs:mt-15 flex flex-col gap-5">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
