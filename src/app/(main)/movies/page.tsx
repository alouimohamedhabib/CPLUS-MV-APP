import { fetchMoviesListWithPagination } from "@/adapter/MovieService";
import BlackHoleLost from "@/components/organisms/layout/BlackHoleLost";
import MovieList from "@/components/organisms/listing/MovieList"
import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";
import { TApiResponseObject } from "@/Types/TApiResponseObject";
import TMaterialToLoad from "@/Types/TMaterialToLoad"
import { filterCriteria } from "@/utils/filterCriteria";

async function Movies({ searchParams }: { searchParams: { f: TMaterialToLoad , page: number, sort_by: typeof filterCriteria[number]["queryKey"], language: typeof filterCriteria[number]["options"][number]["value"] } }) {
  const { f, page, sort_by, language } = searchParams
  const filters = `sort_by=${sort_by}&language=${language}`;
  try {
    const multimediaContent: TApiResponseObject<TMovie | TTvShow> | TMovie[] | TTvShow[] = await fetchMoviesListWithPagination(f, page, true, filters);
    const finalMultimediaContent = "results" in multimediaContent ? multimediaContent.results : multimediaContent;
    return (
      <div className="container m-auto p-4">
        <h1 className="text-3xl font-bold text-white mb-4">
          {f === "movieList" ? "Movies" : "TV Series"}
        </h1>
        <div className="flex flex-wrap justify-center ">
          <MovieList
            currentPage={"results" in multimediaContent ? multimediaContent.page : undefined}
            pagesTotal={"results" in multimediaContent ? multimediaContent.total_pages : undefined}
            multimediaContent={finalMultimediaContent}
            mediaType={f}
          />
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
