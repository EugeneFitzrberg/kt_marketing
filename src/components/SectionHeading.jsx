export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light' }) {
  const alignClasses = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  const isDark = tone === 'dark';

  return (
    <div className={`flex flex-col ${alignClasses} max-w-2xl`}>
      {eyebrow && (
        <span className={isDark ? 'section-eyebrow !text-brand-300' : 'section-eyebrow'}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-serif text-3xl font-normal leading-tight tracking-tight sm:text-4xl ${
          isDark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[15px] leading-relaxed ${isDark ? 'text-white/60' : 'text-ink-900/60'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
