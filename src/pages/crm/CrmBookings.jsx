import {
  ListChecks,
  ListPlus,
  ArrowRightLeft,
  Ban,
  MapPin,
  UserCheck,
  Wallet,
  Eye,
  Bus,
  PhoneIncoming,
  MapPinned,
  Users,
  MessageCircle,
} from 'lucide-react';
import SectionHeading from '../../components/SectionHeading.jsx';
import FeatureCard from '../../components/FeatureCard.jsx';
import BrowserMockup from '../../components/BrowserMockup.jsx';
import LiveBlacklistCheck from '../../components/demo/LiveBlacklistCheck.jsx';

export default function CrmBookings() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeading
          eyebrow="Совместная работа"
          title="Онлайн-заявки без накладок между операторами"
          description="Заявки с публичного сайта попадают в общую очередь и подсвечиваются, если заявитель в чёрном списке или уже бронировал этот маршрут. Как только один оператор принял или отклонил заявку, она мгновенно исчезает у остальных — по WebSocket."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <BrowserMockup className="order-2 lg:order-1">
            <div className="flex items-center gap-2">
              <ListChecks size={16} className="text-brand-600" />
              <span className="text-xs font-semibold text-ink-900/60">Очередь заявок</span>
            </div>
            <div className="mt-4 space-y-2.5">
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-medium text-red-700">
                ⚠ Пассажир в чёрном списке — проверьте перед подтверждением
              </div>
              <div className="rounded-lg border border-sun-500/30 bg-sun-400/10 px-3 py-2 text-[11px] font-medium text-sun-700">
                Уже есть бронь на этом маршруте в пределах ±3 дней
              </div>
              <div className="flex items-center justify-between rounded-lg border border-ink-900/5 bg-ink-50/60 px-3 py-2.5 text-xs">
                <span className="text-ink-900/70">Заявка №2481 · 2 места</span>
                <span className="rounded-md bg-brand-600 px-2 py-1 font-semibold text-white">Принять</span>
              </div>
            </div>
          </BrowserMockup>

          <ul className="order-1 space-y-3 text-sm text-ink-900/70 lg:order-2">
            {[
              [ListPlus, 'Лист ожидания: если рейс заполнен, пассажира можно поставить в очередь и посадить при появлении места'],
              [ArrowRightLeft, 'Пересадка пассажира на другой рейс того же маршрута в два клика'],
              [Ban, 'Проверка номера в чёрном списке за секунду — даже у операторов без доступа к полному списку'],
            ].map(([Icon, item]) => (
              <li key={item} className="flex gap-3">
                <Icon size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl bg-brand-600 px-6 py-10 text-center sm:px-10">
        <p className="mx-auto max-w-xl font-serif text-xl font-normal leading-snug text-white sm:text-2xl">
          «Раньше — рация, три звонка и Excel-табличка. Теперь — один экран,
          где видно всё: от заявки на сайте до отметки водителя о посадке.»
        </p>
      </div>

      <div className="border-t border-ink-900/10 pt-16">
        <SectionHeading
          eyebrow="В день рейса"
          title="Видно, кто где сел и кто не пришёл"
          description="У каждого пассажира в брони — конкретная точка посадки и точка высадки. Когда автобус отправляется, водитель отмечает явку каждого пассажира прямо в Telegram — без рации и звонков в офис."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ul className="space-y-3 text-sm text-ink-900/70">
            {[
              [MapPin, 'Точка посадки и точка высадки закреплены за каждым пассажиром отдельно'],
              [UserCheck, '«Явка» / «неявка» по каждому пассажиру в Telegram-боте — статус обновляется в CRM в реальном времени'],
              [Wallet, 'Оплата наличными видна прямо рядом с отметкой явки — деньги не потеряются между рейсом и кассой'],
              [Eye, 'Оператор видит фактический список севших, а не только список забронировавших'],
            ].map(([Icon, item]) => (
              <li key={item} className="flex gap-3">
                <Icon size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>

          <BrowserMockup>
            <div className="flex items-center gap-2">
              <UserCheck size={16} className="text-brand-600" />
              <span className="text-xs font-semibold text-ink-900/60">Список пассажиров рейса</span>
            </div>
            <div className="mt-4 space-y-2">
              {[
                ['Сидорова Анна', 'Сочи, ж/д вокзал', 'явка', 'brand'],
                ['Петров Игорь', 'Сочи, аэропорт', 'явка', 'brand'],
                ['Кузнецов Олег', 'Адлер, автовокзал', 'неявка', 'red'],
                ['Волкова Мария', 'Адлер, автовокзал', 'ожидание', 'sun'],
              ].map(([name, stop, status, tone]) => (
                <div key={name} className="rounded-lg border border-ink-900/5 bg-ink-50/60 px-3 py-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-ink-900/80">{name}</span>
                    <span
                      className={`rounded-md px-2 py-0.5 font-semibold ${
                        tone === 'brand'
                          ? 'bg-brand-50 text-brand-600'
                          : tone === 'red'
                            ? 'bg-red-50 text-red-600'
                            : 'bg-sun-400/15 text-sun-600'
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                  <div className="mt-1 text-ink-900/40">{stop}</div>
                </div>
              ))}
            </div>
          </BrowserMockup>
        </div>
      </div>

      <div className="border-t border-ink-900/10 pt-16">
        <SectionHeading
          eyebrow="Продажи"
          title="Касса, экскурсии и допродажи"
          description="Оформление на кассе, ведение клиентской базы и допродажа экскурсий — из одного окна оператора."
        />
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={Bus} title="Быстрое оформление на кассе">
            Запись пассажира на рейс с удержанием места и обратным отсчётом,
            чтобы место не «зависало» впустую.
          </FeatureCard>
          <FeatureCard icon={PhoneIncoming} title="Звонок клиента — номер уже в форме">
            Учётная запись оператора привязана к линии в офисной телефонии
            Oktell: номер абонента вставляется в форму одним кликом.
          </FeatureCard>
          <FeatureCard icon={MapPinned} title="Каталог экскурсий с фотогалереей" tone="sun">
            Программа, длительность, что включено в цену и максимальный
            размер группы — плюс фотогалерея.
          </FeatureCard>
          <FeatureCard icon={Users} title="Заявки от корпоративных клиентов">
            Отдельная очередь B2B-заявок на экскурсии с мгновенным появлением
            на экранах у всех сотрудников.
          </FeatureCard>
          <FeatureCard icon={ArrowRightLeft} title="Пересадка и отмена в пару кликов">
            Перенос пассажира на другой рейс или дату, отмена места или всей
            брони — с автоматическим уведомлением.
          </FeatureCard>
          <FeatureCard icon={MessageCircle} title="История сообщений пассажиру">
            Видно, какие уведомления и когда ушли конкретному пассажиру —
            удобно при разборе жалоб.
          </FeatureCard>
        </div>
      </div>

      <div className="border-t border-ink-900/10 pt-16">
        <SectionHeading
          eyebrow="Попробуйте сами"
          title="Проверка номера в чёрном списке"
          description="Та же логика, что видит оператор без доступа к полному чёрному списку — портирована из production-кода."
        />
        <div className="mx-auto mt-8 max-w-sm">
          <LiveBlacklistCheck />
        </div>
      </div>
    </div>
  );
}
