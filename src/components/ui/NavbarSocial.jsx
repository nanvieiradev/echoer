import Link from "next/link"
import { IconContext } from "react-icons"
import { FaLinkedinIn } from "react-icons/fa"
import { useTheme } from "styled-components"
import { AiFillInstagram } from "react-icons/ai"
import { FaGithubAlt } from "react-icons/fa"

export default function NavbarSocial({ className }) {
  const theme = useTheme()

  return (
    <IconContext.Provider
      value={{
        color: theme.colors.foreground,
        className: "global-class-name",
      }}
    >
      <nav className={`${className} flex space-x-5 sm:space-x-6`}>
        <Link href="https://instagram.com/nanvieiradev" target="_blank">
          <AiFillInstagram className="w-6 h-6" />
        </Link>
        <Link href="https://linkedin.com/in/nanvieiradev" target="_blank">
          <FaLinkedinIn className="w-6 h-6" />
        </Link>
        <Link href="https://github.com/nanvieiradev" target="_blank">
          <FaGithubAlt className="w-6 h-6" />
        </Link>
      </nav>
    </IconContext.Provider>
  )
}
