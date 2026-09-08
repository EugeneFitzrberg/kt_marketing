import { Bus, Car, Users, CreditCard, FileText, MapPinned, UserCircle } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading.jsx';
import FeatureCard from '../../components/FeatureCard.jsx';
import LiveSearchForm from '../../components/demo/LiveSearchForm.jsx';

export default function PassengerBooking() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeading
          eyebrow="Попробуйте сами"
          title="Форма поиска рейса — с реальной логикой"
          description="Не картинка, а работающий виджет: фильтрация городов по вводу, запрет прошедших дат, счётчик мест с минимумом в одно место — портированы из production-кода нашего действующего сайта бронирования."
        />
        <div className="mt-8 max-w-lg">
          <LiveSearchForm />
        </div>
      </div>

      <div className="border-t border-ink-900/10 pt-16">
        <SectionHeading
          eyebrow="Бронирование"
          title="Полный цикл — от поиска рейса до билета на руках"
          description="Пошаговый визард: поиск → выбор мест → данные пассажиров → подтверждение — адаптированный под три формата поездок."
        />
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          <FeatureCard icon={Bus} title="Рейсы по расписанию">
            Поиск по направлению, дате и числу мест, выбор рейса и
            посадочных мест — с онлайн-бронированием и оплатой.
          </FeatureCard>
          <FeatureCard icon={Car} title="Трансферы" tone="sun">
            Для высокого чека — быстрое онлайн-бронирование или заявка с
            обратным звонком: выбираем сценарий, который лучше конвертирует.
          </FeatureCard>
          <FeatureCard icon={Users} title="Групповые туры">
            Заявка на групповую поездку сразу попадает в ту же очередь, что
            видит оператор в CRM — без потерянных писем и звонков.
          </FeatureCard>
        </div>
      </div>

      <div className="border-t border-ink-900/10 pt-16">
        <SectionHeading
          eyebrow="После бронирования"
          title="Оплата, билет и всё, что нужно пассажиру дальше"
        />
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={CreditCard} title="Оплата онлайн или водителю">
            Приём платежей через ЮKassa прямо на сайте — или оплата
            наличными водителю: система поддерживает оба варианта.
          </FeatureCard>
          <FeatureCard icon={FileText} title="Электронный билет" tone="sun">
            PDF-билет с номером бронирования формируется автоматически и
            доступен по ссылке.
          </FeatureCard>
          <FeatureCard icon={MapPinned} title="Каталог экскурсий">
            Витрина экскурсий с фотографиями и онлайн-бронированием —
            допродажа без участия оператора.
          </FeatureCard>
          <FeatureCard icon={UserCircle} title="Личный кабинет" tone="sun">
            История поездок, повторное бронирование в один клик и статус
            заявок.
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}
