
import { getMovieDetails, getPopularMovies, getPopularTvSeries, searchMovies } from "@/infra/apis/tmdbApi";
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


export const getMovieDetailsUseCase : (movieId: string) => Promise<TMovie> = async (movieId) => {
  const moviesData = await getMovieDetails(movieId)
  return moviesData;
};

export const searchMoviesUseCase : (keyword: string) => Promise<TApiResponseObject<TMovie>> = async (keyword) => {
  const moviesData = await searchMovies(keyword)
  return moviesData;
};
