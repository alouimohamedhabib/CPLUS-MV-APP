import { fetchMaterialByType, fetchTrendyTvSeries } from "@/adapter/MovieService";
import MovieCard from "@/components/molecules/MovieCard";
import { TMovie } from "@/domains/entities/Movie";
import TMaterialToLoad from "@/Types/TMaterialToLoad";
import { memo } from "react";


async function MoviesGrid<T extends TMaterialToLoad>({ target }: { target: T }) {
  const tvSeries = await fetchMaterialByType(target)

  return <div className="">
    <h2 className="block text-3xl flex-1  text-white">
      Trending tv shows
    </h2>
    <div className="flex flex-wrap w-full  mx-auto">
      {tvSeries?.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  </div>;
}

export default memo(MoviesGrid)
