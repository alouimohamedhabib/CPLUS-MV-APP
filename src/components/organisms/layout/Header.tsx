import Account from "@/components/molecules/Account"
import Logo from "@/components/molecules/Logo"

function Header() {
  return (
    <header className=" top-0 sticky flex flex-wrap justify-between items-center bg-gray-800 p-4 text-white">
      <Logo />
      <Account />
    </header>
  )
}


export default Header
