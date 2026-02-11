import Link from "next/link"

export default function PageLink({ href, children }) {
  return (
    <Link className="decoration-2 hover:underline underline-offset-8" href={href}>
      {children}
    </Link>
  )
}
