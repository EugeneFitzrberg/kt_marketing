import { TrendingUp, GitBranch, Activity, ShieldCheck, BarChart3, Radio } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading.jsx';
import FeatureCard from '../../components/FeatureCard.jsx';
import BrowserMockup from '../../components/BrowserMockup.jsx';
import AnchorLink from '../../components/AnchorLink.jsx';

export default function CrmAnalytics() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeading
          eyebrow="Аналитика"
          title="От общих цифр до выручки по каждому маршруту"
          description="Общий дашборд показывает, сколько пассажиров перевезено всего и сколько из них уникальные. Отдельный отчёт для руководителей — за месяц или за день: выручка, заполняемость, отмены и пересадки по каждому маршруту, без выгрузок в Excel."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <BrowserMockup>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-brand-600" />
              <span className="text-xs font-semibold text-ink-900/60">Статистика за месяц</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-ink-900/5 bg-ink-50/60 p-3">
                <div className="text-[10px] font-medium uppercase tracking-wide text-ink-900/40">
                  Выручка за месяц
                </div>
                <div className="mt-1 text-xl font-bold text-ink-900">2 340 500 ₽</div>
              </div>
              <div className="rounded-xl border border-ink-900/5 bg-ink-50/60 p-3">
                <div className="text-[10px] font-medium uppercase tracking-wide text-ink-900/40">
                  Заполняемость
                </div>
                <div className="mt-1 text-xl font-bold text-ink-900">78%</div>
              </div>
            </div>
            <div className="mt-4 space-y-2.5">
              {[
                ['Сочи → Красная Поляна', 100],
                ['Адлер → Роза Хутор', 84],
                ['Сочи → Абхазия', 57],
              ].map(([label, pct]) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-xs text-ink-900/60">
                    <span>{label}</span>
                    <span className="font-semibold text-ink-900/80">{pct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-ink-900/5">
                    <div className="h-1.5 rounded-full bg-brand-500" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </BrowserMockup>

          <AnchorLink to="contacts" className="btn-secondary w-fit">
            Спросить, что покажет ваша статистика
          </AnchorLink>
        </div>
      </div>

      <div className="border-t border-ink-900/10 pt-16">
        <SectionHeading
          eyebrow="Эксплуатация"
          title="Работает как промышленная система"
          description="Не студенческий проект: система развёрнута с оглядкой на прод-эксплуатацию, мониторинг и безопасные обновления."
        />
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={GitBranch} title="Обновления без простоя">
            Двухфазный деплой: сперва бэкенд с гарантией совместимости со
            старым фронтендом, затем фронтенд. Пассажиры не видят техокна.
          </FeatureCard>
          <FeatureCard icon={Activity} title="7 дашбордов Grafana" tone="sun">
            Бизнес-метрики, маршруты, HTTP, Node.js, MongoDB, здоровье
            сервисов и ресурсы контейнеров.
          </FeatureCard>
          <FeatureCard icon={ShieldCheck} title="Алерты в Telegram">
            Рост ошибок, падение баланса SMS, недоступность бэкенда или базы
            — оповещение приходит раньше, чем заметят пассажиры.
          </FeatureCard>
          <FeatureCard icon={BarChart3} title="CI/CD и автотесты">
            Каждый пуш собирает три образа и прогоняет API- и e2e-автотесты.
            Выкладка на прод — отдельный шаг с ревью и авто-откатом.
          </FeatureCard>
          <FeatureCard icon={Radio} title="Живые метрики в реальном времени" tone="sun">
            Активные WebSocket-подключения, последний запуск планировщика,
            скорость рассылок — видно прямо на дашборде.
          </FeatureCard>
          <FeatureCard icon={ShieldCheck} title="Доступ только по VPN">
            Наружу смотрит только веб-шлюз по TLS. Grafana — только из VPN,
            Prometheus не выставлен наружу вовсе.
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}
