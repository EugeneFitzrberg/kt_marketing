import {
  Users,
  Bot,
  ScrollText,
  Eye,
  Ban,
  ShieldCheck,
  Send,
  MessageCircle,
  Phone,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';
import SectionHeading from '../../components/SectionHeading.jsx';
import FeatureCard from '../../components/FeatureCard.jsx';
import LiveAccessMatrix from '../../components/demo/LiveAccessMatrix.jsx';

export default function CrmTeam() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeading
          eyebrow="Команда"
          title="Персонал, роли и права доступа"
          description="Каждый сотрудник видит только то, что ему нужно — и каждое действие остаётся в журнале."
        />
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={Users} title="Гибкая матрица прав оператора">
            Транспорт, водители, расписание, пассажиры, чёрный список,
            экскурсии — каждый пункт проверяется на сервере, а не только
            скрывается в интерфейсе.
          </FeatureCard>
          <FeatureCard icon={Bot} title="Водители работают в Telegram" tone="sun">
            Список рейсов, состав пассажиров и отметка о посадке — прямо в
            Telegram-боте компании, без установки приложений.
          </FeatureCard>
          <FeatureCard icon={ScrollText} title="Журнал действий персонала">
            Каждое действие каждого сотрудника — с телом запроса, IP-адресом
            и статусом. Полная история для разбора спорных ситуаций.
          </FeatureCard>
          <FeatureCard icon={Eye} title="Режим просмотра «глазами оператора»">
            Администратор открывает интерфейс так, как его видит оператор —
            удобно для поддержки и разбора обращений.
          </FeatureCard>
          <FeatureCard icon={Ban} title="Чёрный список в двух режимах">
            Полный доступ — для доверенных сотрудников; для остальных —
            быстрая проверка «есть/нет» без просмотра всего списка.
          </FeatureCard>
          <FeatureCard icon={ShieldCheck} title="Сессионная авторизация">
            Вход по телефону и коду — без паролей. При увольнении сотрудника
            доступ пропадает мгновенно, на следующем же запросе.
          </FeatureCard>
        </div>
        <div className="mt-8">
          <div className="mb-3 text-sm font-semibold text-ink-900/50">
            Попробуйте сами — матрица прав оператора
          </div>
          <div className="max-w-sm">
            <LiveAccessMatrix />
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-ink-950 p-6 sm:p-10">
        <SectionHeading
          eyebrow="Коммуникация с пассажиром"
          title="Уведомления с автоматическим резервным каналом"
          description="Система сначала пробует предпочитаемый канал пассажира, а при неудаче — автоматически следующий по цепочке, и только в последнюю очередь падает на гарантированную SMS."
          tone="dark"
        />
        <div className="mt-10">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
              <Send size={16} className="text-brand-300" />
              <span className="text-sm font-semibold text-white">Telegram</span>
            </div>
            <ArrowDown size={16} className="text-white/25 sm:hidden" />
            <ArrowRight size={16} className="hidden text-white/25 sm:block" />
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
              <Bot size={16} className="text-brand-300" />
              <span className="text-sm font-semibold text-white">Max</span>
            </div>
            <ArrowDown size={16} className="text-white/25 sm:hidden" />
            <ArrowRight size={16} className="hidden text-white/25 sm:block" />
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
              <MessageCircle size={16} className="text-brand-300" />
              <span className="text-sm font-semibold text-white">WhatsApp</span>
            </div>
            <ArrowDown size={16} className="text-white/25 sm:hidden" />
            <ArrowRight size={16} className="hidden text-white/25 sm:block" />
            <div className="flex items-center gap-2 rounded-xl border border-sun-400/40 bg-sun-400/10 px-4 py-3">
              <Phone size={16} className="text-sun-400" />
              <span className="text-sm font-semibold text-sun-300">SMS — гарантированно</span>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-white/40">
            Каждая попытка — успешная или нет — остаётся в журнале
          </p>
        </div>

        <div className="mt-10 border-l-2 border-sun-400/50 py-1 pl-5">
          <p className="text-xs leading-relaxed text-white/60">
            <span className="font-semibold text-white">Контроль баланса SMS</span> —
            индикатор остатка средств прямо в шапке админки, с
            предупреждением задолго до нуля.
          </p>
        </div>
      </div>
    </div>
  );
}
