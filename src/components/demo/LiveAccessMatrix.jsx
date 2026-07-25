import { useState } from 'react';
import { Check } from 'lucide-react';

// Портировано из production-кода kurort_trans_web:
// client/src/components/Operators.js -> AccessRightsSection + OperatorCard.handleRightsChange.
// Реальные: список прав (те же ключи и подписи, что в CRM) и логика переключения
// (иммутабельное обновление accessRights по ключу). В проде клик сохраняется
// запросом к реальной CRM; здесь, без бэкенда, "Сохранить" просто показывает
// локальное подтверждение. Стилизация — Tailwind вместо checkbox-стилей
// оригинального admin.css.

const RIGHTS = [
  { key: 'transport', label: 'Транспорт' },
  { key: 'drivers', label: 'Водители' },
  { key: 'schedule', label: 'Расписание' },
  { key: 'passengers', label: 'Пассажиры (просмотр и удаление)' },
  { key: 'blacklist', label: 'Чёрный список (просмотр)' },
  { key: 'excursions', label: 'Экскурсии' },
];

const INITIAL_RIGHTS = {
  transport: false,
  drivers: false,
  schedule: true,
  passengers: true,
  blacklist: false,
  excursions: false,
};

export default function LiveAccessMatrix() {
  const [accessRights, setAccessRights] = useState(INITIAL_RIGHTS);
  const [saved, setSaved] = useState(false);

  const handleRightsChange = (key, value) => {
    setAccessRights((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  return (
    <div className="rounded-2xl border border-ink-900/5 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-ink-900">Оператор: Мария Кассирова</div>
          <div className="text-xs text-ink-900/40">+7 (900) 123-45-67</div>
        </div>
        <button
          type="button"
          onClick={() => setSaved(true)}
          className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-700"
        >
          Сохранить
        </button>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {RIGHTS.map(({ key, label }) => {
          const checked = accessRights[key];
          return (
            <label
              key={key}
              className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm transition ${
                checked
                  ? 'border-brand-200 bg-brand-50 text-brand-800'
                  : 'border-ink-900/10 bg-white text-ink-900/60 hover:bg-ink-900/[0.02]'
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => handleRightsChange(key, e.target.checked)}
                className="sr-only"
              />
              <span
                className={`flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded border ${
                  checked ? 'border-brand-600 bg-brand-600' : 'border-ink-900/20 bg-white'
                }`}
              >
                {checked && <Check size={11} strokeWidth={3} className="text-white" />}
              </span>
              {label}
            </label>
          );
        })}
      </div>

      {saved && (
        <div className="mt-4 rounded-lg border border-brand-200 bg-brand-50 px-4 py-2.5 text-sm text-brand-800">
          ✓ Права обновлены. В проде это же изменение проверяется на сервере на каждом запросе, а
          не только скрывает пункты меню.
        </div>
      )}

      <p className="mt-4 text-center text-[11px] text-ink-900/35">
        Демо-оператор — переключайте права свободно. Список прав и логика переключения реальные, из
        production-кода
      </p>
    </div>
  );
}
