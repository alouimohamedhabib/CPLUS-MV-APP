import Poster from "@/components/molecules/carousel/Poster";
import Informations from "@/components/molecules/details/Informations";
import { TMovie } from "@/domains/entities/Movie";
import { getPosterUrl } from "@/utils/getMaterialImageUrl";
;
import Image from "next/image";
import { memo } from "react";

function MovieDetails({ movie }: { movie: TMovie }) {


  return (
    <>
      <div className="flex max-h-screen-h-header relative">
        <Poster
          className="w-full h-screen-h-header object-cover"
          alttxt={movie.title}
          poster={getPosterUrl(movie.backdrop_path ?? movie.poster_path, "original")}
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
} export default memo(MovieDetails)
