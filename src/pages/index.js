import Head from "next/head"
import DefaultLayout from "../layouts/DefaultLayout"
import Newsletter from "@/components/Newsletter"

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Echoer</title>
      </Head>
      <DefaultLayout>
        {/* lista de posts */}
        <Newsletter />
      </DefaultLayout>
    </>
  )
}
