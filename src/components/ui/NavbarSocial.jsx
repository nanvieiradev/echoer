import Link from "next/link"
import { IconContext } from "react-icons"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { useTheme } from "styled-components"

export default function NavbarSocial({ className }) {
  const theme = useTheme()

  return (
    <IconContext.Provider
      value={{
        color: theme.colors.foreground,
        className: "global-class-name",
      }}
    >
      <nav className={`${className} flex space-x-6`}>
        <Link href="/">
          <FaLinkedinIn className="w-5 h-5" />
        </Link>
        <Link href="/">
          <FaGithub className="w-5 h-5" />
        </Link>
        <button className="bg-black rounded-sm w-5 h-5 cursor-pointer"></button>
      </nav>
    </IconContext.Provider>
  )
}
