import Post from "./ui/Post"

export default function PostList({ posts }) {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )

  return (
    <section className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-16" id="posts">
      {sortedPosts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </section>
  )
}
