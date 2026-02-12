import Head from "next/head"
import DefaultLayout from "../layouts/DefaultLayout"
import Form from "next/form"
import Input from "@/components/ui/Input"
import FormField from "@/components/ui/FormField"
import Textarea from "@/components/ui/Textarea"
import Button from "@/components/ui/Button"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Echoer</title>
      </Head>
      <DefaultLayout className="h-[calc(100vh-392px)]">
        <section className="grid grid-cols-2 gap-48 h-full py-20">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-medium leading-14">
              Queremos saber sua opinião.
            </h2>
            <p className="font-light leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <div className="space-y-1">
              <h3 className="font-medium leading-8 text-2xl">
                nanvieiradev@gmail.com
                <br />
                (55) 55555-5555
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <Form action="/" formMethod="post" className="space-y-4">
              <div className="grid grid-cols-2 gap-x-3 gap-y-6">
                <FormField label="Nome" required>
                  <Input
                    type="text"
                    name="firstname"
                    maxLength={30}
                    variant="outlined"
                  />
                </FormField>
                <FormField label="Sobrenome" required>
                  <Input
                    type="text"
                    name="lastname"
                    maxLength={30}
                    variant="outlined"
                  />
                </FormField>
                <FormField label="E-mail" required className="col-span-2">
                  <Input
                    type="email"
                    name="email"
                    maxLength={40}
                    variant="outlined"
                  />
                </FormField>
                <FormField label="Mensagem" required className="col-span-2">
                  <Textarea />
                </FormField>
              </div>
              <Button variant="outline" onClick={(e) => e.preventDefault()}>
                Enviar
              </Button>
            </Form>
          </div>
        </section>
      </DefaultLayout>
    </>
  )
}
