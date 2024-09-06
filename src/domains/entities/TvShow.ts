export type TTvShow = {
  adult: boolean;
  backdrop_path: string;
  created_by: Createdby[];
  episode_run_time: any[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Lastepisodetoair;
  name: string;
  next_episode_to_air: Lastepisodetoair;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  seasons: Season[];
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface  Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface  Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: null | string;
  season_number: number;
  vote_average: number;
}

export interface  Productioncountry {
  iso_3166_1: string;
  name: string;
}

export interface  Productioncompany {
  id: number;
  logo_path: null;
  name: string;
  origin_country: string;
}

export interface  Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface  Lastepisodetoair {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: null;
  season_number: number;
  show_id: number;
  still_path: null;
}

export interface  Genre {
  id: number;
  name: string;
}

export interface  Createdby {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: null;
}
