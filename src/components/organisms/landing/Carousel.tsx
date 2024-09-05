"use client"
import Details from "@/components/molecules/carousel/Details"
import Poster from "@/components/molecules/carousel/Poster"
import { TMovie } from "@/domains/entities/Movie"
import { getPosterUrl } from "@/utils/getMaterialImageUrl"
import { Carousel } from "@material-tailwind/react"
import Image from "next/image"
import { lazy, memo } from "react"

function MoviesCarousel({ movies }: { movies: TMovie[] }) {

  return (
    <Carousel
      autoplay={false}
      autoplayDelay={5000}
      transition={{
        type: "tween",
        duration: 1,
      }}
      loop={true}
      className="carousel sm:h-auto max-h-screen-h-header overflow-hidden ">
      {movies.map((movie, index) => (
        <div key={movie.id}>
          <div className="relative z-0">
            <Details
              title={movie.title}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              language={movie.original_language}
              id={movie.id}
            />
            <Poster poster={getPosterUrl(movie.backdrop_path, "original")} alttxt={movie.title} />

          </div>
        </div>

      ))}    </Carousel>)

  {/*  */ }



}
export default memo(MoviesCarousel)
