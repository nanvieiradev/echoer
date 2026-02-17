import styled from "styled-components"
import Form from "next/form"
import Button from "./ui/Button"
import Input from "./ui/Input"

const NewsletterSection = styled.section`
  background-color: ${({ theme }) => theme.colors.foreground};
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`

export default function Newsletter() {
  return (
    <NewsletterSection className="flex flex-col items-center gap-12 sm:gap-12 py-28 sm:py-32 text-center">
      <Title className="sm:mb-9 font-medium text-5xl">
        Assine nossa newsletter.
      </Title>
      <Text className="px-6 max-w-xl font-light text-lg">
        Cadastre seu endereço de e-mail para receber novidades e atualizações.
      </Text>
      <Form
        action="/"
        className="flex sm:flex-row flex-col justify-center items-center gap-x-3 gap-y-6 w-full"
      >
        <Input
          type="email"
          name="email"
          placeholder="Endereço de e-mail"
          className="w-full max-w-80 sm:max-w-max"
        />
        <Button
          type="submit"
          onClick={(e) => e.preventDefault()}
          className="text-nowrap"
        >
          Cadastre-se
        </Button>
      </Form>
    </NewsletterSection>
  )
}
