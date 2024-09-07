"use client"
import Details from "@/components/molecules/carousel/Details"
import Poster from "@/components/molecules/carousel/Poster"
import { TMovie } from "@/domains/entities/Movie"
import { getPosterUrl } from "@/utils/getMaterialImageUrl"
import { Carousel } from "flowbite-react";
import { memo, useMemo } from "react"

function MoviesCarousel({ movies }: { movies: TMovie[] }) {

  const carouselItems = useMemo(() => {
    return movies.map((movie) => (
      <div key={movie.id}>
        <div className="relative z-0">
          <Poster poster={getPosterUrl(movie.backdrop_path, "original")} alttxt={movie.title} />
          <Details
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            language={movie.original_language}
            id={movie.id}
          />
        </div>
      </div>
    ));
  }, [movies]);
  return (movies ? <div className="
    max-h-screen-h-header
    h-[600px] sm:h-[400px]  md:h-[400px]  lg:h-[700px]   xl:h-screen
    ">
    <Carousel pauseOnHover>
      {carouselItems}
    </Carousel>
  </div> : <></>)


}
export default memo(MoviesCarousel)
