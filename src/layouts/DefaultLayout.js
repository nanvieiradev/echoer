import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function DefaultLayout({ className, children }) {
  return (
    <>
      <Header />
      <main className={`${poppins.className} ${className}`}>{children}</main>
      <Footer />
    </>
  )
}
