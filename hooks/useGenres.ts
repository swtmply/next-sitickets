import useSWR from 'swr';
import fetcher from '../lib/fetcher';

export interface Genre {
  id: number;
  name: string;
}

export default function useGenres() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useSWR(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API}`,
    fetcher
  );

  const getGenreById = (id: number) => {
    const genre: Genre = data.genres.find((genre: Genre) => genre.id === id);

    return genre.name;
  };

  return { genres: data?.genres, getGenreById };
}
