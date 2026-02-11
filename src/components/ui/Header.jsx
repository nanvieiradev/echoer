import Link from "next/link"
import NavbarMenu from "./NavbarMenu"
import NavbarSocial from "./NavbarSocial"

export default function Header() {
  return (
    <header className="flex justify-between items-center py-9">
      <Link href="/" className="mb-6 font-bold text-3xl">
        Echoer
      </Link>
      <NavbarMenu />
      <NavbarSocial />
    </header>
  )
}
