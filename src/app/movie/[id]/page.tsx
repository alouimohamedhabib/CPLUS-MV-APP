import extractMovieId from "@/utils/ExtractMovieId";

export default ({ params }: { params: { id: string; page?: number } }) => {
  const id = extractMovieId(params.id);
  // const movieDetails = getMov
  return <>details page {id}</>
}
