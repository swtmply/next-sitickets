import { UserCircleIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useSeats } from '../../hooks/useSeats';
import { classNames } from './MovieTabs';

const letters = ['A', 'B', 'C', 'D', 'E'];
const numbers = [1, 2, 3, 4, 5, 6, 7];

export default function MovieSeats() {
  const { seats, removeSeat } = useSeats();
  const [seatWindow, setSeatWindow] = useState(false);

  return (
    <div className="relative">
      <div className="p-4">
        <h3 className="font-bold text-2xl mb-4">Choose Seats</h3>

        <div className="flex gap-8 mb-4">
          <div className="flex gap-1 items-center">
            <UserCircleIcon className="w-8 h-8" />
            <p>Available</p>
          </div>
          <div className="flex gap-1 items-center">
            <UserCircleIcon className="w-8 h-8 text-red-550" />
            <p>Selected</p>
          </div>
          <div className="flex gap-1 items-center">
            <UserCircleIcon className="w-8 h-8 text-neutral-500" />
            <p>Reserved</p>
          </div>
        </div>

        <div className="relative flex items-center pb-8">
          <div className="flex-grow border-t border-neutral-500"></div>
          <span className="flex-shrink px-4 text-red-550 border border-red-550 rounded-full">
            Screen
          </span>
          <div className="flex-grow border-t border-neutral-500"></div>
        </div>

        <div
          className={classNames(
            'flex justify-center',
            seats?.length !== 0 ? 'pb-56' : 'pb-4'
          )}
        >
          <div className="grid grid-cols-7 grid-rows-5 place-items-center gap-2 max-w-max">
            {letters.map((letter) => {
              // generate random disabled seat
              // replace with occupied code
              // or you can remove this line of code and create your own algo xdd
              // const disabledCode = `${
              //   letters[Math.floor(Math.random() * letters.length)]
              // }${numbers[Math.floor(Math.random() * numbers.length)]}`;

              return numbers.map((number) => (
                <Seat
                  key={`${letter}${number}`}
                  code={`${letter}${number}`}
                  // disabledCode={disabledCode}
                />
              ));
            })}
          </div>
        </div>
      </div>
      {seats?.length !== 0 && (
        <div
          className={classNames(
            'bg-neutral-800 w-full fixed bottom-0 p-4 overflow-hidden min-h-screen',
            'transition-all',
            seatWindow ? 'translate-y-0' : 'translate-y-3/4'
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-2xl">Seat Orders:</h3>
            <button
              className="h-max"
              onClick={() => setSeatWindow(!seatWindow)}
            >
              {seatWindow ? (
                <ChevronDownIcon className="w-6 h-6 text-red-550 " />
              ) : (
                <ChevronUpIcon className="w-6 h-6 text-red-550 " />
              )}
            </button>
          </div>
          <div
            className={classNames(
              'overflow-y-scroll snap-y mb-4',
              seatWindow ? 'max-h-max' : 'max-h-20'
            )}
          >
            {seats?.map((seat, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <span className="text-3xl font-bold">{seat.code}</span>
                  <span>{seat.date} -</span>
                  <span>{seat.time}</span>
                </div>
                <button className="h-max" onClick={() => removeSeat(seat)}>
                  <XIcon className="w-6 h-6 text-red-550" />
                </button>
              </div>
            ))}
          </div>
          <button className="float-right text-white px-4 py-2 bg-red-550 rounded-md">
            Submit Order
          </button>
        </div>
      )}
    </div>
  );
}

const Seat = React.memo(
  ({ code, disabledCode }: { code: string; disabledCode?: string }) => {
    const { seats, time, date, addSeat, removeSeat } = useSeats();
    const selected = seats?.find((seat) => seat.code === code);

    return (
      <button
        onClick={() => {
          if (selected) {
            removeSeat({ code, time, date });
          } else {
            addSeat({ code, time, date });
          }
        }}
        disabled={disabledCode === code}
        className={classNames(
          'rounded-t-md aspect-video h-6  text-xs',
          'disabled:bg-neutral-500',
          selected ? 'bg-red-550 text-white' : 'bg-white text-black'
        )}
      >
        {code}
      </button>
    );
  }
);
