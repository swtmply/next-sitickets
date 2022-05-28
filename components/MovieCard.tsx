import { MovieProp } from 'lib/types';
import Image from 'next/image';

const MovieCard = ({ movie }: MovieProp) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full h-60">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center z-10">
        <p className="font-bold mb-2 truncate">{movie.title}</p>
        <p className="flex justify-between text-sm items-center">
          {movie.release_date}
          <span className="uppercase border-2 border-grey-300 rounded px-2 ">
            {movie.original_language}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
