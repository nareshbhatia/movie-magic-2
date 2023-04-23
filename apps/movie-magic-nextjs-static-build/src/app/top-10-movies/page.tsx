import { Header } from '~/components/Header';
import { Top10MoviesList } from './Top10MoviesList';

export default function Top10MoviesPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tight">
          Top 10 Movies Of All Time
        </h1>

        <div className="mt-6">
          {/* @ts-expect-error Server Component */}
          <Top10MoviesList />
        </div>
      </div>
    </div>
  );
}
