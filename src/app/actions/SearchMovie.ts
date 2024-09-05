import { TMovie } from "@/domains/entities/Movie";
import { TApiResponseObject } from "@/Types/TApiResponseObject";

const searchMovies : (keyword: string) => Promise<TApiResponseObject<TMovie>> = async (keyword) => {
  const moviesData = await getPopularMovies()
  return moviesData;
};  
