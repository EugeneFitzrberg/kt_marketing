import { useState } from 'react';
import InputMask from 'react-input-mask';
import moment from 'moment';
import { Ban, CheckCircle2, HelpCircle } from 'lucide-react';

// Логика этого компонента портирована из production-кода kurort_trans_web:
// client/src/components/BlackList.js -> OperatorBlackList (быстрая проверка
// номера операторами без доступа к полному списку). Реальные: маска телефона
// (react-input-mask, тот же формат), форматирование даты через moment, три
// исхода проверки (в списке / не в списке / неизвестен). Единственная замена —
// источник данных: в проде это запрос к реальной CRM, здесь — небольшой
// демонстрационный набор, т.к. у маркетингового сайта нет бэкенда. Стилизация —
// Tailwind вместо MUI/Bootstrap оригинала.

const DEMO_DB = {
  '+7 (900) 111-11-11': {
    blacklistInfo: {
      date: '2026-03-12T10:00:00.000Z',
      comment: 'Систематические отмены брони без предупреждения',
    },
    userInfo: { surname: 'Сидоров', name: 'Пётр', patronymic: '' },
  },
  '+7 (900) 222-22-22': {
    blacklistInfo: null,
    userInfo: { surname: 'Иванова', name: 'Мария', patronymic: '' },
  },
};

export default function LiveBlacklistCheck() {
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState();

  const checkPhone = (value) => {
    const entry = DEMO_DB[value];
    setResult(entry === undefined ? null : entry);
  };

  const renderResult = () => {
    if (result === undefined) return null;

    if (result === null) {
      return (
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-ink-900/10 bg-ink-50/60 px-4 py-3 text-sm">
          <HelpCircle size={18} className="mt-0.5 flex-shrink-0 text-ink-900/40" />
          <div>
            <div className="font-semibold text-ink-900">Информации не найдено</div>
            <div className="mt-0.5 text-ink-900/50">
              Номер не зарегистрирован и не в чёрном списке.
            </div>
          </div>
        </div>
      );
    }

    const fullName = [result.userInfo?.surname, result.userInfo?.name, result.userInfo?.patronymic]
      .filter(Boolean)
      .join(' ');

    if (result.blacklistInfo) {
      return (
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm">
          <Ban size={18} className="mt-0.5 flex-shrink-0 text-red-500" />
          <div>
            <div className="font-semibold text-red-700">Номер в чёрном списке</div>
            {fullName && <div className="mt-0.5 text-red-700/70">Пассажир: {fullName}</div>}
            <div className="text-red-700/70">Причина: {result.blacklistInfo.comment}</div>
            <div className="text-red-700/70">
              Добавлен: {moment(result.blacklistInfo.date).format('DD.MM.YYYY HH:mm')}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="mt-4 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm">
        <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-green-600" />
        <div>
          <div className="font-semibold text-green-700">Номер не в чёрном списке</div>
          {fullName && <div className="mt-0.5 text-green-700/70">Пассажир: {fullName}</div>}
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-2xl border border-ink-900/5 bg-white p-5 shadow-card">
      <div className="text-center text-sm font-semibold text-ink-900/70">
        Введите номер телефона пассажира
      </div>
      <InputMask
        mask="+7 (999) 999-99-99"
        placeholder="+7 (___) ___-__-__"
        value={phone}
        onChange={(e) => {
          const value = e.target.value;
          setPhone(value);
          if (!value.includes('_') && value !== '') {
            checkPhone(value);
          } else {
            setResult(undefined);
          }
        }}
      >
        {(inputProps) => (
          <input
            {...inputProps}
            className="mx-auto mt-3 block w-56 rounded-lg border border-ink-900/10 px-3 py-2.5 text-center text-sm font-medium tabular-nums outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
          />
        )}
      </InputMask>

      {renderResult()}

      <p className="mt-4 text-center text-[11px] text-ink-900/35">
        Демо-база — попробуйте +7 (900) 111-11-11 или +7 (900) 222-22-22. Логика проверки реальная,
        из production-кода
      </p>
    </div>
  );
}
