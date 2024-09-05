import Button from "@/components/atoms/Button"
import AverageRatesRounder from "@/utils/AverageRatesRounder"
import MovieLinkOptimizer from "@/utils/MovieLinkOptimizer"
import { useRouter } from "next/navigation"
import { memo, useCallback } from "react"
import { SlCalender, SlLike, SlMicrophone } from "react-icons/sl"

function Details({
  title,
  overview,
  release_date,
  vote_average,
  language,
  id
}: { title: string, overview: string, release_date: string, vote_average: number, language: string, id: number }) {
  const router = useRouter()
  const movieUrl = MovieLinkOptimizer(title, id, release_date)
  const handleClick = () => {
    router.push(`/movie/${movieUrl}`)
  }


  return (
    <div className="absolute h-full text-white pb-20 md:top-0 left-0 p-4 z-10 w-full lg:w-9/12 
    md:bg-gradient-to-r md:from-gray-900 md:to-slate-50
    bg-gradient-to-t from-blue-gray-900 to-slate-500
    ">
      <div className="flex flex-col gap-4 h-full justify-end md:justify-center w-11/12 lg:w-7/12 pl-10">
        <h2 className=" text-4xl lg:text-6xl  xl:text-8xl font-extrabold uppercase">{title}</h2>
        <div className="info flex flex-row gap-2 opacity-90 md:text-xl text-md   ">
          <span className="mr-4 uppercase font-bold  flex items-center gap-2 ">
            <SlCalender className="  opacity-80" />
            {release_date}
          </span>
          <span className="mr-4 uppercase font-bold flex items-center gap-2 "><SlLike className="text-md  opacity-80" />{AverageRatesRounder(vote_average)}</span>
          <span className="mr-4 uppercase font-bold flex items-center gap-2 "><SlMicrophone className="text-md  opacity-80" />{language}</span>
        </div>
        <p className="text-gray-300 lg:w-10/12">{overview}</p>
        <Button type="info" className="w-fit mt-2" label={`More details`} onClick={handleClick} />
      </div>
    </div>
  )
}

export default memo(Details)
