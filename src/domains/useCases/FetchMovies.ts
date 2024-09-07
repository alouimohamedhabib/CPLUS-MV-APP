
import { getMovieDetails, getPopularMovies, getPopularTvSeries, getTvShowDetails, searchMovies } from "@/infra/apis/tmdbApi";
import { TMovie } from "../entities/Movie";
import { TTvShow } from "../entities/TvShow";
import { TApiResponseObject } from "@/Types/TApiResponseObject";
/**
 * Fetches the most popular movies from the TMDB API and returns the response data.
 *
 * @param {number} [page=1] - The page number to fetch. Defaults to 1 if not provided.
 * @param {string} [filters=''] - Additional filters to apply to the movie search. Defaults to an empty string if not provided.
 * @returns {Promise<TApiResponseObject<TMovie>>} The response data containing the popular movies.
 */

export const getTrendyMoviesUseCase: (page?: number, filters?: string) => Promise<TApiResponseObject<TMovie>> = async (page = 1, filters = '') => {
  const moviesData = await getPopularMovies(page, filters)
  return moviesData;
};

/**
 * Fetches the most popular TV series from the TMDB API and returns the response data.
 *
 * @returns {Promise<TApiResponseObject>} The response data containing the popular TV series.
 */
export const getTrendyTvSeriesUseCase: (page?: number, filters?: string) => Promise<TApiResponseObject<TTvShow>> = async (page, filters) => {
  const moviesData = await getPopularTvSeries(page,filters)
  return moviesData;
};


/**
 * Fetches the details of a movie from the TMDB API and returns the response data.
 *
 * @param {string} movieId - The ID of the movie to fetch details for.
 * @returns {Promise<TMovie>} The response data containing the movie details.
 */
export const getMovieDetailsUseCase: (movieId: string) => Promise<TMovie> = async (movieId) => {
  const moviesData = await getMovieDetails(movieId)
  return moviesData;
};
/**
 * Fetches the details of a TV show from the TMDB API and returns the response data.
 *
 * @param {string} movieId - The ID of the TV show to fetch details for.
 * @returns {Promise<TApiResponseObject<TTvShow> | null>} The response data containing the TV show details, or null if the request fails.
 */
export const getTvShowDetailsUseCase: (movieId: string) => Promise<TTvShow | null> = async (movieId) => {
  const moviesData = await getTvShowDetails(movieId)
  return moviesData;
};

/**
 * Searches for movies using the provided keyword and returns the response data.
 *
 * @param {string} keyword - The keyword to search for movies.
 * @returns {Promise<TApiResponseObject<TMovie>>} The response data containing the search results.
 */
export const searchMoviesUseCase: (keyword: string) => Promise<TApiResponseObject<TMovie>> = async (keyword) => {
  const moviesData = await searchMovies(keyword)
  return moviesData;
};
