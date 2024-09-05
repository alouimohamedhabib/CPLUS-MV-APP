"use client"
import { TMaterialTupleType } from "@/Types/MaterialTupleType";
import Image from "next/image";
import { memo } from "react";
import { BiSolidMicrophone } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import Button from "../atoms/Button";
import Link from "next/link";
import MovieLinkOptimizer from "@/utils/MovieLinkOptimizer";
import CImage from "../atoms/CImage";
import { getPosterUrl } from "@/utils/getMaterialImageUrl";
;

/**
 * A React component that renders a movie card with details about a movie.
 *
 * @param {object} props - The component props.
 * @param {TMaterialTupleType} props.movie - The movie data to display.
 * @param {'3' | '4' | '6'} [props.cardWidth] - The width of the movie card, expressed as a fraction of the total width (e.g. '3' for 3/12 width).
 * @returns {JSX.Element} - The rendered movie card component.
 */
function MovieCard({ movie, cardWidth = "3" }: { movie: TMaterialTupleType, cardWidth?: "3" | "4" | "6" }) {

  const movieUrl = MovieLinkOptimizer(movie.title ?? movie.original_name, movie.id, movie.release_date ?? movie.first_air_date);

  return <>
    {movie ?
      <Link href={`movie/${movieUrl}`} className={
        `movie-card 
        w-full
        md:w-6/12
         ${'lg:w-' + cardWidth + '/12'} overflow-hidden relative
        hover:scale-95
        hover:-skew-x-1
        hover:z-40
        transition-transform duration-300 ease-in-out
        group
        cursor-pointer
      `}>
        <CImage
          height={300}
          width={300}
          src={getPosterUrl(movie.poster_path, "original")}
          alt={movie.original_title ?? movie.original_name}
          className="w-full group-hover:rounded-xl"
        />
        <div className="
          flex flex-col  align-text-bottom floating-info 
          absolute md:opacity-0 bottom-0 h-3/4  left-0 right-0  text-white md:p-2
          bg-gradient-to-t from-black to-transparent
          justify-end
          transition-all duration-300 ease-linear
          group-hover:opacity-100
          group-hover:rounded-md
          p-4
        ">
          <div className="text-sm font-extrabold text-gray-400  ">
            <p className="mr-2"><SlCalender className="text-md mr-1 inline " /> {movie.release_date ?? movie.first_air_date}</p>
            <p className="uppercase mr-2"><BiSolidMicrophone className="text-md   inline mr-2 " />{movie.original_language}</p>
          </div>
          <h3 className="text-3xl font-bold  my-2">{movie.original_title ?? movie.original_name}</h3>
          <p>{movie.overview.slice(0, 100)}...</p>
          <Button label={"More details"} className="w-fit my-4" onClick={() => { }}></Button>
        </div>
      </Link>
      : ""}
  </>
}
export default memo(MovieCard)
