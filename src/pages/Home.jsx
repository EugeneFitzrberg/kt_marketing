import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Bus,
  Globe2,
  ShieldCheck,
  Radio,
  BarChart3,
  Users,
  Bell,
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
      <section className="relative overflow-hidden bg-ink-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(600px circle at 15% 20%, rgba(52,102,255,0.35), transparent 60%), radial-gradient(500px circle at 85% 10%, rgba(247,154,30,0.18), transparent 55%)',
          }}
        />
        <div className="container-page relative grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <span className="section-eyebrow !border-white/15 !bg-white/5 !text-brand-300">
              Софт для автотранспортных и туристических компаний
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              CRM для вашей команды и брендированный сайт для ваших пассажиров —
              на одной цифровой платформе
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
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

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Link
              to="/crm"
              className="card group flex flex-col justify-between transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Bus size={20} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">
                  Внутренняя CRM — для вашего персонала
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/60">
                  Маршруты, рейсы, тарифы, парк, водители, кассиры, чёрный список,
                  экскурсии, статистика и уведомления в 4 каналах — всё в одной
                  админке с ролями и правами доступа.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Подробнее о CRM
                <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              to="/passenger-site"
              className="card group flex flex-col justify-between transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sun-400/15 text-sun-600">
                  <Globe2 size={20} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">
                  Брендированный сайт — для ваших пассажиров
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/60">
                  Поиск и бронирование рейсов, трансферов и групповых туров, оплата
                  онлайн, электронный билет, личный кабинет и push-уведомления — под
                  вашим логотипом и доменом.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sun-600">
                Подробнее о сайте
                <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5" />
              </span>
            </Link>
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
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              Каждый пуш в основную ветку собирает и прогоняет автотесты, прежде
              чем что-либо попадёт на прод.
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
          <div className="grid gap-10 rounded-3xl border border-ink-900/5 bg-white p-8 shadow-card lg:grid-cols-2 lg:p-12">
            <div className="flex flex-col justify-center">
              <span className="section-eyebrow">Реальный пример</span>
              <h2 className="mt-4 text-2xl font-bold text-ink-900 sm:text-3xl">
                «КТ Пассажиры» — сайт бронирования, построенный по этому принципу
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-900/60">
                Для одного из перевозчиков мы уже собрали именно такой сайт: свой
                домен, свой логотип, оплата онлайн и личный кабинет — поверх той
                же CRM. Мы возьмём эту же концепцию и адаптируем под ваш бренд и
                ваши маршруты.
              </p>
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
