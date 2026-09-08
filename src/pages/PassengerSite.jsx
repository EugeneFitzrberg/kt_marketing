import {
  Palette,
  Globe,
  ShieldCheck,
  CreditCard,
  FileText,
  MapPinned,
  UserCircle,
  Smartphone,
  Search,
  Bus,
  Car,
  Users,
  ArrowUpRight,
  CheckCircle2,
  Filter,
  Cookie,
  KeyRound,
  ScrollText,
  RefreshCw,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import BrowserMockup from '../components/BrowserMockup.jsx';
import LiveSearchForm from '../components/demo/LiveSearchForm.jsx';
import AnchorLink from '../components/AnchorLink.jsx';

export default function PassengerSite() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink-950">
        <div className="container-page py-16 sm:py-20">
          <span className="section-eyebrow !text-sun-400">
            Сайт для ваших пассажиров
          </span>
          <h1 className="mt-6 max-w-2xl font-serif text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Брендированный сайт бронирования — с вашим логотипом, вашим
            доменом и вашими маршрутами
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60">
            Пассажиры ищут рейс, выбирают место, оплачивают онлайн и получают
            электронный билет — на сайте, который выглядит как часть вашего
            бренда, а не как чужой сервис бронирования.
          </p>
          <div className="mt-8">
            <AnchorLink to="contacts" className="btn-primary !bg-sun-500 hover:!bg-sun-600">
              Хотим такой сайт
              <ArrowUpRight size={16} />
            </AnchorLink>
          </div>
        </div>
      </section>

      {/* LIVE DEMO: SEARCH FORM */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Попробуйте сами"
            title="Форма поиска рейса — с реальной логикой"
            description="Ниже не картинка, а работающий виджет: фильтрация городов по вводу, запрет прошедших дат, счётчик мест с минимумом в одно место и валидация — портированы из production-кода нашего действующего сайта бронирования."
            align="center"
          />
          <div className="mx-auto mt-10 max-w-2xl">
            <LiveSearchForm />
          </div>
        </div>
      </section>

      {/* CONCEPT: ONE BACKEND, YOUR BRAND */}
      <section className="bg-ink-50/40 py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Как это работает"
                title="Ваш бренд снаружи, надёжный шлюз внутри"
                description="Сайт не хранит данные пассажиров и не дублирует бизнес-логику — он проксирует запросы к вашей CRM через защищённый шлюз с белым списком разрешённых маршрутов. Так пассажирский сайт не может обратиться ни к чему, что не было явно разрешено."
              />
              <ul className="mt-6 space-y-3 text-sm text-ink-900/70">
                {[
                  [Filter, 'Белый список маршрутов: шлюз явно перечисляет, что вообще может запросить сайт бронирования — всё остальное отклоняется, не долетев до CRM'],
                  [Cookie, 'Через шлюз в обе стороны передаётся только сессионная cookie — остальные куки и заголовки обрезаются, а исходящая cookie всегда переподписывается как защищённая'],
                  [KeyRound, 'Webhook-и платёжной системы принимаются только с её официальных IP-адресов — запрос с произвольного источника получает отказ'],
                  [ScrollText, 'Каждый вызов через шлюз журналируется отдельно от логов CRM — виден полный след обращений с публичного сайта'],
                  [RefreshCw, 'Тот же движок мест и рейсов, что и в CRM — расхождений в остатках не бывает'],
                ].map(([Icon, item]) => (
                  <li key={item} className="flex gap-3">
                    <Icon size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-sun-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
      </section>

      {/* BOOKING FLOWS */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Бронирование"
            title="Полный цикл — от поиска рейса до билета на руках"
            description="Пошаговый визард бронирования: поиск → выбор мест → данные пассажиров → подтверждение — адаптированный под три формата поездок."
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            <FeatureCard icon={Bus} title="Рейсы по расписанию">
              Поиск по направлению, дате и числу мест, выбор конкретного
              рейса и посадочных мест — с онлайн-бронированием и оплатой.
            </FeatureCard>
            <FeatureCard icon={Car} title="Трансферы" tone="sun">
              Для высокого чека вроде трансфера можно оставить быстрое
              онлайн-бронирование, а можно — заявку с обратным звонком менеджера:
              выбираем сценарий, который лучше конвертирует именно для вас.
            </FeatureCard>
            <FeatureCard icon={Users} title="Групповые туры">
              Заявка на групповую поездку сразу попадает в ту же очередь,
              что видит оператор в CRM, — без потерянных писем и звонков.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* PAYMENT / TICKET / EXCURSIONS / CABINET */}
      <section className="bg-ink-50/40 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="После бронирования"
            title="Оплата, билет и всё, что нужно пассажиру дальше"
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={CreditCard} title="Оплата онлайн или водителю">
              Приём платежей через ЮKassa прямо на сайте — а где это удобнее
              вашим пассажирам, можно оставить и оплату наличными водителю:
              система поддерживает оба варианта.
            </FeatureCard>
            <FeatureCard icon={FileText} title="Электронный билет" tone="sun">
              PDF-билет с номером бронирования формируется автоматически и
              доступен по ссылке — не потеряется в переписке.
            </FeatureCard>
            <FeatureCard icon={MapPinned} title="Каталог экскурсий">
              Витрина экскурсий с фотографиями и онлайн-бронированием —
              дополнительная продажа без участия оператора.
            </FeatureCard>
            <FeatureCard icon={UserCircle} title="Личный кабинет" tone="sun">
              История поездок, повторное бронирование в один клик и статус
              заявок — пассажиру не нужно писать в поддержку.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* PWA / SEO / BRAND */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Готово к запуску"
            title="То, что обычно забывают на старте — уже внутри"
            align="center"
            tone="dark"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-t border-white/15 pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sun-400/40">
                <Smartphone size={17} strokeWidth={1.75} className="text-sun-400" />
              </span>
              <h3 className="mt-4 text-base font-bold text-white">PWA и push</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Сайт ставится на телефон как приложение и присылает
                напоминания о рейсе без App Store и Google Play.
              </p>
            </div>
            <div className="border-t border-white/15 pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/40">
                <Search size={17} strokeWidth={1.75} className="text-brand-300" />
              </span>
              <h3 className="mt-4 text-base font-bold text-white">SEO из коробки</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Карта сайта, мета-описания страниц и структурированный
                текстовый контент — сайт индексируется с первого дня.
              </p>
            </div>
            <div className="border-t border-white/15 pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sun-400/40">
                <ShieldCheck size={17} strokeWidth={1.75} className="text-sun-400" />
              </span>
              <h3 className="mt-4 text-base font-bold text-white">Юридическая база</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Готовые страницы политики конфиденциальности и
                использования cookie — не нужно писать их с нуля перед запуском.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDING */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <BrowserMockup>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-sun-500" />
                  <span className="text-xs font-semibold text-ink-900/60">Ваш логотип</span>
                </div>
                <div className="h-7 w-16 rounded-lg bg-ink-900/10" />
              </div>
              <div className="mt-5 h-28 w-full rounded-xl bg-gradient-to-br from-sun-400/30 via-brand-400/20 to-ink-900/10" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-6 rounded-md bg-ink-900/5" />
                <div className="h-6 rounded-md bg-ink-900/5" />
                <div className="h-6 rounded-md bg-sun-500" />
              </div>
            </BrowserMockup>

            <div>
              <SectionHeading
                eyebrow="Ваш бренд"
                title="Логотип, цвета, домен и оформление — под вашу компанию"
                description="Каждый сайт бронирования собирается заново под конкретного заказчика: свой фирменный стиль, свои фотографии направлений, свой домен. Пассажир никогда не видит чужой бренд."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="case-study" className="bg-ink-50/40 py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl border border-ink-900/10 bg-white p-8 text-center sm:p-10">
            <span className="section-eyebrow">Уже в работе</span>
            <h2 className="mt-4 font-serif text-xl font-normal text-ink-900 sm:text-2xl">
              Нашим ПО пользуются перевозчики Урала
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ink-900/60">
              По этой концепции уже работают сайты бронирования для
              нескольких перевозчиков Южного и Среднего Урала. Это не
              готовый шаблон «как есть»: для вашей компании мы адаптируем ту
              же архитектуру под ваш фирменный стиль и ваши направления.
            </p>
            <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2">
              {['Магнитогорск', 'Челябинск', 'Уфа', 'Екатеринбург', 'Банное', 'Абзаково', 'Белорецк'].map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-ink-900/10 bg-ink-50/60 px-3 py-1 text-xs font-medium text-ink-900/60"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="rounded-3xl bg-sun-500 px-8 py-12 text-center sm:px-16">
            <h2 className="font-serif text-2xl font-normal text-white sm:text-3xl">
              Обсудим, как будет выглядеть сайт для вашего бренда
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/90">
              Пришлите свой логотип и пару маршрутов — предложим макет и
              покажем, что будет видеть пассажир на телефоне.
            </p>
            <AnchorLink
              to="contacts"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-sun-700 shadow-soft transition hover:bg-sun-50"
            >
              Обсудить сайт
              <ArrowUpRight size={16} />
            </AnchorLink>
          </div>
        </div>
      </section>
    </>
  );
}
