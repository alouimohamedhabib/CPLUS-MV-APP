// Helper function to fetch popular movies from the TMDB API using fetch
import { TMovieReponseObject } from "@/domains/entities/Movie";
import Endpoints from "@/utils/Endpoints.json";
export const getPopularMovies: () => Promise<TMovieReponseObject> = async () => {
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

export const getPopularTvSeries: () => Promise<TMovieReponseObject> = async () => {
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
  const url = `${apiBaseUrl}${movieId}?api_key=${apiKey}`;
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


