import {
  Bus,
  Route,
  Timer,
  Users,
  ShieldCheck,
  ScrollText,
  Ban,
  MapPinned,
  Send,
  MessageCircle,
  Phone,
  Wallet,
  Radio,
  BarChart3,
  GitBranch,
  Activity,
  Eye,
  ArrowUpRight,
  KeyRound,
  CalendarClock,
  TrendingUp,
  ListChecks,
  Map,
  ArrowRightLeft,
  Bot,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import BrowserMockup from '../components/BrowserMockup.jsx';
import LiveBlacklistCheck from '../components/demo/LiveBlacklistCheck.jsx';
import LiveAccessMatrix from '../components/demo/LiveAccessMatrix.jsx';
import AnchorLink from '../components/AnchorLink.jsx';

export default function Crm() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink-950">
        <div className="container-page py-16 sm:py-20">
          <span className="section-eyebrow !border-white/15 !bg-white/5 !text-brand-300">
            CRM для перевозчика
          </span>
          <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Единая система для рейсов, кассы, водителей и пассажиров
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60">
            Всё, чем управляет транспортная или туристическая компания —
            маршруты, тарифы, посадка, экскурсии и персонал — в одной
            веб-панели с ролями, аудитом действий и уведомлениями в реальном
            времени.
          </p>
          <div className="mt-8">
            <AnchorLink to="contacts" className="btn-primary">
              Запросить демо CRM
              <ArrowUpRight size={16} />
            </AnchorLink>
          </div>
        </div>
      </section>

      {/* ROUTES & TRIPS */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Маршрутная сеть"
                title="Маршруты, рейсы и посадка — под полным контролем"
                description="Конструктор маршрута с участками («плечами»), тарифами и точками посадки, интерактивная карта с реальной прокладкой дороги и календарь расписания — вместо таблиц в Excel и звонков водителям."
              />
              <ul className="mt-6 space-y-3 text-sm text-ink-900/70">
                {[
                  'Календарь расписания (FullCalendar): регулярные рейсы по дням недели, вставные рейсы под пиковый спрос, цвет события = назначен ли транспорт, заполняемость видна сразу',
                  'Интерактивная карта маршрута с прокладкой реального пути между точками — не прямые линии, а настоящая дорога',
                  'Отложенное изменение цены: новый тариф на участок маршрута можно запланировать на дату в будущем — сработает само, без ручного переключения в нужный день',
                  'Массовое копирование расписания одного дня на диапазон дат — с проверкой, что вперёд не заходит дальше разрешённого горизонта бронирования',
                  'Индикатор «сейчас» в календаре считается по часовому поясу города отправления, а не браузера — расписание не «плывёт» для сотрудников в другом регионе',
                  'Паспорт каждого борта — класс комфорта, кондиционер, Wi-Fi, откидные кресла, статус техосмотра — оператор назначает подходящий транспорт на рейс в два клика',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <BrowserMockup>
              <div className="flex items-center gap-2">
                <CalendarClock size={16} className="text-brand-600" />
                <div className="h-2.5 w-32 rounded-full bg-ink-900/10" />
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
      </section>

      {/* ONLINE REQUESTS / TEAMWORK */}
      <section className="bg-ink-50/40 py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <BrowserMockup className="order-2 lg:order-1">
              <div className="flex items-center gap-2">
                <ListChecks size={16} className="text-brand-600" />
                <div className="h-2.5 w-36 rounded-full bg-ink-900/10" />
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

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Совместная работа"
                title="Онлайн-заявки без накладок между операторами"
                description="Заявки с публичного сайта попадают в общую очередь и автоматически подсвечиваются, если заявитель в чёрном списке или уже бронировал этот маршрут в ближайшие дни. Как только один оператор принял или отклонил заявку, она мгновенно исчезает у всех остальных — по WebSocket, без обновления страницы."
              />
              <ul className="mt-6 space-y-3 text-sm text-ink-900/70">
                {[
                  'Лист ожидания: если рейс заполнен, пассажира можно поставить в очередь и посадить, если появится место',
                  'Пересадка пассажира на другой рейс того же маршрута в два клика, с видимым числом свободных мест',
                  'Проверка номера в чёрном списке за секунду — даже у операторов без доступа к полному списку',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STAFF & ROLES */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Команда"
            title="Персонал, роли и права доступа"
            description="Каждый сотрудник видит только то, что ему нужно — и каждое действие остаётся в журнале."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Users} title="Гибкая матрица прав оператора">
              Транспорт, водители, расписание, пассажиры, чёрный список,
              экскурсии — каждый пункт включается независимо и проверяется
              на сервере, а не только скрывается в интерфейсе.
            </FeatureCard>
            <FeatureCard icon={Bot} title="Водители работают в Telegram" tone="sun">
              Драйверу не нужно ничего устанавливать: список рейсов, состав
              пассажиров и отметка о посадке — прямо в Telegram-боте компании.
            </FeatureCard>
            <FeatureCard icon={ScrollText} title="Журнал действий персонала">
              Каждое действие каждого сотрудника — с телом запроса и ответа,
              IP-адресом и статусом. Полная история для разбора спорных
              ситуаций.
            </FeatureCard>
            <FeatureCard icon={Eye} title="Режим просмотра «глазами оператора»">
              Администратор может открыть интерфейс так, как его видит
              оператор — удобно для поддержки и разбора обращений.
            </FeatureCard>
            <FeatureCard icon={Ban} title="Чёрный список в двух режимах">
              Полный доступ — для доверенных сотрудников; для остальных —
              только быстрая проверка «есть/нет» по номеру, без просмотра
              всего списка.
            </FeatureCard>
            <FeatureCard icon={ShieldCheck} title="Сессионная авторизация">
              Вход по телефону и коду подтверждения — без паролей, которые можно
              забыть или передать третьим лицам. При увольнении сотрудника
              достаточно деактивировать аккаунт — доступ пропадает мгновенно, на
              следующем же запросе.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* LIVE DEMO: REAL CRM FORMS */}
      <section className="bg-ink-50/40 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Попробуйте сами"
            title="Не картинки — работающие формы из нашей CRM"
            description="Ниже два виджета с реальной логикой, портированной из production-кода: та же матрица прав, что видит администратор при настройке оператора, и та же проверка номера, что видит оператор без доступа к полному чёрному списку."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-center text-sm font-semibold text-ink-900/50">
                Матрица прав оператора
              </div>
              <LiveAccessMatrix />
            </div>
            <div>
              <div className="mb-3 text-center text-sm font-semibold text-ink-900/50">
                Проверка номера в чёрном списке
              </div>
              <LiveBlacklistCheck />
            </div>
          </div>
        </div>
      </section>

      {/* EXCURSIONS + PASSENGER RECORD */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Продажи"
            title="Пассажиры, экскурсии и дополнительные услуги"
            description="Оформление на кассе, ведение клиентской базы и допродажа экскурсий — из одного окна оператора."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Bus} title="Быстрое оформление на кассе">
              Запись пассажира на рейс с удержанием места на время оформления
              и обратным отсчётом, чтобы место не «зависало» впустую.
            </FeatureCard>
            <FeatureCard icon={MapPinned} title="Каталог экскурсий с фотогалереей" tone="sun">
              Программа, длительность, что включено в цену и максимальный
              размер группы — плюс фотогалерея для каждой экскурсии.
            </FeatureCard>
            <FeatureCard icon={Users} title="Приём заявок от корпоративных клиентов">
              Отдельная очередь B2B-заявок на экскурсии (компания, контакт,
              дата, комментарий) с мгновенным появлением на экранах у всех
              сотрудников.
            </FeatureCard>
            <FeatureCard icon={ArrowRightLeft} title="Пересадка и отмена в пару кликов">
              Перенос пассажира на другой рейс или дату, отмена одного места
              или всей брони — с автоматическим уведомлением пассажира.
            </FeatureCard>
            <FeatureCard icon={MessageCircle} title="История сообщений пассажиру">
              Видно, какие уведомления и когда ушли конкретному пассажиру —
              удобно при разборе жалоб на «не пришло сообщение».
            </FeatureCard>
            <FeatureCard icon={Map} title="Карта остановок и посадочных точек" tone="sun">
              Точки посадки/высадки закреплены на карте по каждому городу —
              кассир видит, где именно пассажир сядет в автобус.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* NOTIFICATIONS */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Коммуникация с пассажиром"
            title="Уведомления с автоматическим резервным каналом"
            description="У каждого пассажира есть предпочитаемый канал связи. Система сначала пробует его, а при неудаче автоматически пробует следующий канал по цепочке — и только в последнюю очередь падает на гарантированную SMS. Каждая попытка, успешная или нет, остаётся в журнале."
            align="center"
            tone="dark"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Send, 'Telegram-бот', 'Авторизация и напоминания через telegram-бота компании'],
              [Bot, 'Max / Green API', 'Проверка, что номер вообще есть в мессенджере, и отправка через него'],
              [MessageCircle, 'WhatsApp', 'Уведомления в мессенджере, которым пользуется большинство пассажиров'],
              [Phone, 'SMS (SMSAero)', 'Гарантированный последний канал — дойдёт даже без интернета у пассажира'],
            ].map(([Icon, title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-sm font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/50">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 flex max-w-4xl items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sun-400/20 text-sun-400">
              <Wallet size={18} />
            </div>
            <p className="text-xs leading-relaxed text-white/60">
              <span className="font-semibold text-white">Контроль баланса SMS</span> —
              индикатор остатка средств на SMS-рассылку прямо в шапке админки, с
              предупреждением задолго до нуля, чтобы напоминания не остановились
              незаметно.
            </p>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <BrowserMockup className="order-2 lg:order-1">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-brand-600" />
                <div className="h-2.5 w-32 rounded-full bg-ink-900/10" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-ink-900/5 bg-ink-50/60 p-3">
                  <div className="text-[10px] font-medium uppercase tracking-wide text-ink-900/40">
                    Выручка за месяц
                  </div>
                  <div className="mt-1 text-xl font-bold text-ink-900">2 340 500 ₽</div>
                </div>
                <div className="rounded-xl border border-ink-900/5 bg-ink-50/60 p-3">
                  <div className="text-[10px] font-medium uppercase tracking-wide text-ink-900/40">
                    Заполняемость
                  </div>
                  <div className="mt-1 text-xl font-bold text-ink-900">78%</div>
                </div>
              </div>
              <div className="mt-4 space-y-2.5">
                {[
                  ['Сочи → Красная Поляна', 100],
                  ['Адлер → Роза Хутор', 84],
                  ['Сочи → Абхазия', 57],
                ].map(([label, pct]) => (
                  <div key={label}>
                    <div className="flex items-center justify-between text-xs text-ink-900/60">
                      <span>{label}</span>
                      <span className="font-semibold text-ink-900/80">{pct}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-ink-900/5">
                      <div className="h-1.5 rounded-full bg-brand-500" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </BrowserMockup>

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Аналитика"
                title="От общих цифр до выручки по каждому маршруту"
                description="Общий дашборд показывает, сколько пассажиров перевезено всего и сколько из них уникальные. Отдельный отчёт для руководителей — за месяц или за день: выручка, заполняемость, отмены и пересадки по каждому маршруту, без выгрузок в Excel."
              />
              <AnchorLink to="contacts" className="btn-secondary mt-6 w-fit">
                Спросить, что покажет ваша статистика
              </AnchorLink>
            </div>
          </div>
        </div>
      </section>

      {/* RELIABILITY / OPS */}
      <section className="bg-ink-50/40 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Эксплуатация"
            title="Работает как промышленная система"
            description="Это не студенческий проект: система развёрнута с оглядкой на прод-эксплуатацию, мониторинг и безопасные обновления."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={GitBranch} title="Обновления без простоя">
              Двухфазный деплой: сперва обновляется бэкенд с гарантией
              совместимости со старым фронтендом, затем — фронтенд. Пассажиры
              не видят техокна.
            </FeatureCard>
            <FeatureCard icon={Activity} title="7 дашбордов Grafana" tone="sun">
              Бизнес-метрики, маршруты, HTTP, Node.js, MongoDB, здоровье
              сервисов и ресурсы контейнеров — разворачиваются автоматически
              вместе с системой.
            </FeatureCard>
            <FeatureCard icon={ShieldCheck} title="Алерты в Telegram">
              Рост ошибок, падение баланса SMS ниже порога, недоступность
              бэкенда или базы, «замолчавший» планировщик — оповещение
              приходит раньше, чем заметят пассажиры.
            </FeatureCard>
            <FeatureCard icon={BarChart3} title="CI/CD и автотесты">
              Каждый пуш в основную ветку собирает три образа (бэкенд,
              фронтенд, бот) и прогоняет API- и e2e-автотесты на Java/Selenium.
              Сама выкладка на прод — отдельный шаг с ревью человека и
              автоматической проверкой здоровья сервиса после деплоя.
            </FeatureCard>
            <FeatureCard icon={Radio} title="Живые метрики в реальном времени" tone="sun">
              Число активных WebSocket-подключений, последний успешный запуск
              планировщика, скорость рассылок — видно прямо на дашборде.
            </FeatureCard>
            <FeatureCard icon={ShieldCheck} title="Доступ только по VPN">
              Наружу смотрит только веб-шлюз по TLS: база данных, API и
              мониторинг живут во внутренней сети и обращаются друг к другу по
              имени сервиса. Grafana — только из VPN, Prometheus не выставлен
              наружу вовсе.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="rounded-3xl bg-brand-600 px-8 py-12 text-center sm:px-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Покажем CRM на демо-стенде с вашими маршрутами
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] text-brand-50/90">
              Настроим тестовый стенд, перенесём пару ваших реальных
              маршрутов и покажем, как выглядит работа кассира, оператора и
              водителя.
            </p>
            <AnchorLink
              to="contacts"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-soft transition hover:bg-brand-50"
            >
              Запросить демо
              <ArrowUpRight size={16} />
            </AnchorLink>
          </div>
        </div>
      </section>
    </>
  );
}
