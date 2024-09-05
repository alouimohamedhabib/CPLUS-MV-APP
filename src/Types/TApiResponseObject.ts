import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";

// A good idea is to place this type into a separate file since it does not belong to the domain.
export type TApiResponseObject<T extends TMovie | TTvShow> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};
