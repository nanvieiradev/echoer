import Link from "next/link"
import NavbarSocial from "./NavbarSocial"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 py-24">
      <NavbarSocial />
      <p>
        Feito por{" "}
        <Link href="/" className="underline underline-offset-2">@nanvieiradev</Link>
      </p>
    </footer>
  )
}
