
// Pure function to transform raw movie data into Movie entity (aka normalizer)

import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";

// TODO return the needed elements only
/**
 * Normalizes the raw data for a movie into a `TMovie` entity.
 * 
 * @param movieRawData - The raw data for a movie.
 * @returns The normalized `TMovie` entity.
 */
export const normalizeMovieData = (movieRawData: TMovie): TMovie => movieRawData;

/**
 * Normalizes the raw data for a TV show into a `TTvShow` entity.
 * 
 * @param tvShowRawData - The raw data for a TV show.
 * @returns The normalized `TTvShow` entity.
 */
export const normalizeTvShowData = (tvShowRawData: TTvShow): TTvShow => tvShowRawData;
