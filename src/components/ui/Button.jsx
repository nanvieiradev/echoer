import styled, { css } from "styled-components"

// 1. Definição das variantes em um objeto separado para facilitar a manutenção
const buttonVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.foreground};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.foreground};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.foreground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.foreground};
      color: ${({ theme }) => theme.colors.secondary};
    }
  `,
  outline: css`
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.foreground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.foreground};
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
  className: "px-10 py-5 border-2 font-medium transition-colors cursor-pointer",
})`
  /* Estilos Base / Default */
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme }) => theme.colors.foreground};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.foreground};
  }

  /* 3. Aplicação dinâmica da variante */
  ${({ variant }) => buttonVariants[variant] || ""}
`

export default Button
