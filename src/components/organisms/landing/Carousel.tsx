"use client"
import Details from "@/components/molecules/carousel/Details"
import Poster from "@/components/molecules/carousel/Poster"
import { TMovie } from "@/domains/entities/Movie"
import { getPosterUrl } from "@/utils/getMaterialImageUrl"
import Carousel from "react-multi-carousel";
import { memo, useMemo } from "react"
import responsiveCarousel from "@/utils/CarouselReponsiveConfig"
import 'react-multi-carousel/lib/styles.css';

function MoviesCarousel({ movies }: { movies: TMovie[] }) {

  const carouselItems = useMemo(() => {
    return movies.slice(0, 1).map((movie) => (
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


  return (movies ?
    <Carousel
      className="home-carousel"
      arrows={true}
      responsive={{
        all: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        }
      }} pauseOnHover ssr={true} autoPlay autoPlaySpeed={3000}>
      {carouselItems}
    </Carousel>
    : <></>)


}
export default memo(MoviesCarousel)
