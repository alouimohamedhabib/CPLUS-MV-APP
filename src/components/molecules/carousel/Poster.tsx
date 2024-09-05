import CImage from "@/components/atoms/CImage"
import { memo } from "react"

function Poster({ poster, alttxt }: { poster: string, alttxt: string }) {
  return (
    <>
      <CImage
        src={poster}
        alt={alttxt}
        className="relative sm:w-auto h-[600px] md:h-auto  object-cover sm:h-auto md:w-full"
      />
    </>
  )
}

export default memo(Poster)
