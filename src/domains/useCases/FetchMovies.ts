
import { getMovieDetails, getPopularMovies, getPopularTvSeries } from "@/infra/apis/tmdbApi";
import { TMovie } from "../entities/Movie";
import { TTvShow } from "../entities/TvShow";
import { TApiResponseObject } from "@/Types/TApiResponseObject";
/**
 * Fetches the most popular movies from the TMDB API and returns the response data.
 *
 * @returns {Promise<TApiResponseObject>} The response data containing the popular movies.
 */
export const getTrendyMoviesUseCase: () => Promise<TApiResponseObject<TMovie>> = async () => {
  const moviesData = await getPopularMovies()
  return moviesData;
};

/**
 * Fetches the most popular TV series from the TMDB API and returns the response data.
 *
 * @returns {Promise<TApiResponseObject>} The response data containing the popular TV series.
 */
export const getTrendyTvSeriesUseCase: () => Promise<TApiResponseObject<TTvShow>> = async () => {
  const moviesData = await getPopularTvSeries()
  return moviesData;
};


export const getMovieDetailsUseCase : (movieId: string) => Promise<TApiResponseObject<TMovie>> = async (movieId) => {
  const moviesData = await getMovieDetails(movieId)
  return moviesData;
};
