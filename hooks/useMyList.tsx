import { createContext, useCallback, useContext, useState } from 'react';
import { Movie, LayoutProps, MyListContextType } from '../types';

export const MyListContext = createContext<MyListContextType>(
  {} as MyListContextType
);

export const MyListContextProvider = ({ children }: LayoutProps) => {
  const [cart, setCart] = useState<Movie[]>([]);

  const addItem = useCallback((movie: Movie) => {
    setCart((prev) => [...prev, movie]);
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setCart((prev) => prev.filter(({ id }) => id !== itemId));
  }, []);

  return (
    <MyListContext.Provider value={{ cart, setCart, addItem, removeItem }}>
      {children}
    </MyListContext.Provider>
  );
};

export const useMyList = () => useContext(MyListContext);
