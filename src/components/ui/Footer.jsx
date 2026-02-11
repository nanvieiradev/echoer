import NavbarSocial from "./NavbarSocial"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 py-24">
      <NavbarSocial />
      <p>
        Feito por{" "}
        <span className="underline underline-offset-2">Renan Vieira</span>
      </p>
    </footer>
  )
}
