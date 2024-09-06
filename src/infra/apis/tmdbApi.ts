// Helper function to fetch popular movies from the TMDB API using fetch
import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";
import { TApiResponseObject } from "@/Types/TApiResponseObject";
import Endpoints from "@/utils/Endpoints.json";

/**
 * Fetches the list of popular movies from the TMDB API.
 *
 * @param page - The page number to fetch. If not provided, the first page will be fetched.
 * @returns A promise that resolves to the API response object containing the list of popular movies.
 */

export const getPopularMovies: (page?: number) => Promise<TApiResponseObject<TMovie>> = async (page) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `${apiBaseUrl}${Endpoints.TRENDING}?api_key=${apiKey}${page ? `&page=${page}` : ''}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies from TMDB:', error);
    throw error;
  }
};

/**
 * Fetches the list of popular TV series from the TMDB API.
 *
 * @param page - The page number to fetch. If not provided, the first page will be fetched.
 * @returns A promise that resolves to the API response object containing the list of popular TV series.
 */
export const getPopularTvSeries: (page?: number) => Promise<TApiResponseObject<TTvShow>> = async (page) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `${apiBaseUrl}${Endpoints.POPULAR_SERIES}?api_key=${apiKey}${page ? `&page=${page}` : ''}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies from TMDB:', error);
    throw error;
  }
};
/**
 * Fetches the details of a movie from the TMDB API using the provided movie ID.
 *
 * @param movieId - The ID of the movie to fetch details for.
 * @returns A Promise that resolves to the movie details from the TMDB API.
 */

export const getMovieDetails = async (movieId: string) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `${apiBaseUrl}${Endpoints.DETAILS_MOVIES}/${movieId}?api_key=${apiKey}`;
  console.log("🔥🔥🔥",url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return []
      //      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies from TMDB:', error);
    throw error;
  }
};


/**
 * Searches for movies on The Movie Database (TMDB) API using the provided keyword.
 *
 * @param keyword - The search keyword to use for the movie search.
 * @returns A Promise that resolves to the search results from the TMDB API.
 */
export const searchMovies = async (keyword: string) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `${apiBaseUrl}${Endpoints.SEARCH_MOVIES}?api_key=${apiKey}&query=${keyword}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies from TMDB:', error);
    throw error;
  }
};



export const getTvShowDetails = async (movieId: string): Promise<TTvShow| null> => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `${apiBaseUrl}${Endpoints.DETAILS_TVSHOW}/${movieId}?api_key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null
      //      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies from TMDB:', error);
    throw error;
  }
};

