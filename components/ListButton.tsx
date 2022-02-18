import { PlusIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';
import { useMyList } from '../hooks/useMyList';
import { MovieProp } from '../types';

export default function ListButton({ movie }: MovieProp) {
  const { cart, addItem, removeItem } = useMyList();
  const listed = cart?.find((item) => item.id === movie?.id);

  return (
    <button
      className="flex flex-col items-center"
      onClick={() => {
        if (!listed) {
          addItem(movie);
        } else {
          removeItem(movie.id);
        }
      }}
    >
      {!listed ? (
        <>
          <PlusIcon className="w-6 h-6" />
          <p>My List</p>
        </>
      ) : (
        <>
          <XIcon className="w-6 h-6" />
          <p>Remove</p>
        </>
      )}
    </button>
  );
}
