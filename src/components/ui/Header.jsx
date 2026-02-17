import { Poppins } from "next/font/google"
import MobileMenu from "./MobileMenu"
import Link from "next/link"
import NavbarMenu from "./NavbarMenu"
import NavbarSocial from "./NavbarSocial"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function Header() {
  return (
    <header className={`${poppins.className} py-6 sm:py-9`}>
      <nav className="hidden sm:flex justify-between items-center">
        <Link href="/" className="font-medium text-3xl">
          Echoer
        </Link>
        <NavbarMenu />
        <NavbarSocial />
      </nav>
      <MobileMenu />
    </header>
  )
}
