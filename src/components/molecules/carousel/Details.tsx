import Button from "@/components/atoms/Button"
import { useRouter } from "next/navigation"
import { memo } from "react"
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
  const handleClick = () => {
    console.log('clicked')
    router.push(`/movie/${id}`)
  }
  return (
    <div className="absolute h-full text-white top-0 left-0 p-4 z-10 w-9/12 bg-gradient-to-r from-gray-900 to-slate-50">
      <div className="flex flex-col gap-4 h-full justify-center md:w-7/12 pl-10">
        <h2 className="text-8xl font-extrabold uppercase">{title}</h2>
        <div className="info flex flex-row gap-2 opacity-90 ">
          <span className="mr-4 uppercase font-bold text-xl flex items-center gap-2 ">
            <SlCalender className="text-md  opacity-80" />
            {release_date}
          </span>
          <span className="mr-4 uppercase font-bold text-xl flex items-center gap-2 "><SlLike className="text-md  opacity-80" />{vote_average}</span>
          <span className="mr-4 uppercase font-bold text-xl flex items-center gap-2 "><SlMicrophone className="text-md  opacity-80" />{language}</span>
        </div>
        <p className="text-gray-300 md:w-10/12">{overview}</p>
        <Button type="info" className="w-fit" label={`More details`} onClick={handleClick} />
      </div>

    </div>
  )
}

export default memo(Details)
