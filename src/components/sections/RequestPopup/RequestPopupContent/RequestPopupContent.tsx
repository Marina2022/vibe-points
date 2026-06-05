'use client'

import s from './RequestPopupContent.module.scss';
import React, {Dispatch, SetStateAction, useState, useTransition} from "react";

import {Controller, useForm} from "react-hook-form";

import PhoneInput, {isValidPhoneNumber} from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import {sendToB24} from "@/features/bitrix/sendToB24";

import {toast} from "sonner";
import {RegisterFormValues, SelectedCity} from "@/types";
import {showErrorToast} from "@/components/ui/ToastCustom/ToastCustom";
import CityInput from "@/components/ui/CityInput/CityInput";
import Button from "@/components/ui/Button";
import MiniSpinner from "@/components/ui/miniSpinner/MiniSpinner";


type Props = {
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
}

const RequestPopupContent = ({setPopupOpen}: Props) => {

  const [city, setCity] = useState<SelectedCity | null>(null)
  const [cityError, setCityError] = useState("")

  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
    clearErrors
  } = useForm<RegisterFormValues>({mode: 'onSubmit'});

  const [error, setError] = useState('');


  const [check1isChecked, setCheck1isChecked] = useState(false);
  const [check2isChecked, setCheck2isChecked] = useState(false);
  const [check3isChecked, setCheck3isChecked] = useState(false);
  const [check1Error, setCheck1Error] = useState(false)
  const [check2Error, setCheck2Error] = useState(false)
  const [check3Error, setCheck3Error] = useState(false)


  const [isPending, setPending] = useState(false);

  const onSubmit = async(data: RegisterFormValues) => {

    if (!city) {
      setCityError("Выберите город")
    }

    if (!check1isChecked) {
      setCheck1Error(true)
    }

    if (!check2isChecked) {
      setCheck2Error(true)
    }

    if (!check3isChecked) {
      setCheck3Error(true)
    }

    if (!check1isChecked || !check2isChecked || !check3isChecked || !city) return

    setError('');


    // startTransition(async () => {
      try {
        setPending(true)
        const body = {
          title: "ForVIBE Point",
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.phone,
          email: data.email,
          city: city.value,
          telegram: data.telegram,
        }

        const result = await sendToB24(body);


        if (result.error) {
          showErrorToast(result?.error)
        }

        if (result.error) {
          setError(result.error);
          return;
        }

        setPopupOpen(false)
        toast.success("Заявка отправлена успешно")

      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Неизвестная ошибка');
        }
      } finally {
        setPending(false)
      }
    // })
  }

  return (
    <div className={s.contentWrapper}>
      <div className={s.title}>
        Получите презентацию <br/> франшизы в один клик
      </div>

      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputs}>
            {/*Введите фамилию*/}
            <div className={s.controlWrapper}>
              <div className={s.inputWrapper}>
                <input
                  {...register('last_name', {required: 'Введите фамилию'})}
                  onChange={(e) => {
                    clearErrors('last_name'); // убираем ошибку при вводе
                  }}
                  className={`input  ${errors.last_name ? 'redBorder' : ''}`}
                  type="text" placeholder="Введите фамилию"
                />
              </div>
              {errors.last_name && (
                <p className="errorMessage">{errors.last_name.message}</p>
              )}
            </div>

            {/*Введите имя*/}
            <div className={s.controlWrapper}>
              <div className={s.inputWrapper}>
                <input
                  {...register('first_name', {required: 'Введите имя'})}
                  onChange={() => {
                    clearErrors('first_name'); // убираем ошибку при вводе
                  }}
                  className={`input ${errors.first_name ? 'redBorder' : ''}`}
                  type="text" placeholder="Введите имя"
                />
              </div>

              {errors.first_name && (
                <p className="errorMessage">{errors.first_name.message}</p>
              )}
            </div>

            <div className={s.controlWrapper}>
              <div className={s.inputWrapper}>
                <input
                  {...register('email', {
                    required: 'Введите e-mail',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Некорректный e-mail',
                    },
                  })}
                  onChange={() => {
                    clearErrors('email'); // убираем ошибку при вводе
                  }}
                  className={`input  ${errors.email ? 'redBorder' : ''}`}
                  type="text" placeholder="E-mail"
                />
              </div>

              {errors.email && (
                <p className='errorMessage'>{errors.email.message}</p>
              )}
            </div>

            <div className={s.controlWrapper}>
              <div className={s.inputWrapper}>
                <div className="phoneInputWrapper">
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: 'Введите номер телефона',
                      validate: (value: string) => {
                        if (!value) return 'Введите номер телефона';

                        if (!isValidPhoneNumber(value)) {
                          return 'Некорректный номер телефона';
                        }
                        return true;
                      },
                    }}
                    render={({field}) => (
                      <PhoneInput
                        international
                        defaultCountry="RU"
                        countries={['RU', 'BY', 'KZ']} //  ограничили страны
                        value={field.value}
                        addInternationalOption={false}

                        labels={{
                          RU: 'RU',
                          BY: 'BY',
                          KZ: 'KZ',
                        }}

                        onChange={(value) => {
                          field.onChange(value);
                          clearErrors('phone');
                        }}
                        className={`input ${errors.phone ? 'redBorder' : ''}`}
                        placeholder="Введите номер телефона"
                      />
                    )}
                  />
                </div>
              </div>
              {errors.phone && (
                <p className='errorMessage'>{errors?.phone?.message}</p>
              )}
            </div>


            <div className={s.controlWrapper}>
              <div className={s.inputWrapper}>
                <input
                  {...register('telegram')}
                  onChange={() => {
                    clearErrors('telegram'); // убираем ошибку при вводе
                  }}
                  className={`input  ${errors.email ? 'redBorder' : ''}`}
                  type="text" placeholder="Ваш Telegram (@username)"
                />
              </div>

              {errors.telegram && (
                <p className='errorMessage'>{errors.telegram.message}</p>
              )}
            </div>

            <div className={s.controlWrapper}>
              <CityInput value={city} onChange={(value) => {
                setCity(value)
                if (value) {
                  // сбрасываем только если реально выбран город с id
                  setCityError("");
                }
              }} className={`${s.cityInput} ${cityError ? 'redBorder' : ''}`}/>
              {cityError && (
                <p className='errorMessage'>{cityError}</p>
              )}
            </div>

            {/*чекбоксы*/}

            <div className={s.checkboxes}>
              <div className={s.checkboxBlock} onClick={() => {
                setCheck1isChecked(prev => !prev)
              }}>
                <div
                  className={check1isChecked ? s.checkboxChecked : check1Error ? `${s.checkbox} ${'redBorder'}` : s.checkbox}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="#252526" strokeWidth="1.5338"
                          strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2"
                          strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2"
                          strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2"
                          strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={s.checkboxText}>
                  Принимаю <a
                  href="https://cdn.for-vibe.ru/tools/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20202605.docx">условия
                  пользовательского соглашения</a>
                </div>
              </div>


              <div className={s.checkboxBlock} onClick={() => {
                setCheck2isChecked(prev => !prev)
              }}>
                <div
                  className={check2isChecked ? s.checkboxChecked : check2Error ? `${s.checkbox} ${'redBorder'}` : s.checkbox}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="#252526" strokeWidth="1.5338"
                          strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2"
                          strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2"
                          strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2"
                          strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={s.checkboxText}>
                  Принимаю <a
                  href="https://for-vibe.ru/privacy-policy" target="_blank">условия политики конфиденциальности</a>
                </div>
              </div>


              <div className={s.checkboxBlock} onClick={() => {
                setCheck3isChecked(prev => !prev)
              }}>
                <div
                  className={check3isChecked ? s.checkboxChecked : check3Error ? `${s.checkbox} ${'redBorder'}` : s.checkbox}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="#252526" strokeWidth="1.5338"
                          strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2"
                          strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2"
                          strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2"
                          strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={s.checkboxText}>
                  Даю согласие на <a href="https://for-vibe.ru/privacy-consent" target="_blank">обработку
                  персональных данных</a>
                </div>
              </div>
            </div>

            <Button className={s.btn}>
              {
                isPending ? <MiniSpinner/> : <span>Получить презентацию</span>
              }
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestPopupContent;