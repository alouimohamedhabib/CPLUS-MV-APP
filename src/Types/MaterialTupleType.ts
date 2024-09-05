import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";
// since tvshow and movie has a slight diff i adopt this solution to be used inside the movie card component 
export type TMaterialTupleType =  TMovie & TTvShow 
