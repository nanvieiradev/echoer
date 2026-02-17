import { Poppins } from "next/font/google"
import MobileMenu from "./MobileMenu"
import Link from "next/link"
import NavbarMenu from "./NavbarMenu"
import NavbarSocial from "./NavbarSocial"
import styled from "styled-components"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
`

export default function Header() {
  return (
    <HeaderWrapper className={`${poppins.className} py-6 sm:py-9 z-0`}>
      <nav className="hidden sm:flex justify-between items-center">
        <Link href="/" className="font-medium text-3xl">
          Echoer
        </Link>
        <NavbarMenu />
        <NavbarSocial />
      </nav>
      <MobileMenu />
    </HeaderWrapper>
  )
}
