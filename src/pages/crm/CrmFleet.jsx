import {
  CalendarClock,
  Route,
  Clock,
  Copy,
  Globe,
  Timer,
  UserPlus,
  Sparkles,
  Link2,
  Search,
} from 'lucide-react';
import SectionHeading from '../../components/SectionHeading.jsx';
import BrowserMockup from '../../components/BrowserMockup.jsx';

export default function CrmFleet() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeading
          eyebrow="Маршрутная сеть"
          title="Маршруты, рейсы и посадка"
          description="Конструктор маршрута с участками («плечами»), тарифами и точками посадки, интерактивная карта с реальной прокладкой дороги и календарь расписания — вместо таблиц в Excel и звонков водителям."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ul className="space-y-3 text-sm text-ink-900/70">
            {[
              [CalendarClock, 'Календарь расписания: регулярные рейсы по дням недели, вставные — под пиковый спрос, цвет = назначен ли транспорт'],
              [Route, 'Интерактивная карта с прокладкой реального пути между точками — не прямые линии, а настоящая дорога'],
              [Clock, 'Отложенное изменение цены: новый тариф на участок можно запланировать на дату в будущем'],
              [Copy, 'Массовое копирование расписания одного дня на диапазон дат'],
              [Globe, 'Индикатор «сейчас» считается по часовому поясу города отправления, а не браузера'],
            ].map(([Icon, item]) => (
              <li key={item} className="flex gap-3">
                <Icon size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>

          <BrowserMockup>
            <div className="flex items-center gap-2">
              <CalendarClock size={16} className="text-brand-600" />
              <span className="text-xs font-semibold text-ink-900/60">Расписание на неделю</span>
            </div>
            <div className="mt-4 space-y-2">
              {[
                ['Сочи → Красная Поляна · 09:00', 'transport ок', 'brand'],
                ['Адлер → Роза Хутор · 10:30', 'нет транспорта', 'sun'],
                ['Сочи → Абхазия · 12:00', 'transport ок', 'brand'],
              ].map(([r, status, tone]) => (
                <div key={r} className="flex items-center justify-between rounded-lg border border-ink-900/5 bg-ink-50/60 px-3 py-2.5 text-xs">
                  <span className="font-medium text-ink-900/80">{r}</span>
                  <span
                    className={`rounded-md px-2 py-0.5 font-semibold ${
                      tone === 'brand' ? 'bg-brand-50 text-brand-600' : 'bg-sun-400/15 text-sun-600'
                    }`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-sun-500/30 bg-sun-400/10 px-3 py-3 text-xs text-ink-900/70">
              <Timer size={15} className="flex-shrink-0 text-sun-600" />
              Место удержано: осталось 4:52 до снятия временной брони
            </div>
          </BrowserMockup>
        </div>
      </div>

      <div className="border-t border-ink-900/10 pt-16">
        <SectionHeading
          eyebrow="Парк и персонал"
          title="Водитель и машина заводятся за минуту"
          description="Новый водитель — телефон и ФИО: карточка создана, и он уже открывает Telegram-бота компании и видит свои рейсы, без пароля и установки приложения. Новая машина — марка, модель, категория, гос. номер и вместимость."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <BrowserMockup className="order-2 lg:order-1">
            <div className="flex items-center gap-2">
              <UserPlus size={16} className="text-brand-600" />
              <span className="text-xs font-semibold text-ink-900/60">Новый водитель</span>
            </div>
            <div className="mt-4 rounded-lg border border-ink-900/5 bg-ink-50/60 p-3 text-xs">
              <div className="font-semibold text-ink-900/80">Иванов Пётр Сергеевич</div>
              <div className="mt-0.5 text-ink-900/50">+7 (900) 123-45-67 · водитель</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="rounded-md bg-brand-50 px-2 py-0.5 font-medium text-brand-600">
                  Закреплён: Setra S515 HD
                </span>
              </div>
            </div>
            <div className="mt-3 rounded-lg border border-ink-900/5 bg-ink-50/60 p-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink-900/80">Setra S515 HD · А 123 БВ 174</span>
                <span className="text-ink-900/50">49 мест</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {['Кондиционер', 'TV', 'Откидные спинки'].map((f) => (
                  <span key={f} className="rounded-md bg-sun-400/15 px-2 py-0.5 font-medium text-sun-600">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </BrowserMockup>

          <ul className="order-1 space-y-3 text-sm text-ink-900/70 lg:order-2">
            {[
              [Sparkles, 'Комфорт-опции техники (кондиционер, TV, откидные спинки, дезинфекция) видны и оператору, и пассажиру при выборе рейса'],
              [Link2, 'Основной водитель закрепляется за машиной прямо в карточке транспорта'],
              [CalendarClock, 'Назначение машины на рейс — прямо в календаре расписания'],
              [Search, 'Поиск по парку и водителям, когда список большой'],
            ].map(([Icon, item]) => (
              <li key={item} className="flex gap-3">
                <Icon size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
