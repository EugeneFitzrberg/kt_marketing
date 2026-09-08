import { LogIn, CalendarClock, Wallet, Users, UserCheck, Search } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading.jsx';
import FeatureCard from '../../components/FeatureCard.jsx';
import BrowserMockup from '../../components/BrowserMockup.jsx';

export default function DriverCabinet() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeading
          eyebrow="Кабинет водителя"
          title="Водителю не обязателен Telegram — тот же кабинет есть на сайте"
          description="Вход тем же телефоном и кодом, что и у пассажира. Роль «водитель» просто открывает другой экран — свои рейсы и пассажиров, без переустановки приложений и без доступа к чужим данным."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ul className="space-y-3 text-sm text-ink-900/70">
            {[
              [LogIn, 'Тот же вход по SMS-коду, что у пассажира — отдельного логина или пароля не заводится'],
              [CalendarClock, 'Рейсы по датам: вкладки «вчера / сегодня / завтра», у каждого рейса — время, машина, свободные и занятые места'],
              [Wallet, 'Сумма к получению по рейсу видна заранее — открывается примерно за 20 минут до отправления'],
              [Users, 'Пассажиры рейса — отдельные вкладки «на посадку» и «на выход», поиск по имени и телефону'],
              [UserCheck, '«Явка» / «неявка» по каждому пассажиру — тот же переключатель, что и в Telegram-боте, статус общий'],
            ].map(([Icon, item]) => (
              <li key={item} className="flex gap-3">
                <Icon size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-sun-600" />
                {item}
              </li>
            ))}
          </ul>

          <BrowserMockup>
            <div className="flex items-center gap-2">
              <CalendarClock size={16} className="text-sun-600" />
              <span className="text-xs font-semibold text-ink-900/60">Мои рейсы</span>
            </div>
            <div className="mt-4 flex gap-2">
              {['Вчера', 'Сегодня', 'Завтра'].map((d, i) => (
                <span
                  key={d}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                    i === 1 ? 'bg-sun-500 text-white' : 'bg-ink-900/5 text-ink-900/50'
                  }`}
                >
                  {d}
                </span>
              ))}
            </div>
            <div className="mt-3 rounded-lg border border-ink-900/5 bg-ink-50/60 p-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink-900/80">Сочи → Красная Поляна · 09:00</span>
                <span className="text-ink-900/50">42 / 49 мест</span>
              </div>
              <div className="mt-1 text-ink-900/40">Setra S515 HD · А 123 БВ 174</div>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-ink-900/5 bg-ink-50/60 px-3 py-2.5 text-xs">
              <Search size={14} className="flex-shrink-0 text-ink-900/40" />
              <span className="text-ink-900/50">Поиск пассажира по имени или телефону</span>
            </div>
            <div className="mt-2 space-y-1.5">
              {[
                ['Сидорова Анна', 'явка', 'brand'],
                ['Петров Игорь', 'ожидание', 'sun'],
              ].map(([name, status, tone]) => (
                <div key={name} className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-xs ring-1 ring-ink-900/5">
                  <span className="font-medium text-ink-900/80">{name}</span>
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
          </BrowserMockup>
        </div>
      </div>

      <div className="border-t border-ink-900/10 pt-16">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          <FeatureCard icon={LogIn} title="Один и тот же водитель — два интерфейса">
            Кто-то из водителей привык к Telegram-боту, кому-то удобнее сайт
            в браузере телефона — работает и то, и другое, данные общие.
          </FeatureCard>
          <FeatureCard icon={Wallet} title="Деньги видно заранее, а не после рейса" tone="sun">
            Сумма к получению по рейсу открывается ещё до отправления — не
            нужно сверяться с кассой постфактум.
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}
