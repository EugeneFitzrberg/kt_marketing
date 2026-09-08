import { Outlet } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Sidebar from './Sidebar.jsx';
import AnchorLink from './AnchorLink.jsx';

export default function SidebarLayout({ sections, title, tagline, accent = 'brand', ctaLabel }) {
  const eyebrowClass = accent === 'sun' ? 'section-eyebrow !text-sun-400' : 'section-eyebrow !text-brand-300';
  const btnClass =
    accent === 'sun' ? 'btn-primary !bg-sun-500 hover:!bg-sun-600' : 'btn-primary';

  return (
    <>
      <section className="bg-ink-950">
        <div className="container-page py-14 sm:py-16">
          <span className={eyebrowClass}>{title}</span>
          <h1 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl">
            {tagline}
          </h1>
          <div className="mt-6">
            <AnchorLink to="contacts" className={btnClass}>
              {ctaLabel}
              <ArrowUpRight size={16} />
            </AnchorLink>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-8 py-12 sm:py-14 lg:grid-cols-[220px_1fr] lg:items-start lg:gap-12">
        <Sidebar sections={sections} title={title} accent={accent} />
        <div className="min-w-0">
          <Outlet />
        </div>
      </div>
    </>
  );
}
