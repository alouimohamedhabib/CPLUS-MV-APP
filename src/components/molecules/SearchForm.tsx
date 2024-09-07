import { TMovie } from "@/domains/entities/Movie"
import Loader from "../atoms/Loader"

function SearchForm({ callback, suggestions, isLoading }: {
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void,
  suggestions?: TMovie[] | undefined,
  isLoading?: boolean
}) {
  return <div className="relative w-full md:w-[600px]">
    <input type="search" placeholder="Interstellar ..." className="p-4   rounded text-black border w-full " onChange={callback} />
    <div className="absolute  top-0 bottom-0  right-4 flex justify-end items-center">
      {isLoading && <Loader />}
    </div>
  </div>
}


export default SearchForm
