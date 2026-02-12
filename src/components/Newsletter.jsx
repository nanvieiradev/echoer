import styled from "styled-components"
import Form from "next/form"
import Button from "./ui/Button"
import Input from "./ui/Input"

const NewsletterSection = styled.section`
  background-color: ${({ theme }) => theme.colors.foreground};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`

export default function Newsletter() {
  return (
    <NewsletterSection className="flex flex-col items-center gap-12 py-32 text-center">
      <Title className="mb-9 font-medium text-4xl">
        Assine nossa newsletter.
      </Title>
      <Text className="max-w-xl font-light text-lg">
        Cadastre seu endereço de e-mail para receber novidades e atualizações.
      </Text>
      <Form action="/" className="flex justify-center gap-3">
        <Input type="email" name="email" placeholder="Endereço de e-mail" />
        <Button type="submit" onClick={(e) => e.preventDefault()}>
          Cadastre-se
        </Button>
      </Form>
    </NewsletterSection>
  )
}
