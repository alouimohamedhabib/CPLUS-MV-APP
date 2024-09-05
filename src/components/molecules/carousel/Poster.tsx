import Image from "next/image"
import { memo } from "react"

function Poster({ poster, alttxt }: { poster: string, alttxt: string }) {
  return (
    <>
      <Image
      
        loading="lazy"
        src={poster}
        alt={alttxt ?? "poster"}
        width={900}
        height={500}
        className="relative sm:w-auto h-[600px] md:h-auto  object-cover sm:h-auto md:w-full"
      />
    </>
  )
}

export default memo(Poster)
