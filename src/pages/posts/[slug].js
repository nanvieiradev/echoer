import PostLayout from "../../layouts/PostLayout"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"
// import CommentSection from "../../components/CommentSection"

export default function PostPage({
  frontmatter,
  mdxSource,
  slug,
  prevPost,
  nextPost,
}) {
  const formattedDate = new Date(
    frontmatter.date.replace(/-/g, "/"),
  ).toLocaleDateString("pt-BR")

  const PostDate = styled.small`
    color: ${({ theme }) => theme.colors.muted};
  `

  const PrevPostWrapper = styled.span`
    color: ${({ theme }) => theme.colors.foreground};
  `
  const NextPostWrapper = styled.span`
    color: ${({ theme }) => theme.colors.foreground};
  `

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Echoer</title>
      </Head>
      <PostLayout>
        <section className="flex justify-center py-6 sm:py-14">
          <div className="max-w-3xl flex flex-col gap-12">
            <PostDate className=" text-center">
              {formattedDate} - Escrito por {frontmatter.author}
            </PostDate>
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              width={100}
              height={100}
              layout="responsive"
              className="border border-gray-300 w-full cover"
              unoptimized              
            />
            <h2 className="sm:text-4xl font-semibold text-center text-2xl">
              {frontmatter.title}
            </h2>
            <article>
              <MDXRemote {...mdxSource} />
            </article>
            <div className="flex justify-between py-10 border-t mt-10 gap-6">
              {prevPost ? (
                <Link href={`/posts/${prevPost.slug}`}>
                  <PrevPostWrapper className="hover:underline active:underline text-xs sm:text-base flex leading-5">
                    ‹ {prevPost.title}
                  </PrevPostWrapper>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link href={`/posts/${nextPost.slug}`}>
                  <NextPostWrapper className="hover:underline active:underline text-xs sm:text-base text-end flex leading-5">
                    {nextPost.title} ›
                  </NextPostWrapper>
                </Link>
              ) : (
                <div />
              )}
            </div>
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
  const postsDir = path.join(process.cwd(), "src/content/posts")
  const filenames = fs.readdirSync(postsDir)

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    return {
      slug: filename.replace(".mdx", ""),
      ...data,
    }
  })

  // Ordena por data
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  // Encontra índice do post atual
  const index = sortedPosts.findIndex((post) => post.slug === slug)

  const prevPost = index > 0 ? sortedPosts[index - 1] : null
  const nextPost =
    index < sortedPosts.length - 1 ? sortedPosts[index + 1] : null

  const markdownWithMeta = fs.readFileSync(
    path.join(postsDir, slug + ".mdx"),
    "utf-8",
  )
  const { data, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: { frontmatter: data, mdxSource, slug, prevPost, nextPost },
  }
}
