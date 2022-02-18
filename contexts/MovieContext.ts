import { createContext } from 'react';
import { MovieContextType } from '../types';

export const MovieContext = createContext<MovieContextType>(
  {} as MovieContextType
);
