/**
 * Optimizes a movie link by generating a URL-friendly string from the movie title, release year, and ID.
 *
 * @param movieTitle - The title of the movie.
 * @param id - The unique identifier for the movie.
 * @param releaseYear - The release year of the movie.
 * @returns A URL-friendly string representing the movie.
 */
const MovieLinkOptimizer: (movieTitle: string, id: number, releaseYear: string) => string = (movieTitle, id, releaseYear) => {
  const getYearFromReleaseDate = releaseYear.split('-')[0]
  const movieTitleWithoutSpaces = `${movieTitle}-${getYearFromReleaseDate}`.replace(/\s+/g, '-');
  const movieTitleWithoutSpecialCharacters = movieTitleWithoutSpaces.replace(/[^a-zA-Z0-9-]/g, '');
  return `${movieTitleWithoutSpecialCharacters}-${id}`

}
export default MovieLinkOptimizer
