export default function FeatureCard({ icon: Icon, title, children, tone = 'brand' }) {
  const toneClasses = {
    brand: 'text-brand-600',
    sun: 'text-sun-600',
  };

  return (
    <div className="h-full border-t border-ink-900/10 pt-5">
      <Icon size={19} strokeWidth={1.75} className={toneClasses[tone]} />
      <h3 className="mt-3.5 text-[15px] font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-900/55">{children}</p>
    </div>
  );
}
