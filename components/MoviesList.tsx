import MovieCard from 'components/MovieCard';
import { Movie } from 'lib/types';

interface MoviesListProps {
  movies: Movie[];
  header: string;
}

export function MoviesList({ header, movies }: MoviesListProps) {
  return (
    <div className="px-2 md:px-20 my-10 w-screen">
      <h3 className="text-2xl mb-4">{header}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
