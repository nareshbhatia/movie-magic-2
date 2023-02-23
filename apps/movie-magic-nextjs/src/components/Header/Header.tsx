'use client';

import * as React from 'react';
import clsx from 'clsx';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useAuthStateContext } from '~/contexts';
import { Button } from '../Button';
import { ModeToggle } from './ModeToggle';

export function Header() {
  const { authState, setAuthState } = useAuthStateContext();
  const { user } = authState;
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/signin');
  };

  const handleSignOut = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push('/');
    setAuthState({ ...authState, user: undefined });
  };

  return (
    <div className="h-16 flex items-center px-4">
      <h1 className="flex-1 text-3xl text-brand font-semibold">Movie Magic</h1>

      <ModeToggle />

      {user === undefined ? (
        <Button
          className="ml-3"
          variant="primary"
          aria-label="Sign in"
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      ) : null}

      {user !== undefined ? (
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="flex rounded-full bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user.photoUrl}
                alt="{user.name}"
              />
            </Menu.Button>
          </div>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={clsx(
                      active ? 'bg-neutral-100' : '',
                      'block px-4 py-2 text-sm text-neutral-700'
                    )}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={clsx(
                      active ? 'bg-neutral-100' : '',
                      'block px-4 py-2 text-sm text-neutral-700'
                    )}
                    onClick={handleSignOut}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : null}
    </div>
  );
}
