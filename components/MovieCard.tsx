import { MovieProp } from 'lib/types';
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({ movie }: MovieProp) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="flex flex-col gap-2 w-full">
        <div className="relative w-full h-60 group cursor-pointer rounded">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            layout="fill"
            objectFit="cover"
            className="rounded"
            alt=""
          />
          <div className="group-hover:opacity-100 opacity-0 duration-200 absolute inset-0 bg-black/50 flex flex-col justify-between py-2 px-2">
            <p className="font-semibold w-full text-center justify-self-center">
              {movie.title}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="font-semibold bg-crimson-200 hover:bg-crimson-300 px-2 py-1 rounded-sm text-sm text-center"
            >
              Reserve tickets
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
