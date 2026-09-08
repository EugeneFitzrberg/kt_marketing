export default function FeatureCard({ icon: Icon, title, children, tone = 'brand' }) {
  const toneClasses = {
    brand: 'text-brand-600 border-brand-200',
    sun: 'text-sun-600 border-sun-300',
  };

  return (
    <div className="h-full border-t border-ink-900/10 pt-5">
      <span className={`flex h-10 w-10 items-center justify-center rounded-full border ${toneClasses[tone]}`}>
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <h3 className="mt-4 text-base font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-900/55">{children}</p>
    </div>
  );
}
