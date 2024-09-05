import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";
import { TMaterialTupleType } from "@/Types/MaterialTupleType";
import Image from "next/image";
import { memo } from "react";
import { BiSolidMicrophone } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

function MovieCard({ movie, cartWidth = "3" }: { movie: TMaterialTupleType, cartWidth?: "3" | "4" | "6" }) {
  return <>
    {movie ?
      <div className={
        `movie-card ${'w-' + cartWidth + '/12'} overflow-hidden relative
        hover:scale-95
        hover:-skew-x-1
        hover:z-40
        transition-transform duration-300 ease-in-out
        group
        cursor-pointer
      `}>
        <Image height={300} width={300} objectFit="cover" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
          className="w-full group-hover:rounded-xl"
        />
        <div className="
          flex flex-col  align-text-bottom floating-info 
          absolute opacity-90 bottom-0 h-3/4  left-0 right-0  text-white p-6
          bg-gradient-to-t from-black to-transparent
          justify-end
          transition-all duration-300 ease-linear
         group-hover:opacity-100
         group-hover:rounded-md
        
        ">
          <p className="text-sm text-gray-400 flex items-center">
            <span className="mr-2"><SlCalender className="text-md mr-1" /> {movie.release_date ?? movie.first_air_date}</span>
            <span className="uppercase mr-2"><BiSolidMicrophone className="text-md   inline mr-2 " />{movie.original_language}</span>
          </p>
          <h3 className="text-3xl font-bold  my-2">{movie.original_title ?? movie.original_name}</h3>
          <p>{movie.overview.slice(0, 100)}...</p>


        </div>
      </div>
      : ""}
  </>
}

export default memo(MovieCard)
