// Helper function to fetch popular movies from the TMDB API using fetch
import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";
import { TApiResponseObject } from "@/Types/TApiResponseObject";
import Endpoints from "@/utils/Endpoints.json";
export const getPopularMovies: () => Promise<TApiResponseObject<TMovie>> = async () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `${apiBaseUrl}${Endpoints.TRENDING}?api_key=${apiKey}&`;
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

export const getPopularTvSeries: () => Promise<TApiResponseObject<TTvShow>> = async () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `${apiBaseUrl}${Endpoints.POPULAR_SERIES}?api_key=${apiKey}&`;
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

export const getMovieDetails = async (movieId: string) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `${apiBaseUrl}movie/${movieId}?api_key=${apiKey}`;
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

