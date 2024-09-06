/**
 * Extracts the movie ID from the given URL.
 *
 * @param url - The URL containing the movie ID.
 * @returns The extracted movie ID.
 */

const extractMovieId = (url: string): { id: string; isMovie: boolean } => {
  if (!url) return { id: '/', isMovie: false };
  const urlParts = url.split('-');
  const movieId = urlParts[urlParts.length - 1];
  const isMovie = urlParts[urlParts.length - 2] === 'm';
  return { id:movieId, isMovie };
};

export default extractMovieId;
