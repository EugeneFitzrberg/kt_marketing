import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import AnchorLink from '../../components/AnchorLink.jsx';

const CARDS = [
  {
    to: '/passenger-site/booking',
    num: '01',
    title: 'Бронирование',
    desc: 'Поиск рейса, выбор мест, оплата онлайн или водителю, электронный билет — под вашим брендом.',
  },
  {
    to: '/passenger-site/driver-cabinet',
    num: '02',
    title: 'Кабинет водителя',
    desc: 'Тот же сайт, но для водителя: рейсы по датам, пассажиры, отметка явки — без Telegram, если удобнее.',
  },
  {
    to: '/passenger-site/manager-cabinet',
    num: '03',
    title: 'Кабинет менеджера',
    desc: 'Выручка и заполняемость по каждому маршруту — без доступа к операционным экранам CRM.',
  },
  {
    to: '/passenger-site/platform',
    num: '04',
    title: 'Архитектура, бренд и запуск',
    desc: 'Сетевая изоляция от CRM, ваш логотип и домен, PWA, SEO и юридические страницы из коробки.',
  },
];

export default function PassengerOverview() {
  return (
    <div className="space-y-12">
      <p className="max-w-2xl text-[15px] leading-relaxed text-ink-900/60">
        Один сайт — три роли входа: пассажир бронирует, водитель работает с
        рейсами, менеджер смотрит выручку. Все три — на том же домене, под
        вашим брендом. Выберите раздел слева или начните по порядку.
      </p>

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {CARDS.map((c) => (
          <Link key={c.to} to={c.to} className="group block border-t border-ink-900/10 pt-5">
            <span className="font-serif text-3xl text-ink-900/20">{c.num}</span>
            <h3 className="mt-3 text-base font-bold text-ink-900">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-900/55">{c.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sun-600">
              Подробнее
              <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="rounded-3xl bg-sun-500 px-8 py-12 text-center sm:px-12">
        <h2 className="font-serif text-2xl font-normal text-white sm:text-3xl">
          Обсудим, как будет выглядеть сайт для вашего бренда
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/90">
          Пришлите свой логотип и пару маршрутов — предложим макет и
          покажем, что будет видеть пассажир, водитель и менеджер.
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
  );
}
