import Layout from 'components/Layout';
import { MovieHero } from 'components/MovieHero';
import { MoviesList } from 'components/MoviesList';
import fetcher from 'lib/fetcher';
import useGenres from 'hooks/useGenres';
import useSWR from 'swr';
import { Loader } from '@mantine/core';

const HomePage = () => {
  const { data: nowPlayingData } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API}&region=PH`,
    fetcher
  );
  const { data: upcomingData } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API}&region=PH`,
    fetcher
  );
  const { getGenreById } = useGenres();

  return (
    <Layout>
      <div className="min-h-screen grid place-items-center">
        {nowPlayingData && upcomingData ? (
          <>
            {nowPlayingData.success === false ||
            upcomingData.success === false ? (
              <div>Something went wrong</div>
            ) : (
              <div>
                <MovieHero
                  getGenreById={getGenreById}
                  featuredMovie={nowPlayingData.results[0]}
                />
                <MoviesList
                  movies={nowPlayingData.results}
                  header="Now Playing"
                />
                <MoviesList
                  movies={upcomingData.results}
                  header="Upcoming Movies"
                />
              </div>
            )}
          </>
        ) : (
          <Loader color="red" />
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
