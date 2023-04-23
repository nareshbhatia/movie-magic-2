import { SignInContainer } from '~/components/SignIn';

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
