import CImage from "@/components/atoms/CImage"
import { memo } from "react"

function Poster({ poster, alttxt, className }: { poster: string, alttxt: string, className?: string }) {
  return (
    <>
      <CImage
        src={poster}
        alt={alttxt}
        className={`relative sm:w-auto h-screen  object-cover md:w-full ${className}`}
      />
    </>
  )
}

export default memo(Poster)
