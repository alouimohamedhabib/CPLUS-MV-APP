import Poster from "@/components/molecules/carousel/Poster";
import Informations from "@/components/molecules/details/Informations";
import { TMovie } from "@/domains/entities/Movie";
import { getPosterUrl } from "@/utils/getMaterialImageUrl";
;
import Image from "next/image";
import { memo } from "react";

function MovieDetails({ movie }: { movie: TMovie }) {
  const posterUrl = (backdrop_path: string) => getPosterUrl(backdrop_path, "original")

  return (
    <>
      <div className="flex max-h-screen-h-header relative">
        <Poster
          alttxt={movie.title}
          poster={posterUrl(movie.backdrop_path)}
        />
        <Informations
          budget={movie.budget?.toString() || ''}
          productionCompanies={movie.production_companies}
          release_date={movie.release_date}
          overview={movie.overview}
          vote_average={movie.vote_average}
          title={movie.title}
          language={movie.original_language} />
      </div>
    </>
  );

}export default memo(MovieDetails)
