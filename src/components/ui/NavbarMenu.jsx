import PageLink from "./PageLink"

export default function NavbarMenu() {
  return (
    <nav className="space-x-6">
      <PageLink href="/">Blog</PageLink>
      <PageLink href="/about">Sobre</PageLink>
      <PageLink href="/contact">Contato</PageLink>
    </nav>
  )
}
