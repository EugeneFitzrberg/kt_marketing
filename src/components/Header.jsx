import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bus, Menu, X, ArrowUpRight } from 'lucide-react';
import AnchorLink from './AnchorLink.jsx';

const NAV_LINKS = [
  { to: '/crm', label: 'CRM для бизнеса' },
  { to: '/passenger-site', label: 'Сайт для ваших пассажиров' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/95 backdrop-blur supports-[backdrop-filter]:bg-ink-950/80">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded border border-white/15 text-white">
            <Bus size={18} strokeWidth={1.75} />
          </span>
          <span className="font-serif text-base font-normal leading-none tracking-tight">
            TIT
            <span className="mt-0.5 block text-[11px] font-medium text-white/50">
              софт для перевозчиков
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <AnchorLink
            to="contacts"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
          >
            Контакты
          </AnchorLink>
        </nav>

        <div className="hidden md:block">
          <AnchorLink to="contacts" className="btn-primary">
            Обсудить проект
            <ArrowUpRight size={16} />
          </AnchorLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink-950 px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <AnchorLink
              to="contacts"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
            >
              Контакты
            </AnchorLink>
            <AnchorLink
              to="contacts"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Обсудить проект
            </AnchorLink>
          </nav>
        </div>
      )}
    </header>
  );
}
