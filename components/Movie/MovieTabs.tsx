import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import { useSeats } from '../../hooks/useSeats';
import MovieSeats from './MovieSeats';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function MovieTabs() {
  // replace with designated schedule for cinema
  const [months] = useState([
    {
      date: 9,
      day: 'Wed',
    },
    {
      date: 10,
      day: 'Thu',
    },
    {
      date: 11,
      day: 'Fri',
    },
    {
      date: 12,
      day: 'Sat',
    },
    {
      date: 13,
      day: 'Sun',
    },
    {
      date: 14,
      day: 'Mon',
    },
    {
      date: 15,
      day: 'Tue',
    },
  ]);

  const { setSeatDate } = useSeats();

  return (
    <Tab.Group
      onChange={(index) => {
        setSeatDate(`Feb ${months[index].date} - ${months[index].day}`);
      }}
    >
      <Tab.List className="px-4 flex gap-2 overflow-x-scroll snap-x scrollbar-none">
        {months.map((schedule, idx) => (
          <Tab
            key={idx}
            className={({ selected }) =>
              classNames(
                'font-bold',
                'min-w-[4.5rem] snap-center flex flex-col justify-center items-center',
                'border-2 rounded-md',
                selected
                  ? 'border-red-550'
                  : 'text-neutral-500 border-neutral-500'
              )
            }
          >
            <span>Feb</span>
            <span className="text-4xl">{schedule.date}</span>
            <span>{schedule.day}</span>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {months.map((_, idx) => (
          <Tab.Panel key={idx}>
            <MovieTimes />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

function MovieTimes() {
  const [times] = useState([
    '10:00AM',
    '12:00PM',
    '2:00PM',
    '4:00PM',
    '6:00PM',
  ]);
  const { setSeatTime } = useSeats();

  return (
    <Tab.Group
      onChange={(index) => {
        setSeatTime(times[index]);
      }}
    >
      <Tab.List className="p-4 flex gap-2 overflow-x-scroll snap-x scrollbar-none">
        {times.map((time, idx) => (
          <Tab
            key={idx}
            className={({ selected }) =>
              classNames(
                'font-bold',
                'min-w-max px-3 snap-center flex flex-col justify-center items-center',
                'rounded-md',
                selected ? 'bg-red-550' : 'text-neutral-700 bg-neutral-500'
              )
            }
          >
            {time}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {Object.values(times).map((_, idx) => (
          <Tab.Panel key={idx}>
            <MovieSeats />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
