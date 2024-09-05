/**
 * Extracts the movie ID from the given URL.
 *
 * @param url - The URL containing the movie ID.
 * @returns The extracted movie ID.
 */

const extractMovieId = (url: string) => {
  if (!url) return '/'
  const urlParts = url.split('-');
  const movieId = urlParts[urlParts.length - 1];
  return movieId;
};

export default extractMovieId;
