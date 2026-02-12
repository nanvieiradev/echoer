import styled, { css } from "styled-components"

const buttonVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.foreground};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    outline-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.foreground};
    }
  `,
  primary: css`
    background-color: ${({ theme }) => theme.colors.foreground};
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.input};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
    }
  `,
  outline: css`
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.foreground};
    outline-color: ${({ theme }) => theme.colors.foreground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.foreground};
      color: ${({ theme }) => theme.colors.input};
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger};
    border-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.foreground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.foreground};
      color: ${({ theme }) => theme.colors.danger};
    }
  `,
}

// 2. Componente principal
const Button = styled.button.attrs({
  className:
    "px-8 py-5 border-2 font-medium transition-colors cursor-pointer active:brightness-80 focus:outline-2 focus:outline-offset-2",
})`
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme }) => theme.colors.foreground};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.foreground};
  }

  ${({ variant }) => buttonVariants[variant] || buttonVariants["default"]}
`

export default Button
