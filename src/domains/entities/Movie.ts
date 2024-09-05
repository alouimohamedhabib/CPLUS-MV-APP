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
  belongs_to_collection?: null;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  imdb_id?: string;
  origin_country?: string[];
  production_companies?: Productioncompany[];
  production_countries?: Productioncountry[];
  revenue?: number;
  runtime?: number;
  spoken_languages?: Spokenlanguage[];
  status?: string;
  tagline?: string;
}
export interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

export interface Productioncompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface Genre {
  id: number;
  name: string;
}
