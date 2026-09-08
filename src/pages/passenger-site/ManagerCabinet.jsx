import { LogIn, Calendar, Wallet, Users2, ListChecks, ShieldCheck } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading.jsx';
import FeatureCard from '../../components/FeatureCard.jsx';
import BrowserMockup from '../../components/BrowserMockup.jsx';

export default function ManagerCabinet() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeading
          eyebrow="Кабинет менеджера"
          title="Деньги — без доступа к операционной CRM"
          description="Роль «менеджер» живёт на этом же сайте бронирования, не во внутренней CRM. Вход тот же — телефон и код. Менеджер видит выручку и заполняемость по маршрутам, но не заявки, не персональные данные пассажиров сверх необходимого и не операционные экраны оператора."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ul className="space-y-3 text-sm text-ink-900/70">
            {[
              [LogIn, 'Тот же вход по SMS-коду — отдельной учётной системы нет'],
              [Calendar, 'Сводка по маршруту с переключателем «день» или «месяц» и выбором даты'],
              [Wallet, 'Сумма выручки за период — вместе с числом рейсов, пассажиров, отменённых пассажиров и занятых мест'],
              [Users2, 'Разбивка по операторам: кто из сотрудников сколько бронирований оформил'],
              [ListChecks, 'Из месяца — в день, из дня — в конкретный рейс: полный список пассажиров, места, кто оформил'],
            ].map(([Icon, item]) => (
              <li key={item} className="flex gap-3">
                <Icon size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-sun-600" />
                {item}
              </li>
            ))}
          </ul>

          <BrowserMockup>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet size={16} className="text-sun-600" />
                <span className="text-xs font-semibold text-ink-900/60">Сочи → Красная Поляна</span>
              </div>
              <div className="flex gap-1">
                <span className="rounded-md bg-sun-500 px-2 py-0.5 text-[10px] font-semibold text-white">Месяц</span>
                <span className="rounded-md bg-ink-900/5 px-2 py-0.5 text-[10px] font-semibold text-ink-900/50">День</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-ink-900/5 bg-ink-50/60 p-3">
                <div className="text-[10px] font-medium uppercase tracking-wide text-ink-900/40">Выручка</div>
                <div className="mt-1 text-xl font-bold text-ink-900">1 180 400 ₽</div>
              </div>
              <div className="rounded-xl border border-ink-900/5 bg-ink-50/60 p-3">
                <div className="text-[10px] font-medium uppercase tracking-wide text-ink-900/40">Пассажиров</div>
                <div className="mt-1 text-xl font-bold text-ink-900">642</div>
              </div>
            </div>
            <div className="mt-3 space-y-1.5 text-xs">
              {[
                ['Оператор Мария К.', 214],
                ['Оператор Игорь С.', 187],
                ['Оператор Анна В.', 241],
              ].map(([name, count]) => (
                <div key={name} className="flex items-center justify-between rounded-md bg-white px-3 py-2 ring-1 ring-ink-900/5">
                  <span className="text-ink-900/70">{name}</span>
                  <span className="font-semibold text-ink-900/80">{count} брони</span>
                </div>
              ))}
            </div>
          </BrowserMockup>
        </div>
      </div>

      <div className="border-t border-ink-900/10 pt-16">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          <FeatureCard icon={ShieldCheck} title="Меньше поверхности риска">
            Менеджеру не нужен доступ во внутреннюю CRM, чтобы видеть деньги
            — значит, и рисковать нечем: операционные экраны и бронирования
            для него не открыты вовсе.
          </FeatureCard>
          <FeatureCard icon={Calendar} title="От месяца к конкретному рейсу" tone="sun">
            Сводка — не тупик: из отчёта за месяц видно каждый день, из дня —
            каждый рейс и его полный список пассажиров.
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}
