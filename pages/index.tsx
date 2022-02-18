import type { NextPage } from 'next';
import { useContext } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { MovieDialog } from '../components/Movie/MovieCard';
import MovieList from '../components/Movie/MovieList';
import { MovieContext } from '../contexts/MovieContext';

const Home: NextPage = () => {
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);

  return (
    <Layout>
      <div className="min-h-screen">
        <Header />
        <main className="flex flex-col">
          <MovieList title="Showing" className="mb-4" type="now_playing" />
          <MovieList title="Coming Soon" className="mb-16" type="upcoming" />
        </main>

        <MovieDialog
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      </div>
    </Layout>
  );
};

export default Home;
