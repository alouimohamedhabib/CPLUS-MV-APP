"use client"
import CImage from "@/components/atoms/CImage"
import { Season } from "@/domains/entities/TvShow"
import { getPosterUrl } from "@/utils/getMaterialImageUrl"
import MovieLinkOptimizer from "@/utils/MovieLinkOptimizer"
import 'react-multi-carousel/lib/styles.css';
import Link from "next/link"
import { memo } from "react"
import Carousel from "react-multi-carousel";
function Seasons({ seasons }: { seasons: Season[] }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 5
    },
    tabletb: {
      breakpoint: { max: 1600, min: 1280 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 786 },
      items: 3
    },
    tabletd: {
      breakpoint: { max: 767, min: 465 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="overflow-x-auto">
      <h3 className="text-3xl mt-4 mb-4">
        Seasons
      </h3>
      <Carousel responsive={responsive} ssr={true} autoPlay autoPlaySpeed={3000}>
        {seasons.map(season => (
          season.poster_path && <div key={season.id} className="flex-shrink-0 w-48">
            {season.poster_path && (
              <CImage
                src={`${getPosterUrl(season.poster_path)}`}
                alt={`${season.name} poster`}
                className="w-full h-auto rounded-md"
              />
            )}
            <h3 className="mt-2 text-lg font-semibold">{season.name}</h3>
            <p>Year: {season.air_date ? new Date(season.air_date).getFullYear() : 'N/A'}</p>
            <p>Episodes: {season.episode_count}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default memo(Seasons)
