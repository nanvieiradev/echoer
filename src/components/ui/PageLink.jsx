"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function PageLink({ href, children }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`
        decoration-2 underline-offset-8 transition-all
        ${isActive ? "underline" : "hover:underline"}
      `}
    >
      {children}
    </Link>
  )
}
