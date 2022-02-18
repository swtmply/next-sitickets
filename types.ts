import { Dispatch, ReactNode, SetStateAction } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export type MovieListProps = {
  title: string;
  type: string;
  className: string;
};

export type Movie = {
  id: string;
  title?: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date?: string;
  overview?: string;
  status?: string;
};

export type MovieProp = {
  movie: Movie;
};

export type MovieContextType = {
  selectedMovie: Movie | null;
  setSelectedMovie: Dispatch<SetStateAction<Movie | null>>;
};

export type MyListContextType = {
  cart: Movie[] | null;
  setCart: Dispatch<SetStateAction<Movie[]>>;
  addItem: (movie: Movie) => void;
  removeItem: (itemId: string) => void;
};

export type Seat = {
  code: string;
  date: string;
  time: string;
};

export type SeatsContextType = {
  seats: Seat[] | null;
  time: string;
  date: string;
  addSeat: (seat: Seat) => void;
  removeSeat: (seat: Seat) => void;
  setSeatTime: (time: string) => void;
  setSeatDate: (date: string) => void;
};
