import Image from 'next/image';

function StarIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

async function getMovies() {
  const API_URL = process.env.API_URL;
  console.log('----> API_URL', API_URL);
  const resMovies = await fetch(`${API_URL}/top-10-movies`);
  // returns a promise that resolves to movies in JSON format
  return resMovies.json();
}

export async function Top10MoviesList() {
  const movies = await getMovies();
  return (
    <ul className="flex-none space-y-6">
      {movies.map((movie: any) => (
        <li key={movie.id}>
          <div className="bg-surface border border-transparent rounded-xl min-h-[160px] flex overflow-hidden">
            <div className="flex-none w-32 relative">
              <Image
                src={movie.photoUrl}
                alt={movie.name}
                fill={true}
                sizes="256px"
                className="object-cover"
              />
            </div>
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold">
                  {movie.name}
                </h1>
                <div className="flex text-lg font-semibold">
                  <StarIcon className="h-6 w-6 stroke-default" />
                  &nbsp;
                  {movie.rating.toFixed(1)}
                </div>
                <div className="w-full flex-none font-medium">{movie.year}</div>
                <div className="mt-3 text-sm">{movie.logline}</div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
