import { IconContext } from "react-icons"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useTheme } from "styled-components"

export default function NavbarSocial() {
  const theme = useTheme()

  return (
    <IconContext.Provider
      value={{
        color: theme.colors.foreground,
        className: "global-class-name",
      }}
    >
      <nav className="flex space-x-6">
        <FaLinkedin className="w-5 h-5" />
        <FaGithub className="w-5 h-5" />
        <button className="bg-black rounded-sm w-5 h-5 cursor-pointer"></button>
      </nav>
    </IconContext.Provider>
  )
}
