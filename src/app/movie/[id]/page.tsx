import { fetchMovieDetails } from "@/adapter/MovieService";
import MovieDetails from "@/components/organisms/details/MovieDetails";
import BlackHoleLost from "@/components/organisms/layout/BlackHoleLost";
import { TMovie } from "@/domains/entities/Movie";
import extractMovieId from "@/utils/ExtractMovieId";

//💡 fetch requests are automatically memoized for the same data across generateMetadata, generateStaticParams, Layouts, Pages, and Server Components.
// React cache can be used if fetch is unavailable.
export async function generateMetadata({ params }: { params: { id: string; page?: number } }) {
  try {
    const id = extractMovieId(params.id);
    const movie: TMovie = await fetchMovieDetails(id)
    return {
      title: movie.title ?? "",
      description: movie.overview ?? "",
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Movie Details',
      description: 'Unable to load movie details',
    }
  }
}

export default async function Page({ params }: { params: { id: string; page?: number } }) {
  const id = extractMovieId(params.id);
  const movie: TMovie = await fetchMovieDetails(id)
  return <>
    {movie.id ? <MovieDetails {...movie} /> : <BlackHoleLost />}
  </>
}
