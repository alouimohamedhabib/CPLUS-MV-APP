import Account from "@/components/molecules/Account"
import Logo from "@/components/molecules/Logo"

function Header() {
  return (
    <header className=" bg-black flex z-10 w-full flex-wrap justify-between items-center p-4 text-white">
      <Logo />
      <Account />
    </header>
  )
}


export default Header
