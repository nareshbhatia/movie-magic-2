// TODO: Why does this page have to be a client component?
//   Only <Header> needs client-side interactivity.
//   <Top10MoviesList> should fetch data only on the
//   server side, but it is also fetching data on the
//   client side.
'use client';

import * as React from 'react';
import { Header } from '~/components';
import { Top10MoviesList } from './Top10MoviesList';

interface Top10MoviesListClientProps {
  children: React.ReactNode;
}

function Top10MoviesListClient({ children }: Top10MoviesListClientProps) {
  return <>{children}</>;
}

export default function Top10MoviesPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tight">
          Top 10 Movies Of All Time
        </h1>

        <div className="mt-6">
          <Top10MoviesListClient>
            <Top10MoviesList />
          </Top10MoviesListClient>
        </div>
      </div>
    </div>
  );
}
