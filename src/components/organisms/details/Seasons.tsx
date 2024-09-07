"use client"
import CImage from "@/components/atoms/CImage"
import { Season } from "@/domains/entities/TvShow"
import { getPosterUrl } from "@/utils/getMaterialImageUrl"
import 'react-multi-carousel/lib/styles.css';
import { memo } from "react"
import Carousel from "react-multi-carousel";
import responsiveCarousel from "@/utils/CarouselReponsiveConfig"
function Seasons({ seasons }: { seasons: Season[] }) {

  return (
    <div className="overflow-x-auto">
      <h3 className="text-3xl mt-4 mb-4">
        Seasons ({seasons.length})
      </h3>
      <Carousel responsive={responsiveCarousel} ssr={true} autoPlay autoPlaySpeed={3000}>
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
