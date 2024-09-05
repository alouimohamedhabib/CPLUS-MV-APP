import TMoviePosterSize from "@/Types/TMoviePosterSize";

export const getPosterUrl = (posterPath: string, size: TMoviePosterSize["poster_sizes"] = "w780"): string => `${process.env.NEXT_PUBLIC_IMG_DOMAIN}/${size}${posterPath}`
export const getBackDropUrl = (posterPath: string, size: TMoviePosterSize['backdrop_sizes'] = "w780"): string => `${process.env.NEXT_PUBLIC_IMG_DOMAIN}/${size}${posterPath}`;
