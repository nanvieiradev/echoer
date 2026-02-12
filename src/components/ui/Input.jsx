import styled, { css } from "styled-components"

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.muted};
    border: 1px solid ${({ theme }) => theme.colors.foreground};
    padding: 1.25rem 2rem; /* px-10 py-5 */
    font-weight: 300; /* font-light */
    outline-color: ${({ theme }) => theme.colors.primary};
  `,
  outlined: css`
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.muted};
    border: 1px solid ${({ theme }) => theme.colors.ring};
    padding: 0.75rem; /* p-3 */
    font-size: 1rem;
  `,
}

const InputField = styled.input.attrs({
  className: "transition-colors focus:outline-2 focus:outline-offset-2",
})`
  ${({ variant }) => variants[variant] || variants.primary}
`

export default function Input({
  type = "text",
  name,
  placeholder,
  method = "post",
  maxLength,
  variant = "primary",
}) {
  return (
    <InputField
      type={type}
      name={name}
      placeholder={placeholder}
      method={method}
      variant={variant}
      maxLength={maxLength}
    />
  )
}
