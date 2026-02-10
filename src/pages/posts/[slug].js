import PostLayout from "../../layouts/PostLayout"
// import CommentSection from "../../components/CommentSection"

export default function PostPage({ frontmatter, mdxSource, slug }) {
  return (
    <PostLayout>
      <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
      <small className="text-gray-500">{frontmatter.date}</small>
      <div className="mt-6">{/* conteúdo do post renderizado com MDX */}</div>
      {/* <CommentSection slug={slug} /> */}
    </PostLayout>
  )
}
