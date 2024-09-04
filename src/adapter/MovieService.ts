import { TMovie, TMovieReponseObject } from "@/domains/entities/Movie";
import { getTrendyMoviesUseCase } from "@/domains/useCases/FetchMovies";


// Pure function to transform raw movie data into Movie entity (aka normalizer)
// TODO return the needed elements only
export const normalizeMovieData = (movieRawData: TMovie): TMovie => movieRawData;

/**
 * Fetches a list of trending movies.
 * @returns {Promise<TMovie[]>} A promise that resolves to an array of movie entities.
 */
export const fetchTrendyMovies: () => Promise<TMovie[]> = async () => {
  const rawMovies = await getTrendyMoviesUseCase()
  return rawMovies.results.map(normalizeMovieData).slice(0, Number(process.env.NEXT_PUBLIC_TRENDY_MOVIES_CAROUSEL_SLIDES) || 5);
};
