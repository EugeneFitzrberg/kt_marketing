import { useNavigate, useLocation } from 'react-router-dom';

// Под HashRouter весь URL-хэш занят роутингом (#/crm), поэтому обычная ссылка
// вида href="/#contacts" не работает — она перезапишет хэш маршрута. Вместо
// этого скроллим к элементу вручную; если его нет на текущей странице (id
// секции есть не на каждом маршруте), сначала переходим на главную.
export default function AnchorLink({ to, children, className, onClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    onClick?.();

    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
