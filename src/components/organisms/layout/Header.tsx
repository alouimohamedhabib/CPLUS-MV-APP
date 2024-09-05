import Account from "@/components/molecules/Account"
import Logo from "@/components/molecules/Logo"
import Search from "./Search"


function Header() {
  return (
    <header className=" bg-black flex z-10 w-full flex-wrap justify-between items-center p-4 text-white">
      <Logo />
      <div className="flex  gap-2">
        <Search />
        <Account />
      </div>
    </header>
  )
}


export default Header
