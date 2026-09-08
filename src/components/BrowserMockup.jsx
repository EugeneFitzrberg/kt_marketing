export default function BrowserMockup({ children, tone = 'light', className = '' }) {
  const bodyTone =
    tone === 'dark' ? 'bg-ink-900' : 'bg-white';

  return (
    <div className={`overflow-hidden rounded-lg border border-white/10 ${className}`}>
      <div className={`border-t-2 border-brand-500 p-5 ${bodyTone}`}>{children}</div>
    </div>
  );
}
