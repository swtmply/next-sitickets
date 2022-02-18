import React from 'react';
import { useMovies } from '../../hooks/useMovies';
import { Movie, MovieListProps } from '../../types';
import MovieCard from './MovieCard';

export default function MovieList(props: MovieListProps) {
  const { data } = useMovies(props.type);

  return (
    <div className={props.className}>
      <h2 className="font-bold text-2xl px-4 py-2">{props.title}</h2>
      <div className="px-4 flex gap-2 overflow-x-scroll snap-x scrollbar-none">
        {data?.results.map((movie: Movie, i: number) => (
          <MovieCard movie={movie} key={i} />
        ))}
      </div>
    </div>
  );
}
