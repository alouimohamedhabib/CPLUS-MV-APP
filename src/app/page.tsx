import MoviesCarousel from "@/components/organisms/landing/Carousel";
import { fetchTrendyMovies } from "@/adapter/MovieService";
import MoviesGrid from "@/components/organisms/landing/MoviesGrid";
import BlockWrapper from "@/components/molecules/BlockWrapper";
 
export default async function Home() {
  let fetchedMovies;
  try {
    fetchedMovies = await fetchTrendyMovies()
  } catch (error) {
    console.error("Error fetching trendy movies:", error)
  }
  return (
    <div className="flex flex-col ">
      {fetchedMovies && <MoviesCarousel movies={fetchedMovies} />}
      <BlockWrapper className="container mx-auto p-4 lg:p-0">
        <MoviesGrid target="showList" headerTitle="Trending TV shows" />
      </BlockWrapper>
      <BlockWrapper className="container mx-auto p-4 md:p-0">
        <MoviesGrid target="movieList" headerTitle="Trending movies" />
      </BlockWrapper>
    </div>
  );
}
