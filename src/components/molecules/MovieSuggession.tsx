import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TMovie } from '@/domains/entities/Movie';
import MovieLinkOptimizer from '@/utils/MovieLinkOptimizer';
import { useRouter } from 'next/navigation';


interface MovieSuggestionProps {
  movies: TMovie[];
}

function MovieSuggestion({ movies, resetOnClick }: { movies: TMovie[], resetOnClick: () => void }) {

  const router = useRouter();
  const navigateToMovie = (movie: TMovie) => {
    resetOnClick()
    router.push(`/movie/${MovieLinkOptimizer(movie.original_title, movie.id, movie.release_date, true)}`)

  }
  return (
    <ul className="bg-white text-black h-3/4 overflow-y-scroll scrollbar-hide p-4 md:w-[600px] max-w-full">
      {movies.map((movie) => (
        <li key={movie.id} className="cursor-pointer">
          <div onClick={() => navigateToMovie(movie)}
            className='
            mt-2 text-black flex flex-row gap-2 mb-4
           bg-gray-50 border border-gray-150 p-2 rounded 
           hover:bg-gray-200
           '>
            <div className="w-2/12">
              <Image
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} poster`}
                width={100}
                height={100}
                className='rounded-md w-full'
              />
            </div>
            <div className="w-10/12 pl-2">
              <h3 className='text-xl font-bold   text-slate-700 font-400'>{movie.title}</h3>
              <span className='text-gray-600 italic text-xs'>
                {movie.release_date} | {movie.original_language.toUpperCase()}
              </span>
              <p className='text-sm  text-slate-600'>{movie.overview.slice(0, 150)}...</p>
            </div>
          </div>

        </li>
      ))}
    </ul>
  );
};


export default memo(MovieSuggestion)
