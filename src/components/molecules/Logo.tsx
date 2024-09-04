import Link from "next/link";
import { MdMovieFilter } from "react-icons/md";

function Logo() {
  return (
    <Link href={'/'} className="content-center flex">
     <MdMovieFilter className="text-2xl " /> <span className="mx-1 font-bold">Cimena</span>
    </Link>
  );
}
export default Logo;  
