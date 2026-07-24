export default function FeatureCard({ icon: Icon, title, children, tone = 'brand' }) {
  const toneClasses = {
    brand: 'bg-brand-50 text-brand-600',
    sun: 'bg-sun-400/15 text-sun-600',
  };

  return (
    <div className="card h-full">
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${toneClasses[tone]}`}>
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="mt-4 text-[15px] font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-900/60">{children}</p>
    </div>
  );
}
