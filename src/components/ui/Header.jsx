import NavbarMenu from "./NavbarMenu"
import NavbarSocial from "./NavbarSocial"

export default function Header() {
  return (
    <header className="flex justify-between items-center py-9">
      <h1 className="mb-6 font-bold text-2xl">Echoer</h1>
      <NavbarMenu />
      <NavbarSocial />
    </header>
  )
}
