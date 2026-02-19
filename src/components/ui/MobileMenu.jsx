import Link from "next/link"
import { useState } from "react"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn, FaGithub, FaGithubAlt } from "react-icons/fa"
import styled from "styled-components"

const MobileMenuWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
`

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MobileMenuWrapper
      className={`${isOpen ? "fixed p-6" : "static"} sm:hidden top-0 left-0  flex flex-wrap justify-between items-center  w-full`}
    >
      <Link href="/">
        <span className="font-medium text-2xl whitespace-nowrap">Echoer</span>
      </Link>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex justify-center items-center hover:bg-neutral-tertiary p-2 rounded-base focus:outline-none focus:ring-2 focus:ring-neutral-tertiary w-10 h-10 text-body hover:text-heading text-sm"
        aria-controls="navbar-hamburger"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>
      <div
        className={`${isOpen ? "block" : "hidden"} w-full h-[calc(100vh-88px)] top-22 left-0`}
        id="navbar-hamburgerx"
      >
        <div className="flex flex-col justify-between items-center py-6 w-full h-full">
          <ul className="flex flex-col items-center space-y-2 mt-60 py-6 w-full font-light text-3xl">
            <li>
              <Link
                href="/"
                className="block px-3 py-2 decoration-2 active:underline underline-offset-8"
                aria-current="page"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-3 py-2 decoration-2 active:underline underline-offset-8"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-3 py-2 decoration-2 active:underline underline-offset-8"
              >
                Contato
              </Link>
            </li>
          </ul>
          <nav className={`flex space-x-5 sm:space-x-6`}>
            <Link href="instagram.com/nanvieiradev" target="_blank">
              <AiFillInstagram className="w-6 h-6" />
            </Link>
            <Link href="linkedin.com/in/nanvieiradev" target="_blank">
              <FaLinkedinIn className="w-6 h-6" />
            </Link>
            <Link href="github.com/nanvieiradev" target="_blank">
              <FaGithubAlt className="w-6 h-6" />
            </Link>
          </nav>
        </div>
      </div>
    </MobileMenuWrapper>
  )
}
