import Poster from "@/components/molecules/carousel/Poster";
import Informations from "@/components/molecules/details/Informations";
import { TMovie } from "@/domains/entities/Movie";
import { getPosterUrl } from "@/utils/getMaterialImageUrl";
;
import Image from "next/image";
import { memo } from "react";

function MovieDetails({ title, backdrop_path, poster_path, budget, production_companies, release_date, overview, vote_average, original_language }: TMovie) {
  return (
    <div className="flex max-h-screen-h-header relative" aria-label="Movie details">
    <Poster
      className="w-full h-screen-h-header object-cover"
      alttxt={title}
      poster={getPosterUrl(backdrop_path ?? poster_path, "original")}
    />
    <Informations
      budget={budget?.toString() || ''}
      productionCompanies={production_companies}
      release_date={release_date}
      overview={overview}
      vote_average={vote_average}
      title={title}
      language={original_language} />
  </div>
  );
}

export default memo(MovieDetails)
