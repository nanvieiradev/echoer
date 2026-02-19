import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export default function Post({ post }) {
  const PostDate = styled.span`
    color: ${({ theme }) => theme.colors.muted};
  `

  const formattedDate = new Date(
    post.date.replace(/-/g, "/"),
  ).toLocaleDateString("pt-BR")

  return (
    <div className="flex flex-col items-center gap-6 text-center post">
      <Link href={`/posts/${post.slug}`} className="w-full">
        <Image
          src={post.image}
          alt={post.title}
          width={100}
          height={100}
          layout="responsive"
          className="border border-gray-300 w-full cover"
          unoptimized
          loading="eager"
        />
      </Link>
      <PostDate className="-mt-2 text-sm">{formattedDate}</PostDate>
      <Link href={`/posts/${post.slug}`}>
        <h2 className="font-medium text-2xl xl:text-3xl">{post.title}</h2>
      </Link>
      <p className="max-w-lg font-light text-sm md:text-base leading-6">
        {post.summary}
      </p>
      <Link
        href={`/posts/${post.slug}`}
        className="font-light text-sm underline underline-offset-4"
      >
        Leia mais
      </Link>
    </div>
  )
}
