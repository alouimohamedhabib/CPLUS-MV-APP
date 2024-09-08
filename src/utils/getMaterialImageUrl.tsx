import TMoviePosterSize from "@/Types/TMoviePosterSize";

/**
 * Generates the URL for a movie poster image based on the provided poster path and size.
 *
 * @param posterPath - The relative path of the movie poster image.
 * @param size - The desired size of the movie poster image, defaulting to "w780" if not provided.
 * @returns The full URL for the movie poster image.
 */
export const getPosterUrl = (posterPath: string, size: TMoviePosterSize["poster_sizes"] = "w780"): string => `${process.env.NEXT_PUBLIC_IMG_DOMAIN}/${size}${posterPath}`

/**
 * Generates the URL for a movie backdrop image based on the provided backdrop path and size.
 *
 * @param posterPath - The relative path of the movie backdrop image.
 * @param size - The desired size of the movie backdrop image, defaulting to "w780" if not provided.
 * @returns The full URL for the movie backdrop image.
 */
export const getBackDropUrl = (posterPath: string, size: TMoviePosterSize['backdrop_sizes'] = "w780"): string => `${process.env.NEXT_PUBLIC_IMG_DOMAIN}/${size}${posterPath}`;
