import Pagination from "@/components/atoms/Pagination";
import Filters from "@/components/molecules/listing/Filters";
import MovieCard from "@/components/molecules/MovieCard";
import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";
import { TMaterialTupleType } from "@/Types/MaterialTupleType";
import TMaterialToLoad from "@/Types/TMaterialToLoad";
import { memo } from "react";

/**
 * Renders a list of movie cards with pagination.
 *
 * @param multimediaContent - An array of multimedia content items of type `TMaterialTupleType`.
 * @param pagesTotal - The total number of pages for the pagination.
 * @param currentPage - The current page number for the pagination.
 * @param mediaType - The type of media content (e.g., "movieList" or "tvShowList").
 * @returns A React component that displays the movie list and pagination.
 */
function MovieList({ multimediaContent, pagesTotal, currentPage, mediaType }: { multimediaContent: (TMovie | TTvShow)[], pagesTotal?: number, currentPage?: number, mediaType?: TMaterialToLoad }) {
  return <div >
    <div className="container mx-auto">
      {multimediaContent ? <>
        <Filters materialType={mediaType} />
        <div className="flex flex-wrap justify-center lg:gap-0">
          {multimediaContent.map((movie) => (
            <MovieCard movie={movie as TMaterialTupleType} key={movie.id} className="md:p-2"/>
          ))}      </div> </> : ""}
    </div>
    <Pagination mediaType={mediaType} currentPage={currentPage ?? 1} totalPages={pagesTotal ?? 1} />
  </div>;
}
export default memo(MovieList)
