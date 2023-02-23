'use client';

import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAuthStateContext } from '~/contexts';
import { Credentials, User } from '~/models';
import { Button } from '../Button';
import { TextField } from '../Form';

// TODO: fix ts-ignore
// @ts-ignore
const schema: yup.ObjectSchema<Credentials> = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

interface SignInFormProps {
  onSubmit: (credentials: Credentials) => void;
}

function SignInForm({ onSubmit }: SignInFormProps) {
  const { formState, register, handleSubmit } = useForm<Credentials>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
        Sign in to your account
      </h2>

      <div className="mt-8">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                id="email"
                {...register('email')}
                label="Email address"
                error={errors.email?.message}
              />
            </div>

            <div>
              <TextField
                id="password"
                {...register('password')}
                label="Password"
                type="password"
                error={errors.password?.message}
              />
            </div>

            <div>
              <Button
                className="w-full"
                variant="primary"
                aria-label="Sign in"
                type="submit"
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export function SignInContainer() {
  const { authState, setAuthState } = useAuthStateContext();
  const router = useRouter();

  const handleSubmit = async (credentials: Credentials) => {
    console.log('----> signin', credentials);
    const user: User = {
      id: 'paul-silva',
      email: credentials.email,
      name: 'Paul Silva',
      photoUrl:
        'https://images.unsplash.com/photo-1568585105565-e372998a195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };
    setAuthState({ ...authState, user });

    // TODO: This is doing a server-side redirect in the Vercel deployment.
    //   This results in auth state to be lost and top-10-movies page does
    //   not know who the user is. Fix this.
    router.push('/top-10-movies');
  };

  return <SignInForm onSubmit={handleSubmit} />;
}
