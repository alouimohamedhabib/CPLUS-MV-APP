import { fetchMovieDetails, fetchTvShowDetails } from "@/adapter/MovieService";
import MovieDetails from "@/components/organisms/details/MovieDetails";
import BlackHoleLost from "@/components/organisms/layout/BlackHoleLost";
import { TMovie } from "@/domains/entities/Movie";
import { TTvShow } from "@/domains/entities/TvShow";
import { TMaterialTupleType } from "@/Types/MaterialTupleType";
import extractMovieId from "@/utils/ExtractMovieId";

/*
 * ===================================================
 * fetch requests are automatically memoized for the same data across 
 * generateMetadata, generateStaticParams, Layouts, Pages, and Server Components.
 * React cache can be used if fetch is unavailable.
 * @link https://nextjs.org/docs/app/building-your-application/caching
 * ===================================================
 */
export async function generateMetadata({ params }: { params: { id: string; page?: number } }) {
  try {
    const { id, isMovie } = extractMovieId(params.id);
    const movie: TMovie | TTvShow | null = isMovie ? await fetchMovieDetails(id) : await fetchTvShowDetails(id);

    return {
      title: movie ? (movie as TMaterialTupleType).title ?? (movie as TMaterialTupleType).original_name : 'Zut',
      description: movie?.overview ?? "",
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
  const { id, isMovie } = extractMovieId(params.id);
  const movie: TMovie | TTvShow | null = isMovie ? await fetchMovieDetails(id) : await fetchTvShowDetails(id);
  return <>
    {movie ? <MovieDetails {...movie as TMaterialTupleType} /> : <BlackHoleLost />}
  </>
}
