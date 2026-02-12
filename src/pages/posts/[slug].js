import PostLayout from "../../layouts/PostLayout"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
// import CommentSection from "../../components/CommentSection"

export default function PostPage({ frontmatter, mdxSource, slug }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | Echoer</title>
      </Head>
      <PostLayout>
        <section className="flex justify-center py-14">
          <div className="max-w-3xl flex flex-col gap-12">
            <small className="text-gray-500 text-center">
              {frontmatter.date} - Escrito por {frontmatter.author}
            </small>
            <h2 className="text-4xl font-semibold text-center">
              {frontmatter.title}
            </h2>
            <article>
              <MDXRemote {...mdxSource} />
            </article>
          </div>
        </section>
      </PostLayout>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src/content/posts"))
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".mdx", "") },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("src/content/posts", slug + ".mdx"),
    "utf-8",
  )
  const { data, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  return { props: { frontmatter: data, mdxSource, slug } }
}
