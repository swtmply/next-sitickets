import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<any> = (url: string) =>
  fetch(url).then((res) => res.json());

export const useMovies = (type: string) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=f09a6c2feb6cad447e05006af4fa90d5`,
    fetcher
  );

  return { data, error };
};

export const useMovie = (movie_id: string) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=f09a6c2feb6cad447e05006af4fa90d5`,
    fetcher
  );

  return { data, error };
};
