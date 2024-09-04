import TMoviePosterSize from "@/Types/TMoviePosterSize";

export type TMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
// A good idea is to place this type into a separate file since it does not belong to the domain.
export type TMovieReponseObject = {
  page: number;
  results: TMovie[];
  total_pages: number;
  total_results: number;
};



export const getPosterUrl = (posterPath: string, size: TMoviePosterSize = "w1280"): string => `https://image.tmdb.org/t/p/${size}${posterPath}`;
