import styled from "styled-components"
import Header from "../components/Header"
// import Footer from "../components/Footer"

const PostContainer = styled.div.attrs({
  className: "min-h-screen flex flex-col bg-white",
})``

const Content = styled.article.attrs({
  className: "flex-1 max-w-3xl mx-auto px-6 py-10 prose",
})``

export default function PostLayout({ children }) {
  return (
    <PostContainer>
      <Header />
      <Content>{children}</Content>
      {/* <Footer /> */}
    </PostContainer>
  )
}
