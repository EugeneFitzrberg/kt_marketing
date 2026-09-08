import {
  ShieldCheck,
  CheckCircle2,
  Filter,
  Cookie,
  KeyRound,
  ScrollText,
  RefreshCw,
  Smartphone,
  Search,
} from 'lucide-react';
import SectionHeading from '../../components/SectionHeading.jsx';
import BrowserMockup from '../../components/BrowserMockup.jsx';

export default function PassengerPlatform() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeading
          eyebrow="Как это работает"
          title="Ваш бренд снаружи, надёжный шлюз внутри"
          description="Сайт не хранит данные пассажиров и не дублирует бизнес-логику — он проксирует запросы к вашей CRM через защищённый шлюз с белым списком разрешённых маршрутов. Пассажирский сайт не может обратиться ни к чему, что не было явно разрешено."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ul className="space-y-3 text-sm text-ink-900/70">
            {[
              [Filter, 'Белый список маршрутов: шлюз явно перечисляет, что вообще может запросить сайт — остальное отклоняется, не долетев до CRM'],
              [Cookie, 'Через шлюз передаётся только сессионная cookie — остальные куки и заголовки обрезаются'],
              [KeyRound, 'Webhook-и платёжной системы принимаются только с её официальных IP-адресов'],
              [ScrollText, 'Каждый вызов через шлюз журналируется отдельно от логов CRM'],
              [RefreshCw, 'Тот же движок мест и рейсов, что и в CRM — расхождений в остатках не бывает'],
            ].map(([Icon, item]) => (
              <li key={item} className="flex gap-3">
                <Icon size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-sun-600" />
                {item}
              </li>
            ))}
          </ul>
          <BrowserMockup>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-sun-600" />
              <span className="text-xs font-semibold text-ink-900/60">Схема запроса</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3 py-2">
              <div className="rounded-xl border border-ink-900/10 bg-ink-50/60 px-4 py-3 text-center text-xs font-semibold text-ink-900/70">
                Ваш сайт
              </div>
              <div className="h-px w-8 bg-ink-900/20" />
              <div className="rounded-xl border border-sun-500/30 bg-sun-400/10 px-4 py-3 text-center text-xs font-semibold text-sun-700">
                Шлюз
                <div className="text-[10px] font-normal text-ink-900/40">whitelist</div>
              </div>
              <div className="h-px w-8 bg-ink-900/20" />
              <div className="rounded-xl border border-ink-900/10 bg-ink-50/60 px-4 py-3 text-center text-xs font-semibold text-ink-900/70">
                Ваша CRM
              </div>
            </div>
            <div className="mt-4 space-y-2 text-xs text-ink-900/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-green-500" /> Поиск и бронирование рейса — разрешено
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-green-500" /> Получение своего электронного билета — разрешено
              </div>
              <div className="flex items-center gap-2 opacity-40">
                <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full border border-ink-900/30 text-[9px]">
                  ×
                </span>
                всё остальное — отклонено на шлюзе
              </div>
            </div>
          </BrowserMockup>
        </div>
      </div>

      <div className="border-t border-ink-900/10 pt-16">
        <SectionHeading
          eyebrow="Ваш бренд"
          title="Логотип, цвета, домен и оформление — под вашу компанию"
          description="Каждый сайт бронирования собирается заново под конкретного заказчика: свой фирменный стиль, свои фотографии направлений, свой домен. Пассажир никогда не видит чужой бренд."
        />
        <div className="mt-8">
          <BrowserMockup className="max-w-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-sun-500" />
                <span className="text-xs font-semibold text-ink-900/60">Ваш логотип</span>
              </div>
              <div className="h-7 w-16 rounded-lg bg-ink-900/10" />
            </div>
            <div className="mt-5 h-24 w-full rounded-xl bg-gradient-to-br from-sun-400/30 via-brand-400/20 to-ink-900/10" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-6 rounded-md bg-ink-900/5" />
              <div className="h-6 rounded-md bg-ink-900/5" />
              <div className="h-6 rounded-md bg-sun-500" />
            </div>
          </BrowserMockup>
        </div>
      </div>

      <div className="rounded-2xl bg-ink-950 p-6 sm:p-10">
        <SectionHeading
          eyebrow="Готово к запуску"
          title="То, что обычно забывают на старте — уже внутри"
          tone="dark"
        />
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sun-400/40">
              <Smartphone size={17} strokeWidth={1.75} className="text-sun-400" />
            </span>
            <h3 className="mt-4 text-base font-bold text-white">PWA и push</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Ставится на телефон как приложение, шлёт напоминания без App
              Store и Google Play.
            </p>
          </div>
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/40">
              <Search size={17} strokeWidth={1.75} className="text-brand-300" />
            </span>
            <h3 className="mt-4 text-base font-bold text-white">SEO из коробки</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Карта сайта, мета-описания и структурированный контент — сайт
              индексируется с первого дня.
            </p>
          </div>
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sun-400/40">
              <ShieldCheck size={17} strokeWidth={1.75} className="text-sun-400" />
            </span>
            <h3 className="mt-4 text-base font-bold text-white">Юридическая база</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Готовые страницы политики конфиденциальности и cookie — не
              нужно писать с нуля.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
