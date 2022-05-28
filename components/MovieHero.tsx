import { Movie } from 'lib/types';
import Image from 'next/image';

interface MovieHeroProps {
  featuredMovie: Movie | undefined;
  getGenreById: (id: number) => string;
}

export function MovieHero({ featuredMovie, getGenreById }: MovieHeroProps) {
  return (
    <div className="min-h-[90vh] w-full relative">
      <Image
        src={`https://image.tmdb.org/t/p/original${featuredMovie?.backdrop_path}`}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className="absolute inset-0 bg-black/40 flex items-center px-20">
        <div className="max-w-md">
          <h2 className="font-bold text-4xl mb-2">{featuredMovie?.title}</h2>
          <p className="line-clamp-2">{featuredMovie?.overview}</p>
          <p className="my-2 font-semibold">
            Tags:{' '}
            <span className="text-sm font-normal">
              {featuredMovie?.genre_ids
                ?.map((genre) => getGenreById(genre))
                .join(', ')}
            </span>
          </p>
          <button className="px-4 py-2 mt-4 max-w-max self-end bg-crimson-200 hover:bg-crimson-300 rounded-sm uppercase font-semibold">
            Reserve tickets now!
          </button>
        </div>
      </div>
    </div>
  );
}
