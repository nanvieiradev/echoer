import Image from "next/image"
import Link from "next/link"

export default function Post({ post }) {
  return (
    <div
      className="flex flex-col items-center gap-6 text-center post"
    >
      <Image
        src={post.image}
        alt={post.title}
        width={post.sizes[0]}
        height={post.sizes[1]}
        className="border border-gray-300"
      />
      <span className="-mt-3 text-sm">{post.date}</span>
      <Link href={`/posts/${post.slug}`}>
        <h2 className="font-medium text-2xl">{post.title}</h2>
      </Link>
      <p className="font-light text-sm">{post.summary}</p>
      <Link
        href={`/posts/${post.slug}`}
        className="font-light text-sm underline underline-offset-4"
      >
        Leia mais
      </Link>
    </div>
  )
}
