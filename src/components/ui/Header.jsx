import Link from "next/link"
import NavbarMenu from "./NavbarMenu"
import NavbarSocial from "./NavbarSocial"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function Header() {
  return (
    <header
      className={`flex justify-between items-center py-9 ${poppins.className}`}
    >
      <Link href="/" className="mb-6 font-semibold text-3xl">
        Echoer
      </Link>
      <NavbarMenu />
      <NavbarSocial />
    </header>
  )
}
