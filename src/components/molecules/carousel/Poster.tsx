import Image from "next/image"
import { memo } from "react"

function Poster({ poster, alttxt }: { poster: string, alttxt: string }) {
  return (
    <>
      <Image
        src={poster}
        alt={alttxt}
        width={900}
        height={500}
        className="relative w-full"
      />
    </>
  )
}

export default memo(Poster)
