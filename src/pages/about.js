import Head from "next/head"
import DefaultLayout from "../layouts/DefaultLayout"
import Image from "next/image"

export default function About() {
  return (
    <>
      <Head>
        <title>Echoer</title>
      </Head>
      <DefaultLayout>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 2xl:gap-x-48 gap-y-6 h-full py-6 items-start">
          <div className="flex flex-col gap-8 order-2 lg:order-1 w-full">
            <h2 className="text-3xl lg:text-4xl leading-10 font-medium lg:leading-14 lg:max-w-lg sm:text-center lg:text-start w-full ">
              Um blog pessoal estático que ecoa a sua própria explicação.
            </h2>
            <p className="font-light leading-7 md:leading-9 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ultrices tincidunt arcu non sodales neque sodales ut etiam. Sed
              elementum tempus egestas sed sed risus pretium quam. Id donec
              ultrices tincidunt arcu non sodales. Diam quam nulla porttitor
              massa id. Dolor purus non enim praesent elementum facilisis.
              Pellentesque elit ullamcorper dignissim cras tincidunt lobortis
              feugiat vivamus at. Et sollicitudin ac orci phasellus egestas
              tellus rutrum tellus pellentesque. Nunc faucibus a pellentesque
              sit.
              <br />
              <br />
              Laoreet suspendisse interdum consectetur libero. Mattis nunc sed
              blandit libero volutpat sed cras ornare arcu. Ridiculus mus mauris
              vitae ultricies leo integer malesuada. Amet est placerat in
              egestas. Donec enim diam vulputate ut.
            </p>
          </div>
          <div className="flex flex-col gap-8 justify-center order-1 lg:order-2 items-center lg:items-start">
            <Image
              alt="nanvieiradev's logo"
              src="/images/nanvieiradev-logo.png"
              width={525}
              height={656}
            />
          </div>
        </section>
      </DefaultLayout>
    </>
  )
}
