"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  const isProductPage = path.startsWith("/product");
  const isCatalogPage = path.startsWith("/shop") || path === "/";

  return (
    <footer
      className={`bg-light rounded-t-[30px] px-4 md:px-[30px] py-12 md:py-20 ${
        isProductPage || isCatalogPage ? "pb-[124px]" : ""
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-20 md:mb-[90px]">
          <div>
            <a
              href="mailto:help@for-vibe.ru"
              className="font-[UNCAGE] text-[32px] leading-[38px] md:text-[48px] md:leading-[58px] text-black mb-3 block"
            >
              help@for-vibe.ru
            </a>

            <h4 className="text-[#8C8C8C] font-medium leading-[22px]">
              Электронная почта
            </h4>
          </div>

          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <Link
                target="_blank"
                href="https://cdn.for-vibe.ru/tools/for_business/MP_VIBE_3.1.pdf"
                className="hover:text-black transition-colors"
              >
                Маркетинг-план VIBE
              </Link>
            </li>

            <li>
              <Link
                href="/sales-terms"
                className="hover:text-black transition-colors"
              >
                Правила дистанционной торговли
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                href="/terms-of-cooperation"
                className="hover:text-black transition-colors"
              >
                Основы сотрудничества
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                href="/privacy-policy"
                className="hover:text-black transition-colors"
              >
                Политика конфиденциальности
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                href="/return-policy"
                className="hover:text-black transition-colors"
              >
                Политика возврата
              </Link>
            </li>
          </ul>
        </div>

        <img
          src="/footerLogo.svg"
          alt="Логотип FORVIBE"
          className="w-full mb-20"
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-black/10 pt-6">
          <div className="font-[UNCAGE] text-[16px] leading-5">
            Добро пожаловать в VIBE — пространство, где ты важен. Мы рядом. И
            готовы идти вместе с тобой.
          </div>

          <div className="flex gap-3">
            <a
              href="https://vk.com/vibe_forlife"
              target="_blank"
              className="w-[49px] h-[49px] rounded-lg border border-black/20 hover:border-black/30 transition-colors flex items-center justify-center"
            >
              <svg
                width="25"
                height="15"
                viewBox="0 0 25 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.172 10.4571V0H14.1705V5.79161C17.3694 5.40551 19.3909 1.76966 20.0018 0H24.167C23.6671 3.7002 20.3628 6.54238 18.6689 7.40039C21.5012 8.28522 25 12.5485 25 14.9617H20.6682C19.0688 10.8432 15.67 9.59906 14.1705 9.49181V14.9617C4.75723 15.6052 -0.240983 8.04391 0.00893732 0H4.17411C4.42403 7.56127 8.4226 9.81357 10.172 10.4571Z"
                  fill="#252526"
                />
              </svg>
            </a>

            <a
              href="https://youtube.com/@romanvolkov108"
              target="_blank"
              className="w-[49px] h-[49px] rounded-lg border border-black/20 hover:border-black/30 transition-colors flex items-center justify-center"
            >
              <svg
                width="29"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.744506 4.65278C0.873037 2.674 2.46395 1.12324 4.44447 1.02512C7.31239 0.883032 11.4115 0.71167 14.5 0.71167C17.5885 0.71167 21.6876 0.883032 24.5555 1.02512C26.5361 1.12324 28.127 2.674 28.2555 4.65278C28.3786 6.5486 28.5 8.88133 28.5 10.7117C28.5 12.542 28.3786 14.8747 28.2555 16.7706C28.127 18.7493 26.5361 20.3001 24.5555 20.3982C21.6876 20.5403 17.5885 20.7117 14.5 20.7117C11.4115 20.7117 7.31239 20.5403 4.44447 20.3982C2.46395 20.3001 0.873037 18.7493 0.744506 16.7706C0.621364 14.8747 0.5 12.542 0.5 10.7117C0.5 8.88133 0.621364 6.5486 0.744506 4.65278Z"
                  fill="#252526"
                />
                <path
                  d="M11.5 6.71167V14.7117L19.5 10.7117L11.5 6.71167Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              href="https://t.me/forvibe_official"
              target="_blank"
              className="w-[49px] h-[49px] rounded-lg border border-black/20 hover:border-black/30 transition-colors flex items-center justify-center"
            >
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4832 2.26583C20.6391 1.23022 19.6818 0.41281 18.7865 0.817093L0.956022 8.86932C0.314035 9.15924 0.360995 10.1594 1.02683 10.3775L4.70393 11.582C5.40573 11.8118 6.16566 11.693 6.77848 11.2575L15.0687 5.36631C15.3187 5.18865 15.5912 5.55426 15.3776 5.78077L9.41014 12.1091C8.83126 12.723 8.94616 13.7632 9.64246 14.2123L16.3237 18.5218C17.0731 19.0051 18.0371 18.5195 18.1773 17.5881L20.4832 2.26583Z"
                  fill="#252526"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/forvibe.official"
              target="_blank"
              className="w-[49px] h-[49px] rounded-lg border border-black/20 hover:border-black/30 transition-colors flex items-center justify-center"
            >
              <svg
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 720 720"
              >
                <path d="M350.4,9.6C141.8,20.5,4.1,184.1,12.8,390.4c3.8,90.3,40.1,168,48.7,253.7,2.2,22.2-4.2,49.6,21.4,59.3,31.5,11.9,79.8-8.1,106.2-26.4,9-6.1,17.6-13.2,24.2-22,27.3,18.1,53.2,35.6,85.7,43.4,143.1,34.3,299.9-44.2,369.6-170.3C799.6,291.2,622.5-4.6,350.4,9.6h0ZM269.4,504c-11.3,8.8-22.2,20.8-34.7,27.7-18.1,9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9,16.8-72.5,72.9-136.3,150-143.1,78-6.9,150.4,32.7,183.1,104.2,72.4,159.1-112.9,316.2-256.4,218.6h0Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-4 text-[#8C8C8C] leading-[130%] text-sm md:text-base md:leading-[140%]">
          ООО «Вайб», ОГРН: 1245400023813,
          <br />
          ИНН: 5405096596, КПП: 540501001
          <br />
          630112, Новосибирская область, г.о. город Новосибирск, г. Новосибирск,
          ул. Фрунзе, д. 230
        </div>
      </div>
    </footer>
  );
};

export default Footer;
