import { PlusIcon, XIcon } from '@heroicons/react/outline';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ListButton from '../components/ListButton';
import MovieTabs from '../components/Movie/MovieTabs';
import { Movie } from '../types';

export default function MovieInformation({ movie }: { movie: Movie }) {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCasts = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie?.id}/credits?api_key=f09a6c2feb6cad447e05006af4fa90d5`
      ).then((res) => res.json());

      setCasts(res.cast.slice(0, 3));
    };

    getCasts();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-[100vw] min-h-[30vh] aspect-video relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          layout="fill"
          objectFit="cover"
          alt={movie?.title}
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">{movie.title}</h1>
            <p className="text-sm text-neutral-500">{movie.release_date}</p>
          </div>
          <ListButton movie={movie} />
        </div>
        <p className="text-sm">{movie.overview}</p>
        <div className="text-sm">
          <span>Starring: </span>
          {casts.map((cast: any, idx) => (
            <span key={idx} className="text-sm text-neutral-400 mx-1">
              {cast.name}
            </span>
          ))}
        </div>
      </div>
      <hr className="mb-2 border-neutral-400 pb-2" />

      <MovieTabs />
    </div>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.movieId}?api_key=f09a6c2feb6cad447e05006af4fa90d5`
  ).then((res) => res.json());

  return { props: { movie: JSON.parse(JSON.stringify(movie)) } };
}
