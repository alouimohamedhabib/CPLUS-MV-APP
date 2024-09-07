import Poster from "@/components/molecules/carousel/Poster";
import Informations from "@/components/molecules/details/Informations";
import { getPosterUrl } from "@/utils/getMaterialImageUrl";
import { memo } from "react";
import { TMaterialTupleType } from "@/Types/MaterialTupleType";

function MovieDetails({ title,name, backdrop_path, poster_path, budget, production_companies, release_date, overview, vote_average, original_language, first_air_date, seasons }: TMaterialTupleType) {
  return (
    <div className="fl-ex flex-wrap md:max-h-screen-h-header relative overflow-hidden" aria-label="Movie details">
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
        title={title ?? name}
        language={original_language}
        seasons={seasons}
      />

    </div>
  );
}

export default memo(MovieDetails)
