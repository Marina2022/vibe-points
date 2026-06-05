import type {Metadata} from "next";
import "./globals.scss";
import {Inter} from "next/font/google";
import {manrope, uncage} from "@/assets/fonts/fonts";
import Header from "../components/layout/Header/Header";
import PvzFooter from "@/components/layout/PvzFooter/PvzFooter";
import {Toaster} from 'sonner'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "FORVIBE ПОИНТ — Франшиза с нулевым роялти",
  description:
    "Откройте франшизу FORVIBE ПОИНТ в своём городе. Стоимость: 0 ₽, роялти: 0 ₽. Доход от 5% оборота точки + до 45% по маркетинг-плану. Логистика и учёт — на компании.",
  robots: {
    index: true,
    follow: true,
  },
  // TODO: Uncomment after production domain is confirmed - alternates: { canonical: "https://for-vibe.ru" }
  openGraph: {
    title: "FORVIBE ПОИНТ — Франшиза с нулевым роялти",
    description:
      "Откройте франшизу FORVIBE ПОИНТ в своём городе. Стоимость: 0 ₽, роялти: 0 ₽. Доход от 5% оборота + до 45% по маркетинг-плану.",
    type: "website",
    locale: "ru_RU",
    siteName: "FORVIBE",
    // TODO: Set production URL - url: "https://for-vibe.ru"
    // TODO: Add OG image 1200×630 px - images: [{ url: "https://for-vibe.ru/og-image.jpg", width: 1200, height: 630, alt: "FORVIBE ПОИНТ" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "FORVIBE ПОИНТ — Франшиза с нулевым роялти",
    description:
      "Откройте франшизу FORVIBE ПОИНТ. Стоимость: 0 ₽, роялти: 0 ₽. Доход до 45% по маркетинг-плану.",
    // TODO: Add Twitter card image - images: ["https://for-vibe.ru/og-image.jpg"]
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FORVIBE",
  legalName: "ООО «Вайб»",
  // TODO: Uncomment after domain is confirmed — url: "https://for-vibe.ru"
  email: "help@for-vibe.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Фрунзе, д. 230",
    addressLocality: "Новосибирск",
    addressRegion: "Новосибирская область",
    postalCode: "630112",
    addressCountry: "RU",
  },
  sameAs: [
    "https://vk.com/vibe_forlife",
    "https://t.me/forvibe_official",
    "https://www.instagram.com/forvibe.official",
    "https://youtube.com/@romanvolkov108",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько стоит открыть FORVIBE ПОИНТ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Открытие франшизы – бесплатно. Вы не платите ни за вход, ни за использование бренда: стоимость франшизы – 0 ₽, роялти – 0 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "На чём я зарабатываю?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Вы получаете 5% от оборота своей точки, а также доход по маркетинг-плану: до 45% с личного оборота и дополнительные бонусы с команды.",
      },
    },
    {
      "@type": "Question",
      name: "Кто занимается доставкой и логистикой?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Компания полностью берёт на себя доставку продукции до точки и бухгалтерский учёт. Вы не вовлечены в операционные процессы.",
      },
    },
    {
      "@type": "Question",
      name: "Нужен ли персонал?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, для работы точки потребуется сотрудник, который будет заниматься выдачей и упаковкой заказов.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько клиентов приходит в точку?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В среднем от 30 до 50 человек в день. Это живой поток, который формирует стабильный товарооборот.",
      },
    },
    {
      "@type": "Question",
      name: "Точку можно открыть в любом городе?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, если в городе есть потенциал для развития структуры и соблюдены условия по помещению и квалификации.",
      },
    },
    {
      "@type": "Question",
      name: "Помогает ли компания на этапе запуска?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Вы получаете полную поддержку: от подбора локации и оформления до обучения, маркетинговых материалов и сопровождения куратора.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${manrope.variable} ${uncage.variable} ${inter.variable} h-full antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header/>
          <main className="flex-1">{children}</main>
          <Toaster richColors position="bottom-right" />
          <PvzFooter />
        </div>
      </body>
    </html>
  );
}
