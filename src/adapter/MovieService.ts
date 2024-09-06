import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";
import { getMovieDetailsUseCase, getTrendyMoviesUseCase, getTrendyTvSeriesUseCase, getTvShowDetailsUseCase, searchMoviesUseCase } from "@/domains/useCases/FetchMovies";
import TMaterialToLoad from "@/Types/TMaterialToLoad";
import { normalizeMovieData, normalizeTvShowData } from "./Normalizers";
import { TApiResponseObject } from "@/Types/TApiResponseObject";



/**
* Fetches movies or TV shows based on the provided target material type.
* Used with shared grid component (@link components/organisms/landing/MoviesGrid.tsx)
* @param {TMaterialToLoad} targetMaterial - The type of material to fetch, either "tv" or another value.
* @returns {Promise<TMovie[] | undefined>} A promise that resolves to an array of movie entities, or undefined if the target material is not "tv".
*/
export const fetchMaterialByType: <T extends TMaterialToLoad>(targetMaterial: T) => Promise<TMovie[] | TTvShow[] | undefined> = async (targetMaterial) => {
  switch (targetMaterial) {
    case "movieList":
      const movies = await fetchTrendyMovies();
      return movies;
    case "showList":
      const tvShows = await fetchTrendyTvSeries();
      return tvShows;
    default:
      return undefined;
  }
}

export const fetchTrendyTvSeries: () => Promise<TTvShow[]> = async () => {
  const rawMovies = await getTrendyTvSeriesUseCase()
  return rawMovies.results.map(normalizeTvShowData).slice(0, Number(process.env.NEXT_PUBLIC_TRENDY_MOVIES_CAROUSEL_SLIDES) || 8);
};


/**
 * Fetches a list of trending movies.
 * @returns {Promise<TMovie[]>} A promise that resolves to an array of movie entities.
 */
export const fetchTrendyMovies: () => Promise<TMovie[]> = async () => {
  const rawMovies = await getTrendyMoviesUseCase()
  return rawMovies.results.map(normalizeMovieData).slice(0, Number(process.env.NEXT_PUBLIC_TRENDY_MOVIES_CARDOUSEL_SLIDES) || 8);
};

/**
 * Fetches the details of a movie by its ID.
 * @param {string} movieId - The ID of the movie to fetch.
 * @returns {Promise<TMovie>} A promise that resolves to the movie entity.
 */
export const fetchMovieDetails = async (movieId: string): Promise<TMovie> => {
  const rawMovie = await getMovieDetailsUseCase(movieId)
  return normalizeMovieData(rawMovie);
}
/**
 * Fetches the details of a TV show by its ID.
 * @param {string} movieId - The ID of the TV show to fetch.
 * @returns {Promise<TTvShow>} A promise that resolves to the TV show entity.
 */
export const fetchTvShowDetails = async (movieId: string): Promise<TTvShow| null> => {
  const rawMovie = await getTvShowDetailsUseCase(movieId)
  if (rawMovie )
    return normalizeTvShowData(rawMovie);
  return rawMovie
}

/**
 * Searches for movies based on the provided keyword.
 * @param {string} keyword - The search keyword.
 * @returns {Promise<TApiResponseObject<TMovie>>} A promise that resolves to the API response object containing the search results.
 */
export const searchMovies: (keyword: string) => Promise<TApiResponseObject<TMovie>> = async (keyword) => {
  const moviesData = await searchMoviesUseCase(keyword);
  return moviesData;
}

/**
 * Fetches a list of movies or TV shows with pagination, based on the provided material type.
 * @param {TMaterialToLoad} materialToLoad - The type of material to fetch, either "movieList" or "showList".
 * @param {number} page - The page number to fetch.
 * @param {boolean} [rawResponse=false] - If true, returns the raw API response object. Otherwise, returns the normalized data.
 * @returns {Promise<TApiResponseObject<TMovie | TTvShow> | TMovie[] | TTvShow[]>} A promise that resolves to the fetched movies or TV shows, or the raw API response object.
 */
export const fetchMoviesListWithPagination: (materialToLoad: TMaterialToLoad, page: number, rawResponse?: boolean) => Promise<TApiResponseObject<TMovie | TTvShow> | TMovie[] | TTvShow[]>
  = async (materialToLoad, page, rawResponse = false) => {
    const moviesData = materialToLoad === "movieList" ? await getTrendyMoviesUseCase(page) : await getTrendyTvSeriesUseCase(page);
    if (rawResponse) return moviesData;

    return materialToLoad === "movieList"
      ? (moviesData.results as TMovie[]).map(normalizeMovieData)
      : (moviesData.results as TTvShow[]).map(normalizeTvShowData);
  }
