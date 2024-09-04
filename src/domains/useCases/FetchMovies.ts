
import { getPopularMovies } from "@/infra/apis/tmdbApi";
import { TMovieReponseObject } from "../entities/Movie";
/**
 * Fetches the most popular movies from the TMDB API and returns the response data.
 *
 * @returns {Promise<TMovieReponseObject>} The response data containing the popular movies.
 */

export const getTrendyMoviesUseCase: () => Promise<TMovieReponseObject> = async () => {
  const moviesData = await getPopularMovies()
  return moviesData;
};
