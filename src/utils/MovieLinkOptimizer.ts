/**
 * Optimizes a movie link by generating a URL-friendly string from the movie title, release year, and ID.
 *
 * @param movieTitle - The title of the movie.
 * @param id - The unique identifier for the movie.
 * @param releaseYear - The release year of the movie.
 * @param isMovie - A boolean indicating whether the movie is a movie (true) or a TV show (false).
 * @returns A URL-friendly string representing the movie.
 */
const MovieLinkOptimizer: (movieTitle: string, id: number, releaseYear: string, isMovie?: boolean) => string = (movieTitle, id, releaseYear, isMovie = true) => {
  const getYearFromReleaseDate = releaseYear?.split('-')[0] ?? releaseYear
  const movieTitleWithoutSpaces = `${movieTitle}-${getYearFromReleaseDate}`.replace(/\s+/g, '-');
  const movieTitleWithoutSpecialCharacters = movieTitleWithoutSpaces.replace(/[^a-zA-Z0-9-]/g, '');
  return `${movieTitleWithoutSpecialCharacters}-${isMovie ? 'm' : 't'}-${id}`

}
export default MovieLinkOptimizer
