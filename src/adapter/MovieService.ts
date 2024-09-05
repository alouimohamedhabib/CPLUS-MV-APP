import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";
import { getMovieDetailsUseCase, getTrendyMoviesUseCase, getTrendyTvSeriesUseCase } from "@/domains/useCases/FetchMovies";
import TMaterialToLoad from "@/Types/TMaterialToLoad";
import { normalizeMovieData, normalizeTvShowData } from "./Normalizers";



/**
* Fetches movies or TV shows based on the provided target material type.
* Used with shared grid component (@link components/organisms/landing/MoviesGrid.tsx)
* @param {TMaterialToLoad} targetMaterial - The type of material to fetch, either "tv" or another value.
* @returns {Promise<TMovie[] | undefined>} A promise that resolves to an array of movie entities, or undefined if the target material is not "tv".
*/
export const fetchMaterialByType: <T extends TMaterialToLoad>(targetMaterial: T) => Promise<TMovie[] | TTvShow[] | undefined> = async (targetMaterial) => {
  switch (targetMaterial) {
    case "movieList":
      const tvShows = await fetchTrendyTvSeries();
      return tvShows;
    case "showList":
      const movies = await fetchTrendyMovies();
      return movies;
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
  return rawMovies.results.map(normalizeMovieData).slice(0, Number(process.env.NEXT_PUBLIC_TRENDY_MOVIES_CAROUSEL_SLIDES) || 8);
};


export const fetchMovieDetails =  async (movieId: string): Promise<TMovie> => {
  const rawMovie = await getMovieDetailsUseCase(movieId)
  return normalizeMovieData(rawMovie);
};
