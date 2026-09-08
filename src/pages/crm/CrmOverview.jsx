import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import AnchorLink from '../../components/AnchorLink.jsx';

const CARDS = [
  {
    to: '/crm/fleet',
    num: '01',
    title: 'Маршруты и парк',
    desc: 'Конструктор маршрутов, календарь расписания и тарифы — плюс заведение водителей и машин за минуту.',
  },
  {
    to: '/crm/bookings',
    num: '02',
    title: 'Бронирование и заявки',
    desc: 'Онлайн-заявки в общей очереди, отслеживание явки пассажиров день в день, касса и допродажи.',
  },
  {
    to: '/crm/team',
    num: '03',
    title: 'Команда и коммуникация',
    desc: 'Роли и права доступа, журнал действий персонала, уведомления с автоматическим резервным каналом.',
  },
  {
    to: '/crm/analytics',
    num: '04',
    title: 'Аналитика и надёжность',
    desc: 'Выручка и заполняемость по каждому маршруту, мониторинг и обновления без простоя.',
  },
];

export default function CrmOverview() {
  return (
    <div className="space-y-12">
      <p className="max-w-2xl text-[15px] leading-relaxed text-ink-900/60">
        Маршруты, тарифы, посадка, экскурсии и персонал — в одной веб-панели
        с ролями, аудитом действий и уведомлениями в реальном времени.
        Выберите раздел слева или начните по порядку.
      </p>

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {CARDS.map((c) => (
          <Link key={c.to} to={c.to} className="group block border-t border-ink-900/10 pt-5">
            <span className="font-serif text-3xl text-ink-900/20">{c.num}</span>
            <h3 className="mt-3 text-base font-bold text-ink-900">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-900/55">{c.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
              Подробнее
              <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="rounded-3xl bg-brand-600 px-8 py-12 text-center sm:px-12">
        <h2 className="font-serif text-2xl font-normal text-white sm:text-3xl">
          Покажем CRM на демо-стенде с вашими маршрутами
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] text-brand-50/90">
          Настроим тестовый стенд, перенесём пару ваших реальных маршрутов и
          покажем, как выглядит работа кассира, оператора и водителя.
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
  );
}
