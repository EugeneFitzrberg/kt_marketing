import { useMemo, useState } from 'react';
import { MapPin, Calendar, Users, Search, Minus, Plus } from 'lucide-react';

// Логика этого компонента портирована из production-кода kt_passengers:
// - фильтрация городов по подстроке — как searchFromInputDep/searchFromInputArrival
//   в client/src/components/PassengerRecord.js
// - клэмп числа мест к минимуму 1 — как onChange в
//   client/src/components/styled_objects/CustomNumberInputPC.js
// - запрет прошедших дат — как disablePast у DatePicker в
//   client/src/components/FindBlocks.js (DateBlock)
// Стилизация здесь — Tailwind вместо MUI/Bootstrap оригинала, чтобы не тащить
// в статический маркетинговый сайт весь UI-стек продакшн-приложения.

const LOCATIONS = {
  departureLocations: [
    { _id: 'dep-sochi', name: 'Сочи' },
    { _id: 'dep-adler', name: 'Адлер' },
    { _id: 'dep-krasnaya-polyana', name: 'Красная Поляна' },
  ],
  arrivalLocations: [
    { _id: 'arr-krasnaya-polyana', name: 'Красная Поляна' },
    { _id: 'arr-roza-hutor', name: 'Роза Хутор' },
    { _id: 'arr-abhazia', name: 'Абхазия (граница)' },
    { _id: 'arr-airport', name: 'Аэропорт Сочи' },
  ],
};

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function CityField({ label, icon: Icon, options, selectedId, onSelect, invalid }) {
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = inputValue.trim().toLowerCase();
    if (q.length === 0) return options;
    return options.filter((o) => o.name.toLowerCase().includes(q));
  }, [inputValue, options]);

  return (
    <div className="relative flex-1">
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink-900/60">
        <Icon size={13} />
        {label}
      </label>
      <input
        type="text"
        value={inputValue}
        placeholder="Начните вводить город"
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onChange={(e) => {
          setInputValue(e.target.value);
          onSelect(undefined);
        }}
        className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-brand-200 ${
          invalid ? 'border-red-400' : 'border-ink-900/10 focus:border-brand-400'
        }`}
      />
      {open && filtered.length > 0 && (
        <ul className="absolute z-20 mt-1 max-h-44 w-full overflow-auto rounded-lg border border-ink-900/10 bg-white py-1 text-sm shadow-card">
          {filtered.map((o) => (
            <li
              key={o._id}
              onMouseDown={() => {
                setInputValue(o.name);
                onSelect(o._id);
                setOpen(false);
              }}
              className={`cursor-pointer px-3 py-2 hover:bg-brand-50 ${selectedId === o._id ? 'bg-brand-50 text-brand-700' : ''}`}
            >
              {o.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SeatStepper({ value, onChange }) {
  const clamp = (v) => Math.max(1, v);

  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink-900/60">
        <Users size={13} />
        Мест
      </label>
      <div className="flex items-stretch overflow-hidden rounded-lg border border-ink-900/10">
        <button
          type="button"
          onClick={() => onChange(clamp(value - 1))}
          className="flex w-9 items-center justify-center bg-ink-50/60 text-ink-900/60 transition hover:bg-ink-900/5"
          aria-label="Меньше мест"
        >
          <Minus size={14} />
        </button>
        <input
          type="text"
          readOnly
          value={value}
          className="w-10 border-x border-ink-900/10 bg-white text-center text-sm font-semibold text-ink-900"
        />
        <button
          type="button"
          onClick={() => onChange(clamp(value + 1))}
          className="flex w-9 items-center justify-center bg-ink-50/60 text-ink-900/60 transition hover:bg-ink-900/5"
          aria-label="Больше мест"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}

export default function LiveSearchForm() {
  const [fromId, setFromId] = useState();
  const [toId, setToId] = useState();
  const [date, setDate] = useState(todayISO());
  const [seats, setSeats] = useState(1);
  const [touched, setTouched] = useState(false);
  const [result, setResult] = useState(null);

  const fromName = LOCATIONS.departureLocations.find((l) => l._id === fromId)?.name;
  const toName = LOCATIONS.arrivalLocations.find((l) => l._id === toId)?.name;

  const handleSubmit = () => {
    setTouched(true);
    if (!fromId || !toId || !date) {
      setResult(null);
      return;
    }
    setResult({ fromName, toName, date, seats });
  };

  return (
    <div className="rounded-2xl border border-ink-900/5 bg-white p-5 shadow-card">
      <div className="flex flex-col gap-3 sm:flex-row">
        <CityField
          label="Откуда"
          icon={MapPin}
          options={LOCATIONS.departureLocations}
          selectedId={fromId}
          onSelect={setFromId}
          invalid={touched && !fromId}
        />
        <CityField
          label="Куда"
          icon={MapPin}
          options={LOCATIONS.arrivalLocations}
          selectedId={toId}
          onSelect={setToId}
          invalid={touched && !toId}
        />
      </div>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink-900/60">
            <Calendar size={13} />
            Дата
          </label>
          <input
            type="date"
            value={date}
            min={todayISO()}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-ink-900/10 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <SeatStepper value={seats} onChange={setSeats} />
        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          <Search size={15} />
          Найти
        </button>
      </div>

      {result && (
        <div className="mt-4 rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          ✓ Форма провалидирована: {result.fromName} → {result.toName}, {result.date}, мест: {result.seats}.
          На реальном сайте здесь появится список подходящих рейсов.
        </div>
      )}
      {touched && !result && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Заполните город отправления и город прибытия.
        </div>
      )}

      <p className="mt-4 text-center text-[11px] text-ink-900/35">
        Демо на тестовых направлениях — логика поиска и валидации реальная, из production-кода
      </p>
    </div>
  );
}
