import { fetchMoviesListWithPagination } from "@/adapter/MovieService";
import BlackHoleLost from "@/components/organisms/layout/BlackHoleLost";
import MovieList from "@/components/organisms/listing/MovieList"
import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";
import { TMaterialTupleType } from "@/Types/MaterialTupleType"
import { TApiResponseObject } from "@/Types/TApiResponseObject";
import TMaterialToLoad from "@/Types/TMaterialToLoad"

async function Movies({ searchParams }: { searchParams: { f: TMaterialToLoad, page: number } }) {
  const { f, page } = searchParams
  
  try {
    const multimediaContent: TApiResponseObject<TMovie | TTvShow> | TMovie[] | TTvShow[] = await fetchMoviesListWithPagination(f, page, true);
    
    return (
      <div className="container m-auto">
        <h1 className="text-3xl font-bold text-white mb-4">
          {f === "movieList" ? "Movies" : "TV Series"}
        </h1>
        <div className="flex flex-wrap justify-center ">
        {"results" in multimediaContent ? (
          <MovieList
            currentPage={multimediaContent.page}
            pagesTotal={multimediaContent.total_pages}
            multimediaContent={multimediaContent.results as TMaterialTupleType[]}
            mediaType={f}
          />
        ) : (
          <MovieList
            multimediaContent={multimediaContent as TMaterialTupleType[]}
          />
        )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch material:", error);
    return (
      <div className="container m-auto">
        <BlackHoleLost />
      </div>
    );
  }
}

export default Movies
