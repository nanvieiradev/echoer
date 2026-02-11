import Head from "next/head"
import DefaultLayout from "../layouts/DefaultLayout"

export default function About() {
  return (
    <>
      <Head>
        <title>Echoer</title>
      </Head>
      <DefaultLayout>{/* lista de posts */}</DefaultLayout>
    </>
  )
}
