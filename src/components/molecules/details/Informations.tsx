import CompanyImg from "@/components/atoms/CompanyImg";
import Seasons from "@/components/organisms/details/Seasons";
import { Productioncompany } from "@/domains/entities/Movie";
import { Season } from "@/domains/entities/TvShow";
import AverageRatesRounder from "@/utils/AverageRatesRounder";
import convertToMillions from "@/utils/ConvertToMillions";
import { getPosterUrl } from "@/utils/getMaterialImageUrl";
import { memo } from "react";
import { SlCalender, SlLike, SlMicrophone, SlWallet } from "react-icons/sl";

function Informations({
  title,
  overview,
  release_date,
  vote_average,
  language,
  productionCompanies,
  budget,

  seasons
}: { title: string, overview: string, release_date: string, vote_average: number, language: string, seasons?: Season[], productionCompanies: Productioncompany[] | undefined, budget: string },) {
  const posterLoder = (backdrop_path: string) => getPosterUrl(backdrop_path, "original")
  return (
    <div className="xl:absolute md:h-full text-white pb-20 md:top-0 left-0 p-4  z-10 w-full xl:w-12/12 
    md:bg-gradient-to-r md:from-gray-900 md:to-transparent
    bg-gradient-to-t from-blue-gray-900 to-transparent
    ">
      <div className="flex flex-col gap-4 h-full justify-end md:justify-center xl:w-7/12 md:pl-10">
        <h2 className=" text-4xl lg:text-6xl  xl:text-8xl font-extrabold uppercase">{title }</h2>
        <div className="info flex flex-row gap-2 md:text-xl text-md   ">
          <span className="mr-4 uppercase font-bold  flex items-center gap-2 ">
            <SlCalender className="  opacity-80" />
            {release_date}
          </span>
          <span className="mr-4 uppercase font-bold flex items-center gap-2 "><SlLike className="text-md  opacity-80" />{AverageRatesRounder(vote_average)}</span>
          <span className="mr-4 uppercase font-bold flex items-center gap-2 "><SlMicrophone className="text-md  opacity-80" />{language}</span>
         {budget && <p className="mr-4 uppercase font-bold flex items-center gap-2"><SlWallet /> {convertToMillions(budget)}M$ </p>}
        </div>
        <p className="text-gray-300 text-2xl lg:w-10/12 my-4 font-light"> {overview}</p>

        {productionCompanies && <>
          <div className="flex flex-wrap">
            {
              productionCompanies.map(company => {
                return (
                  <CompanyImg
                    className='bg-blue-gray-200 m-2 object-cover rounded-md h-10 w-auto bg-white p-2'
                    key={company.id}
                    imgSrc={posterLoder(company.logo_path ?? '')}
                    alt={company.name}
                  />
                )
              })
            }
          </div>
          {seasons && <Seasons seasons={seasons} />}
        </>}
        {/* <Button type="info" className="w-fit mt-2" label={`More details`} onClick={handleClick} /> */}
      </div>

    </div>
  )
}


export default memo(Informations)
