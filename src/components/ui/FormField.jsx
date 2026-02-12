import styled from "styled-components"

const RequiredText = styled.span`
  color: ${({ theme }) => theme.colors.muted};
`

export default function FormField({
  label,
  required = false,
  children,
  className,
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="space-x-2 text-sm">
        <label>{label}</label>
        {required && (
          <RequiredText className="font-light">(obrigatório)</RequiredText>
        )}
      </div>
      {children}
    </div>
  )
}
