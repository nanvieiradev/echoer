import Link from "next/link"
import NavbarSocial from "./NavbarSocial"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function Footer() {
  return (
    <footer
      className={`flex flex-col items-center gap-6 py-24 ${poppins.className}`}
    >
      <NavbarSocial />
      <p>
        Feito por{" "}
        <Link href="/" className="underline underline-offset-2">
          @nanvieiradev
        </Link>
      </p>
    </footer>
  )
}
