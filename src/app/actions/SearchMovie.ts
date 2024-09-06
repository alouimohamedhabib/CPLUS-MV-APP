"use server"
import { searchMovies } from "@/adapter/MovieService";
import { TMovie } from "@/domains/entities/Movie";
import { TApiResponseObject } from "@/Types/TApiResponseObject";


/**
 * Asynchronously searches for movies based on the provided keyword and returns the search results.
 *
 * @param keyword - The search keyword to use when querying for movies.
 * @returns A Promise that resolves to a TApiResponseObject containing the search results as an array of TMovie objects.
 */
const searchMoviesAction : (keyword: string) => Promise<TApiResponseObject<TMovie>> = async (keyword) => {
  const moviesData = await searchMovies(keyword);
  return moviesData;
};  
export default searchMoviesAction;
