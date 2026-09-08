import { Link } from 'react-router-dom';
import { Bus, Mail, Send, Phone, ArrowUpRight } from 'lucide-react';
import AnchorLink from './AnchorLink.jsx';

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white/70">
      <section id="contacts" className="border-b border-white/10">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <span className="section-eyebrow !text-brand-300">
                Готовы начать
              </span>
              <h2 className="mt-4 font-serif text-2xl font-normal text-white sm:text-3xl">
                Расскажите о своей компании — предложим, с чего начать
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/60">
                Разберём ваши маршруты, парк и текущие процессы, покажем демо CRM и
                прикинем, как будет выглядеть брендированный сайт бронирования именно
                для вас.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href="mailto:hello@tit.example" className="btn-primary">
                <Mail size={17} />
                Написать нам
              </a>
              <a href="https://t.me/tit_solutions" className="btn-secondary !bg-white/5 !text-white !border-white/15 hover:!bg-white/10">
                <Send size={17} />
                Telegram
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50">
            <span className="inline-flex items-center gap-2">
              <Mail size={15} /> hello@tit.example
            </span>
            <span className="inline-flex items-center gap-2">
              <Send size={15} /> @tit_solutions
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={15} /> +7 (900) 000-00-00
            </span>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded border border-white/15">
              <Bus size={15} strokeWidth={1.75} />
            </span>
            <span className="font-serif text-[15px]">TIT</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            Разрабатываем CRM и брендированные сайты бронирования для
            автотранспортных и туристических компаний.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Продукты
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/crm" className="inline-flex items-center gap-1 hover:text-white">
                CRM для перевозчика <ArrowUpRight size={13} />
              </Link>
            </li>
            <li>
              <Link to="/passenger-site" className="inline-flex items-center gap-1 hover:text-white">
                Сайт для пассажиров <ArrowUpRight size={13} />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Компания
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><AnchorLink to="contacts" className="hover:text-white">Контакты</AnchorLink></li>
            <li><AnchorLink to="case-study" className="hover:text-white">Кейсы</AnchorLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Инфраструктура
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/50">
            <li>Docker Swarm, zero-downtime деплой</li>
            <li>Grafana / Prometheus мониторинг</li>
            <li>CI/CD на GitHub Actions</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} TIT. Все права защищены.</span>
          <span>Сделано для транспортных и туристических компаний</span>
        </div>
      </div>
    </footer>
  );
}
