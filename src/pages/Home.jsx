import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Bus,
  Globe2,
  ShieldCheck,
  Radio,
  BarChart3,
  Lock,
  KeyRound,
  Eye,
  ScrollText,
  Network,
  Smartphone,
  GitBranch,
  Activity,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import BrowserMockup from '../components/BrowserMockup.jsx';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-white/10 bg-ink-950">
        <div className="container-page grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <span className="section-eyebrow !text-brand-300">
              Софт для автотранспортных и туристических компаний
            </span>
            <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              CRM для вашей команды и брендированный сайт для ваших пассажиров —
              на одной платформе
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
              Мы разрабатываем систему управления рейсами, кассой и персоналом
              и достраиваем поверх неё брендированный сайт бронирования — с
              вашим логотипом, вашим доменом и вашими особенностями, под ключ.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/crm" className="btn-primary">
                <Bus size={17} />
                Смотреть CRM
              </Link>
              <Link to="/passenger-site" className="btn-secondary !bg-white/5 !text-white !border-white/15 hover:!bg-white/10">
                <Globe2 size={17} />
                Сайт для пассажиров
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium text-white/40">
              <span>Docker Swarm · zero-downtime деплой</span>
              <span>Grafana / Prometheus мониторинг</span>
              <span>4 канала уведомлений пассажиров</span>
            </div>
          </div>

          <div className="lg:pl-4">
            <BrowserMockup>
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded-full bg-ink-900/10" />
                <div className="h-6 w-20 rounded-lg bg-brand-600/90" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ['Перевезено', '4 812'],
                  ['Рейсов сегодня', '37'],
                  ['Свободных мест', '128'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-ink-900/5 bg-ink-50/60 p-3">
                    <div className="text-[10px] font-medium uppercase tracking-wide text-ink-900/40">
                      {label}
                    </div>
                    <div className="mt-1 text-lg font-bold text-ink-900">{value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2.5">
                {[
                  ['Сочи → Красная Поляна', 92],
                  ['Адлер → Роза Хутор', 78],
                  ['Сочи → Абхазия (граница)', 61],
                  ['Трансфер: Аэропорт', 45],
                ].map(([label, pct]) => (
                  <div key={label}>
                    <div className="flex items-center justify-between text-xs text-ink-900/60">
                      <span>{label}</span>
                      <span className="font-semibold text-ink-900/80">{pct}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-ink-900/5">
                      <div
                        className="h-1.5 rounded-full bg-brand-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </BrowserMockup>
          </div>
        </div>
      </section>

      {/* ONE BACKEND, TWO PRODUCTS */}
      <section className="border-b border-ink-900/5 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Как это устроено"
            title="Одна система, два продукта"
            description="Единый бэкенд ведёт маршруты, рейсы, места и пассажиров. Ваша команда управляет им через CRM, а пассажиры бронируют билеты на отдельном сайте — под вашим брендом, но с теми же данными в реальном времени."
          />

          <div className="mt-14 grid gap-10 border-t border-ink-900/10 pt-10 sm:grid-cols-2 sm:divide-x sm:divide-ink-900/10">
            <Link to="/crm" className="group flex flex-col sm:pr-10">
              <span className="font-serif text-4xl text-ink-900/20">01</span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                Внутренняя CRM — для вашего персонала
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/60">
                Маршруты, рейсы, тарифы, парк, водители, кассиры, чёрный список,
                экскурсии, статистика и уведомления в 4 каналах — всё в одной
                админке с ролями и правами доступа.
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Подробнее о CRM
                <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link to="/passenger-site" className="group flex flex-col sm:pl-10">
              <span className="font-serif text-4xl text-ink-900/20">02</span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                Брендированный сайт — для ваших пассажиров
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/60">
                Поиск и бронирование рейсов, трансферов и групповых туров, оплата
                онлайн, электронный билет, личный кабинет и push-уведомления — под
                вашим логотипом и доменом.
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sun-600">
                Подробнее о сайте
                <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE & NETWORK ISOLATION */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Архитектура и безопасность"
            title="Общий бэкенд — но не общий периметр"
            description="CRM и сайт для пассажиров работают с одними и теми же данными, но у сайта нет прямого доступа к внутренним сервисам CRM, а у CRM нет ни одного порта, смотрящего в интернет напрямую. Изоляция — не на словах, а на уровне сети."
            align="center"
            tone="dark"
          />

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                Интернет
              </div>
              <div className="h-6 w-px bg-white/15" />
              <div className="rounded-lg border border-brand-400/40 bg-brand-500/10 px-4 py-2.5 text-xs font-semibold text-brand-300">
                TLS-шлюз — единственная точка входа
              </div>
              <div className="h-6 w-px bg-white/15" />
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-8">
                <div className="flex-1 rounded-lg border border-sun-400/30 bg-sun-400/10 px-4 py-2.5 text-center text-xs font-semibold text-sun-300">
                  Сайт для пассажиров
                  <div className="mt-0.5 text-[10px] font-normal text-white/40">только whitelist-запросы</div>
                </div>
                <div className="flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-center text-xs font-semibold text-white/80">
                  CRM для персонала
                  <div className="mt-0.5 text-[10px] font-normal text-white/40">вход по коду, роли и права</div>
                </div>
              </div>
              <div className="h-6 w-px bg-white/15" />
              <div className="w-full rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="mb-2.5 text-center text-[10px] font-semibold uppercase tracking-wider text-white/30">
                  Внутренняя сеть — снаружи не видна
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {['API', 'WebSocket', 'База данных', 'Планировщик', 'Telegram-бот', 'Grafana / Prometheus'].map(
                    (n) => (
                      <span
                        key={n}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/60"
                      >
                        {n}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                ShieldCheck,
                'Единственная точка входа',
                'В интернет смотрит только TLS-шлюз. База данных, API, очереди и внутренние сервисы никогда не получают публичный адрес и обращаются друг к другу только по внутренней сети.',
              ],
              [
                Lock,
                'Белый список для сайта пассажиров',
                'Публичный сайт обращается к CRM не напрямую, а через шлюз с заранее одобренным списком запросов — всё, чего нет в списке, отклоняется, даже не долетев до CRM.',
              ],
              [
                KeyRound,
                'Проверка источника платежей',
                'Уведомления от платёжной системы принимаются только с её официальных адресов — запрос с произвольного источника получает отказ.',
              ],
              [
                Eye,
                'Мониторинг закрыт от интернета',
                'Дашборды с бизнес-метриками и логами доступны только из VPN — снаружи их не существует ни в каком виде.',
              ],
              [
                ScrollText,
                'Аудит обращений между сайтами',
                'Каждый вызов от сайта пассажиров к CRM протоколируется отдельно от логов самой CRM — виден полный след, кто и когда обращался.',
              ],
              [
                Network,
                'Разные сети для разных продуктов',
                'Сайт для пассажиров и внутренняя CRM — разные приложения в разных сетевых сегментах: инцидент на одном не даёт прямого доступа к другому.',
              ],
            ].map(([Icon, title, desc]) => (
              <div key={title} className="border-t border-white/15 pt-5">
                <Icon size={18} strokeWidth={1.75} className="text-brand-300" />
                <h3 className="mt-3.5 text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US / RELIABILITY */}
      <section className="bg-ink-50/40 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Почему это надёжно"
            title="Построено как промышленная система, а не как студенческий проект"
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={GitBranch} title="Обновления без простоя">
              Docker Swarm поднимает новую версию, ждёт health-check и только потом
              выключает старую — пассажиры не замечают релизов.
            </FeatureCard>
            <FeatureCard icon={Activity} title="Мониторинг из коробки">
              Дашборды Grafana по бизнес-метрикам, нагрузке, маршрутам и базе
              данных, алерты в Telegram при сбоях.
            </FeatureCard>
            <FeatureCard icon={Radio} title="4 канала связи с пассажиром" tone="sun">
              Telegram, SMS, WhatsApp и push-уведомления — напоминания о рейсе
              доходят тем способом, которым реально пользуется человек.
            </FeatureCard>
            <FeatureCard icon={ShieldCheck} title="Роли и права доступа">
              Администратор, оператор с гибкими правами, водитель, менеджер,
              пассажир — у каждого свой экран и свои возможности.
            </FeatureCard>
            <FeatureCard icon={BarChart3} title="Автотесты и CI/CD" tone="sun">
              Каждый пуш в основную ветку собирает образы и прогоняет автотесты;
              сама выкладка на прод — отдельный шаг с ревью и автоматическим
              откатом, если после неё не проходит проверка здоровья сервиса.
            </FeatureCard>
            <FeatureCard icon={Smartphone} title="PWA для пассажиров">
              Сайт бронирования ставится на телефон как приложение и умеет слать
              push-уведомления без App Store и Google Play.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* CASE STUDY TEASER */}
      <section id="case-study" className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 border-t border-ink-900/10 pt-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <span className="section-eyebrow">Уже в работе</span>
              <h2 className="mt-4 font-serif text-2xl font-normal text-ink-900 sm:text-3xl">
                Нашим ПО пользуются перевозчики Урала
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-900/60">
                Сайты бронирования на этой платформе уже возят реальных
                пассажиров по популярным направлениям Южного и Среднего
                Урала. Мы возьмём ту же архитектуру и адаптируем под ваш
                бренд и ваши маршруты.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Магнитогорск', 'Челябинск', 'Уфа', 'Екатеринбург', 'Банное', 'Абзаково', 'Белорецк'].map(
                  (city) => (
                    <span
                      key={city}
                      className="rounded-full border border-ink-900/10 bg-ink-50/60 px-3 py-1 text-xs font-medium text-ink-900/60"
                    >
                      {city}
                    </span>
                  ),
                )}
              </div>
              <Link to="/passenger-site" className="btn-primary mt-6 w-fit">
                Как это будет выглядеть для вас
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <BrowserMockup className="w-full max-w-sm">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-brand-600" />
                  <div className="h-3 w-28 rounded-full bg-ink-900/10" />
                </div>
                <div className="mt-5 rounded-xl border border-ink-900/5 bg-ink-50/60 p-4">
                  <div className="h-2.5 w-20 rounded-full bg-ink-900/10" />
                  <div className="mt-3 flex gap-2">
                    <div className="h-9 flex-1 rounded-lg bg-white ring-1 ring-ink-900/10" />
                    <div className="h-9 flex-1 rounded-lg bg-white ring-1 ring-ink-900/10" />
                  </div>
                  <div className="mt-3 h-9 w-full rounded-lg bg-sun-500" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full rounded-full bg-ink-900/5" />
                  <div className="h-2 w-4/5 rounded-full bg-ink-900/5" />
                </div>
              </BrowserMockup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
