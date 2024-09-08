import Link from "next/link"
import { GiBrokenBottle } from "react-icons/gi"

function BlackHoleLost() {
  return <div className="flex">
    <div className="w-full flex flex-col items-center justify-center">
      <GiBrokenBottle className="w-36 h-36 text-gray-600  p-4" />
      <span className="text-3xl font-extrabold mx-4 text-center ">Zut! Were lost!</span>
      <span className="text-gray-500 mt-2">Page isnt available or maybe we are cooking something!</span>
      <Link href="/" className="text-blue-500 mt-2">Go back home</Link>
    </div>
  </div>
}
export default BlackHoleLost
