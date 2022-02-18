import { createContext, useCallback, useContext, useState } from 'react';
import { SeatsContextType, LayoutProps, Seat } from '../types';

const SeatsContext = createContext<SeatsContextType>({} as SeatsContextType);

export const SeatsContextProvider = ({ children }: LayoutProps) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [time, setTime] = useState<string>('10:00AM');
  const [date, setDate] = useState<string>('Feb 9 - Wed');

  const addSeat = useCallback((seat: Seat) => {
    setSeats((prev) => [...prev, seat]);
  }, []);

  const removeSeat = useCallback((seat: Seat) => {
    setSeats((prev) =>
      prev.filter(
        (currSeat) => JSON.stringify(currSeat) !== JSON.stringify(seat)
      )
    );
  }, []);

  const setSeatTime = useCallback((time: string) => {
    setTime(time);
  }, []);

  const setSeatDate = useCallback((date: string) => {
    setDate(date);
  }, []);

  return (
    <SeatsContext.Provider
      value={{
        seats,
        time,
        date,
        addSeat,
        removeSeat,
        setSeatTime,
        setSeatDate,
      }}
    >
      {children}
    </SeatsContext.Provider>
  );
};

export const useSeats = () => useContext(SeatsContext);
