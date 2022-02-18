import {
  DotsVerticalIcon,
  InformationCircleIcon,
  PlusIcon,
  TicketIcon,
  XCircleIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import { useMovie } from '../../hooks/useMovies';
import { useMyList } from '../../hooks/useMyList';
import { MovieContextType, MovieProp } from '../../types';
import ListButton from '../ListButton';

export default function MovieCard({ movie }: MovieProp) {
  const { setSelectedMovie } = useContext(MovieContext);

  return (
    <div className="min-w-[8rem] snap-center relative flex flex-col">
      <div
        className="h-48 min-w-[8rem] relative"
        onClick={() => setSelectedMovie(movie)}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          layout="fill"
          objectFit="contain"
          alt={movie.title}
        />
      </div>
      <div className="w-full h-12 bg-neutral-800 flex items-center justify-between px-2">
        <InformationCircleIcon className="w-6 h-6" />
        <DotsVerticalIcon className="w-6 h-6" />
      </div>
    </div>
  );
}

export const MovieItemCard = ({ movie }: MovieProp) => {
  return (
    <div className="transition-transform w-full min-h-max bg-neutral-800 p-4 z-50 flex gap-3 rounded-md">
      <div className="h-40 min-w-[6rem] relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
          alt={movie?.title}
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-1">
          <div className="flex flex-col w-full gap-1">
            <div className="flex w-full justify-between">
              <h2 className="w-10/12 font-bold text-xl">{movie?.title}</h2>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-neutral-500">{movie?.release_date}</p>
              <div className="rounded-full w-1 h-1 bg-neutral-500"></div>
              <p className="font-bold text-red-550 text-2xl">Php 350</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link href={`/${movie?.id}`}>
            <div className="flex items-center gap-2 text-black px-4 py-2 bg-white rounded-md">
              <TicketIcon className="w-6 h-6" />
              <p className="font-bold">Reserve Ticket</p>
            </div>
          </Link>
          <ListButton movie={movie!} />
        </div>
      </div>
    </div>
  );
};

export const MovieDialog = ({
  selectedMovie,
  setSelectedMovie,
}: MovieContextType) => {
  const { data: movie } = useMovie(selectedMovie?.id!);

  return (
    <div
      className={`${
        selectedMovie ? 'translate-y-0' : 'translate-y-full'
      } transition-transform w-full min-h-max bg-neutral-800 p-4 fixed bottom-0 z-50 flex gap-3`}
    >
      <div className="h-40 min-w-[6rem] relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
          alt={movie?.title}
        />
      </div>
      <div className="w-full flex flex-col justify-between gap-2">
        <div className="flex gap-1">
          <div className="flex flex-col w-full gap-1">
            <div className="flex w-full justify-between">
              <h2 className="w-10/12 font-bold text-xl">{movie?.title}</h2>
              <button
                className="self-start"
                onClick={() => setSelectedMovie(null)}
              >
                <XCircleIcon className="w-8 h-8" />
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-neutral-500">{movie?.release_date}</p>
              <div className="rounded-full w-1 h-1 bg-neutral-500"></div>
              <p className="text-sm text-neutral-500">{movie?.status}</p>
            </div>
            <div>
              <p className="font-bold text-red-550 text-2xl">Php 350</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href={`/${movie?.id}`}>
            <div className="flex items-center gap-2 text-black px-4 py-2 bg-white rounded-md">
              <TicketIcon className="w-6 h-6" />
              <p className="font-bold">Reserve Ticket</p>
            </div>
          </Link>
          <ListButton movie={selectedMovie!} />
        </div>
      </div>
    </div>
  );
};
