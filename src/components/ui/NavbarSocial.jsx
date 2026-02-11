import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export default function NavbarSocial() {
  return (
    <nav className="flex space-x-6">
      <FaLinkedin className="w-5 h-5" />
      <FaGithub className="w-5 h-5" />
      <button className="bg-black rounded-sm w-5 h-5 cursor-pointer"></button>
    </nav>
  )
}
