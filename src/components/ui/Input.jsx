import styled from "styled-components"

const InputField = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.muted};
`

export default function Input({ type, placeholder }) {
  return (
    <InputField
      type={type}
      placeholder={placeholder}
      className="px-10 py-5 border-2 border-none font-light text-lg"
    />
  )
}
