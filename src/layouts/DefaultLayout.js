import styled from "styled-components"
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
