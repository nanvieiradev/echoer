import styled from "styled-components"
import Header from "../components/ui/Header"
// import Footer from "../components/ui/Footer"

const Main = styled.main.attrs({
  className: "flex-1 max-w-4xl px-4 py-8",
})``

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  )
}
