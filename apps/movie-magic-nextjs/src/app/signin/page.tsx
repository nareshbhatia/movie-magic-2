// TODO: Why does this page have to be client-side?
//   Only SignInContainer needs client-side interactivity.
'use client';

import * as React from 'react';
import { Header, SignInContainer } from '~/components';

export default function SignIn() {
  return (
    <div className="mx-auto max-w-7xl h-screen flex flex-col">
      <div className="flex-grow" />
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <SignInContainer />
        </div>
      </div>
      <div className="flex-grow-2" />
    </div>
  );
}
