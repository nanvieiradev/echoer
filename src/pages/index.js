import Head from "next/head"
import DefaultLayout from "../layouts/DefaultLayout"
import Newsletter from "@/components/Newsletter"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import PostList from "@/components/PostList"

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Echoer</title>
      </Head>
      <DefaultLayout>
        <PostList posts={posts} />
        <Newsletter />
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("src/content/posts"))
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "")
    const markdownWithMeta = fs.readFileSync(
      path.join("src/content/posts", filename),
      "utf-8",
    )
    const { data } = matter(markdownWithMeta)
    return { slug, ...data }
  })
  return { props: { posts } }
}
