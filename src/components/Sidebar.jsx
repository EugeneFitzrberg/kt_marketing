import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Sidebar({ sections, title, accent = 'brand' }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const accentText = accent === 'sun' ? 'text-sun-600' : 'text-brand-600';
  const accentBorder = accent === 'sun' ? 'border-sun-500' : 'border-brand-500';

  const activeSection = sections.find((s) =>
    s.end ? location.pathname === s.to : location.pathname === s.to || location.pathname.startsWith(`${s.to}/`),
  );

  const list = (
    <ul className="space-y-1 border-l border-ink-900/10 pl-4">
      {sections.map((s) => (
        <li key={s.to}>
          <NavLink
            to={s.to}
            end={s.end}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `-ml-px block border-l-2 py-1.5 pl-3 text-sm transition ${
                isActive ? `${accentBorder} ${accentText} font-semibold` : 'border-transparent text-ink-900/55 hover:text-ink-900'
              }`
            }
          >
            {s.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <nav aria-label={title}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg border border-ink-900/10 px-4 py-3 text-left lg:hidden"
      >
        <span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-900/40">{title}</span>
          <span className="text-sm font-semibold text-ink-900">{activeSection?.label ?? title}</span>
        </span>
        <ChevronDown size={16} className={`flex-shrink-0 text-ink-900/50 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="mt-3 lg:hidden">{list}</div>}

      <div className="hidden lg:sticky lg:top-24 lg:block">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-900/40">{title}</div>
        <div className="mt-4">{list}</div>
      </div>
    </nav>
  );
}
