'use client';

import Image from 'next/image';
import * as React from 'react';

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

interface Movie {
  id: string;
  name: string;
  year: number;
  rating: number;
}

function useMovies() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log('----> apiUrl', apiUrl);
  const failMessage = 'Failed to get movies';

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState<Error>();
  const [movies, setMovies] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/top-10-movies`);

        if (!response.ok) {
          setIsError(true);
          setError(new Error(`${failMessage} (${response.status})`));
          setIsLoading(false);
          return;
        }

        const movies: Movie[] = await response.json();
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error instanceof Error ? error : new Error(failMessage));
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [apiUrl]);
  return { isLoading, isError, error, movies };
}

export function Top10MoviesList() {
  const { isLoading, isError, error, movies } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h1 className="mb-2 text-2xl font-semibold">{error?.message}</h1>;
  }

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
              <div className="flex">
                <h1 className="flex-auto text-base leading-5 font-semibold">
                  {movie.name}
                </h1>
                <div className="ml-2 flex text-base leading-5 font-semibold">
                  <StarIcon className="h-5 w-5 stroke-default" />
                  &nbsp;
                  {movie.rating.toFixed(1)}
                </div>
              </div>
              <div className="w-full flex-none text-sm font-medium">
                {movie.year}
              </div>
              <div className="mt-2 text-sm">{movie.logline}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
