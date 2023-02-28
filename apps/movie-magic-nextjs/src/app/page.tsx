import { Header } from '~/components/Header';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <main className="lg:relative lg:mt-6">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Unlimited movies</span>
              <span className="block text-brand">
                anytime, anywhere
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-neutral-500 sm:text-xl md:mt-5 md:max-w-3xl">
              From heart-pumping action to tear-jerking dramas, we&apos;ve got
              it all. So grab your popcorn and settle in for an unforgettable
              cinematic experience.
            </p>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://i.imgur.com/YEyeoVQ.jpg"
            alt="Couple watching a movie on TV"
          />
        </div>
      </main>
    </div>
  );
}
