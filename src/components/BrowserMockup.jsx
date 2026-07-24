export default function BrowserMockup({ children, tone = 'light', className = '' }) {
  const bodyTone =
    tone === 'dark' ? 'bg-ink-900' : 'bg-white';

  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 shadow-card ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-ink-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className={`p-5 ${bodyTone}`}>{children}</div>
    </div>
  );
}
