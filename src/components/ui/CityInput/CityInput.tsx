import style from './CityInput.module.scss';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { SelectedCity } from "@/types";

const DADATA_TOKEN = '62233f8282816d1ca07d1bb07fcaeb2f76dd111f';

interface CityData {
  city?: string;
  settlement?: string;
  country?: string;
  region?: string;
  kladr_id?: string;
  fias_id?: string;
}

interface CitySuggestion {
  value: string;
  unrestricted_value?: string;
  data?: CityData;
}

interface CityInputProps {
  value: SelectedCity | null;
  onChange: Dispatch<SetStateAction<SelectedCity | null>>;
  className?: string;
  listHeight?: number;
}

export default function CityInput({ value, onChange, className = '', listHeight = 172 }: CityInputProps) {
  const [query, setQuery] = useState(value?.value || '');
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(!!value?.fias_id);
  const containerRef = useRef<HTMLDivElement>(null);
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // обновляем query, если значение пришло извне
  useEffect(() => {
    if (value?.value !== query) {
      setQuery(value?.value || '');
      setSelected(!!value?.fias_id);
    }
  }, [value]);

  // получение подсказок
  useEffect(() => {
    // если уже выбран город или поле короткое — не подгружаем
    if (selected || value?.fias_id || query.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchCities = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Token ${DADATA_TOKEN}`,
            },
            body: JSON.stringify({
              query,
              from_bound: { value: 'city' },
              to_bound: { value: 'settlement' },
              locations: [
                { country: 'Россия' },
                { country: 'Казахстан' },
                { country: 'Беларусь' },
              ],
              restrict_value: true,
              count: 10,
            }),
          }
        );

        const data = await response.json();
        setSuggestions(data.suggestions || []);
      } catch (error) {
        console.error('Ошибка Dadata:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchCities, 300);
    return () => clearTimeout(timeoutId);
  }, [query, selected, value?.fias_id]);

  // клик вне компонента
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={style.cityInputWrapper} ref={containerRef} >
      <input
        autoComplete="new-password"
        autoCorrect="off"
        spellCheck={false}
        inputMode="search"
        className={`input ${className}`}
        type="text"
        placeholder="Введите город"
        value={query}
        onChange={(e) => {
          setSelected(false);
          setQuery(e.target.value);
          onChange(null);
        }}
        onBlur={() => {
          blurTimeoutRef.current = setTimeout(() => {
            if (!selected && !value?.fias_id) {
              setQuery('');
              onChange(null);
            }
            setSuggestions([]);
          }, 150);
        }}

        onFocus={() => {
          if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
        }}
      />
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            right: '16px', // было 10 — немного левее
            top: '50%',
            transform: 'translateY(-50%)',
            width: '16px',
            height: '16px',
            border: '2px solid rgba(184, 224, 95, 0.3)', // полупрозрачный контур
            borderTop: '2px solid #b8e05f', // основной цвет
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            pointerEvents: 'none',
          }}
        />
      )}

      {suggestions.length > 0 && !selected && (
        <ul
          className={style.list}
          style={{
            maxHeight: listHeight,
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#fff',
            zIndex: 10,
            overflowY: 'auto',
          }}
        >
          {suggestions.map((s, index) => (
            <li
              className={style.listItem}
              key={index}
              onMouseDown={(e) => {
                e.preventDefault();
                setSelected(true);
                setSuggestions([]);

                const city: SelectedCity = {
                  value: s.data?.city || s.data?.settlement || s.value,
                  fias_id: s.data?.fias_id,
                  kladr_id: s.data?.kladr_id,
                  region: s.data?.region,
                  country: s.data?.country,
                };

                setQuery(s.value);
                onChange(city);

              }}
            >
              {s.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
