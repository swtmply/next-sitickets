import Image from 'next/image';
import React from 'react';
import {
  PlusIcon,
  InformationCircleIcon,
  TicketIcon,
  HomeIcon,
  SearchIcon,
  MenuIcon,
  VideoCameraIcon,
  CollectionIcon,
} from '@heroicons/react/outline';

import {
  HomeIcon as HomeIconSolid,
  VideoCameraIcon as VideoCameraSolid,
  TicketIcon as TicketIconSolid,
} from '@heroicons/react/solid';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="relative">
      <div className="min-h-[70vh] w-screen relative">
        <Image
          src="/poster.jpg"
          layout="fill"
          objectFit="cover"
          alt="Cover Poster"
        />

        <div className="absolute inset-0 text-white shadow-cover flex flex-col justify-between">
          <div className="flex justify-between items-center p-4">
            <Image
              src="/siticket-logo.svg"
              width={75}
              height={75}
              alt="SI Ticket logo"
            />

            <div className="flex gap-6">
              <p>Movies</p>
              <p>Showing</p>
              <p>My List</p>
            </div>
          </div>

          <div className="self-center">
            <Image
              src="/poster-logo.png"
              width={350}
              height={180}
              alt="SI Ticket logo"
            />

            {/* Categories */}
            <div className="flex justify-center items-center pb-2">
              <p>Horror</p>
              <div className="bg-white rounded-full w-1 h-1 mx-2" />
              <p>Superhero</p>
              <div className="bg-white rounded-full w-1 h-1 mx-2" />
              <p>Adventure</p>
              <div className="bg-white rounded-full w-1 h-1 mx-2" />
              <p>Fantasy</p>
            </div>

            <div className="flex justify-between items-center pb-8">
              <div className="flex flex-col items-center">
                <PlusIcon className="w-6 h-6" />
                <p>My List</p>
              </div>
              <div className="flex items-center gap-2 text-black px-4 py-2 bg-white rounded-md">
                <TicketIcon className="w-6 h-6" />
                <p className="font-bold">Reserve Ticket</p>
              </div>
              <div className="flex flex-col items-center">
                <InformationCircleIcon className="w-6 h-6" />
                <p>Info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
