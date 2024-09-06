import MoviesGrid from "@/components/organisms/landing/MoviesGrid"

function Movies() {
  return <div className="container m-auto">
    <MoviesGrid hideTitle={true} target="movieList" headerTitle="Trending movies" />
  </div>
  }
  export default Movies
