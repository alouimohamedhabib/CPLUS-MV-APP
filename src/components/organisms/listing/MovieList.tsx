import Pagination from "@/components/atoms/Pagination";
import MovieCard from "@/components/molecules/MovieCard";
import { TMaterialTupleType } from "@/Types/MaterialTupleType";
import TMaterialToLoad from "@/Types/TMaterialToLoad";
import { memo } from "react";

/**
 * Renders a list of movie cards with pagination.
 *
 * @param multimediaContent - An array of multimedia content items of type `TMaterialTupleType`.
 * @param pagesTotal - The total number of pages for the pagination.
 * @param currentPage - The current page number for the pagination.
 * @returns A React component that displays the movie list and pagination.
 */
function MovieList({ multimediaContent, pagesTotal, currentPage, mediaType }: { multimediaContent: TMaterialTupleType[], pagesTotal?: number, currentPage?: number , mediaType?: TMaterialToLoad}) {
  return <div >
    <div className="flex flex-wrap justify-center lg:gap-8">
      {multimediaContent?.map((movie) => (
        <MovieCard movie={movie as TMaterialTupleType} key={movie.id} />
      ))}
    </div>
    <Pagination mediaType={mediaType} currentPage={currentPage ?? 1} totalPages={pagesTotal ?? 1} />
  </div>;
}
export default memo(MovieList)
