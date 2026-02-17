import Link from "next/link"
import { useState } from "react"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import styled from "styled-components"

const MobileMenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
`

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="sm:hidden flex flex-wrap justify-between items-center w-full">
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
      <MobileMenuWrapper
        className={`${isOpen ? "block" : "hidden"} w-full h-[calc(100vh-88px)] absolute  top-22 left-0`}
        id="navbar-hamburgerx"
      >
        <div className="flex flex-col justify-between items-center py-6 w-full h-full">
          <ul className="flex flex-col items-center space-y-2 bg-neutral-secondary-soft mt-60 py-6 border-default w-full font-light text-3xl">
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
                href="/"
                className="block px-3 py-2 decoration-2 active:underline underline-offset-8"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block px-3 py-2 decoration-2 active:underline underline-offset-8"
              >
                Contato
              </Link>
            </li>
          </ul>
          <nav className={`flex gap-6`}>
            <Link href="/">
              <FaLinkedinIn className="w-6 h-6" />
            </Link>
            <Link href="/">
              <FaGithub className="w-6 h-6" />
            </Link>
            <button className="bg-black rounded-sm w-6 h-6 cursor-pointer"></button>
          </nav>
        </div>
      </MobileMenuWrapper>
    </nav>
  )
}
