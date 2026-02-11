import Head from "next/head"
import DefaultLayout from "../layouts/DefaultLayout"

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Echoer</title>
      </Head>
      <DefaultLayout>{/* lista de posts */}</DefaultLayout>
    </>
  )
}
