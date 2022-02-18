import React from 'react';
import Layout from '../components/Layout';
import { MovieItemCard } from '../components/Movie/MovieCard';
import { useMyList } from '../hooks/useMyList';

export default function MyList() {
  const { cart } = useMyList();

  return (
    <Layout>
      <div className="p-4">
        <h2 className="font-bold text-2xl mb-4">My List</h2>
        <div className="flex flex-col gap-2">
          {cart?.map((item, idx) => (
            <MovieItemCard key={idx} movie={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
