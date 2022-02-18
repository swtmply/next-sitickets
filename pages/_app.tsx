import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Movie } from '../types';
import { MovieContext } from '../contexts/MovieContext';
import { MyListContextProvider } from '../hooks/useMyList';
import { SeatsContextProvider } from '../hooks/useSeats';

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      <MyListContextProvider>
        <SeatsContextProvider>
          <Component {...pageProps} />
        </SeatsContextProvider>
      </MyListContextProvider>
    </MovieContext.Provider>
  );
}

export default MyApp;
