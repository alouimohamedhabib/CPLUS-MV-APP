"use client"
import Details from "@/components/molecules/carousel/Details"
import Poster from "@/components/molecules/carousel/Poster"
import { TMovie } from "@/domains/entities/Movie"
import { getPosterUrl } from "@/utils/getMaterialImageUrl"
import { Carousel } from "flowbite-react";
import { memo } from "react"

function MoviesCarousel({ movies }: { movies: TMovie[] }) {

  return (
    <div className="
    max-h-screen-h-header
    h-[600px] sm:h-[400px]  md:h-[400px]  lg:h-[700px]   xl:h-screen
    ">
      <Carousel pauseOnHover>
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

        ))}
      </Carousel>
    </div>
  )

  {/*  */ }



}
export default memo(MoviesCarousel)
