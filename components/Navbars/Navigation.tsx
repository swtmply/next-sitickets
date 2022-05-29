import Link from 'next/link';

export function Navigation() {
  return (
    <div className="hidden md:flex gap-2 items-center">
      <div className="flex gap-2">
        <Link href="/" passHref>
          <a className="py-2 px-5">Home</a>
        </Link>
        <Link href="/movies" passHref>
          <a className="py-2 px-5">Movies</a>
        </Link>
        <Link href="/movies/featured" passHref>
          <a className="py-2 px-5">Featured</a>
        </Link>
      </div>
      <div className="h-5 w-[2px] bg-grey-200 mr-5" />
      <div>
        <button className="px-7 py-1 bg-crimson-200 hover:bg-crimson-300 rounded-sm uppercase text-sm font-semibold">
          Login
        </button>
      </div>
    </div>
  );
}
