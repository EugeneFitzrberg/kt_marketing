import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-2 text-2xl font-bold text-ink-900">Страница не найдена</h1>
      <Link to="/" className="btn-primary mt-6">
        На главную
      </Link>
    </div>
  );
}
