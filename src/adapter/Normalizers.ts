
// Pure function to transform raw movie data into Movie entity (aka normalizer)

import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";

// TODO return the needed elements only
export const normalizeMovieData = (movieRawData: TMovie): TMovie => movieRawData;



export const normalizeTvShowData = (tvShowRawData: TTvShow): TTvShow => tvShowRawData;
