import styled from "styled-components"

const InputField = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.muted};
`

export default function Input({ type, name, placeholder, method = "post" }) {
  return (
    <InputField
      type={type}
      name={name}
      placeholder={placeholder}
      method={method}
      className="px-10 py-5 border-2 border-none font-light text-lg"
    />
  )
}
