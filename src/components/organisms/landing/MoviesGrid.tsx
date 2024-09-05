import { fetchMaterialByType } from "@/adapter/MovieService";
import MovieCard from "@/components/molecules/MovieCard";
import { TMaterialTupleType } from "@/Types/MaterialTupleType";
import TMaterialToLoad from "@/Types/TMaterialToLoad";
import Link from "next/link";
import { memo } from "react";
import { SlArrowRight } from "react-icons/sl";


/**
 * Sahred component
 * Renders a grid of movie cards based on the provided material type and header title.
 * @param target - The type of material to fetch and display (e.g. TV series).
 * @param headerTitle - The title to display above the grid of movie cards.
 * @returns A React element containing the grid of movie cards.
 */
async function MoviesGrid<T extends TMaterialToLoad>({ target, headerTitle }: { target: T, headerTitle: string }) {
  const multimediaContent = await fetchMaterialByType(target)

  return <>
    {
      multimediaContent ?
        <>
          <div className="flex flex-wrap items-center justify-between">
            <h2 className="block text-2xl flex-1  text-white py-4 font-light">
              {headerTitle}
            </h2>
            <Link href={"#"}>See more <SlArrowRight className="inline" /></Link>
          </div>
          <div className="flex flex-wrap ">
            {multimediaContent?.map((movie) => (
              <MovieCard movie={movie as TMaterialTupleType} key={movie.id} />
            ))}
          </div>
        </>
        : <></>
    }
  </>;
}

export default memo(MoviesGrid)
