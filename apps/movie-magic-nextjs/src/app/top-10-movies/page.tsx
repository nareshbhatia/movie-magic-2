// TODO: Why does this page have to be client-side?
//   Only SignInContainer needs client-side interactivity.
'use client';

import * as React from 'react';
import { Header } from '~/components';
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
          <Top10MoviesList />
        </div>
      </div>
    </div>
  );
}
