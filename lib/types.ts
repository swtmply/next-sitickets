import { PropsWithChildren, ReactNode } from 'react';

export type PropsWithChildrenOnly = PropsWithChildren<unknown>;
export type ReactFCWithChildren = React.FC<PropsWithChildrenOnly>;

export type LayoutProps = {
  children: ReactNode;
};

export type Movie = {
  id: string;
  title?: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date?: string;
  overview?: string;
  status?: string;
  genre_ids?: number[];
  original_language?: string;
  runtime: number;
};

export type MovieProp = {
  movie: Movie;
};
