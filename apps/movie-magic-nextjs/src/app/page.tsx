import { Button } from '~/components/Button';
import { Header } from '~/components/Header';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Unlimited movies</span>{' '}
              <span className="block text-brand xl:inline">
                anytime, anywhere
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-neutral-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <Button variant="primary" aria-label="Get started">
                Get started
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://i.imgur.com/YEyeoVQ.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
